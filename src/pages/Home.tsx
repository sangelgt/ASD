import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <section>
      <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-lg p-8 mb-8">
        <h2 className="text-3xl font-bold">Bienvenido a ASD</h2>
        <p className="mt-2">Realiza el diagnóstico para conocer el estado de tu proyecto.</p>
        <Link to="/diagnostico" className="inline-block mt-4 bg-white text-indigo-700 px-4 py-2 rounded">Empezar Diagnóstico</Link>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Servicios</h3>
        <p>Información breve sobre los servicios o la misión de ASD.</p>
      </div>
    </section>
  )
}

export default Home
