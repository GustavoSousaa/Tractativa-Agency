import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { NAV_ITEMS, WHATSAPP_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              Tractativa Agency
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-5 py-2 rounded-full flex items-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <MessageSquare size={18} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-5 py-2 rounded-full flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                <MessageSquare size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;