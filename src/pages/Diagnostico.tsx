import React from 'react'

const Diagnostico: React.FC = () => {
  return (
    <section className="p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Formulario de Diagnóstico</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Nombre Completo</label>
            <input id="name" name="name" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Correo Electrónico</label>
            <input id="email" name="email" type="email" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="notes">Descripción del Proyecto</label>
            <textarea id="notes" name="notes" rows={5} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>

          <div className="md:col-span-2 text-right">
            <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors font-semibold">
              Enviar Diagnóstico
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Diagnostico
