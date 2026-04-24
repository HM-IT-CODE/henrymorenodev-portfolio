
import React from 'react';
import { Mail, MessageCircle, Linkedin, ChevronRight, Phone, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-stone-900/20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden border border-zinc-800 bg-stone-900/55 shadow-2xl shadow-black/20 backdrop-blur-[2px]">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 lg:p-12 bg-stone-900/75 text-white flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800">
              <div>
                <h2 className="text-4xl font-bold mb-4">¿Hablamos de tu próximo proyecto?</h2>
                <p className="text-zinc-400 mb-8 leading-relaxed">Trabajo en arquitectura de IA, automatización e infraestructura para entornos empresariales que requieren estabilidad, observabilidad y control.</p>
              </div>

              <div className="space-y-5">
                <a href="mailto:hmorenosifontes@gmail.com" className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                    <Mail className="w-5 h-5 text-emerald-300" />
                  </div>
                  <span className="text-sm text-zinc-200">hmorenosifontes@gmail.com</span>
                </a>
                <a href="tel:+584145888298" className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                    <Phone className="w-5 h-5 text-emerald-300" />
                  </div>
                  <span className="text-sm text-zinc-200">+58 414 588 8298</span>
                </a>
                <a href="https://github.com/HM-IT-CODE" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                    <Github className="w-5 h-5 text-emerald-300" />
                  </div>
                  <span className="text-sm text-zinc-200">github.com/HM-IT-CODE · Repos privados y muestras bajo solicitud</span>
                </a>
                <a href="#" className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                    <Linkedin className="w-5 h-5 text-emerald-300" />
                  </div>
                  <span className="text-sm text-zinc-200">LinkedIn disponible al definir la URL final</span>
                </a>
                <a href="#" className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                    <MessageCircle className="w-5 h-5 text-emerald-300" />
                  </div>
                  <span className="text-sm text-zinc-200">WhatsApp disponible al definir enlace directo</span>
                </a>
              </div>
            </div>

            <div className="md:w-1/2 p-10 lg:p-12 bg-stone-900/35">
              <form className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-zinc-400 mb-2">Nombre Completo</label>
                  <input id="contact-name" type="text" placeholder="Tu nombre" className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 focus:outline-none focus:border-emerald-400 transition-colors" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-zinc-400 mb-2">Correo Electrónico</label>
                  <input id="contact-email" type="email" placeholder="tu@empresa.com" className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 focus:outline-none focus:border-emerald-400 transition-colors" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-400 mb-2">Mensaje</label>
                  <textarea id="contact-message" rows={4} placeholder="Cuéntame el reto técnico que quieres resolver" className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 focus:outline-none focus:border-emerald-400 transition-colors"></textarea>
                </div>
                <button type="button" className="w-full bg-white text-zinc-950 font-bold py-4 rounded-full flex items-center justify-center space-x-2 hover:bg-zinc-200 transition-colors">
                  <span>Enviar Mensaje</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
