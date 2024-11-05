import React, { useState, useEffect } from 'react';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left">
          Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar navegando, acepta nuestra política de cookies.
        </p>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Aceptar
          </button>
          <a
            href="#"
            className="text-sm text-gray-300 hover:text-white transition-colors whitespace-nowrap"
          >
            Más información
          </a>
        </div>
      </div>
    </div>
  );
};