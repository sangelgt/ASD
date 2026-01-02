# AGENTS.md

Este documento define las reglas de acceso, administración y flujo de trabajo que **Jules** debe seguir para la gestión de este repositorio en GitHub.

---

## 1. Repository & Hosting Overview

Este proyecto se administra íntegramente a través de **GitHub**, utilizando sus herramientas nativas para el ciclo de vida del software.

- **Source of Truth:** La rama `main` contiene el código fuente de desarrollo.

- **Hosting:** GitHub Pages es el único entorno de producción, servido desde la rama `gh-pages` o la carpeta `/docs` (según configuración).

- **Estructura de Carpetas:**
  - `/src`: Código fuente procesable.
  - `/public`: Archivos que se copian directamente a la raíz del sitio.
  - `/.github/workflows`: Automatizaciones de CI/CD para el despliegue.

---

## 2. GitHub Access & Security

Jules debe actuar como un administrador de repositorio responsable, evitando errores comunes de exposición de datos.

- **Protección de Secretos:** Jules tiene terminantemente prohibido subir archivos `.env`, claves SSH o tokens de acceso personal (PAT) al repositorio. Debe verificar siempre el archivo `.gitignore`.

- **Control de Ramas:** No se permiten cambios directos en la rama de despliegue (`gh-pages`). Todo cambio debe originarse en `main` o ramas de características (feature branches).

- **Integridad de Commits:** Cada commit debe ser atómico y descriptivo. Jules debe usar el formato: `tipo(componente): descripción clara` (ej. `feat(nav): agregar menú responsivo`).

---

## 3. GitHub Pages Deployment Protocols

Para garantizar que el sitio en vivo nunca se rompa, Jules debe seguir este protocolo de validación:

- **Validación de Rutas:** Antes de confirmar cambios en el frontend, Jules debe asegurar que las rutas sean relativas (uso de `./` en lugar de `/`) para que GitHub Pages resuelva correctamente los archivos en subdominios (ej. `usuario.github.io/proyecto/`).

- **Build Check:** Si el proyecto requiere compilación, Jules debe ejecutar el comando de construcción localmente para confirmar que no hay errores de sintaxis que detengan el despliegue automático.

- **Gestión de CNAME:** No modificar el archivo `CNAME` si existe en la raíz, para evitar la desconexión de dominios personalizados vinculados al repositorio.

---

## 4. Maintenance & Repository Health

Jules es responsable de mantener el repositorio limpio y funcional:

- **Gestión de Dependencias:** Al actualizar el `package.json`, Jules debe asegurar que el archivo `package-lock.json` se actualice simultáneamente para evitar discrepancias de versión en el entorno de GitHub Actions.

- **Documentación Activa:** Si Jules crea una nueva carpeta o lógica compleja dentro del repositorio, debe actualizar el `README.md` o la documentación interna inmediatamente.

- **Limpieza de Ramas:** Tras un merge exitoso hacia `main`, Jules debe sugerir la eliminación de la rama de trabajo para mantener el grafo del repositorio legible.

---

## 5. Deployment Workflow (Step-by-Step)

Cuando Jules termine una tarea, el proceso de entrega debe ser:

1. **Sync:** Hacer `pull` de `main` para evitar conflictos.
2. **Verify:** Revisar que no haya secretos expuestos en el `diff`.
3. **Push:** Subir los cambios a la rama de origen en GitHub.
4. **Deploy:** Si no hay CI/CD automático, ejecutar el comando de despliegue específico hacia la rama `gh-pages`.

## 6. Este proyecto se despliega en Render.
Jules tiene acceso a la RENDER_API_KEY. Para cambios que afecten la infraestructura o variables de entorno, Jules debe verificar la consistencia en el archivo render.yaml y asegurar que los PRs disparan vistas previas exitosas

**Aviso para Jules:** Tu prioridad es la estabilidad del repositorio. Si una acción pone en riesgo el acceso al código o la visibilidad del sitio en GitHub Pages, debes detenerte y pedir confirmación.
