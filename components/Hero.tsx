
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-16 lg:py-24 flex flex-col items-center text-center">
      <div className="inline-flex items-center px-3 py-1.5 mb-6 text-[11px] font-semibold tracking-[0.24em] text-emerald-300 uppercase bg-zinc-900 border border-zinc-800 rounded-full">
        AI Solutions Architect & Senior Full Stack Engineer
      </div>
      <h1 className="text-5xl lg:text-7xl font-semibold mb-6 max-w-4xl leading-tight tracking-tight">
        Henry Moreno
      </h1>
      <p className="text-xl lg:text-2xl text-zinc-200 max-w-4xl mb-5 leading-relaxed font-medium">
        Arquitectura de IA, automatización e infraestructura para operaciones empresariales críticas.
      </p>
      <p className="text-base lg:text-lg text-zinc-400 max-w-3xl mb-8 leading-relaxed">
        Integro bare-metal Linux, n8n, MCP, Rust y desarrollo multiplataforma para convertir procesos complejos en sistemas seguros, observables y de alta disponibilidad.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-4xl">
        <span className="px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/8 text-sm text-zinc-200">Integración de IA y MCP</span>
        <span className="px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/8 text-sm text-zinc-200">Infraestructura bare-metal y observabilidad</span>
        <span className="px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/8 text-sm text-zinc-200">Productos web, desktop y móvil offline-first</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mb-10">
        <div className="rounded-2xl border border-zinc-800 bg-stone-900/45 px-5 py-4 text-left">
          <p className="text-2xl font-semibold text-white mb-1">99.9%</p>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Uptime estimado</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-stone-900/45 px-5 py-4 text-left">
          <p className="text-2xl font-semibold text-white mb-1">&lt; 50 ms</p>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Consultas críticas</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-stone-900/45 px-5 py-4 text-left">
          <p className="text-2xl font-semibold text-white mb-1">100% offline</p>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Operación móvil local</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#portafolio" className="px-8 py-4 bg-white text-zinc-950 font-semibold rounded-full hover:bg-zinc-200 transition-colors">
          Ver Portafolio
        </a>
        <a href="#contacto" className="px-8 py-4 bg-emerald-950/40 border border-emerald-900/60 text-zinc-100 font-semibold rounded-full hover:border-emerald-700/70 hover:bg-emerald-950/60 transition-colors">
          Solicitar Consultoría
        </a>
      </div>

      <div className="mt-16 w-full max-w-5xl rounded-3xl overflow-hidden border border-emerald-950/60 shadow-2xl shadow-black/20 aspect-video bg-stone-900/80 relative">
        <img
          src="/images/projects/n8n/2026-04-23 20 04 59.png"
          alt="Ecosistema bare-metal con observabilidad"
          className="object-cover w-full h-full opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/35 to-transparent"></div>
        <div className="absolute left-6 right-6 bottom-6 md:left-8 md:right-auto md:max-w-lg text-left p-6 rounded-2xl bg-stone-950/72 border border-emerald-950/50">
          <h3 className="text-xl font-semibold mb-2">De bare-metal a móvil offline</h3>
          <p className="text-sm text-zinc-400">Arquitectura, automatización y producto integrados para logística, hotelería, operación de campo e IA empresarial.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
