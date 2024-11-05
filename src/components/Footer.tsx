import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">VACIADIX</h3>
            <p className="text-sm">
              Servicio profesional de vaciado de pisos en L'Hospitalet de Llobregat
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5"/>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Vaciado de Pisos</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Locales Comerciales</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Trasteros</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Garajes</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Útiles</h4>
            <ul className="space-y-2">
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">¿Por qué elegirnos?</a>
              </li>
              <li>
                <a href="#service-area" className="hover:text-white transition-colors">Zona de Servicio</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li>Carrer d'Enric Prat de la Riba, 08901 L'Hospitalet de Llobregat, Barcelona</li>
              <li>
                <a href="tel:+34690220944" className="hover:text-white transition-colors">690 22 09 44</a>
              </li>
              <li>
                <a href="mailto:info@vaciadix.es" className="hover:text-white transition-colors">info@vaciadix.es</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.4876874863673!2d2.0981661!3d41.3617246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498e7c61276c9%3A0x14f5d736e0154dd5!2sCarrer%20d&#39;Enric%20Prat%20de%20la%20Riba%2C%20L&#39;Hospitalet%20de%20Llobregat%2C%20Barcelona!5e0!3m2!1sen!2ses!4v1635959562834!5m2!1sen!2ses"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} VACIADIX. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}