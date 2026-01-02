import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

try {
  const container = document.getElementById('root');
  if (!container) {
    throw new Error("El contenedor 'root' no fue encontrado en el DOM.");
  }

  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
 jules-fix-gh-pages-deployment-885220227349153596
  console.error("Error al renderizar la aplicación:", error);
  document.body.innerHTML = '<h1>Error de Conexión</h1>';

