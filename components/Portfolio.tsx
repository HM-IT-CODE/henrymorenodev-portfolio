import React from 'react';
import { Github, Terminal, Cpu, Smartphone, ServerCog, Boxes } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  role: string;
  period: string;
  image?: string; // Optional image
  icon?: React.ReactNode; // Optional icon for projects without image
  description: string;
  highlights: string[];
  tech: string[];
  codeAccess: 'Publico' | 'Privado';
  github?: string;
}

const visibleHighlights = 2;

const projects: Project[] = [
  {
    id: 1,
    title: "Ecosistema de Orquestación IA Empresarial (Bare-Metal)",
    role: "Arquitecto de Infraestructura & AI Engineer",
    period: "2025 - Actualidad",
    image: "/images/projects/grafana/2026-04-16 09 42 55.png",
    description: "Diseñé un ecosistema empresarial sobre bare-metal para ejecutar automatizaciones con IA, servicios internos y monitoreo centralizado, integrando Docker, n8n, Supabase, Nginx, MikroTik y Grafana bajo una estrategia de aislamiento, observabilidad y endurecimiento de red.",
    highlights: [
      "Aislé servicios críticos por capas y dominios operativos para sostener una disponibilidad estimada de 99.9%.",
      "Resolví el conflicto de favicon y Supabase con un proxy inverso avanzado en Nginx, eliminando errores de enrutamiento.",
      "Construí dashboards en Grafana que redujeron el tiempo de diagnóstico y respuesta a incidentes en 40%.",
      "Diseñé Hairpin NAT y segmentación con MikroTik para reducir la superficie de exposición externa en 60%."
    ],
    tech: ["Docker", "n8n", "Supabase", "Nginx", "MikroTik", "Grafana"],
    codeAccess: 'Privado'
  },
  {
    id: 2,
    title: "Servidor MCP de Alto Rendimiento para SQL Server Legado",
    role: "Desarrollador de Sistemas",
    period: "2025 - Actualidad",
    image: "/images/projects/mcp-server/main.png",
    description: "Implementé un servidor MCP de alto rendimiento para exponer datos de SQL Server legado a flujos asistidos por LLMs, con foco en latencia baja, consultas seguras y utilidad operativa para equipos analíticos.",
    highlights: [
      "Optimicé joins complejos para responder en menos de 50 ms en escenarios de consulta crítica.",
      "Aumenté la productividad de analistas en 30% al transformar consultas repetitivas en flujos asistidos por IA.",
      "Reduje errores manuales de consulta en 25% al encapsular reglas de acceso y trazabilidad."
    ],
    tech: ["Rust", "C++", "SQL Server", "LLMs"],
    codeAccess: 'Privado'
  },
  {
    id: 3,
    title: "Motor de Asistente IA Offline para Android (Jarvis Rust Core)",
    role: "Desarrollador de Núcleo Nativo",
    period: "2025 - Actualidad",
    icon: <Cpu className="w-16 h-16 text-zinc-600" />,
    description: "Desarrollé un núcleo lógico escrito en Rust para una app Android nativa en Kotlin, integrado mediante JNI. Kotlin invoca la función Java_com_example_jarvisapp_MainActivity_processCommand, Rust procesa el texto, almacena el historial en SQLite local y devuelve acciones estructuradas como ABRIR_WHATSAPP o ABRIR_SPOTIFY.",
    highlights: [
      "Implementé una arquitectura 100% offline con 0 dependencia de internet para procesamiento y persistencia local.",
      "Separé la UI en Kotlin y la lógica en Rust, reduciendo acoplamiento técnico en aproximadamente 50%.",
      "Preparé compilación cdylib para arm64-v8a y x86_64 con cargo-ndk, facilitando despliegue multiplataforma.",
      "El módulo Rust devuelve la intención; no ejecuta acciones Android directamente, esa responsabilidad queda en Kotlin."
    ],
    tech: ["Rust", "Kotlin", "JNI", "SQLite", "rusqlite", "Android NDK", "cargo-ndk"],
    codeAccess: 'Privado'
  },
  {
    id: 4,
    title: "Plataforma de Tracking Logístico en Tiempo Real",
    role: "Full Stack Engineer",
    period: "2024 - 2025",
    icon: <ServerCog className="w-16 h-16 text-zinc-600" />,
    description: "Diseñé una plataforma de tracking logístico conectada a procesos ERP para centralizar trazabilidad operativa, estado de flujo y visibilidad en tiempo real sobre procesos que antes dependían de reportes manuales.",
    highlights: [
      "Eliminé reportes manuales del flujo principal de seguimiento, logrando una reducción operativa del 100% en ese proceso.",
      "Reduje llamadas de soporte en 25% al exponer estado y trazabilidad en tiempo real para usuarios internos.",
      "Integré automatizaciones con n8n y SQL Server ERP para reducir tiempos de actualización en aproximadamente 45%."
    ],
    tech: ["Next.js", "n8n", "SQL Server ERP"],
    codeAccess: 'Privado'
  },
  {
    id: 5,
    title: "Suite de Operaciones de Campo Offline-First (Flutter / React Native)",
    role: "Mobile & Backend Developer",
    period: "2024 - Actualidad",
    icon: <Smartphone className="w-16 h-16 text-zinc-600" />,
    description: "Desarrollé una suite móvil para operación de campo en entornos industriales sin conectividad confiable, con persistencia en SQLite, ejecución completamente offline y sincronización diferencial segura al recuperar señal.",
    highlights: [
      "Garanticé 100% de funcionalidad offline para captura, consulta y actualización de datos.",
      "Logré cero pérdida de datos al reconectar mediante persistencia transaccional y sincronización diferencial.",
      "Reduje el volumen de transferencia en aproximadamente 70% frente a sincronizaciones completas."
    ],
    tech: ["Flutter", "React Native", "SQLite", "Sincronización diferencial"],
    codeAccess: 'Privado'
  },
  {
    id: 6,
    title: "Sistema de Gestión Hotelera - Real-Time Orchestration",
    role: "Full Stack Engineer",
    period: "2024 - 2025",
    image: "/images/projects/hotel/main.png",
    description: "Construí una plataforma hotelera para gestionar habitaciones, reservas, huéspedes, pagos y operación administrativa en una arquitectura híbrida web y escritorio orientada a tiempo real.",
    highlights: [
      "Aceleré la operación de recepción en 80% al centralizar check-in, check-out, disponibilidad y pagos en una sola interfaz.",
      "Reduje tiempos de asignación y actualización de habitaciones en aproximadamente 60% mediante paneles operativos en tiempo real.",
      "Disminuí errores de coordinación interna en 35% al unificar el estado operativo del hotel para múltiples usuarios."
    ],
    tech: ["Next.js", "Electron", "Prisma", "PostgreSQL"],
    codeAccess: 'Privado'
  },
  {
    id: 7,
    title: "Gestión de Garantías - Enterprise Web App",
    role: "Full Stack Engineer",
    period: "2024 - 2025",
    image: "/images/projects/warranty/main.png",
    description: "Implementé una aplicación empresarial para registro, seguimiento y análisis de reclamos de garantía, con formularios validados, búsquedas avanzadas, reportes y almacenamiento centralizado en la nube.",
    highlights: [
      "Reduje el procesamiento de reclamos en 50% al digitalizar el flujo completo de registro y seguimiento.",
      "Disminuí errores de captura en aproximadamente 35% con validaciones y formularios guiados.",
      "Aceleré búsquedas por serial, factura y documento en 60% mediante filtros estructurados y reportes operativos."
    ],
    tech: ["React", "Redux Toolkit", "Supabase", "jsPDF"],
    codeAccess: 'Privado'
  },
  {
    id: 8,
    title: "Otros proyectos de sistemas y producto",
    role: "Systems / Full Stack Engineer",
    period: "2024 - 2025",
    icon: <Boxes className="w-16 h-16 text-zinc-600" />,
    description: "Desarrollé soluciones complementarias para impresión, OCR, carga masiva y analítica SaaS, orientadas a reducir fricción operativa en entornos empresariales.",
    highlights: [
      "EnControl Print Service (Rust): reduje fallos manuales de impresión en aproximadamente 45%.",
      "OCR Copy (Electron + C++): reduje tiempos de extracción manual de texto en aproximadamente 70%.",
      "Massive Data Loader (Electron): aceleré cargas masivas en aproximadamente 65% y reduje errores de importación en 40%.",
      "SaaS Dashboard & Analytics (React): reduje tiempos de lectura operativa en aproximadamente 30%."
    ],
    tech: ["Rust", "Electron", "C++", "React"],
    codeAccess: 'Privado'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portafolio" className="py-20 relative bg-stone-900/20">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-emerald-300 uppercase bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            Portafolio Selecto
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Soluciones <span className="gradient-text">Técnicas</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Casos seleccionados para mostrar dónde aporto más valor: IA aplicada, infraestructura crítica, automatización y productos de operación real.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-stone-900/50 border border-zinc-800 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 flex flex-col h-full backdrop-blur-[2px]">
              <div className="aspect-video relative overflow-hidden bg-stone-900 flex items-center justify-center">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80"></div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-stone-900 opacity-50">
                    {project.icon || <Terminal className="w-12 h-12 text-zinc-700" />}
                  </div>
                )}

                <div className="absolute top-4 left-4 bg-stone-950/70 backdrop-blur-sm border border-zinc-800 px-3 py-1 rounded-full text-xs font-medium text-emerald-300">
                  {project.role}
                </div>
              </div>

              <div className="p-7 flex flex-col flex-grow">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">{project.period}</p>
                <h3 className="text-xl font-semibold mb-3 text-zinc-100 group-hover:text-emerald-300 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 mb-5 text-sm leading-7 flex-grow">
                  {project.description}
                </p>

                <ul className="space-y-3 mb-6 text-sm text-zinc-300">
                  {project.highlights.slice(0, visibleHighlights).map((highlight, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300 shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {project.highlights.length > visibleHighlights && (
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">+ {project.highlights.length - visibleHighlights} logros adicionales</p>
                )}

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 bg-stone-800/80 text-zinc-300 text-xs rounded-full border border-zinc-700/80">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                      <Github className="w-4 h-4 mr-2" />
                      Ver Código
                    </a>
                  ) : (
                    <span className="text-zinc-600 text-xs italic">Código {project.codeAccess}</span>
                  )}
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">{project.codeAccess}</span>
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
