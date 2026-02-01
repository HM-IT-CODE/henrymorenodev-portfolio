import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen relative bg-zinc-950 text-zinc-300">
            {/* Background patterns similar to main page */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-600/5 rounded-full blur-[120px]"></div>
            </div>

            {/* Navbar with solid background */}
            <Navbar isScrolled={true} />

            <div className="relative z-10 pt-32 pb-20 container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Política de Privacidad</h1>

                <div className="space-y-8 text-lg leading-relaxed">
                    <section>
                        <p className="mb-4">
                            Última actualización: {new Date().getFullYear()}
                        </p>
                        <p>
                            En <strong>HM AI Solutions</strong> (en adelante, "nosotros", "nuestro" o "la Empresa"), accesible desde <a href="https://www.henrymorenodev.xyz" className="text-blue-400 hover:underline">https://www.henrymorenodev.xyz</a>, la privacidad de nuestros visitantes es una de nuestras principales prioridades. Este documento de Política de Privacidad contiene tipos de información que recopilamos y registramos, y cómo la utilizamos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Información que recopilamos</h2>
                        <p className="mb-4">
                            Recopilamos información que usted nos proporciona voluntariamente cuando:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Se comunica con nosotros a través de nuestro formulario de contacto o correo electrónico.</li>
                            <li>Utiliza nuestros servicios de integración y automatización.</li>
                            <li>Interactúa con nuestras aplicaciones o bots (incluyendo integraciones con Telegram y Meta).</li>
                        </ul>
                        <p>
                            La información personal que se le solicita proporcionar (como nombre, correo electrónico, número de teléfono) y las razones por las que se le solicita, se le aclararán en el momento en que le pidamos que proporcione dicha información.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Cómo utilizamos su información</h2>
                        <p className="mb-4">
                            Utilizamos la información recopilada de varias formas, incluyendo para:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Proporcionar, operar y mantener nuestro sitio web y servicios.</li>
                            <li>Mejorar, personalizar y expandir nuestros servicios.</li>
                            <li>Comprender y analizar cómo utiliza nuestra web y aplicaciones.</li>
                            <li>Desarrollar nuevos productos, servicios, características y funcionalidades.</li>
                            <li>Comunicarnos con usted, directamente o a través de uno de nuestros socios, para servicio al cliente, actualizaciones y otra información relacionada con el sitio web.</li>
                            <li>Enviar correos electrónicos y mensajes relevantes.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Archivos de Registro (Log Files)</h2>
                        <p>
                            HM AI Solutions sigue un procedimiento estándar de uso de archivos de registro. Estos archivos registran a los visitantes cuando visitan sitios web o utilizan aplicaciones. La información recopilada por los archivos de registro incluye direcciones de protocolo de Internet (IP), tipo de navegador, proveedor de servicios de Internet (ISP), fecha y hora, páginas de referencia/salida y posiblemente el número de clics. Estos no están vinculados a ninguna información que sea personalmente identificable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Cumplimiento con Meta y Terceros</h2>
                        <p>
                            Nuestras aplicaciones pueden utilizar servicios de terceros (como Meta/Facebook, Telegram, OpenAI). Nos comprometemos a cumplir con las políticas de datos de estas plataformas. No vendemos, intercambiamos ni transferimos a terceros su información de identificación personal sin su consentimiento, excepto cuando sea necesario para proporcionar el servicio solicitado (ej. procesamiento de mensajes en bots).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Contacto</h2>
                        <p>
                            Si tiene preguntas adicionales o requiere más información sobre nuestra Política de Privacidad, no dude en contactarnos.
                        </p>
                        <p className="mt-4 font-semibold">
                            Correo electrónico: <a href="mailto:info@henrymorenodev.xyz" className="text-blue-400 hover:underline">info@henrymorenodev.xyz</a>
                        </p>
                        <p>
                            Dominio: henrymorenodev.xyz
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
