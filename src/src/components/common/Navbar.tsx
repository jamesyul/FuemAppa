import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth.store'; // Ajusta la ruta según tu estructura

const Navbar: React.FC = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const { user, logout } = useAuthStore(); // Suponiendo que auth.store.ts tiene user y logout
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo y texto FUEM */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Link to="/">
              <img src="/logo.png" alt="FUEM Logo" className="h-8 w-auto" />
            </Link>
            <span className="text-gray-900 text-xl font-bold">FUEM</span>
          </div>

          {/* Enlaces y botones (mismo código que antes) */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/pieces" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Piezas
                </Link>
                {user.role === 'admin' && (
                  <Link to="/departments" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    Departamentos
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Iniciar Sesión
                </Link>
                <Link to="/signup" className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;