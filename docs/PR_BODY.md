# Pull Request: GitHub Pages config + Router basename + Supabase setup

## Descripción

Este PR agrega la configuración necesaria para desplegar en GitHub Pages y prepara la integración segura con Supabase:

- Configura `vite.base` para GitHub Pages (usa `/ASD/` si `GH_PAGES` está establecido).
- Actualiza el ruteador a `BrowserRouter` con `basename={import.meta.env.BASE_URL}`.
- Añade scripts `predeploy` y `deploy` para `gh-pages` y el script `test:supabase`.
- Implementa `src/lib/supabaseClient.ts` y `scripts/test-supabase.mjs` para pruebas CI seguras.
- Añade `.env.example` y documentación (`docs/SUPABASE.md`, `docs/DEPLOY.md`).

## Checklist

- [ ] `npm install` se ejecuta sin errores (si hay conflictos de peer deps, usar `npm install --legacy-peer-deps` o `npm ci` después de actualizar el lockfile).
- [ ] `npm run dev` arranca la app localmente
- [ ] `npm run build` genera `dist`
- [ ] `npm run test:supabase` (con variables en entorno) pasa
- [ ] CI: Job `Test Supabase Connection` pasa cuando los Secrets están configurados
- [ ] `.env` no fue subido; `.env.example` incluido
- [ ] Deploy `gh-pages` probado o estrategia `/docs` validada

## Cómo probar localmente

1. `npm install` (si da errores: `npm install --legacy-peer-deps`) 
2. `npm run dev` (abrir http://localhost:5173)
3. Establecer `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` en `.env` (local) y ejecutar `npm run test:supabase` para verificar conexión
4. Para deploy de prueba (local): `GH_PAGES=1 npm run deploy` (requiere `gh-pages` instalado)

---

Si prefieres, yo puedo abrir el PR por ti cuando confirmes que `npm install` funciona en tu entorno y los tests locales pasan. Gracias.