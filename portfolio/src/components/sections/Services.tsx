// components/sections/Services.tsx (atualizado)
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  FaCode, 
  FaServer, 
  FaRobot
} from 'react-icons/fa';
import WebDevelopmentModal from '@/components/modals/WebDevelopmentModal';
import BackendModal from '@/components/modals/BackendModal';
import AutomationModal from '@/components/modals/AutomationModal';

export default function Services() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'web',
      icon: <FaCode size={32} />,
      title: language === 'pt' ? 'Desenvolvimento Web' : 'Web Development',
      description: language === 'pt'
        ? 'Criação de sites e aplicações web modernas, responsivas e de alta performance.'
        : 'Creation of modern, responsive, and high-performance websites and web applications.'
    },
    {
      id: 'api',
      icon: <FaServer size={32} />,
      title: language === 'pt' ? 'API & Backend' : 'API & Backend',
      description: language === 'pt'
        ? 'Desenvolvimento de APIs robustas e escaláveis para suas aplicações.'
        : 'Development of robust and scalable APIs for your applications.'
    },
    {
      id: 'automation',
      icon: <FaRobot size={32} />,
      title: language === 'pt' ? 'Automação' : 'Automation',
      description: language === 'pt'
        ? 'Automação de processos e fluxos de trabalho para aumentar produtividade.'
        : 'Automation of processes and workflows to increase productivity.'
    }
  ];

  const handleExploreClick = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <section 
      id="services" 
      className="py-20 lg:py-28 transition-all duration-300"
      style={{
        backgroundColor: 'var(--background)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-4 block"
          >
            {language === 'pt' ? 'SERVIÇOS' : 'SERVICES'}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {language === 'pt' ? 'O Que Eu Faço' : 'What I Do'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {language === 'pt' 
              ? 'Serviços completos de desenvolvimento para transformar suas ideias em realidade'
              : 'Complete development services to turn your ideas into reality'
            }
          </motion.p>
        </div>

        {/* Services Grid - Cards estilo imagem */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`group relative rounded-xl p-8 transition-all duration-300 hover:shadow-lg ${
                theme === 'dark'
                  ? 'bg-gray-800/40 hover:bg-gray-800/60'
                  : 'bg-white hover:bg-gray-50'
              } border ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
              }`}
            >
              {/* Content */}
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className={`mb-6 p-3 rounded-lg inline-flex ${
                  service.id === 'web' ? 'bg-blue-500/10 text-blue-500' :
                  service.id === 'api' ? 'bg-green-500/10 text-green-500' :
                  'bg-purple-500/10 text-purple-500'
                }`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`leading-relaxed mb-6 flex-grow ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>

                {/* Explore Button - Estilo da imagem */}
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <motion.button
                    onClick={() => handleExploreClick(service.id)}
                    className={`group inline-flex items-center font-medium text-sm transition-all duration-300 cursor-pointer ${
                      theme === 'dark' 
                        ? 'text-blue-400 hover:text-blue-300' 
                        : 'text-blue-600 hover:text-blue-500'
                    }`}
                    whileHover={{ x: 3 }}
                  >
                    <span className="mr-2">
                      {language === 'pt' ? 'Explorar' : 'Explore'}
                    </span>
                    <motion.span
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {selectedService === 'web' && (
        <WebDevelopmentModal onClose={handleCloseModal} />
      )}
      {selectedService === 'api' && (
        <BackendModal onClose={handleCloseModal} />
      )}
      {selectedService === 'automation' && (
        <AutomationModal onClose={handleCloseModal} />
      )}
    </section>
  );
}