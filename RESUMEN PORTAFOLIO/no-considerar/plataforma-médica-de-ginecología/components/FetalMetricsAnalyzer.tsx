
import React, { useState, useCallback } from 'react';
import { analyzeFetalMetrics } from '../services/geminiService';

const FetalMetricsAnalyzer: React.FC = () => {
  const [metrics, setMetrics] = useState({ bpd: '', hc: '', ac: '', fl: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Allow only numbers and a single decimal point
    if (/^[0-9]*\.?[0-9]*$/.test(value)) {
      setMetrics(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!metrics.bpd || !metrics.hc || !metrics.ac || !metrics.fl) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    setError('');
    setResult('');
    setIsLoading(true);

    try {
      const analysis = await analyzeFetalMetrics(
        parseFloat(metrics.bpd),
        parseFloat(metrics.hc),
        parseFloat(metrics.ac),
        parseFloat(metrics.fl)
      );
      setResult(analysis);
    } catch (err) {
      setError('Hubo un error al contactar al servicio de análisis. Por favor, inténtelo de nuevo.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [metrics]);

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-heading text-text-primary sm:text-4xl">Fetal Metrics Analyzer (IA)</h2>
        <p className="mt-4 text-lg text-text-secondary">Ingrese las métricas de biometría fetal para un análisis preliminar.</p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">Datos Biométricos (en mm)</h3>
            
            <InputField label="Diámetro Biparietal (BPD)" name="bpd" value={metrics.bpd} onChange={handleChange} />
            <InputField label="Circunferencia Cefálica (HC)" name="hc" value={metrics.hc} onChange={handleChange} />
            <InputField label="Circunferencia Abdominal (AC)" name="ac" value={metrics.ac} onChange={handleChange} />
            <InputField label="Longitud del Fémur (FL)" name="fl" value={metrics.fl} onChange={handleChange} />
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-soft-teal hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-soft-teal disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analizando...
                </>
              ) : (
                'Analizar Métricas'
              )}
            </button>
          </form>
        </div>

        <div className="bg-subtle-pink/50 p-8 rounded-xl">
            <h3 className="font-heading text-xl font-semibold text-text-primary mb-4">Análisis Preliminar</h3>
            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-4" role="alert">{error}</div>}
            
            {isLoading && (
                 <div className="space-y-4 animate-pulse">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                </div>
            )}
            
            {result && (
              <div className="prose prose-sm max-w-none text-text-secondary leading-relaxed">
                  <div dangerouslySetInnerHTML={{ __html: result.split('---')[0].replace(/\n/g, '<br />') }} />
                  {result.includes('---') && (
                    <div className="mt-4 p-4 bg-pink-100 border-l-4 border-pink-500 text-pink-800 rounded-r-lg">
                      <p className="font-bold">Importante:</p>
                      <p>{result.split('---')[1]}</p>
                    </div>
                  )}
              </div>
            )}

             {!isLoading && !result && !error && (
                <div className="text-center text-text-secondary py-8">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                    <p className="mt-2 font-medium">Los resultados del análisis aparecerán aquí.</p>
                </div>
            )}
        </div>
      </div>
    </section>
  );
};

interface InputFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, value, onChange}) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-text-secondary">
            {label}
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
            <input
                type="text"
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                className="focus:ring-soft-teal focus:border-soft-teal block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
                placeholder="0.0"
                aria-label={label}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">mm</span>
            </div>
        </div>
    </div>
);


export default FetalMetricsAnalyzer;
