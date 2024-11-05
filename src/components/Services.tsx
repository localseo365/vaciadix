import React from 'react';
import { Truck, Building2, Warehouse, Car, Recycle } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="w-12 h-12 text-blue-600" />,
    title: "Vaciado de Pisos",
    description: "Servicio integral de vaciado y limpieza de viviendas. Realizamos la retirada completa de muebles, enseres y residuos, garantizando una gestión sostenible y eficiente. Nuestro equipo especializado se encarga de todo el proceso, desde la evaluación inicial hasta la limpieza final, asegurando un servicio rápido y profesional que cumple con todas las normativas locales de gestión de residuos.",
  },
  {
    icon: <Warehouse className="w-12 h-12 text-blue-600" />,
    title: "Vaciado de Locales Comerciales",
    description: "Especialistas en el desalojo y limpieza de espacios comerciales. Ofrecemos un servicio adaptado a las necesidades específicas de cada negocio, incluyendo la retirada de mobiliario comercial, equipamiento y materiales. Trabajamos de manera eficiente para minimizar el impacto en su actividad comercial, con opciones de servicio fuera del horario comercial.",
  },
  {
    icon: <Truck className="w-12 h-12 text-blue-600" />,
    title: "Vaciado de Trasteros",
    description: "Servicio especializado en la limpieza y organización de trasteros y espacios de almacenamiento. Nos encargamos de clasificar, retirar y gestionar todo tipo de objetos almacenados, ofreciendo soluciones para el reciclaje y la disposición responsable de materiales. Nuestro servicio incluye la documentación necesaria para la gestión de residuos especiales.",
  },
  {
    icon: <Car className="w-12 h-12 text-blue-600" />,
    title: "Vaciado de Garajes",
    description: "Servicio completo de limpieza y vaciado de garajes y espacios de aparcamiento. Realizamos la retirada de vehículos abandonados, neumáticos, aceites y otros residuos específicos del sector automotriz, cumpliendo con todas las regulaciones ambientales vigentes. Ofrecemos soluciones para comunidades de vecinos y parkings comerciales.",
  },
  {
    icon: <Recycle className="w-12 h-12 text-blue-600" />,
    title: "Gestión de Residuos",
    description: "Programa integral de reciclaje y gestión sostenible de residuos. Clasificamos y procesamos los materiales retirados siguiendo estrictos protocolos ambientales, maximizando el reciclaje y la reutilización. Proporcionamos certificados de gestión de residuos y garantizamos el cumplimiento de la normativa medioambiental de L'Hospitalet.",
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones profesionales y sostenibles para todo tipo de vaciados en L'Hospitalet de Llobregat y alrededores
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};