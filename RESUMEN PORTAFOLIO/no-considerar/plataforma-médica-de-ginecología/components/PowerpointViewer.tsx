import React from 'react';

const PowerpointViewer: React.FC<{ url: string }> = ({ url }) => {
    if (!url) return <div className="p-6">No hay presentación disponible.</div>;

    // Muchos embedUrl de PowerPoint están ya preparados para iframe (Office viewer).
    return (
        <div className="aspect-w-16 aspect-h-9">
            <iframe src={url} frameBorder="0" className="w-full h-full" allowFullScreen title="Visor de Presentación" />
        </div>
    );
};

export default PowerpointViewer;
