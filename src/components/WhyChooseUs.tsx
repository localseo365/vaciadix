import React from 'react';
import { Clock, Leaf, Shield, MapPin, BadgeEuro } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Servicio en el mismo día',
      description: 'Respuesta rápida y eficiente para sus necesidades urgentes'
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Programa de reciclaje',
      description: 'Compromiso con el medio ambiente y gestión sostenible'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Servicio 24h',
      description: 'Disponibles para emergencias las 24 horas del día'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Cobertura local',
      description: 'Servicio especializado en L\'Hospitalet de Llobregat'
    },
    {
      icon: <BadgeEuro className="w-6 h-6" />,
      title: 'Precios Personalizados',
      description: 'Presupuestos adaptados a cada proyecto'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nos distinguimos por nuestra profesionalidad, eficiencia y compromiso con el cliente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;