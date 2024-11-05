import React from 'react';
import { ArrowRight, Recycle, Clock, Trophy } from 'lucide-react';

export const Hero = () => {
  return (
    <div id="home" className="pt-16">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-green-600/90 z-10" />
        <div
          className="h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80')"
          }}
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Servicio profesional de vaciado de pisos en Hospitalet de Llobregat
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Expertos en vaciado de pisos, locales y trasteros en L'Hospitalet de Llobregat. 
              Servicio rápido, eficiente y sostenible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
              >
                Solicitar Presupuesto
                <ArrowRight size={20} />
              </a>
              <a
                href="tel:+34690220944"
                className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Servicio 24/7</h3>
                <p className="text-gray-600">Respuesta de emergencia</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Recycle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">100% Sostenible</h3>
                <p className="text-gray-600">Compromiso ecológico</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Trophy className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Garantía Total</h3>
                <p className="text-gray-600">Servicio profesional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};