// components/sections/Services.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  FaCode, 
  FaMobile, 
  FaServer, 
  FaCloud, 
  FaDatabase, 
  FaRocket 
} from 'react-icons/fa';

export default function Services() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const services = [
    {
      icon: <FaCode className="text-blue-500" size={40} />,
      title: language === 'pt' ? 'Desenvolvimento Web' : 'Web Development',
      description: language === 'pt'
        ? 'Criação de sites e aplicações web modernas, responsivas e de alta performance'
        : 'Creation of modern, responsive, and high-performance websites and web applications'
    },
    {
      icon: <FaMobile className="text-green-500" size={40} />,
      title: language === 'pt' ? 'Desenvolvimento Mobile' : 'Mobile Development',
      description: language === 'pt'
        ? 'Desenvolvimento de aplicativos nativos e híbridos para iOS e Android'
        : 'Development of native and hybrid apps for iOS and Android'
    },
    {
      icon: <FaServer className="text-purple-500" size={40} />,
      title: language === 'pt' ? 'Backend Development' : 'Backend Development',
      description: language === 'pt'
        ? 'APIs robustas e escaláveis usando as melhores tecnologias do mercado'
        : 'Robust and scalable APIs using the best market technologies'
    },
    {
      icon: <FaCloud className="text-cyan-500" size={40} />,
      title: language === 'pt' ? 'Cloud & DevOps' : 'Cloud & DevOps',
      description: language === 'pt'
        ? 'Deploy, monitoramento e infraestrutura em cloud com práticas DevOps'
        : 'Deployment, monitoring and cloud infrastructure with DevOps practices'
    },
    {
      icon: <FaDatabase className="text-orange-500" size={40} />,
      title: language === 'pt' ? 'Banco de Dados' : 'Database',
      description: language === 'pt'
        ? 'Design e otimização de bancos de dados relacionais e não relacionais'
        : 'Design and optimization of relational and non-relational databases'
    },
    {
      icon: <FaRocket className="text-red-500" size={40} />,
      title: language === 'pt' ? 'Consultoria Tech' : 'Tech Consulting',
      description: language === 'pt'
        ? 'Consultoria especializada para escolha das melhores tecnologias para seu projeto'
        : 'Specialized consulting for choosing the best technologies for your project'
    }
  ];

  return (
    <section 
      id="services" 
      className="py-16 lg:py-20 transition-all duration-300"
      style={{
        backgroundColor: 'var(--background)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-3 block">
            {language === 'pt' ? 'SERVIÇOS' : 'SERVICES'}
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {language === 'pt' ? 'O Que Eu Faço' : 'What I Do'}
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {language === 'pt' 
              ? 'Serviços completos de desenvolvimento para transformar suas ideias em realidade'
              : 'Complete development services to turn your ideas into reality'
            }
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500'
                  : 'bg-white/80 border-gray-200 hover:border-blue-500'
              } shadow-lg`}
            >
              {/* Service Icon */}
              <div className="mb-6">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className={`text-xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {service.title}
              </h3>

              {/* Service Description */}
              <p className={`leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}