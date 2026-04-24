"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './Logo';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/92 backdrop-blur-sm border-b border-zinc-900 py-3' : 'bg-transparent py-5'
      }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Logo className="w-10 h-10 shrink-0" />
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-[1.15rem] tracking-tight text-white">Henry Moreno</span>
            <span className="text-[11px] tracking-[0.22em] uppercase text-zinc-300 font-semibold mt-1">AI Solutions Architect</span>
            <span className="text-[11px] tracking-[0.14em] uppercase text-zinc-500 font-medium mt-0.5">Oriundo de Achaguas, Apure · Residente en Carabobo</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-7 text-sm font-medium text-zinc-400">
          <Link href="/#servicios" className="hover:text-white transition-colors">Servicios</Link>
          <Link href="/#portafolio" className="hover:text-white transition-colors">Portafolio</Link>
          <Link href="/#recursos" className="hover:text-white transition-colors">Recursos</Link>
          <Link href="/#contacto" className="inline-flex items-center gap-2 bg-white text-zinc-950 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
            Contacto
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <button type="button" title="Abrir menú" aria-label="Abrir menú" className="md:hidden p-2 border border-zinc-800 rounded-full text-zinc-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
