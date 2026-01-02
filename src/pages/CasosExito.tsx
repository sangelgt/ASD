import React from 'react';

const CasosExito: React.FC = () => {
  return (
    <main>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark bg-[size:40px_40px] opacity-[0.4] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/50 to-background-light dark:via-background-dark/50 dark:to-background-dark pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light text-sm font-semibold mb-8 border border-primary/20 dark:border-primary-light/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-light mr-2 animate-pulse"></span>
            Análisis Post-Mortem 2024
          </div>
          <h1 className="reveal delay-100 text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight leading-tight">
            Transparencia Radical: <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white">
              Lo que aprendimos de los fallos
            </span>
          </h1>
          <p className="reveal delay-200 mt-4 max-w-2xl mx-auto text-xl text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            El mercado está saturado de promesas vacías sobre Inteligencia Artificial. En Angel Salazar Digital, creemos que el verdadero aprendizaje proviene de diseccionar la fricción. Aquí mostramos cómo transformamos el caos operativo en rentabilidad medible.
          </p>
        </div>
      </section>
      <section className="py-16 bg-surface-light dark:bg-surface-dark border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="reveal">
            <span className="material-symbols-outlined text-6xl text-primary/20 dark:text-primary-light/20 mb-4">format_quote</span>
          </div>
          <blockquote className="reveal delay-100 text-2xl md:text-3xl font-display font-medium leading-relaxed italic text-text-light dark:text-text-dark">
            &quot;No vendemos herramientas de IA. Vendemos orden. La herramienta es irrelevante si el proceso subyacente es un caos. Orden antes que Herramienta.&quot;
          </blockquote>
          <div className="reveal delay-200 mt-8 flex items-center justify-center space-x-4">
            <div className="h-14 w-14 rounded-full bg-gray-300 overflow-hidden ring-2 ring-primary/20 dark:ring-primary-light/20">
              <img alt="Angel Salazar" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK54vmVCvTMjfDR81oQknkmY8bRelL8VhEfqpt3kpLXSpaRyYM917Wm2uIfuKzLl2JlULHiioH5cx3kNvZIucB5Uj5sWxH6p6uNDfWDKLdG3abQjU7op9WbKPIMsbJtLhKyLd2Ol9Cw_tQD7JkeujmBHQyWvNdxoh0trAznEyaKVAqQiWA_qypuqlHUjc_02hCMEw-766bFHDWNAyv1NF7D_x8JBR3uBq5ktUNBe_A0SbQAB-T4yQYqzngGLvbyHA4GO_X_N57khI" />
            </div>
            <div className="text-left">
              <div className="font-bold text-lg text-text-light dark:text-text-dark">Angel Salazar</div>
              <div className="text-sm text-primary dark:text-primary-light font-bold">Fundador &amp; Consultor Principal</div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32 flex-grow">
        <article className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 sticky top-28">
            <div className="reveal relative rounded-2xl overflow-hidden shadow-2xl group border border-gray-200 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent z-10 mix-blend-multiply opacity-80"></div>
              <img alt="Nabolic Fitness Gym Interior" className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUalNmFx_bw10rbHpht5EVJo7kDTR6QNnRVZWqzE1DwH_YlT0MWuB2v8l34DnQtTGdjt3Xs5HKjKBjCiHML5jbUjfAclnKcBy4nm3W6RMulHZ1ZGTDWDfhf0TIClIQh_xSNbp0Ib-HVCHRPI4cn9Yj0ZbvYdZYaXFDn9oPrqRR64WVQ6n2q8O-w7b-MVcGwZLJcj0VG-LvakxRxsjK5EYxc1qE-hQdCODaoLGddOOHHCxTE4Hr_IEnghj6z9Bu14LN6HeWZPlG4iU" />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur text-white text-xs font-bold uppercase tracking-wider rounded mb-3 border border-white/20">Retail &amp; Fitness</div>
                <h2 className="text-4xl font-display font-bold text-white mb-2">Nabolic Fitness</h2>
                <p className="text-white/90 font-light">Automatización de inventario y atención al cliente.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <div className="reveal delay-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-text-light dark:text-text-dark">
                <span className="w-8 h-1.5 bg-primary dark:bg-primary-light mr-4 rounded-full"></span> Contexto
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed text-lg">
                Nabolic enfrentaba una crisis de escalabilidad. Con 12 sucursales nuevas, el sistema manual de gestión de inventario y la atención al cliente vía WhatsApp estaban colapsando. La pérdida de leads por falta de respuesta inmediata superaba el 35%.
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default CasosExito;
