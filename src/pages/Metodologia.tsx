import React from 'react';
import { Link } from 'react-router-dom';

const Metodologia: React.FC = () => {
  return (
    <main className="flex flex-col items-center w-full">
      <section className="w-full max-w-[1280px] px-4 md:px-10 lg:px-40 py-16 md:py-24">
        <div className="flex flex-col gap-8 max-w-[960px]">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 dark:border-primary-light/30 bg-primary/5 dark:bg-primary-light/10 px-4 py-1.5 animate-fade-in-up">
            <span className="material-symbols-outlined text-primary dark:text-primary-light text-[20px]">verified</span>
            <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-primary-light">Metodología Exclusiva</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em] text-text-main dark:text-white animate-fade-in-up delay-100">
            Un sistema de rentabilidad diseñado para escalar sin fricción.
          </h1>
          <p className="text-lg md:text-xl font-normal leading-relaxed text-text-secondary dark:text-gray-300 max-w-[760px] animate-fade-in-up delay-200">
            La metodología <span className="text-primary dark:text-primary-light font-bold">&quot;Order before Tool&quot;</span> asegura que cada inversión en inteligencia artificial se traduzca en eficiencia medible, no en complejidad añadida.
          </p>
        </div>
      </section>
      <section className="w-full max-w-[1280px] px-4 md:px-10 lg:px-40 pb-24">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 border-l-4 border-primary dark:border-primary-light pl-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em] text-text-main dark:text-white">
              Nuestros Tres Pilares Fundamentales
            </h2>
            <p className="text-base font-normal leading-relaxed text-text-secondary dark:text-gray-400 max-w-[720px]">
              Un enfoque estructurado para transformar el caos en automatización estratégica, paso a paso.
            </p>
          </div>
          <div className="relative max-w-6xl mx-auto mt-12 px-4">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 dark:from-primary-light/10 dark:via-primary-light/40 dark:to-primary-light/10 hidden md:block -translate-x-1/2 z-0"></div>
            <div className="space-y-16 relative z-10">
              <div className="relative flex flex-col md:flex-row items-center md:items-start group animate-fade-in-up">
                <div className="md:w-1/2 md:pr-16 md:text-right flex flex-col md:items-end order-2 md:order-1 mt-6 md:mt-0">
                  <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-bold uppercase bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light border border-primary/20 dark:border-primary-light/30 tracking-wider">Paso 01</span>
                  <h3 className="text-2xl font-bold text-text-main dark:text-white mb-4">Orquestación de Procesos</h3>
                  <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-primary/30 dark:hover:border-primary-light/30 transition-all duration-300 text-left md:text-right w-full">
                    <p className="text-base font-normal leading-relaxed text-text-secondary dark:text-gray-300">
                      El desorden no se automatiza. Antes de implementar herramientas, optimizamos y limpiamos los flujos de trabajo para asegurar que la IA escale sobre bases sólidas.
                    </p>
                  </div>
                </div>
                <div className="flex-none md:absolute md:left-1/2 md:-translate-x-1/2 order-1 md:order-2">
                  <div className="size-16 rounded-full bg-surface-light dark:bg-surface-dark border-4 border-primary/10 dark:border-primary-light/10 group-hover:border-primary/40 dark:group-hover:border-primary-light/40 text-primary dark:text-primary-light flex items-center justify-center shadow-lg shadow-primary/10 transition-all duration-300 transform group-hover:scale-110 bg-white dark:bg-surface-dark">
                    <span className="material-symbols-outlined text-[32px]">settings_suggest</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-16 order-3 md:order-3 hidden md:block"></div>
              </div>
              <div className="relative flex flex-col md:flex-row items-center md:items-start group animate-fade-in-up">
                <div className="md:w-1/2 md:pr-16 order-3 md:order-1 hidden md:block"></div>
                <div className="flex-none md:absolute md:left-1/2 md:-translate-x-1/2 order-1 md:order-2">
                  <div className="size-16 rounded-full bg-surface-light dark:bg-surface-dark border-4 border-primary/10 dark:border-primary-light/10 group-hover:border-primary/40 dark:group-hover:border-primary-light/40 text-primary dark:text-primary-light flex items-center justify-center shadow-lg shadow-primary/10 transition-all duration-300 transform group-hover:scale-110 bg-white dark:bg-surface-dark">
                    <span className="material-symbols-outlined text-[32px]">shield_person</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-16 md:text-left flex flex-col md:items-start order-2 md:order-3 mt-6 md:mt-0">
                  <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-bold uppercase bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light border border-primary/20 dark:border-primary-light/30 tracking-wider">Paso 02</span>
                  <h3 className="text-2xl font-bold text-text-main dark:text-white mb-4">El Rol del AI Owner y Gobernanza</h3>
                  <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-primary/30 dark:hover:border-primary-light/30 transition-all duration-300 text-left w-full">
                    <p className="text-base font-normal leading-relaxed text-text-secondary dark:text-gray-300">
                      La tecnología necesita dirección humana. Establecemos un &apos;AI Owner&apos; enfocado en métricas de ahorro y supervisión para garantizar el ROI.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col md:flex-row items-center md:items-start group animate-fade-in-up">
                <div className="md:w-1/2 md:pr-16 md:text-right flex flex-col md:items-end order-2 md:order-1 mt-6 md:mt-0">
                  <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-bold uppercase bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light border border-primary/20 dark:border-primary-light/30 tracking-wider">Paso 03</span>
                  <h3 className="text-2xl font-bold text-text-main dark:text-white mb-4">Prevención de la Amnesia Organizacional</h3>
                  <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-primary/30 dark:hover:border-primary-light/30 transition-all duration-300 text-left md:text-right w-full">
                    <p className="text-base font-normal leading-relaxed text-text-secondary dark:text-gray-300">
                      El conocimiento debe ser un activo, no un accidente. Sistematizamos las lecciones aprendidas para evitar la pérdida de know-how y mejorar continuamente.
                    </p>
                  </div>
                </div>
                <div className="flex-none md:absolute md:left-1/2 md:-translate-x-1/2 order-1 md:order-2">
                  <div className="size-16 rounded-full bg-surface-light dark:bg-surface-dark border-4 border-primary/10 dark:border-primary-light/10 group-hover:border-primary/40 dark:group-hover:border-primary-light/40 text-primary dark:text-primary-light flex items-center justify-center shadow-lg shadow-primary/10 transition-all duration-300 transform group-hover:scale-110 bg-white dark:bg-surface-dark">
                    <span className="material-symbols-outlined text-[32px]">psychology</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-16 order-3 md:order-3 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-light dark:bg-surface-dark border-y border-border-light dark:border-border-dark py-24">
        <div className="w-full max-w-[1280px] px-4 md:px-10 lg:px-40 mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em] text-text-main dark:text-white">La lógica detrás del sistema</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary dark:text-primary-light mt-0.5">check_circle</span>
                <span className="text-text-secondary dark:text-gray-300 text-lg leading-relaxed">Análisis profundo antes de la implementación</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary dark:text-primary-light mt-0.5">check_circle</span>
                <span className="text-text-secondary dark:text-gray-300 text-lg leading-relaxed">Estructuras escalables y replicables</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary dark:text-primary-light mt-0.5">check_circle</span>
                <span className="text-text-secondary dark:text-gray-300 text-lg leading-relaxed">Retorno de inversión medible en meses, no años</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full h-[320px] md:h-[420px] bg-gradient-to-br from-primary/5 to-primary/15 dark:from-primary/10 dark:to-primary/20 rounded-2xl flex items-center justify-center relative overflow-hidden group animate-fade-in-up">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #3D0066 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
            <div className="p-8 bg-white dark:bg-surface-dark rounded-xl shadow-2xl border border-primary/10 dark:border-primary-light/10 flex flex-col gap-6 max-w-[320px] w-full transform transition-transform group-hover:scale-105 duration-500">
              <div className="flex items-center gap-4 border-b border-border-light dark:border-border-dark pb-4">
                <div className="size-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined text-xl">bar_chart</span>
                </div>
                <span className="font-bold text-base text-text-main dark:text-white">Eficiencia Proyectada</span>
              </div>
              <div className="space-y-3">
                <div className="h-3 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-primary dark:bg-primary-light w-[85%] rounded-full"></div>
                </div>
                <div className="flex justify-between text-sm text-text-secondary dark:text-gray-400">
                  <span>Actual</span>
                  <span className="font-bold text-primary dark:text-primary-light text-base">+85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-[1280px] px-4 md:px-10 lg:px-40 py-24">
        <div className="flex flex-col items-center justify-center text-center gap-10 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary-light/5 dark:to-transparent rounded-3xl p-10 md:p-20 border border-primary/10 dark:border-primary-light/10 shadow-sm animate-fade-in-up">
          <div className="flex flex-col gap-5 max-w-[760px]">
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-text-main dark:text-white">
              Profundice en nuestra estrategia
            </h2>
            <p className="text-lg md:text-xl font-normal text-text-secondary dark:text-gray-300 leading-relaxed">
              Descubra cómo implementamos estos pilares en empresas reales y los resultados obtenidos.
            </p>
          </div>
          <Link className="group flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 border-2 border-primary dark:border-primary-light bg-transparent text-primary dark:text-primary-light text-base font-bold leading-normal tracking-wide hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/20" to="/casos-exito">
            <span className="truncate">Explorar nuestro proceso en detalle</span>
            <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1 text-[20px]">arrow_forward</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Metodologia;
