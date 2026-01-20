import React, { useEffect, useState } from 'react';
import { MEDICAL_TIPS } from '../constants';
import type { MedicalTip } from '../types';

const Slide: React.FC<{ tip: MedicalTip; active: boolean }> = ({ tip, active }) => (
    <div className={`w-full flex-shrink-0 transition-transform duration-500 ${active ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {tip.imageUrl && <img src={tip.imageUrl} alt={tip.title} className="w-full h-56 object-cover" />}
            <div className="p-6">
                <span className="text-xs font-semibold bg-soft-teal/10 text-soft-teal px-2 py-1 rounded-full">{tip.category}</span>
                <h3 className="font-heading text-2xl font-semibold text-text-primary mt-4">{tip.title}</h3>
                <p className="mt-3 text-text-secondary">{tip.content}</p>
            </div>
        </div>
    </div>
);

const MedicalCarousel: React.FC = () => {
    const [index, setIndex] = useState(0);
    const slides = MEDICAL_TIPS;

    useEffect(() => {
        const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
        return () => clearInterval(id);
    }, [slides.length]);

    const prev = () => setIndex(i => (i - 1 + slides.length) % slides.length);
    const next = () => setIndex(i => (i + 1) % slides.length);

    return (
        <section>
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold font-heading text-text-primary sm:text-4xl">Carrusel Médico</h2>
                <p className="mt-2 text-text-secondary">Resalta consejos importantes de la práctica clínica.</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                <div className="overflow-hidden">
                    <div className="flex" style={{ transform: `translateX(-${index * 100}%)`, transition: 'transform 500ms ease' }}>
                        {slides.map((tip, i) => (
                            <div key={i} className="w-full px-2">
                                <Slide tip={tip} active={i === index} />
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={prev} aria-label="Anterior" className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                    ‹
                </button>
                <button onClick={next} aria-label="Siguiente" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                    ›
                </button>

                <div className="flex items-center justify-center mt-4 space-x-2">
                    {slides.map((_, i) => (
                        <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? 'bg-soft-teal' : 'bg-gray-300'}`} aria-label={`Ir a slide ${i + 1}`}></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MedicalCarousel;
