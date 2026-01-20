
import React, { useState } from 'react';
import type { View } from '../types';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems: { view: View; href: string }[] = [
    { view: 'Perfil', href: '#perfil' },
    { view: 'Recursos', href: '#recursos' },
    { view: 'Medical Tips', href: '#tips' },
    { view: 'Herramienta', href: '#herramienta' },
    { view: 'Contacto', href: '#contacto' },
  ];

  const NavLink: React.FC<{ view: View; href: string }> = ({ view, href }) => (
    <a
      href={href}
      onClick={() => setIsMenuOpen(false)}
      className="font-heading font-medium tracking-wide text-sm uppercase transition-colors duration-300 text-text-secondary hover:text-soft-teal py-2"
    >
      {view}
    </a>
  );

  return (
    <header className="bg-clinical-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#perfil" className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-soft-teal/10 rounded-full flex items-center justify-center border-2 border-soft-teal/20">
                  <svg className="w-7 h-7 text-soft-teal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18a6 6 0 006-6c0-4-3-6-6-6s-6 2-6 6a6 6 0 006 6z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V2m0 20v-4m8.364-8.364L18 10m-1.414-1.414l2.364-2.364M3.636 20.364L6 18m1.414 1.414l-2.364 2.364m14.364 0L18 18m1.414-1.414l2.364 2.364M3.636 3.636L6 6m-1.414 1.414l2.364-2.364"></path>
                  </svg>
              </div>
              <div>
                <span className="font-heading text-xl font-bold text-text-primary tracking-wide block">Dra. Tatiana Montilla</span>
                <span className="font-sans text-xs font-medium text-soft-teal uppercase tracking-widest">Ginecólogo - Obstetra</span>
              </div>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => <NavLink key={item.view} view={item.view} href={item.href} />)}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-secondary focus:outline-none"
              aria-label="Abrir menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-clinical-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 px-4 py-6">
            {navItems.map((item) => <NavLink key={item.view} view={item.view} href={item.href} />)}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
