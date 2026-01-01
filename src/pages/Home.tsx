import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <section className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Bienvenido a ASD</h2>
        <p className="mt-2 text-base sm:text-lg">Realiza el diagnóstico para conocer el estado de tu proyecto.</p>
        <Link to="/diagnostico" className="inline-block mt-4 bg-white text-indigo-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
          Empezar Diagnóstico
        </Link>
      </div>

      <div className="p-6 bg-white rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Nuestros Servicios</h3>
        <p className="text-gray-600">
          En ASD, nos especializamos en ofrecer soluciones tecnológicas innovadoras que impulsan el crecimiento de tu negocio. Desde consultoría estratégica hasta el desarrollo de software a medida, nuestro objetivo es transformar tus ideas en realidad.
        </p>
      </div>
    </section>
  )
}

export default Home
