import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  TrendingUp, 
  Search, 
  BarChart3, 
  Target, 
  Zap, 
  Shield, 
  Users, 
  Activity,
  Settings,
  LogOut,
  Home,
  Menu,
  X
} from 'lucide-react';

interface Props {
  userType: 'admin' | 'user';
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<Props> = ({ userType, isOpen = true, onClose }) => {
  const location = useLocation();

  const adminMenuItems = [
    { name: 'Dashboard', icon: Home, path: '/admin/dashboard', section: 'overview' },
    { name: 'User Management', icon: Users, path: '/admin/dashboard', section: 'users' },
    { name: 'Stock Screener', icon: Search, path: '/admin/dashboard', section: 'screener' },
    { name: 'Fundamentals', icon: BarChart3, path: '/admin/dashboard', section: 'fundamentals' },
    { name: 'Technical Levels', icon: Activity, path: '/admin/dashboard', section: 'technical' },
    { name: 'Options Validator', icon: Target, path: '/admin/dashboard', section: 'options' },
    { name: 'Recommendations', icon: Zap, path: '/admin/dashboard', section: 'recommendations' },
    { name: 'Audit Trail', icon: Shield, path: '/admin/dashboard', section: 'audit' },
  ];

  const userMenuItems = [
    { name: 'Dashboard', icon: Home, path: '/user/dashboard', section: 'overview' },
    { name: 'My Watchlist', icon: TrendingUp, path: '/user/dashboard', section: 'watchlist' },
    { name: 'Stock Screener', icon: Search, path: '/user/dashboard', section: 'screener' },
    { name: 'Fundamentals', icon: BarChart3, path: '/user/dashboard', section: 'fundamentals' },
    { name: 'Technical Levels', icon: Activity, path: '/user/dashboard', section: 'technical' },
    { name: 'Options', icon: Target, path: '/user/dashboard', section: 'options' },
    { name: 'Recommendations', icon: Zap, path: '/user/dashboard', section: 'recommendations' },
  ];

  const menuItems = userType === 'admin' ? adminMenuItems : userMenuItems;

  const handleSectionChange = (section: string) => {
    window.dispatchEvent(new CustomEvent('sectionChange', { detail: section }));
    // Close mobile menu when item is selected
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && onClose && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        bg-gray-800 border-r border-gray-700 min-h-screen flex flex-col transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        fixed lg:relative lg:translate-x-0 z-50 lg:z-auto
        w-64 lg:w-64
      `}>
        {/* Logo */}
        <div className="p-4 lg:p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-green-400 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  BluChip
                </span>
                <div className="text-xs text-gray-400 capitalize">{userType} Portal</div>
              </div>
            </div>
            {/* Mobile close button */}
            {onClose && (
              <button
                onClick={onClose}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.section}
                  onClick={() => handleSectionChange(item.section)}
                  className="w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 group"
                >
                  <Icon className="h-5 w-5 group-hover:text-blue-400 transition-colors duration-200" />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-700">
          <div className="space-y-2">
            <button className="w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 group">
              <Settings className="h-5 w-5 group-hover:text-blue-400 transition-colors duration-200" />
              <span className="font-medium">Settings</span>
            </button>
            <Link
              to="/"
              className="w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 group"
            >
              <LogOut className="h-5 w-5 group-hover:text-red-400 transition-colors duration-200" />
              <span className="font-medium">Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;