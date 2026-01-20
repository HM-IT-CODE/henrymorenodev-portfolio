
import React from 'react';
import { MEDICAL_TIPS } from '../constants';
import type { MedicalTip } from '../types';

const MedicalTipCard: React.FC<{ tip: MedicalTip }> = ({ tip }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
    {tip.imageUrl && (
      <img src={tip.imageUrl} alt={tip.title} className="w-full h-48 object-cover" />
    )}
    <div className="p-6 flex-grow">
      <span className="text-xs font-semibold bg-soft-teal/10 text-soft-teal px-2 py-1 rounded-full">{tip.category}</span>
      <h3 className="font-heading text-xl font-semibold text-text-primary mt-4 mb-3">{tip.title}</h3>
      <p className="text-text-secondary leading-relaxed">{tip.content}</p>
    </div>
    <div className="bg-subtle-pink px-6 py-2">
      <p className="text-xs text-pink-800 font-medium">Lectura rápida</p>
    </div>
  </div>
);

const MedicalTips: React.FC = () => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-heading text-text-primary sm:text-4xl">Medical Tips</h2>
        <p className="mt-4 text-lg text-text-secondary">Consejos rápidos y de alto impacto para estudiantes y profesionales.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {MEDICAL_TIPS.map((tip, index) => (
          <MedicalTipCard key={index} tip={tip} />
        ))}
      </div>
    </section>
  );
};

export default MedicalTips;
