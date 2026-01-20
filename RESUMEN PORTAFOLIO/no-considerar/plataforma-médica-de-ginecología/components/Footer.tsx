
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-text-secondary">
        <p>&copy; {currentYear} Dra. Tatiana Montilla. Todos los derechos reservados.</p>
        <p className="text-xs mt-2">
          Esta plataforma es un recurso informativo y no reemplaza el consejo médico profesional.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
