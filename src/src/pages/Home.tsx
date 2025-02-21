import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Sección principal */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          FUEM Racing Team: La Fórmula de la Victoria
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
          Construimos coches de Fórmula 1 desde cero, competimos con universidades globales y buscamos talento e innovación. ¡Acelera con nosotros!
        </p>
        <div className="space-x-4">
          <Link
            to="/signup" // Podrías redirigir a una página de registro para el equipo o patrocinios
            className="bg-black text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-800"
          >
            Únete al equipo
          </Link>
          <Link
            to="/contact" // O a una página de contacto para patrocinadores o colaboraciones
            className="border border-gray-300 text-gray-900 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-100"
          >
            Contacta con nosotros
          </Link>
        </div>
      </div>

      {/* Barra inferior con íconos (ajustada) */}
      <div className="mt-12 flex space-x-4 text-gray-500">
        <span>Innovación</span>
        <span>Competencia</span>
        <span>Tecnología</span>
      </div>
    </div>
  );
};

export default Home;