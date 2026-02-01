import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TermsPage() {
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
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Términos y Condiciones</h1>

                <div className="space-y-8 text-lg leading-relaxed">
                    <section>
                        <p className="mb-4">
                            Última actualización: {new Date().getFullYear()}
                        </p>
                        <p>
                            Bienvenido a <strong>HM AI Solutions</strong>. Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de Henry Moreno y sus servicios asociados, ubicado en <a href="https://www.henrymorenodev.xyz" className="text-blue-400 hover:underline">https://www.henrymorenodev.xyz</a>.
                        </p>
                        <p className="mt-2">
                            Al acceder a este sitio web asumimos que acepta estos términos y condiciones. No continúe utilizando HM AI Solutions si no está de acuerdo con todos los términos y condiciones establecidos en esta página.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Licencia y Uso</h2>
                        <p className="mb-4">
                            A menos que se indique lo contrario, Henry Moreno y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en HM AI Solutions. Todos los derechos de propiedad intelectual están reservados. Puede acceder a esto desde HM AI Solutions para su uso personal sujeto a las restricciones establecidas en estos términos y condiciones.
                        </p>
                        <p>
                            No debe:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Republicar material de HM AI Solutions sin atribución.</li>
                            <li>Vender, alquilar o sublicenciar material de HM AI Solutions.</li>
                            <li>Reproducir, duplicar o copiar material de HM AI Solutions con fines comerciales no autorizados.</li>
                            <li>Redistribuir contenido de HM AI Solutions a menos que el contenido se haga específicamente para la redistribución.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Responsabilidad del Contenido</h2>
                        <p>
                            No seremos responsables de ningún contenido que aparezca en su aplicación o sitio web en relación con nuestros servicios, salvo acuerdo contractual específico. Usted acepta protegernos y defendernos contra todas las reclamaciones que surjan en su sitio web o aplicación.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Renuncia de Garantías</h2>
                        <p>
                            Este sitio web y sus servicios se proporcionan "tal cual", con todos los fallos, y Henry Moreno no expresa representaciones ni garantías de ningún tipo relacionadas con este sitio web o los materiales contenidos en este sitio web. Nada de lo contenido en este sitio web se interpretará como un asesoramiento para usted, a menos que se trate de una consultoría formalmente contratada.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Limitación de Responsabilidad</h2>
                        <p>
                            En ningún caso Henry Moreno, ni ninguno de sus funcionarios, directores y empleados, serán responsables de nada que surja de o esté relacionado de alguna manera con su uso de este sitio web, ya sea que dicha responsabilidad sea contractual. Henry Moreno, incluidos sus funcionarios, directores y empleados, no serán responsables de ninguna responsabilidad indirecta, consecuente o especial que surja de o esté relacionada de alguna manera con su uso de este sitio web.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Ley Gobernantes</h2>
                        <p>
                            Estos Términos se regirán e interpretarán de acuerdo con las leyes de la República Bolivariana de Venezuela, y usted se somete a la jurisdicción no exclusiva de los tribunales estatales y federales ubicados en Venezuela para la resolución de cualquier disputa.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Contacto</h2>
                        <p>
                            Si tiene alguna pregunta sobre estos Términos, comuníquese con nosotros:
                        </p>
                        <p className="mt-4 font-semibold">
                            Correo electrónico: <a href="mailto:info@henrymorenodev.xyz" className="text-blue-400 hover:underline">info@henrymorenodev.xyz</a>
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
