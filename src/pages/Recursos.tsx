import React from 'react';
import { Link } from 'react-router-dom';

const Recursos: React.FC = () => {
  return (
    <main>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark bg-[size:40px_40px] opacity-[0.4] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/50 to-background-light dark:via-background-dark/50 dark:to-background-dark pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal-up inline-flex items-center px-3 py-1 rounded-full bg-primary/10 dark:bg-primary-light/20 text-primary dark:text-primary-light text-sm font-semibold mb-6 border border-primary/20 dark:border-primary-light/20">
            <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-light mr-2 animate-pulse"></span>
            Gestión del Conocimiento
          </div>
          <h1 className="reveal-up delay-100 text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight leading-tight">
            Recursos &amp; <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary dark:from-primary-light dark:via-purple-300 dark:to-primary-light">
              Capital Intelectual
            </span>
          </h1>
          <p className="reveal-up delay-200 mt-4 max-w-2xl mx-auto text-xl text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            Herramientas diseñadas bajo la metodología "Order before Tool". Transforme su inversión en IA en activos tangibles y evite la deuda técnica.
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-24">
        <div className="text-center mb-16 max-w-3xl mx-auto reveal-up">
          <span className="text-primary dark:text-primary-light font-bold tracking-widest text-sm uppercase mb-2 block">Repositorio</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-text-light dark:text-text-dark">
            Activos Estratégicos para una Organización Resiliente
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Recursos;
