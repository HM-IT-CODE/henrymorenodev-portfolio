import React from 'react';

const PdfViewer: React.FC<{ url: string }> = ({ url }) => {
    if (!url || url === '#') {
        return <div className="p-6">No hay PDF disponible para visualizar.</div>;
    }

    // Si la URL apunta a un PDF directo funciona en iframe; si es necesario, se puede usar Google Docs Viewer.
    const src = url.endsWith('.pdf') ? url : `https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true`;

    return (
        <div className="aspect-w-16 aspect-h-9">
            <iframe src={src} frameBorder="0" className="w-full h-full" title="Visor PDF" />
        </div>
    );
};

export default PdfViewer;
