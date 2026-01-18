
import React from 'react';
import { Award, ShieldCheck, Zap } from 'lucide-react';

const WhyWorkWithMe: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">¿Por qué trabajar conmigo?</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Experiencia Real</h4>
                  <p className="text-zinc-400">Años implementando, migrando y dando soporte a sistemas críticos en diversos sectores industriales.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Enfoque en Seguridad</h4>
                  <p className="text-zinc-400">Arquitecturas diseñadas bajo el principio de seguridad por diseño y manejo eficiente de datos sensibles.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Impacto Inmediato</h4>
                  <p className="text-zinc-400">Reducción de tiempos operativos y mejora sustancial en la administración de recursos empresariales.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
               <img 
                 src="https://picsum.photos/seed/person/800/800" 
                 alt="Professional portrait" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-morphism p-6 rounded-2xl border border-white/10 max-w-[240px]">
              <p className="text-sm font-medium italic text-zinc-300">"El éxito técnico no solo es código, es arquitectura bien pensada para el futuro del negocio."</p>
              <div className="mt-4 border-t border-white/10 pt-4">
                <span className="block font-bold">Henry Moreno</span>
                <span className="block text-xs text-zinc-500 uppercase tracking-widest">Architect Director</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
