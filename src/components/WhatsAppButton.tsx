import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-300 transform ${
        isVisible 
          ? 'scale-100 opacity-100' 
          : 'scale-0 opacity-0'
      }`}
      style={{
        background: 'linear-gradient(135deg, #8a2be2 0%, #4169e1 100%)'
      }}
      aria-label="Contato via WhatsApp"
    >
      <MessageSquare size={28} className="text-white" />
    </a>
  );
};

export default WhatsAppButton;