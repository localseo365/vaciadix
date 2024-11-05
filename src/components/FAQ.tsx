import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Cuánto tiempo tardan en realizar el servicio?',
      answer: 'Ofrecemos servicio en el mismo día para la mayoría de los casos. El tiempo exacto dependerá del tamaño del espacio y la cantidad de elementos a vaciar. Realizamos una evaluación inicial para proporcionarle un tiempo estimado preciso.'
    },
    {
      question: '¿Qué hacen con los objetos retirados?',
      answer: 'Participamos en un programa de reciclaje integral. Clasificamos los materiales y aseguramos que sean reciclados o reutilizados cuando sea posible. Los elementos en buen estado son donados a organizaciones benéficas locales.'
    },
    {
      question: '¿Ofrecen servicio de emergencia?',
      answer: 'Sí, disponemos de servicio de emergencia 24/7. Para situaciones urgentes, puede contactarnos en cualquier momento y nos desplazaremos lo antes posible.'
    },
    {
      question: '¿Cuál es su área de servicio?',
      answer: 'Nuestra área principal de servicio es L\'Hospitalet de Llobregat y alrededores. Cubrimos todos los barrios de la ciudad y zonas cercanas. Consúltenos para confirmar si damos servicio en su ubicación específica.'
    },
    {
      question: '¿Cómo se calcula el precio del servicio?',
      answer: 'El precio se calcula en base a varios factores: tamaño del espacio, cantidad de elementos a retirar, tipo de materiales y accesibilidad. Realizamos una evaluación gratuita y proporcionamos un presupuesto detallado sin compromiso.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resolvemos sus dudas sobre nuestro servicio de vaciado
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left bg-white px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="bg-white px-6 py-4 rounded-b-lg shadow-sm mt-1">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};