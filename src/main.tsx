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
  const rootElement = document.getElementById('root') || document.body;
  rootElement.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: sans-serif; background-color: #f8f9fa; color: #212529;">
      <h1 style="font-size: 2rem; margin-bottom: 1rem;">Error Inesperado</h1>
      <p style="font-size: 1rem; color: #6c757d;">No se pudo cargar la aplicación. Por favor, inténtalo de nuevo más tarde.</p>
      <pre style="margin-top: 2rem; padding: 1rem; background-color: #e9ecef; border-radius: 0.25rem; white-space: pre-wrap; word-wrap: break-word; text-align: left; max-width: 80%;">${error instanceof Error ? error.message : String(error)}</pre>
    </div>
  `;
  console.error("Error al renderizar la aplicación:", error);
}
