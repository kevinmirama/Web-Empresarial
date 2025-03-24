import Link from 'next/link';

export default function Servicios() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Nuestros Servicios</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
          Ofrecemos soluciones integrales adaptadas a las necesidades específicas de tu empresa.
        </p>
        
        {/* Servicio: Consultoría */}
        <div id="consultoria" className="mb-20 scroll-mt-20">
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4 text-blue-800">Consultoría Tecnológica</h2>
                <p className="text-lg mb-4">
                  Nuestro equipo de expertos analiza tu negocio para identificar oportunidades de mejora y optimización mediante el uso de tecnologías adecuadas.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Análisis de procesos empresariales</li>
                  <li>Evaluación de infraestructura tecnológica</li>
                  <li>Planificación estratégica de TI</li>
                  <li>Optimización de recursos tecnológicos</li>
                  <li>Implementación de soluciones a medida</li>
                </ul>
                <Link href="/contacto" className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-6 rounded-lg inline-block">
                  Solicitar consultoría
                </Link>
              </div>
              <div className="md:w-1/3 flex items-center justify-center">
                <div className="bg-blue-100 p-6 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Servicio: Desarrollo Web */}
        <div id="desarrollo" className="mb-20 scroll-mt-20">
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex items-center justify-center order-2 md:order-1">
                <div className="bg-green-100 p-6 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3 order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4 text-green-800">Desarrollo Web</h2>
                <p className="text-lg mb-4">
                  Diseñamos y desarrollamos sitios web y aplicaciones a medida, con enfoque en la experiencia de usuario y optimizados para buscadores.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Diseño web responsive</li>
                  <li>Desarrollo de tiendas online</li>
                  <li>Aplicaciones web progresivas (PWA)</li>
                  <li>Optimización SEO</li>
                  <li>Mantenimiento y soporte técnico</li>
                </ul>
                <Link href="/contacto" className="bg-green-600 text-white hover:bg-green-700 font-bold py-2 px-6 rounded-lg inline-block">
                  Solicitar presupuesto
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Servicio: Marketing Digital */}
        <div id="marketing" className="mb-20 scroll-mt-20">
          <div className="bg-purple-50 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4 text-purple-800">Marketing Digital</h2>
                <p className="text-lg mb-4">
                  Implementamos estrategias de marketing digital efectivas para aumentar la visibilidad de tu marca y generar más conversiones.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Gestión de redes sociales</li>
                  <li>Campañas de publicidad online</li>
                  <li>Email marketing</li>
                  <li>Estrategias de contenido</li>
                  <li>Análisis y reportes de resultados</li>
                </ul>
                <Link href="/contacto" className="bg-purple-600 text-white hover:bg-purple-700 font-bold py-2 px-6 rounded-lg inline-block">
                  Impulsar mi marca
                </Link>
              </div>
              <div className="md:w-1/3 flex items-center justify-center">
                <div className="bg-purple-100 p-6 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Servicio: Soporte Técnico */}
        <div id="soporte" className="mb-20 scroll-mt-20">
          <div className="bg-orange-50 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex items-center justify-center order-2 md:order-1">
                <div className="bg-orange-100 p-6 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3 order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4 text-orange-800">Soporte Técnico</h2>
                <p className="text-lg mb-4">
                  Ofrecemos servicios de soporte técnico para mantener tu infraestructura tecnológica funcionando de manera óptima.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Soporte técnico remoto y presencial</li>
                  <li>Mantenimiento preventivo y correctivo</li>
                  <li>Gestión de servidores y redes</li>
                  <li>Copias de seguridad y recuperación de datos</li>
                  <li>Seguridad informática</li>
                </ul>
                <Link href="/contacto" className="bg-orange-600 text-white hover:bg-orange-700 font-bold py-2 px-6 rounded-lg inline-block">
                  Contratar soporte
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-gray-100 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas un servicio personalizado?</h2>
          <p className="text-lg mb-6">Contáctanos para discutir tus necesidades específicas y crear una solución a medida para tu empresa.</p>
          <Link href="/contacto" className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-lg inline-block">
            Contactar ahora
          </Link>
        </div>
      </div>
    </div>
  );
}