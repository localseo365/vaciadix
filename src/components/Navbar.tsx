import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Inicio', href: '#home' },
    { title: 'Servicios', href: '#services' },
    { title: '¿Por qué elegirnos?', href: '#why-us' },
    { title: 'Zona de Servicio', href: '#service-area' },
    { title: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">VACIADIX</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.title}
              </a>
            ))}
            <a
              href="tel:+34690220944"
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <PhoneCall size={18} />
              <span>690 22 09 44</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};