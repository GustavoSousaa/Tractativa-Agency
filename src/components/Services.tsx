import React from 'react';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  // Function to dynamically get icons from lucide-react
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
    
    if (IconComponent) {
      return <IconComponent size={48} className="text-purple-600" />;
    }
    
    // Fallback icon
    return <LucideIcons.LayoutGrid size={48} className="text-purple-600" />;
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nossos <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Serviços</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas para impulsionar o crescimento da sua empresa no ambiente digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group hover:border-purple-200"
            >
              <div className="mb-6">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-full hover:opacity-90 transition-opacity inline-flex items-center"
          >
            Solicite um Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;