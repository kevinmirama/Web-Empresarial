import Link from 'next/link';

export default function Nosotros() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Sobre Nosotros</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
          Somos un equipo de profesionales apasionados por la tecnología y comprometidos con el éxito de nuestros clientes.
        </p>
        
        {/* Historia */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestra Historia</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <p className="text-lg mb-4">
                  Fundada en 2010, Mi Empresa nació con la visión de transformar la manera en que las empresas utilizan la tecnología para crecer y prosperar.
                </p>
                <p className="text-lg mb-4">
                  Lo que comenzó como un pequeño equipo de consultores tecnológicos se ha convertido en una empresa líder en soluciones digitales integrales, ayudando a cientos de clientes a alcanzar sus objetivos empresariales.
                </p>
                <p className="text-lg">
                  A lo largo de nuestra trayectoria, hemos mantenido nuestro compromiso con la innovación, la calidad y el servicio personalizado, adaptándonos constantemente a las nuevas tecnologías y tendencias del mercado.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="bg-blue-100 p-6 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Misión, Visión y Valores */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Misión, Visión y Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Misión</h3>
              <p className="text-lg">
                Proporcionar soluciones tecnológicas innovadoras que impulsen el crecimiento y la eficiencia de nuestros clientes, superando sus expectativas con un servicio de excelencia.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-800">Visión</h3>
              <p className="text-lg">
                Ser reconocidos como líderes en la transformación digital de empresas, creando un impacto positivo en la sociedad a través de la tecnología.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-800">Valores</h3>
              <ul className="text-lg space-y-2">
                <li>• Innovación constante</li>
                <li>• Excelencia en el servicio</li>
                <li>• Integridad y transparencia</li>
                <li>• Trabajo en equipo</li>
                <li>• Compromiso con los resultados</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Equipo */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Miembro 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-1">Ana García</h3>
              <p className="text-blue-600 mb-3">CEO & Fundadora</p>
              <p className="text-gray-600 mb-4">
                Más de 15 años de experiencia en consultoría tecnológica y gestión de proyectos.
              </p>
            </div>
            
            {/* Miembro 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-1">Carlos Rodríguez</h3>
              <p className="text-blue-600 mb-3">Director Técnico</p>
              <p className="text-gray-600 mb-4">
                Especialista en desarrollo de software y arquitectura de sistemas.
              </p>
            </div>
            
            {/* Miembro 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-1">Laura Martínez</h3>
              <p className="text-blue-600 mb-3">Directora de Marketing</p>
              <p className="text-gray-600 mb-4">
                Experta en estrategias de marketing digital y análisis de datos.
              </p>
            </div>
            
            {/* Miembro 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-1">Miguel Sánchez</h3>
              <p className="text-blue-600 mb-3">Director de Operaciones</p>
              <p className="text-gray-600 mb-4">
                Especializado en optimización de procesos y gestión de equipos.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-blue-700 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">¿Quieres formar parte de nuestro equipo?</h2>
          <p className="text-lg mb-6">Estamos siempre en búsqueda de talento apasionado por la tecnología y la innovación.</p>
          <Link href="/contacto" className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg inline-block">
            Enviar CV
          </Link>
        </div>
      </div>
    </div>
  );
}