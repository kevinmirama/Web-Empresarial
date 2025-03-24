'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-soft' : 'bg-white shadow-md'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
            <Image 
            src="/fondo.jpg" 
            alt="Logo Empresarial" 
            width={40} 
            height={40} 
            className="w-10 h-10 object-cover rounded-full"
          />
          </div>
          <span className="text-xl font-bold text-primary-800 transition-colors duration-300 group-hover:text-primary-600">Mi Empresa</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/servicios">Servicios</NavLink>
          <NavLink href="/nosotros">Nosotros</NavLink>
          <NavLink href="/contacto">Contacto</NavLink>
        </nav>
        
        <div className="md:hidden">
          <button 
            className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menú"
          >
            {!isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-4 py-3 space-y-1 bg-gray-50 shadow-inner">
            <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Inicio</MobileNavLink>
            <MobileNavLink href="/servicios" onClick={() => setIsOpen(false)}>Servicios</MobileNavLink>
            <MobileNavLink href="/nosotros" onClick={() => setIsOpen(false)}>Nosotros</MobileNavLink>
            <MobileNavLink href="/contacto" onClick={() => setIsOpen(false)}>Contacto</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
}

// Componente para enlaces de navegación desktop
function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="relative text-gray-600 hover:text-primary-600 font-medium transition-colors duration-300 py-2 group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

// Componente para enlaces de navegación móvil
function MobileNavLink({ href, children, onClick }: { href: string, children: React.ReactNode, onClick: () => void }) {
  return (
    <Link 
      href={href} 
      className="block py-2 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition-colors duration-200"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}