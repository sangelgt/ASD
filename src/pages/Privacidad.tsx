import React from 'react';

const Privacidad: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative flex flex-col items-center justify-center p-4 py-16 md:py-20 bg-background-light dark:bg-background-dark">
        <div className="w-full max-w-[960px] flex flex-col gap-6">
          <div className="overflow-hidden rounded-xl shadow-2xl relative min-h-[420px] flex flex-col items-center justify-center p-8 md:p-20 text-center group" style={{ backgroundImage: 'linear-gradient(rgba(16, 22, 34, 0.8) 0%, rgba(91, 33, 182, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwNt_IHXRXD6lgz3K-ZcQE4IqU_8X1KTbaUe_zfI__7oyZ2w3YSbfBLeg2I_GkHk2c-YyOdKdtvDUR0--CWROWHr7SUtNDpoi4XKm7_PSz307QGuAxS8CLmK3e6918DWmUb7-NzvZAl6Gb_JtBCdgk2swgSoiCYYfj-yOAYL7b4gLYqyXfX5JS5NPJPf91PM_K8hYDDJvyuAOOa2zzU6YiufuCRtav7oIaLZ1an3KY387P7PQP8QPpU99uM0HAYFIlvtfEpU5ABas")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-display font-bold uppercase tracking-wider mb-8 hover:bg-white/20 transition-colors cursor-default animate-fade-in-up">
              <span className="material-symbols-outlined text-base">shield</span>
              Política de Privacidad
            </span>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight tracking-tight mb-6 max-w-3xl animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              Su Privacidad, Nuestro Compromiso con el Orden
            </h1>
          </div>
        </div>
      </section>
      <div className="flex justify-center pb-24 px-4 md:px-8">
        <div className="flex flex-col max-w-[800px] w-full gap-16">
          <article className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="flex items-center gap-2 mb-4 text-primary">
              <span className="material-symbols-outlined">info</span>
              <span className="font-display font-bold text-sm uppercase tracking-wide">Introducción</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed">
              En Angel Salazar Digital, creemos que la seguridad de la información es el pilar fundamental del ROI en Inteligencia Artificial. No existe rentabilidad sostenible sin una base de confianza. Esta política detalla cómo recopilamos, usamos y protegemos sus datos bajo estrictos estándares de gobernanza, aplicando nuestra filosofía de <span className="text-primary font-bold">"Orden antes que Herramienta"</span>.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
};

export default Privacidad;
