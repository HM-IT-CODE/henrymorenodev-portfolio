"use client";

import React, { useState } from 'react';
import { FileText, MonitorPlay, X, Download, ExternalLink } from 'lucide-react';

interface Resource {
    id: number;
    title: string;
    type: 'pdf' | 'presentation';
    category: string;
    url: string;
    previewInModal: boolean;
}

const resources: Resource[] = [
    {
        id: 1,
        title: "Ingeniería de Software Aumentada con IA",
        type: 'pdf',
        category: "Manual Técnico & AI",
        url: "/documents/Ingenieria-de-Software-Aumentada-con-IA.pdf",
        previewInModal: true
    },
    {
        id: 2,
        title: "Modern C++ & Hardware Mastery",
        type: 'presentation',
        category: "Presentación Técnica",
        url: "/documents/Modern-C-Hardware-Mastery.pptx",
        previewInModal: true
    },
    {
        id: 3,
        title: "Rust Service Architecture",
        type: 'presentation',
        category: "Presentación Técnica",
        url: "/documents/Rust-High-Performance-Service-Architecture.pptx",
        previewInModal: true
    },
    {
        id: 4,
        title: "Ingeniería de Software Aumentada (PPT)",
        type: 'presentation',
        category: "Conferencia",
        url: "/documents/Ingenieria-de-Software-Aumentada-con-IA.pptx",
        previewInModal: true
    }
];

const Resources: React.FC = () => {
    const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

    const getViewerUrl = (resource: Resource) => {
        // Office Online Viewer requires a public URL.
        // When running on localhost, this will fail to load the document content,
        // but the modal structure will be visible.
        const baseUrl = 'https://henrymorenodev.xyz';
        const fullUrl = `${baseUrl}${resource.url}`;

        if (resource.type === 'presentation') {
            return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fullUrl)}`;
        }
        return `${resource.url}#toolbar=0`;
    };

    const handleOpen = (resource: Resource) => {
        // Always open modal if previewInModal is true
        if (resource.previewInModal) {
            setSelectedResource(resource);
        } else {
            const link = document.createElement('a');
            link.href = resource.url;
            link.download = resource.url.split('/').pop() || 'document';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <section id="recursos" className="py-20 relative bg-zinc-950 border-t border-zinc-900">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-green-400 uppercase bg-green-400/10 border border-green-400/20 rounded-full">
                        Centro de Conocimiento
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6">Recursos & <span className="gradient-text">Publicaciones</span></h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Presentaciones y manuales técnicos sobre mis áreas de especialización: IA, C++ y Rust.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((resource) => (
                        <div key={resource.id} className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 flex flex-col items-start h-full">
                            <div className={`p-3 rounded-lg mb-4 ${resource.type === 'pdf' ? 'bg-red-500/10 text-red-500' : 'bg-orange-500/10 text-orange-500'}`}>
                                {resource.type === 'pdf' ? <FileText className="w-8 h-8" /> : <MonitorPlay className="w-8 h-8" />}
                            </div>

                            <h3 className="text-lg font-bold text-zinc-100 mb-2 group-hover:text-blue-400 transition-colors">
                                {resource.title}
                            </h3>
                            <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-6 flex-grow">
                                {resource.category}
                            </p>

                            <div className="mt-4 w-full flex gap-3">
                                <button
                                    onClick={() => handleOpen(resource)}
                                    className="flex-1 py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm font-medium transition-colors flex items-center justify-center gap-2"
                                >
                                    {resource.type === 'pdf' ? <FileText className="w-4 h-4" /> : <MonitorPlay className="w-4 h-4" />}
                                    Ver Online
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Viewer Modal */}
            {selectedResource && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="bg-zinc-900 w-full max-w-6xl h-[85vh] rounded-2xl border border-zinc-700 flex flex-col shadow-2xl overflow-hidden relative">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950">
                            <div className="flex items-center gap-3">
                                {selectedResource.type === 'pdf' ? <FileText className="w-5 h-5 text-blue-400" /> : <MonitorPlay className="w-5 h-5 text-orange-400" />}
                                <h3 className="font-bold text-lg text-zinc-100">{selectedResource.title}</h3>
                            </div>
                            <div className="flex items-center gap-4">
                                <a href={selectedResource.url} download className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-full" title="Descargar original">
                                    <Download className="w-5 h-5" />
                                </a>
                                <button
                                    onClick={() => setSelectedResource(null)}
                                    className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-red-500/20 hover:text-red-400 rounded-full"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow bg-zinc-800 relative w-full h-full">
                            <iframe
                                src={getViewerUrl(selectedResource)}
                                className="w-full h-full border-0"
                                title={selectedResource.title}
                                allowFullScreen
                            />
                            {/* Fallback/Loading info */}
                            <div className="absolute inset-0 -z-10 flex items-center justify-center text-zinc-500">
                                <div className="text-center px-6">
                                    <p className="mb-2">Cargando visualizador...</p>
                                    {selectedResource.type === 'presentation' && (
                                        <p className="text-xs text-orange-400/80 max-w-md mx-auto">
                                            Si estás en localhost, el visor de Office no podrá acceder al archivo local.
                                            <br />Funcionará correctamente una vez desplegado en <strong>henrymorenodev.xyz</strong>.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Resources;
