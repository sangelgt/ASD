import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 text-center max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/50 dark:bg-primary/20 text-primary dark:text-purple-200 text-sm font-bold border border-purple-200 dark:border-primary/30 backdrop-blur-sm mb-8 opacity-0 animate-fade-in-up">
          <span className="material-symbols-outlined filled !text-[18px]">verified</span>
          Consultoría Estratégica en IA
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white mb-8 opacity-0 animate-fade-in-up-100">
          Deje de perder la oportunidad de escalar. <br className="hidden lg:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 dark:from-purple-300 dark:to-white">Construye sistemas de rentabilidad</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-medium mb-10 opacity-0 animate-fade-in-up-200">
          Maximice su inversión en IA con nuestra metodología probada. Convertimos herramientas tecnológicas en activos financieros de alto rendimiento.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up-300">
          <a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-primary rounded-lg hover:bg-primary-hover shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1" href="#contacto">
            Iniciar Transformación
            <span className="material-symbols-outlined ml-2">arrow_downward</span>
          </a>
          <Link className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 dark:text-white transition-all bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm hover:shadow-md" to="/metodologia">
            Ver Metodología
          </Link>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-white dark:bg-surface-dark border-y border-slate-100 dark:border-slate-800/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 relative opacity-0 animate-fade-in-up">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-800 aspect-[4/3] group">
                <img alt="Angel Salazar - Fundador" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcRC3LOk4IGAtkhpnC6PkWNUk_HKjh5KbnZR_06h19UDIWB4O8zVayAtGAO-Kr2gApuv1eLvEt4KddCr87FZPz4_BDKG2WnP7ZK2x7fI7DCpgVGnQz3CVpQLSukmjd_4bnRYPHfTBUqJSHh-Q1HlL8SQFG-6JmBSAZ3Auyxpmu6D_XkHFtiUCwfgaxL1N_rvIsa2WXCDmIZYzyQaIMBS4hh-K0Tr0g8Pck72P3xZrEXhY5Mut25Orn1dCNPnm0PdmA0mtF-Mdp5_c" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl inline-block">
                    <h3 className="text-white font-bold text-xl">Angel Salazar</h3>
                    <p className="text-purple-200 text-sm font-medium">Fundador &amp; Consultor Principal</p>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-purple-200 dark:bg-primary/30 rounded-full blur-3xl"></div>
            </div>
            <div className="w-full lg:w-1/2 opacity-0 animate-fade-in-up-100">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-primary dark:text-purple-200 text-xs font-bold uppercase tracking-wider mb-6">
                Sobre el Fundador
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                "La IA sin estrategia es solo <span className="text-primary dark:text-purple-400">costo</span>, no inversión."
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                Con más de 15 años liderando transformaciones digitales en corporaciones Fortune 500, fundé esta consultoría con una misión clara: cerrar la brecha entre la promesa tecnológica y los resultados financieros tangibles.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                Mi enfoque personal se centra en la arquitectura de soluciones que priorizan el orden operativo antes de la implementación de herramientas, asegurando que cada euro invertido tenga un retorno medible.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary">school</span> MBA en Estrategia Digital
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary">rocket_launch</span> +50 Proyectos Exitosos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900 overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Tecnologías y Partners Estratégicos</p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-900"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-900"></div>
          <div className="flex w-[200%] animate-scroll">
            <div className="flex w-1/2 justify-around items-center gap-12 px-8 min-w-max">
              <div className="h-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-slate-200">
                <span className="material-symbols-outlined text-3xl">cloud</span> CloudTech
              </div>
              <div className="h-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-slate-200">
                <span className="material-symbols-outlined text-3xl">database</span> DataFlow
              </div>
              <div className="h-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-slate-200">
                <span className="material-symbols-outlined text-3xl">smart_toy</span> NeuralSys
              </div>
              <div className="h-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-slate-200">
                <span className="material-symbols-outlined text-3xl">code_blocks</span> LogicCore
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <div className="group relative bg-surface-light dark:bg-surface-dark p-8 lg:p-10 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-card hover:shadow-2xl hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in-up">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined !text-[120px] text-primary">psychology</span>
            </div>
            <div className="size-14 bg-purple-50 dark:bg-white/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined !text-[32px]">psychology</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Nuestra Metodología</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed relative z-10">
              Aplicamos el principio "Order before Tool" para asegurar que cada implementación de IA resuelva un problema de negocio cuantificable. Un proceso de 3 fases diseñado para eliminar el riesgo técnico.
            </p>
            <Link className="inline-flex items-center text-primary dark:text-purple-300 font-bold hover:gap-2 transition-all group-hover:text-primary-hover" to="/metodologia">
              Explorar Metodología <span className="material-symbols-outlined ml-1 !text-[20px]">arrow_forward</span>
            </Link>
          </div>
          <div className="group relative bg-surface-light dark:bg-surface-dark p-8 lg:p-10 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-card hover:shadow-2xl hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in-up-100">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined !text-[120px] text-primary">trending_up</span>
            </div>
            <div className="size-14 bg-purple-50 dark:bg-white/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined !text-[32px]">trending_up</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Casos de Éxito</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed relative z-10">
              Desde Fintech hasta Retail, descubra cómo hemos ayudado a organizaciones a recuperar hasta un 30% de eficiencia operativa mediante la implementación estratégica de sistemas inteligentes.
            </p>
            <Link className="inline-flex items-center text-primary dark:text-purple-300 font-bold hover:gap-2 transition-all group-hover:text-primary-hover" to="/casos-exito">
              Ver Resultados <span className="material-symbols-outlined ml-1 !text-[20px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="contacto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="opacity-0 animate-fade-in-up">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Hablemos de Negocios</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              ¿Listo para dejar de experimentar y empezar a rentabilizar?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Complete el formulario para agendar una sesión de descubrimiento o recibir su diagnóstico preliminar. Sin compromisos, solo valor estratégico desde el primer contacto.
            </p>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 md:p-8 lg:p-10 w-full relative z-10 opacity-0 animate-fade-in-up-200">
            <div className="mb-8 border-b border-slate-100 dark:border-slate-700 pb-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Solicitar Contacto</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Cuéntenos sobre sus desafíos actuales.</p>
            </div>
            <form action="#" className="space-y-5" method="POST" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-200" htmlFor="firstName">Nombre</label>
                  <input autoComplete="given-name" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-[#111827] text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary shadow-sm" id="firstName" name="firstName" placeholder="Juan" required type="text" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-200" htmlFor="lastName">Apellido</label>
                  <input autoComplete="family-name" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-[#111827] text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary shadow-sm" id="lastName" name="lastName" placeholder="Pérez" required type="text" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-200" htmlFor="email">Email Corporativo</label>
                <input autoComplete="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-[#111827] text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary shadow-sm" id="email" name="email" placeholder="nombre@empresa.com" required type="email" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-200" htmlFor="message">Mensaje</label>
                <textarea className="w-full p-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-[#111827] text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary resize-none shadow-sm" id="message" name="message" placeholder="¿En qué podemos ayudarle?" required rows="3"></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 px-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-lg mt-2" type="submit">
                Enviar Solicitud
                <span className="material-symbols-outlined font-bold">send</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
