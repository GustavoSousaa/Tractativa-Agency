import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-gradient-to-br from-purple-50 to-blue-50 pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Transforme sua 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                {" "}presença digital{" "}
              </span>
              com a Tracttiva
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-lg">
              Estratégias personalizadas para impulsionar sua marca e alcançar resultados extraordinários no mundo digital.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-full hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                Fale Conosco
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a 
                href="#services" 
                className="px-8 py-3 bg-white text-gray-700 font-medium rounded-full border border-gray-200 hover:border-purple-500 transition-colors flex items-center justify-center"
              >
                Nossos Serviços
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-75"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Tracttiva Agency Team" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;