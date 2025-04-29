import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';
import { FormData } from '../types';



const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  // Create WhatsApp message with form data
  const getWhatsAppMessage = () => {
    const message = `Olá, sou ${formData.name}. ${formData.message}`;
    return encodeURIComponent(message);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Entre em <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Contato</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para transformar sua presença digital. Entre em contato e vamos conversar sobre seu projeto.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-25"></div>
            <div className="relative bg-white p-8 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Como podemos ajudar?"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className={`px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-full hover:opacity-90 transition-all flex items-center justify-center 
                      ${(isSubmitting || submitted) ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : submitted ? (
                      <>Enviado com Sucesso!</>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="ml-2" size={18} />
                      </>
                    )}
                  </button>

                  <a
                    href={`${WHATSAPP_URL}?text=${getWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-white text-gray-700 font-medium rounded-full border border-gray-200 hover:border-purple-500 transition-colors flex items-center justify-center"
                  >
                    <MessageSquare className="mr-2" size={18} />
                    WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Por que escolher a Tractiva?</h3>
              <p className="text-gray-600 mb-6">
                Na Tracttiva, entendemos que cada negócio é único. Nossa abordagem personalizada garante resultados tangíveis e sustentáveis para o crescimento do seu negócio.
              </p>
              <ul className="space-y-3">
                {[
                  "Estratégias personalizadas para suas necessidades",
                  "Equipe de especialistas dedicados ao seu projeto",
                  "Relatórios detalhados e transparência em todas as etapas",
                  "Resultados mensuráveis e foco em ROI"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;