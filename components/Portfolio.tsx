
import React from 'react';
import { ExternalLink, Download, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    id: "dicom",
    title: "Plataforma Médico — Visor DICOM",
    description: "Web app especializada en visualización y gestión de imágenes DICOM para clínicas y laboratorios médicos.",
    features: [
      "Panel de estudios y pacientes",
      "Descarga masiva de imágenes médicas",
      "Herramientas de segmentación y análisis",
      "Despliegue escalable con Docker"
    ],
    tech: ["Next.js", "JavaScript", "Docker", "DICOM"],
    image: "https://picsum.photos/seed/med/800/600",
    links: [
      { label: "Manual Técnico", url: "#" },
      { label: "Guía Docker", url: "#" }
    ]
  },
  {
    id: "hotel",
    title: "Hotel Manager — Gestión Integral",
    description: "Sistema administrable para hoteles con gestión de habitaciones, reservas y operaciones financieras.",
    features: [
      "Panel visual de disponibilidad",
      "Control de mantenimiento y tareas",
      "Gestión de pagos y reportes",
      "Dashboard administrativo responsive"
    ],
    tech: ["NodeJS", "Docker", "SQL", "JavaScript"],
    image: "https://picsum.photos/seed/hotel/800/600",
    links: [
      { label: "Manual de Usuario", url: "#" },
      { label: "SQL Scripts", url: "#" }
    ]
  },
  {
    id: "erp",
    title: "Gestión de Garantías y ERP Modular",
    description: "Solución web modular para gestión de garantías, productos y flujos de postventa tecnológica.",
    features: [
      "Registro de reclamos y garantías",
      "Búsqueda inteligente por serial",
      "Panel administrativo de reportes",
      "Módulo de flujos financieros"
    ],
    tech: ["NodeJS", "PostgreSQL", "JavaScript"],
    image: "https://picsum.photos/seed/erp/800/600",
    links: [
      { label: "Tutorial PDF", url: "#" },
      { label: "Docs de Finanzas", url: "#" }
    ]
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portafolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Portafolio Destacado</h2>
            <p className="text-zinc-400 text-lg">Casos de éxito reales implementados en entornos de producción críticos.</p>
          </div>
          <a href="https://github.com/HM-IT-CODE" className="text-blue-400 hover:text-blue-300 flex items-center space-x-2 text-sm font-semibold">
            <span>Ver más en GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={project.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full">
                <div className="relative group rounded-2xl overflow-hidden border border-zinc-800 shadow-xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white border border-white/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">{project.description}</p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-zinc-300 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-800">
                  {project.links.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.url} 
                      className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors text-sm bg-zinc-900 px-4 py-2 rounded-lg border border-zinc-800"
                    >
                      <Download className="w-4 h-4" />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
