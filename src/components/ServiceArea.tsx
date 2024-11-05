import React from 'react';
import { MapPin } from 'lucide-react';

export const ServiceArea = () => {
  return (
    <section id="service-area" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Zona de Servicio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Servicio especializado en L'Hospitalet de Llobregat y alrededores
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold">Áreas de Cobertura</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>L'Hospitalet de Llobregat (Sede principal)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>Santa Eulàlia</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>La Torrassa</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>Collblanc</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>La Florida</span>
            </li>
          </ul>
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              ¿No está seguro si damos servicio en su zona? Contáctenos y le informaremos sin compromiso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};