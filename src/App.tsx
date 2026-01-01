import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Diagnostico from './pages/Diagnostico'
import Metodologia from './pages/Metodologia'
import Casos from './pages/Casos'
import Privacidad from './pages/Privacidad'

const App: React.FC = () => {
  // import.meta.env.BASE_URL viene de la configuración `base` de Vite
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diagnostico" element={<Diagnostico />} />
            <Route path="/metodologia" element={<Metodologia />} />
            <Route path="/casos" element={<Casos />} />
            <Route path="/privacidad" element={<Privacidad />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
