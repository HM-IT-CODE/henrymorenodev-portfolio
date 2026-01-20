
import React, { useState } from 'react';
import { RESOURCES } from '../constants';
import type { Resource } from '../types';
import { PdfIcon, PptIcon, DownloadIcon } from './IconComponents';
import Modal from './Modal';
import PdfViewer from './PdfViewer';
import PowerpointViewer from './PowerpointViewer';

const ResourceCard: React.FC<{ resource: Resource; onOpenModal: (resource: Resource) => void; }> = ({ resource, onOpenModal }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between">
    <div>
      <div className="flex items-start justify-between">
        {resource.type === 'PDF' ? <PdfIcon className="w-10 h-10 text-red-500" /> : <PptIcon className="w-10 h-10 text-orange-500" />}
        <span className="text-xs font-semibold bg-subtle-pink text-pink-700 px-2 py-1 rounded-full">{resource.category}</span>
      </div>
      <h3 className="font-heading text-lg font-semibold text-text-primary mt-4 mb-2">{resource.title}</h3>
    </div>
    <div className="mt-4">
      {resource.type === 'PDF' ? (
        <div className="space-y-2">
          <a
            href={resource.fileUrl}
            download
            className="inline-flex items-center justify-center w-full px-4 py-2 border border-soft-teal text-sm font-medium rounded-md text-soft-teal bg-white hover:bg-soft-teal hover:text-white transition-colors"
          >
            <DownloadIcon className="w-5 h-5 mr-2" />
            Descargar PDF
          </a>
          <button
            onClick={() => onOpenModal(resource)}
            disabled={!resource.fileUrl || resource.fileUrl === '#'}
            className="inline-flex items-center justify-center w-full px-4 py-2 border border-soft-teal text-sm font-medium rounded-md text-white bg-soft-teal hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Ver PDF
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => onOpenModal(resource)}
            disabled={!resource.embedUrl}
            className="inline-flex items-center justify-center w-full px-4 py-2 border border-soft-teal text-sm font-medium rounded-md text-soft-teal bg-white hover:bg-soft-teal hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Ver Presentación
          </button>
        </div>
      )}
    </div>
  </div>
);

const ResourcesDashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeResource, setActiveResource] = useState<Resource | null>(null);

  const handleOpenModal = (resource: Resource) => {
    setActiveResource(resource);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveResource(null);
  };

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-heading text-text-primary sm:text-4xl">Dashboard de Recursos</h2>
        <p className="mt-4 text-lg text-text-secondary">Descarga guías, protocolos y presentaciones para tu práctica clínica.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {RESOURCES.map((resource, index) => (
          <ResourceCard key={index} resource={resource} onOpenModal={handleOpenModal} />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={activeResource?.type === 'PDF' ? 'Visor de PDF' : 'Visor de Presentación'}>
        {activeResource && activeResource.type === 'PDF' && (
          <PdfViewer url={activeResource.fileUrl} />
        )}
        {activeResource && activeResource.type !== 'PDF' && (
          <PowerpointViewer url={activeResource.embedUrl || ''} />
        )}
      </Modal>
    </section>
  );
};

export default ResourcesDashboard;
