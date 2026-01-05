## Proyecto Angel Salazar Digital
Este documento funciona como un manual de incorporación (onboarding) para agentes autónomos de codificación. Proporciona el contexto necesario para que herramientas como Jules generen planes de ejecución precisos y código alineado con los estándares del proyecto.
1. Visión General de la Arquitectura (## Architecture Overview)
El proyecto consiste en una aplicación web estática profesional para una consultoría estratégica de ROI en IA.
• Objetivo: Posicionar la marca bajo la metodología "Orden antes que Herramienta" y generar leads B2B.
• Pila Tecnológica (Tech Stack):
    ◦ Vite: Herramienta principal de empaquetado y optimización.
    ◦ Tailwind CSS: Framework para el diseño visual mediante clases utilitarias.
    ◦ JavaScript (ES6+): Lógica de interacción (formularios, animaciones).
    ◦ HTML5: Estructura semántica del contenido.
• Estructura de Carpetas:
    ◦ /src: Contiene los archivos fuente (main.js, style.css).
    ◦ /src/assets: Almacena imágenes y recursos visuales de la marca.
    ◦ /index.html: Punto de entrada de la aplicación ubicado en la raíz.
    ◦ tailwind.config.js y vite.config.js: Archivos de configuración del entorno.
2. Convenciones de Codificación (## Coding Conventions)
Para garantizar la calidad y coherencia del sitio, los agentes deben seguir estas reglas estrictas:
• Accesibilidad (Prioridad Máxima): Todo código generado debe cumplir con el estándar WCAG 2.2 Nivel AA. Esto incluye contraste de color mínimo de 4.5:1, etiquetas descriptivas y navegación por teclado lógica.
• Estilo Visual: No utilizar HTML básico sin estilos; el diseño debe ser profesional y minimalista. Usar directivas de Tailwind en style.css e importarlas directamente en main.js.
• Sintaxis: Preferir sintaxis moderna de JavaScript (async/await, sin callbacks) y tipado estricto si se escala a TypeScript en el futuro.
• Componentes: Favorecer módulos pequeños y enfocados sobre archivos gigantescos para facilitar la revisión de código.
3. Requisitos de Ejecución y Pruebas (## Running Tests & Setup)
Dado que Jules opera en una VM aislada de Google Cloud, requiere comandos exactos para validar cambios:
• Instalación de dependencias: npm install.
• Servidor de desarrollo: npm run dev.
• Generación de producción: npm run build.
• Validación: Tras cada cambio, el agente debe verificar que la carpeta /dist se genere correctamente y que los activos tengan las rutas base adecuadas para GitHub Pages (configuradas en vite.config.js).
4. Tareas Comunes (## Common Tasks)
Instrucciones para flujos de trabajo repetitivos:
• Actualización de Casos de Éxito: Al añadir nuevos estudios (ej. Nabolic Fitness o Medusa Group), utilizar el formato de tarjeta expandible detallado en el PRD.
• Optimización de Imágenes: Asegurarse de que las nuevas imágenes en /assets estén optimizadas para carga rápida, alineándose con los objetivos de SEO.
• Gestión de Recursos: Los nuevos PDFs descargables deben ser marcados como activos estratégicos y vinculados con CTAs claros.
5. Checklist para Pull Requests (## PR Checklist)
Antes de emitir un PR automático, el agente debe confirmar:
1. Título del PR: Seguir el formato feat(página): descripción corta.
2. Accesibilidad: Verificación manual de que no se han roto etiquetas semánticas.
3. Rutas Base: Confirmar que base: '/nombre-del-repo/' esté correctamente definido en vite.config.js para evitar pantallas blancas en el despliegue.
4. Limpieza: Eliminar logs de consola excesivos o comentarios de depuración.
6. Seguridad y Permisos (## Safety)
• Datos Sensibles: No compartir ni incluir claves de API en el código fuente.
• Permisos del Agente: Se permite al agente leer y listar archivos, así como ejecutar comandos de construcción. Sin embargo, debe solicitar aprobación humana antes de realizar un git push o eliminar archivos críticos.
