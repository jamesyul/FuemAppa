import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Sección principal */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Customer relationship magic.
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Attio is the AI-native CRM that builds, scales, and grows your company to the next level.
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-black text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-800"
          >
           Log in
          </Link>
          <Link
            to="/signup"
            className="border border-gray-300 text-gray-900 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-100"
          >
            Sign in
          </Link>
        </div>
      </div>

      {/* Barra inferior con íconos */}
      <div className="mt-12 flex space-x-4 text-gray-500">
        <span>Data</span>
        <span>Automations</span>
        <span>Pipeline</span>
        <span>Productivity</span>
        <span>Reporting</span>
      </div>
    </div>
  );
};

export default Home;