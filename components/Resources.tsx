
import React from 'react';
import { FileCode, BookOpen, Presentation, Github } from 'lucide-react';

const resources = [
  {
    title: "Manuales Técnicos PDF",
    description: "Flujos SQL, guías de Docker y manuales de arquitectura.",
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    title: "Presentaciones",
    description: "Diagramas arquitectónicos y demos empresariales.",
    icon: <Presentation className="w-6 h-6" />
  },
  {
    title: "GitHub Repositories",
    description: "Acceso a plantillas y código base de alta calidad.",
    icon: <Github className="w-6 h-6" />
  },
  {
    title: "API Docs",
    description: "Documentación automatizada para integraciones de terceros.",
    icon: <FileCode className="w-6 h-6" />
  }
];

const Resources: React.FC = () => {
  return (
    <section id="recursos" className="py-24 bg-zinc-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Recursos y Documentación</h2>
          <p className="text-zinc-400 text-lg">Material complementario para facilitar la integración y mantenimiento de los sistemas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((item, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/80 transition-all cursor-pointer group">
              <div className="mb-4 text-blue-400 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
