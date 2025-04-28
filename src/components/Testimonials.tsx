import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
    );
  };

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-gradient-to-br from-purple-100 to-blue-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            O Que Nossos <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Clientes Dizem</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Confira o feedback de alguns dos nossos clientes satisfeitos com nossos serviços.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-purple-600 to-blue-500 p-3 rounded-full">
                <Quote size={24} className="text-white" />
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-75"></div>
                    <img 
                      src={TESTIMONIALS[activeIndex].image}
                      alt={TESTIMONIALS[activeIndex].name}
                      className="w-full h-full object-cover rounded-full relative"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3 md:pl-8">
                  <p className="text-xl text-gray-700 italic mb-6">
                    "{TESTIMONIALS[activeIndex].quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-xl">{TESTIMONIALS[activeIndex].name}</h4>
                    <p className="text-gray-600">
                      {TESTIMONIALS[activeIndex].role}, {TESTIMONIALS[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial} 
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-purple-600" />
              </button>
              <button 
                onClick={nextTestimonial} 
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-purple-600" />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-500' 
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;