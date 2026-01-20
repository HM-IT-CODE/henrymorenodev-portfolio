import React from 'react';
import { Database, Layout, Repeat, Cpu, FileText, Server, Code2 } from 'lucide-react';

const services = [
  {
    icon: <Database className="w-8 h-8 text-blue-400" />,
    title: "Integración IA & MCP",
    description: "Conexión segura de LLMs (Gemini) con bases de datos SQL Server mediante Model Context Protocol (MCP) para asistentes inteligentes corporativos."
  },
  {
    icon: <Server className="w-8 h-8 text-emerald-400" />,
    title: "Microservicios & Backend",
    description: "Desarrollo de APIs robustas y escalables con NestJS, Node.js y .NET. Arquitecturas distribuidas y sincronización multi-sede."
  },
  {
    icon: <Layout className="w-8 h-8 text-purple-400" />,
    title: "Full Stack Web Apps",
    description: "Interfaces modernas y reactivas con React, Next.js y Tailwind CSS. Paneles administrativos complejos y dashbaords en tiempo real."
  },
  {
    icon: <Code2 className="w-8 h-8 text-amber-400" />,
    title: "Desktop & Electron",
    description: "Aplicaciones de escritorio multiplataforma (Windows/macOS) con Electron y React para gestión operativa offline-first."
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Servicios Principales</h2>
          <p className="text-zinc-400 text-lg">Soluciones integrales de software arquitectura pensadas para el rendimiento y la seguridad.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
