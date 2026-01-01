import React from 'react';

const Terminos: React.FC = () => {
  return (
    <main className="flex flex-col items-center w-full">
      <section className="w-full max-w-[1280px] px-4 md:px-10 lg:px-40 py-12 md:py-20">
        <div className="flex flex-col gap-8 max-w-[960px]">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
            <span className="material-symbols-outlined text-primary text-[18px]">gavel</span>
            <span className="text-xs font-bold uppercase tracking-wide text-primary">Marco Legal &amp; Ético</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] text-text-main dark:text-white">
            Claridad Legal para Sistemas de Rentabilidad Real.
          </h1>
        </div>
      </section>
      <section className="w-full bg-surface-light dark:bg-surface-dark border-y border-border-light dark:border-border-dark py-16">
        <div className="w-full max-w-[1280px] px-4 md:px-10 lg:px-40 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
              <h3 className="text-xl font-bold text-text-main dark:text-white tracking-tight">El Problema</h3>
              <p className="text-text-secondary dark:text-gray-400 leading-relaxed">
                La mayoría de los contratos tecnológicos son laberintos de jerga legal diseñados para confundir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Terminos;
