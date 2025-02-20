import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo (ahora como imagen) */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src="/logo.png" alt="attio logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Enlaces y botones (el resto permanece igual) */}
          <div className="flex items-center space-x-4">
            <Link to="/platform" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Platform
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Resources
              </button>
              {isResourcesOpen && (
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <a href="/help-center" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Help center
                  </a>
                  <a href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Blog
                  </a>
                  <a href="/academy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Academy
                  </a>
                  <a href="/templates" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Templates
                  </a>
                  <a href="/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Careers
                  </a>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setIsInsightsOpen(!isInsightsOpen)}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Insights
              </button>
              {isInsightsOpen && (
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <a href="/crm" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    CRM
                  </a>
                </div>
              )}
            </div>
            <Link to="/customers" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Customers
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Pricing
            </Link>

            <Link
              to="/signin"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;