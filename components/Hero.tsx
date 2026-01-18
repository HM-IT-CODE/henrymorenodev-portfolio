
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-20 lg:py-32 flex flex-col items-center text-center">
      <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
        Software Architect & Cloud Specialist
      </div>
      <h1 className="text-5xl lg:text-7xl font-bold mb-8 max-w-4xl leading-tight">
        Soluciones Digitales a <span className="gradient-text">Medida</span> para Empresas Modernas
      </h1>
      <p className="text-lg lg:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed">
        Arquitecturas escalables, microservicios y productos SaaS diseñados para optimizar sistemas críticos y liderar la transformación tecnológica.
      </p>
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <a href="#portafolio" className="px-8 py-4 bg-zinc-100 text-zinc-950 font-semibold rounded-xl hover:bg-white transition-all transform hover:scale-105">
          Ver Portafolio
        </a>
        <a href="#contacto" className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-100 font-semibold rounded-xl hover:bg-zinc-800 transition-all">
          Solicitar Consultoría
        </a>
      </div>

      <div className="mt-20 w-full max-w-5xl rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-blue-500/5 aspect-video bg-zinc-900 relative">
        <img 
          src="https://picsum.photos/seed/arch/1200/675" 
          alt="Dashboard Preview" 
          className="object-cover w-full h-full opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-left p-8 glass-morphism rounded-2xl max-w-md">
            <h3 className="text-xl font-bold mb-2">Transformando Ideas</h3>
            <p className="text-sm text-zinc-300">Implementamos arquitecturas de microservicios distribuidos con alta disponibilidad para sectores como salud, hotelería y logística.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
