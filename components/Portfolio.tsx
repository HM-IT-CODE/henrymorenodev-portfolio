import React from 'react';
import { Github, ExternalLink, Terminal, Cpu } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image?: string; // Optional image
  icon?: React.ReactNode; // Optional icon for projects without image
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "MCP Server NestJS + PostgreSQL",
    category: "AI & Backend",
    image: "/images/projects/mcp-server/main.png",
    description: "Servidor MCP listo para producción que permite a asistentes de IA (Claude, Cursor) consultar bases de datos PostgreSQL de forma segura. Implementa 'Dual Transport' (STDIO/SSE), validación de queries y logging de auditoría.",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "MCP Protocol"],
    github: "https://github.com/HM-IT-CODE/mcp-server-nestjs"
  },
  {
    id: 2,
    title: "Enterprise Microservices Architecture",
    category: "System Architecture",
    image: "/images/projects/grpc/main.png",
    description: "Ecosistema de microservicios (Usuarios, Productos, Órdenes) con comunicación gRPC de alto rendimiento. Implementa patrón 'Database-per-Service', API Gateway, validaciones distribuidas y frontend Next.js 15.",
    tech: ["NestJS", "gRPC", "Protobuf", "Next.js 15", "PostgreSQL"],
    github: "https://github.com/HM-IT-CODE"
  },
  {
    id: 3,
    title: "Sistema de Gestión Hotelera",
    category: "Full Stack",
    image: "/images/projects/hotel/main.png",
    description: "Plataforma integral para administración hotelera con dashboard de estado de habitaciones en tiempo real. Gestiona reservas, check-in/out, pagos y limpieza. Arquitectura híbrida Next.js + Electron para operación web y escritorio.",
    tech: ["Next.js", "Electron", "PostgreSQL", "Prisma", "Material UI"],
  },
  {
    id: 4,
    title: "Gestión de Garantías",
    category: "Enterprise Web App",
    image: "/images/projects/warranty/main.png",
    description: "Sistema web para el registro y seguimiento de garantías de productos tecnológicos. Incluye validación de clientes por RIF, búsqueda avanzada, reportes de costos en tiempo real y arquitectura serverless con Supabase.",
    tech: ["React", "Redux Toolkit", "Supabase", "Formik", "SweetAlert2"],
  },
  {
    id: 5,
    title: "EnControl - Print Service",
    category: "Rust & Systems",
    icon: <Terminal className="w-16 h-16 text-zinc-600" />,
    description: "Servicio de impresión de alto rendimiento desarrollado en Rust. Funciona como daemon en Windows/macOS para gestionar colas de impresión locales, reintentos automáticos y actualizaciones seguras en entornos críticos.",
    tech: ["Rust", "Windows Service", "System Daemon", "Tauri"],
    github: "https://github.com/HM-IT-CODE"
  },
  {
    id: 6,
    title: "OCR Copy - Native Text Extractor",
    category: "Desktop Utility",
    image: "/images/projects/cpp/main.png",
    description: "Aplicación de escritorio híbrida (Electron + C++ Backend) para capturar regiones de pantalla y extraer texto mediante OCR local. Incluye overlay de selección, lógica nativa en C++ para alto rendimiento y fallback a Tesseract.",
    tech: ["C++", "Electron", "Node.js", "Tesseract OCR"],
  },
  {
    id: 7,
    title: "SaaS Dashboard & Analytics",
    category: "Web Application",
    image: "/images/projects/saas/main.png",
    description: "Dashboard administrativo moderno con autenticación segura y visualización de métricas en tiempo real. Diseño limpio y optimizado para la gestión de usuarios y datos operativos.",
    tech: ["React", "Node.js", "Material UI", "Chart.js"],
  },
  {
    id: 8,
    title: "Massive Data Loader",
    category: "Desktop Tool",
    image: "/images/projects/bulk-entry.png",
    description: "Aplicación de escritorio (Electron) para procesamiento y carga masiva de inventarios en SQL Server. Genera reportes de validación, maneja transacciones complejas y exportación de logs.",
    tech: ["Electron", "React", "MSSQL", "Node.js"],
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portafolio" className="py-20 relative bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
            Portafolio Selecto
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Soluciones <span className="gradient-text">Técnicas</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Proyectos que demuestran capacidad en integración de IA, arquitecturas escalables y desarrollo de sistemas críticos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 flex flex-col h-full">
              <div className="aspect-video relative overflow-hidden bg-zinc-950 flex items-center justify-center">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80"></div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-zinc-900 pattern-grid-lg opacity-50">
                    {project.icon || <Terminal className="w-12 h-12 text-zinc-700" />}
                  </div>
                )}

                <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 px-3 py-1 rounded-full text-xs font-medium text-blue-400">
                  {project.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 mb-6 text-sm leading-relaxed line-clamp-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs rounded border border-zinc-700">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 bg-zinc-800 text-zinc-500 text-xs rounded border border-zinc-700">+{project.tech.length - 4}</span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                      <Github className="w-4 h-4 mr-2" />
                      Ver Código
                    </a>
                  ) : (
                    <span className="text-zinc-600 text-xs italic">Código Privado</span>
                  )}
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
