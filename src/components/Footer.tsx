import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white rounded-full p-1">
                <Image 
                  src="/logo.svg" 
                  alt="Logo Empresarial" 
                  width={32} 
                  height={32} 
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-bold">Mi Empresa</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ofrecemos soluciones innovadoras para su negocio con la mejor tecnología y servicio personalizado.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#" icon="facebook" />
              <SocialIcon href="#" icon="twitter" />
              <SocialIcon href="#" icon="linkedin" />
              <SocialIcon href="#" icon="instagram" />
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h4 className="text-lg font-semibold mb-5 border-b border-gray-700 pb-2">Enlaces rápidos</h4>
            <ul className="space-y-3">
              <FooterLink href="/">Inicio</FooterLink>
              <FooterLink href="/servicios">Servicios</FooterLink>
              <FooterLink href="/nosotros">Nosotros</FooterLink>
              <FooterLink href="/contacto">Contacto</FooterLink>
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h4 className="text-lg font-semibold mb-5 border-b border-gray-700 pb-2">Servicios</h4>
            <ul className="space-y-3">
              <FooterLink href="/servicios#consultoria">Consultoría</FooterLink>
              <FooterLink href="/servicios#desarrollo">Desarrollo Web</FooterLink>
              <FooterLink href="/servicios#marketing">Marketing Digital</FooterLink>
              <FooterLink href="/servicios#soporte">Soporte Técnico</FooterLink>
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h4 className="text-lg font-semibold mb-5 border-b border-gray-700 pb-2">Contacto</h4>
            <address className="not-italic text-gray-300 space-y-3">
              <ContactItem icon="location">
                Calle Principal 123<br />
                Ciudad, CP 12345
              </ContactItem>
              <ContactItem icon="email">
                info@miempresa.com
              </ContactItem>
              <ContactItem icon="phone">
                +34 123 456 789
              </ContactItem>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacidad" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Política de Privacidad</Link>
            <Link href="/terminos" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Términos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Componente para enlaces del footer
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
      >
        <span className="w-0 h-0.5 bg-primary-500 transition-all duration-300 mr-0 group-hover:w-2 group-hover:mr-2"></span>
        {children}
      </Link>
    </li>
  );
}

// Componente para iconos sociales
function SocialIcon({ href, icon }: { href: string; icon: 'facebook' | 'twitter' | 'linkedin' | 'instagram' }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
      aria-label={icon}
    >
      {icon === 'facebook' && (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      )}
      {icon === 'twitter' && (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      )}
      {icon === 'linkedin' && (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      )}
      {icon === 'instagram' && (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )}
    </a>
  );
}

// Componente para elementos de contacto
function ContactItem({ icon, children }: { icon: 'location' | 'email' | 'phone'; children: React.ReactNode }) {
  return (
    <div className="flex items-start">
      <div className="mr-3 mt-1 text-primary-400">
        {icon === 'location' && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )}
        {icon === 'email' && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )}
        {icon === 'phone' && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}