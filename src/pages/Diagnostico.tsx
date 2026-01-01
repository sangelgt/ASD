import React from 'react';

const Diagnostico: React.FC = () => {
  return (
 feat/accessibility-fixes-6134327995518164683
    <main className="flex-grow flex flex-col items-center justify-center py-12 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-200/20 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="flex flex-col gap-10 lg:sticky lg:top-32 pt-4">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/50 dark:bg-primary/20 text-primary dark:text-purple-200 text-sm font-bold border border-purple-200 dark:border-primary/30 backdrop-blur-sm opacity-0 animate-fade-in-up">
              <span className="material-symbols-outlined filled !text-[18px]">verified</span>
              Diagnóstico de ROI con IA
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white opacity-0 animate-fade-in-up-100">
              ¿Cuánto está dejando de ganar hoy por la falta de un sistema?
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-medium opacity-0 animate-fade-in-up-200">
              Su Primer Entregable: Una Hoja de Ruta clara hacia la Rentabilidad sin riesgos técnicos.
            </p>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-card opacity-0 animate-fade-in-up-300 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-xl mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <div className="p-2 bg-purple-50 dark:bg-white/5 rounded-lg text-primary">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              Metodología "Order before Tool"
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-0.5 filled !text-[24px]">check_circle</span>
                <span className="text-base text-slate-700 dark:text-slate-300">Identificación precisa de fugas de rentabilidad en sus procesos actuales.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-0.5 filled !text-[24px]">check_circle</span>
                <span className="text-base text-slate-700 dark:text-slate-300">Priorización de herramientas IA basada estrictamente en impacto financiero.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-0.5 filled !text-[24px]">check_circle</span>
                <span className="text-base text-slate-700 dark:text-slate-300">Plan de implementación paso a paso, diseñado para eliminar riesgos.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 md:p-8 lg:p-10 w-full max-w-[580px] mx-auto lg:mr-0 relative z-10 opacity-0 animate-fade-in-up-400">
          <div className="mb-8 border-b border-slate-100 dark:border-slate-700 pb-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">Solicitar Diagnóstico</h3>
            <p className="text-slate-500 dark:text-slate-400 text-base">Complete el formulario para recibir su análisis preliminar de ROI.</p>
          </div>
          <form action="#" className="space-y-6" method="POST" noValidate>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-200" htmlFor="fullName">
                Nombre completo <span aria-hidden="true" className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors !text-[20px]">person</span>
                </div>
                <input autoComplete="name" className="w-full pl-10 pr-4 py-3.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-[#111827] text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base shadow-sm" id="fullName" name="fullName" placeholder="Ej. Juan Pérez" required type="text" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-200" htmlFor="workEmail">
                Email empresarial <span aria-hidden="true" className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors !text-[20px]">mail</span>
                </div>
                <input autoComplete="email" className="w-full pl-10 pr-4 py-3.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-[#111827] text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base shadow-sm" id="workEmail" name="workEmail" placeholder="nombre@empresa.com" required type="email" />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-1">
                <span className="material-symbols-outlined !text-[14px]">lock</span>
                <span>Solo correos corporativos. Datos protegidos.</span>
              </p>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-200" htmlFor="industry">
                Industria de la Empresa <span aria-hidden="true" className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors !text-[20px]">domain</span>
                </div>
                <select className="w-full pl-10 pr-10 py-3.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-[#111827] text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base appearance-none shadow-sm cursor-pointer" id="industry" name="industry" required>
                  <option disabled value="">Seleccione una opción</option>
                  <option value="finanzas">Servicios Financieros / Fintech</option>
                  <option value="salud">Salud / Pharma</option>
                  <option value="retail">Retail / E-commerce</option>
                  <option value="manufactura">Manufactura / Logística</option>
                  <option value="tecnologia">Tecnología / SaaS</option>
                  <option value="servicios">Servicios Profesionales</option>
                  <option value="otro">Otro</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400">expand_more</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-200" htmlFor="frustration">
                Principal frustración con IA actual <span aria-hidden="true" className="text-red-500">*</span>
              </label>
              <div className="relative">
                <textarea className="w-full p-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-[#111827] text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base resize-none shadow-sm" id="frustration" name="frustration" placeholder="Ej. Implementamos herramientas pero no vemos retorno de inversión claro..." required rows="3"></textarea>
              =</div>
            </div>
            <div className="pt-4">
              <button className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all active:scale-[0.98] focus:ring-4 focus:ring-primary/20 flex items-center justify-center gap-3 text-lg" type="submit">
                Obtener mi Diagnóstico de ROI
                <span className="material-symbols-outlined font-bold">arrow_forward</span>
              </button>
              <p className="text-center text-xs text-slate-400 mt-5">
                Al enviar este formulario, acepta nuestra <a className="underline hover:text-primary transition-colors" href="#">Política de Privacidad</a>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};


export default Diagnostico;
