import React from 'react'

const Diagnostico: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Diagnóstico</h2>
      <form className="space-y-4 max-w-lg">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Nombre</label>
          <input id="name" name="name" className="w-full border rounded px-3 py-2" required aria-required="true" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Correo electrónico</label>
          <input id="email" name="email" type="email" className="w-full border rounded px-3 py-2" required aria-required="true" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="notes">Descripción</label>
          <textarea id="notes" name="notes" rows={5} className="w-full border rounded px-3 py-2" required aria-required="true" />
        </div>

        <div>
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Enviar</button>
        </div>
      </form>
    </>
  )
}

export default Diagnostico
