import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">ASD</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-sm text-gray-700 hover:underline">Inicio</Link>
          <Link to="/diagnostico" className="text-sm text-gray-700 hover:underline">Diagnóstico</Link>
          <Link to="/metodologia" className="text-sm text-gray-700 hover:underline">Metodología</Link>
          <Link to="/casos" className="text-sm text-gray-700 hover:underline">Casos</Link>
          <Link to="/privacidad" className="text-sm text-gray-700 hover:underline">Privacidad</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
