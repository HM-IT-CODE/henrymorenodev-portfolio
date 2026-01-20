import React, { useEffect } from 'react';

const AwesomeTableEmbed: React.FC<{ viewID: string }> = ({ viewID }) => {
    useEffect(() => {
        const id = 'awesome-table-script';
        if (!document.getElementById(id)) {
            const s = document.createElement('script');
            s.src = 'https://app.awesome-table.com/AwesomeTableInclude.js';
            s.id = id;
            s.async = true;
            document.head.appendChild(s);
        }
    }, []);

    return (
        <section>
            <div className="text-center mb-6">
                <h2 className="text-2xl font-heading font-semibold text-text-primary">Tabla de Contactos</h2>
                <p className="text-text-secondary">Vista embebida (Awesome Table)</p>
            </div>
            <div className="max-w-5xl mx-auto">
                {/* embed oculto: la vista existe para mostrar/consultar la hoja, no para ser visible */}
                <div data-type="AwesomeTableView" data-filters="" data-viewid={viewID} style={{ display: 'none' }} aria-hidden="true"></div>
            </div>
        </section>
    );
};

export default AwesomeTableEmbed;
