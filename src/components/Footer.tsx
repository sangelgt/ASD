import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <span className="font-display font-bold text-xl text-text-light dark:text-text-dark">Angel Salazar <span className="text-primary dark:text-primary-light">Digital</span></span>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-4 leading-relaxed">
              Order before Tool. Transformando el caos operativo en rentabilidad medible a través de inteligencia artificial estratégica.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-text-light dark:text-text-dark mb-5 text-base uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-4 text-sm text-text-muted-light dark:text-text-muted-dark">
              <li className="flex items-center group">
                <span className="material-symbols-outlined mr-3 text-primary dark:text-primary-light text-xl group-hover:text-primary-hover transition-colors">phone</span>
                <span className="group-hover:text-primary dark:group-hover:text-primary-light transition-colors">+52 55 8921 3040</span>
              </li>
              <li className="flex items-center group">
                <span className="material-symbols-outlined mr-3 text-primary dark:text-primary-light text-xl group-hover:text-primary-hover transition-colors">email</span>
                <a className="group-hover:text-primary dark:group-hover:text-primary-light transition-colors" href="mailto:hola@angelsalazardigital.com">hola@angelsalazardigital.com</a>
              </li>
              <li className="flex items-center group">
                <span className="material-symbols-outlined mr-3 text-primary dark:text-primary-light text-xl group-hover:text-primary-hover transition-colors">schedule</span>
                <span>Lun - Vie: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-text-light dark:text-text-dark mb-5 text-base uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3 text-sm text-text-muted-light dark:text-text-muted-dark">
              <li><Link className="hover:text-primary dark:hover:text-primary-light transition-colors" to="/accesibilidad">Declaración de Accesibilidad</Link></li>
              <li><Link className="hover:text-primary dark:hover:text-primary-light transition-colors" to="/privacidad">Política de Privacidad</Link></li>
              <li><Link className="hover:text-primary dark:hover:text-primary-light transition-colors" to="/terminos">Términos y Condiciones</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-text-light dark:text-text-dark mb-5 text-base uppercase tracking-wider">Síguenos</h3>
            <div className="flex flex-col space-y-3 text-sm text-text-muted-light dark:text-text-muted-dark">
              <a className="hover:text-primary dark:hover:text-primary-light transition-colors flex items-center group" href="https://linkedin.com">
                LinkedIn <span className="material-symbols-outlined text-sm ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">north_east</span>
              </a>
              <a className="hover:text-primary dark:hover:text-primary-light transition-colors flex items-center group" href="https://twitter.com">
                Twitter / X <span className="material-symbols-outlined text-sm ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">north_east</span>
              </a>
              <a className="hover:text-primary dark:hover:text-primary-light transition-colors flex items-center group" href="https://instagram.com">
                Instagram <span className="material-symbols-outlined text-sm ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">north_east</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark text-center md:text-left">© {new Date().getFullYear()} Angel Salazar Digital. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
