
import React from 'react';
import { CalendarIcon, WhatsAppIcon } from './IconComponents';

const Profile: React.FC = () => {
  const whatsappUrl = "https://wa.me/584243167917?text=Hola%20Dra.%20Tatiana,%20quisiera%20agendar%20una%20asesoría.";

  return (
    <section>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8 md:p-12 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://picsum.photos/seed/doctora-tatiana/300/300" 
              alt="Dra. Tatiana Montilla"
              className="w-48 h-48 rounded-full object-cover shadow-md border-4 border-subtle-pink"
            />
            <h1 className="font-heading text-3xl font-bold text-text-primary mt-6">Tatiana Montilla</h1>
            <p className="text-soft-teal font-medium mt-1">Ginecólogo - Obstetra | Docente Universitario</p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-soft-teal hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-soft-teal"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              Agendar Asesoría
            </a>
          </div>
          <div className="md:col-span-2">
            <h2 className="font-heading text-2xl font-semibold text-text-primary border-b-2 border-subtle-pink pb-2 mb-6">
              Perfil Profesional
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Médico Cirujano especialista en Ginecología y Obstetricia con vocación docente. Orientada a ofrecer atención integral y personalizada a la mujer en todas sus etapas. Actualmente desempeñándome en el área académica universitaria, facilitando el aprendizaje en ciencias de la salud con compromiso hacia la excelencia médica y educativa.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">Habilidades Clínicas</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Cirugía Obstétrica y Ginecológica</li>
                  <li>Control Prenatal de Alto Riesgo</li>
                  <li>Ultrasonido Pélvico/Obstétrico</li>
                  <li>Planificación Familiar</li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">Habilidades Docentes</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Facilitación de Fisiología Humana</li>
                  <li>Diseño de Estrategias Didácticas</li>
                  <li>Evaluación de Aprendizaje Superior</li>
                  <li>Oratoria y Manejo de Grupos</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
                <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">Formación Académica</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Especialización en Docencia para la Educación Superior | Universidad de Carabobo</li>
                  <li>Especialista en Ginecología y Obstetricia | Hospital Dr. Adolfo Prince Lara</li>
                  <li>Médico Cirujano | Universidad Nacional Experimental Rómulo Gallegos (UNERG)</li>
                </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
