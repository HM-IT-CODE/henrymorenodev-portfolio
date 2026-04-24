
import React from 'react';
import { Award, ShieldCheck, Zap, Layers3 } from 'lucide-react';

const WhyWorkWithMe: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">¿Por qué trabajar conmigo?</h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Arquitectura para producción real</h4>
                  <p className="text-zinc-400">Diseño soluciones para operación continua, considerando infraestructura, observabilidad y evolución del negocio.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Seguridad desde el diseño</h4>
                  <p className="text-zinc-400">Integro segmentación, control de acceso, trazabilidad y exposición mínima desde la arquitectura inicial.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Resultados medibles</h4>
                  <p className="text-zinc-400">Trabajo con métricas operativas claras: menos fricción, menos soporte y más velocidad de respuesta.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center shrink-0">
                  <Layers3 className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Visión integral</h4>
                  <p className="text-zinc-400">Conecto infraestructura, backend y producto sin perder coherencia técnica ni operativa.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-stone-900/55 p-8 lg:p-10 shadow-2xl shadow-black/20 overflow-hidden">
            <div className="mb-8 rounded-3xl overflow-hidden border border-emerald-950/30 aspect-[4/3] relative">
              <img
                src="/1-ganaderia-650x480.jpg"
                alt="Ganado en el campo llanero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"></div>
              <div className="absolute left-5 bottom-5 right-5">
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-200 mb-2">Criterio de diseño</p>
                <p className="text-sm text-zinc-100 max-w-md">Claridad, ritmo y dirección aplicados a sistemas que deben durar y operar bien bajo presión.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="rounded-2xl border border-zinc-800 bg-stone-900 p-5">
                <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mb-2">Foco</p>
                <p className="text-2xl font-semibold text-white">IA + Infraestructura</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-stone-900 p-5">
                <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mb-2">Entorno</p>
                <p className="text-2xl font-semibold text-white">Producción real</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-stone-900 p-5">
                <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mb-2">Cobertura</p>
                <p className="text-2xl font-semibold text-white">Bare-metal a móvil</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-stone-900 p-5">
                <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mb-2">Resultado</p>
                <p className="text-2xl font-semibold text-white">Sistemas observables</p>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
              <p className="text-sm font-medium italic text-zinc-200">"Diseño sistemas útiles, claros y suficientemente robustos para operar bien y sostener crecimiento."</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <span className="block font-semibold">Henry Moreno</span>
                <span className="block text-xs text-zinc-500 uppercase tracking-[0.22em]">AI Solutions Architect</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
