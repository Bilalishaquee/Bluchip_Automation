import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-green-400 rounded-lg group-hover:scale-110 transition-transform duration-200">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              BluChip
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive('/') 
                    ? 'text-blue-400 bg-blue-500/10' 
                    : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/5'
                }`}
              >
                Home
              </Link>
              <Link
                to="/admin/login"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive('/admin/login') 
                    ? 'text-blue-400 bg-blue-500/10' 
                    : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/5'
                }`}
              >
                Admin
              </Link>
              <Link
                to="/user/login"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive('/user/login') 
                    ? 'text-blue-400 bg-blue-500/10' 
                    : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/5'
                }`}
              >
                User Login
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/50 rounded-lg mt-2">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/') 
                    ? 'text-blue-400 bg-blue-500/10' 
                    : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/admin/login"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/admin/login') 
                    ? 'text-blue-400 bg-blue-500/10' 
                    : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Admin
              </Link>
              <Link
                to="/user/login"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/user/login') 
                    ? 'text-blue-400 bg-blue-500/10' 
                    : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                User Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;