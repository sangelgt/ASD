import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-800">
        © {new Date().getFullYear()} ASD — Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
