
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 py-3' : 'bg-transparent py-6'
      }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Logo className="w-12 h-12 text-blue-500" />
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight leading-none text-white">HM AI Solutions</span>
            <span className="text-[10px] tracking-widest uppercase text-blue-400 font-semibold">Full Stack AI & Automation</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-400">
          <a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</a>
          <a href="#portafolio" className="hover:text-blue-400 transition-colors">Portafolio</a>
          <a href="#recursos" className="hover:text-blue-400 transition-colors">Recursos</a>
          <a href="https://wa.me/584145888298" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold flex items-center">
            <span>+58 414-5888298</span>
          </a>
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
