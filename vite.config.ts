import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Nota: para GitHub Pages ajustamos `base` vía la variable de entorno GH_PAGES
// Ejemplo: GH_PAGES=1 vite build -> base será '/asd-website/' (reemplaza con el nombre del repo)
export default defineConfig({
 jules-fix-gh-pages-deployment-885220227349153596
  base: '/ASD/',

  plugins: [react()]
})
