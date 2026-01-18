
import React from 'react';
import { Mail, MessageCircle, Linkedin, ChevronRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 bg-blue-600 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-4">¿Hablamos de tu próximo proyecto?</h2>
                <p className="text-blue-100 mb-8 leading-relaxed">Necesitas una solución a medida, una consultoría técnica o una demo personalizada de nuestros sistemas?</p>
              </div>

              <div className="space-y-6">
                <a href="mailto:henry.moreno.dev@tudominio.com" className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm">henry.moreno.dev@tudominio.com</span>
                </a>
                <a href="#" className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="text-sm">linkedin.com/in/henrymoreno</span>
                </a>
                <a href="#" className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-sm">WhatsApp Directo</span>
                </a>
              </div>
            </div>

            <div className="md:w-1/2 p-12">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Nombre Completo</label>
                  <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Correo Electrónico</label>
                  <input type="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Mensaje</label>
                  <textarea rows={4} className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all"></textarea>
                </div>
                <button className="w-full bg-white text-zinc-950 font-bold py-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-zinc-200 transition-all">
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
