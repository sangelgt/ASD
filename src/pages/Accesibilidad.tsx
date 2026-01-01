import React from 'react';

const Accesibilidad: React.FC = () => {
  return (
    <main>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark bg-[size:40px_40px] opacity-[0.4] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/50 to-background-light dark:via-background-dark/50 dark:to-background-dark pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="material-symbols-outlined text-sm">accessibility_new</span>
            Compromiso Social
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight text-text-light dark:text-text-dark">
            Declaración de <span className="text-primary">Accesibilidad</span>
          </h1>
        </div>
      </section>
      <section className="pb-24 bg-background-light dark:bg-background-dark relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="p-8 rounded-2xl bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-display font-bold text-text-light dark:text-text-dark">1. Estado de Conformidad</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Accesibilidad;
