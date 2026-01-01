import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Diagnostico from './pages/Diagnostico';
import Metodologia from './pages/Metodologia';
import CasosExito from './pages/CasosExito';
import Privacidad from './pages/Privacidad';
import Recursos from './pages/Recursos';
import Terminos from './pages/Terminos';
import Accesibilidad from './pages/Accesibilidad';

const App: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans transition-colors duration-300 antialiased flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diagnostico" element={<Diagnostico />} />
          <Route path="/metodologia" element={<Metodologia />} />
          <Route path="/casos-exito" element={<CasosExito />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/accesibilidad" element={<Accesibilidad />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
