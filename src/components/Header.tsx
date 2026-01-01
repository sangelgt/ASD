import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all duration-300" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-primary/20">
              <span className="text-white font-display font-bold text-xl">AS</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block text-text-light dark:text-text-dark">
              Angel Salazar <span className="text-primary dark:text-primary-light">Digital</span>
            </span>
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light transition-colors font-medium text-sm lg:text-base">Inicio</Link>
            <Link to="/metodologia" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light transition-colors font-medium text-sm lg:text-base">Metodología</Link>
            <Link to="/casos-exito" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light transition-colors font-medium text-sm lg:text-base">Casos de Éxito</Link>
            <Link to="/recursos" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light transition-colors font-medium text-sm lg:text-base">Recursos</Link>
            <button aria-label="Toggle dark mode" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-text-muted-light dark:text-text-muted-dark" onClick={toggleTheme}>
              <span className="material-symbols-outlined text-xl">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <Link to="/diagnostico" className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/30 transform hover:-translate-y-0.5">
              Diagnóstico
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-500 hover:text-primary dark:hover:text-primary-light hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light">Inicio</Link>
            <Link to="/metodologia" className="block px-3 py-2 rounded-md text-base font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light">Metodología</Link>
            <Link to="/casos-exito" className="block px-3 py-2 rounded-md text-base font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light">Casos de Éxito</Link>
            <Link to="/recursos" className="block px-3 py-2 rounded-md text-base font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary-light">Recursos</Link>
            <Link to="/diagnostico" className="block px-3 py-2 rounded-md text-base font-medium text-primary dark:text-primary-light">Diagnóstico</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
