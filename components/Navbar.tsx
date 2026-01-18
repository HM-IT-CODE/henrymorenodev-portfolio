
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white">HM</div>
          <span className="font-bold text-xl tracking-tight hidden sm:inline-block">Henry Moreno</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-400">
          <a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</a>
          <a href="#portafolio" className="hover:text-blue-400 transition-colors">Portafolio</a>
          <a href="#recursos" className="hover:text-blue-400 transition-colors">Recursos</a>
          <a href="#contacto" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
            Contacto
          </a>
        </div>

        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
