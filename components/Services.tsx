import React from 'react';
import { Database, Layout, Smartphone, Server, Code2 } from 'lucide-react';

const services = [
  {
    icon: <Database className="w-8 h-8 text-emerald-300" />,
    title: "Integración IA & MCP",
    description: "Conecto IA con datos y flujos empresariales bajo criterios de seguridad, trazabilidad y control operativo."
  },
  {
    icon: <Server className="w-8 h-8 text-emerald-400" />,
    title: "Infraestructura & DevOps bare-metal",
    description: "Despliego plataformas sobre servidores físicos con observabilidad, segmentación y criterios de alta disponibilidad."
  },
  {
    icon: <Layout className="w-8 h-8 text-emerald-300" />,
    title: "Microservicios & Backend",
    description: "Construyo APIs y servicios distribuidos orientados a rendimiento, mantenibilidad y evolución de sistemas legados."
  },
  {
    icon: <Code2 className="w-8 h-8 text-emerald-300" />,
    title: "Full Stack Web & Desktop",
    description: "Desarrollo aplicaciones web y desktop para operación empresarial, dashboards y herramientas internas robustas."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-emerald-300" />,
    title: "Desarrollo Móvil Offline-First",
    description: "Diseño apps móviles offline-first con persistencia local y sincronización segura para entornos sin conectividad estable."
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-stone-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-emerald-300 uppercase bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            Capacidades Clave
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Servicios Principales</h2>
          <p className="text-zinc-400 text-lg">Capacidades orientadas a operación crítica, automatización y evolución tecnológica.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-7 rounded-3xl border border-zinc-800/80 bg-stone-900/40 hover:border-emerald-500/30 hover:bg-stone-900/55 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-zinc-100">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-7">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
