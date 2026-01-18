
import React from 'react';
import { Database, Layout, Cpu, FileText, Repeat } from 'lucide-react';

const services = [
  {
    title: "Microservicios Distribuidos",
    description: "Diseño e implementación de arquitecturas backend robustas basadas en eventos y escalabilidad horizontal.",
    icon: <Database className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Migración de Sistemas Legacy",
    description: "Modernización de infraestructuras obsoletas (.NET/SQL Server) a stacks modernos como NodeJS/NestJS.",
    icon: <Repeat className="w-6 h-6 text-teal-400" />
  },
  {
    title: "Aplicaciones Empresariales",
    description: "Desarrollo de ERPs modulares, sistemas de salud (DICOM) y soluciones de gestión hotelera.",
    icon: <Layout className="w-6 h-6 text-purple-400" />
  },
  {
    title: "IA y Automatización",
    description: "Integración de Inteligencia Artificial para optimizar flujos de trabajo y toma de decisiones automatizada.",
    icon: <Cpu className="w-6 h-6 text-pink-400" />
  },
  {
    title: "Consultoría Técnica",
    description: "Documentación personalizada, auditoría de código y diseño de hojas de ruta tecnológicas.",
    icon: <FileText className="w-6 h-6 text-amber-400" />
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
