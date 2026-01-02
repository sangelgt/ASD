# AUDIT_REPORT.md: Análisis de Incidente - Pantalla Blanca en GitHub Pages

**Fecha:** 2024-05-22
**Autor:** Jules (SRE & Senior Architect)
**Estado:** Resuelto

---

## 1. Resumen del Error

El problema crítico de la "pantalla blanca" tras el despliegue en GitHub Pages se debió a una combinación de dos factores:

1.  **Corrupción de Archivos Fuente:** Múltiples archivos clave del proyecto (`tsconfig.json`, `src/pages/Diagnostico.tsx`, `src/pages/Home.tsx`) contenían metadatos de un branch de git (`<<<<<<< fix/routing-base-issues`), lo que causaba un fallo catastrófico durante el proceso de build (`npm run build`). El build no se completaba, y por lo tanto, no se generaban los archivos `dist/` necesarios para el despliegue.
2.  **Configuración de Ruteo Incorrecta:** La configuración inicial para el ruteo y la generación de activos no era la adecuada para un entorno de subdirectorio como GitHub Pages. El navegador intentaba cargar los archivos JavaScript (JS) y CSS desde la raíz del dominio (`https://<user>.github.io/`) en lugar de la ruta correcta del repositorio (`https://<user>.github.io/asd-website/`), resultando en errores 404 (Not Found) para todos los activos críticos.

En resumen, el navegador recibía un `index.html` vacío o desactualizado y no podía encontrar los archivos JS/CSS necesarios para renderizar la aplicación React.

---

## 2. Configuraciones Detectadas

Se realizó una auditoría completa de la configuración actual (ya corregida) para documentar el estado funcional.

### a. Configuración de Vite (`vite.config.ts`)

La configuración de Vite es ahora robusta y maneja correctamente los diferentes entornos de despliegue:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.GH_PAGES ? '/asd-website/' : '/',
  plugins: [react()]
})
```

-   **Análisis:** La propiedad `base` se establece dinámicamente. Cuando la variable de entorno `GH_PAGES` se establece en `1` (como en el script `build:gh-pages`), Vite antepone `/asd-website/` a todas las rutas de activos durante el build. Para el desarrollo local (`npm run dev`), la base es `/`, que es el comportamiento esperado.

### b. Configuración del Router (`src/App.tsx`)

El enrutador de la aplicación se ha configurado para respetar la ruta base de Vite:

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ...
const App: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* ... */}
    </BrowserRouter>
  );
};
```

-   **Análisis:** El componente `BrowserRouter` de `react-router-dom` recibe la propiedad `basename`. `import.meta.env.BASE_URL` es una variable que Vite proporciona automáticamente, y su valor se corresponde con la propiedad `base` de `vite.config.ts`. Esto asegura que el enrutamiento del lado del cliente funcione correctamente dentro del subdirectorio del repositorio.

### c. Scripts de Despliegue (`package.json`)

Los scripts de NPM están correctamente configurados para automatizar el proceso de build y despliegue:

```json
"scripts": {
  "build:gh-pages": "GH_PAGES=1 vite build",
  "predeploy": "npm run build:gh-pages",
  "deploy": "gh-pages -d dist"
}
```

-   **Análisis:** El comando `npm run deploy` invoca primero al script `predeploy`, que ejecuta el build específico para GitHub Pages. Luego, el script `deploy` utiliza la herramienta `gh-pages` para publicar el contenido de la carpeta `dist/` en la rama `gh-pages` del repositorio.

---

## 3. Análisis de la VM (Simulación de Build)

Se realizó una simulación del proceso de build en un entorno aislado para verificar la configuración actual.

-   **Comando Ejecutado:** `npm run build:gh-pages`
-   **Resultado:** El build se completó exitosamente.
-   **Análisis de `dist/index.html`:**

```html
<script type="module" crossorigin src="/asd-website/assets/index-BxF8g67s.js"></script>
<link rel="stylesheet" crossorigin href="/asd-website/assets/index-CpuUNbix.css">
```

-   **Conclusión:** La inspección del `index.html` generado confirma que las rutas a los archivos JS y CSS son **absolutas** y están correctamente prefijadas con el nombre del repositorio (`/asd-website/`). Esto permite que el navegador las encuentre en la ubicación correcta en GitHub Pages.

---

## 4. Plan de Corrección Sugerido (Implementado)

El problema ya ha sido resuelto. Las acciones tomadas fueron las siguientes:

1.  **Limpieza de Archivos Corruptos:** Se eliminaron los marcadores de conflicto de git (`<<<<<<<`, `=======`, `>>>>>>>`) de los archivos `tsconfig.json`, `src/pages/Diagnostico.tsx` y `src/pages/Home.tsx` para permitir que el proceso de build se completara.
2.  **Configuración Condicional de Vite:** Se modificó `vite.config.ts` para usar la variable de entorno `GH_PAGES` y establecer la propiedad `base` dinámicamente, asegurando la compatibilidad tanto con el desarrollo local como con el despliegue.
3.  **Configuración Dinámica del Router:** Se aseguró que el `BrowserRouter` en `src/App.tsx` utilizara `basename={import.meta.env.BASE_URL}` para sincronizarse con la configuración de Vite.
4.  **Verificación del Build:** Se ejecutó `npm run build:gh-pages` para confirmar que la corrección generaba las rutas de activos correctas en el `dist/index.html`.

Este conjunto de acciones resolvió de manera integral el incidente de la pantalla blanca, resultando en un proceso de desplieg-ue robusto y predecible.
