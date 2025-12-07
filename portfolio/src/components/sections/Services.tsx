// components/sections/Services.tsx (limpo)
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  FaGlobe,
  FaMobileAlt,
  FaServer,
  FaLaptopCode
} from 'react-icons/fa';

export default function Services() {
  const { language } = useLanguage();

  const services = [
    {
      id: 'web',
      icon: <FaGlobe className="w-10 h-10" />,
      title: language === 'pt' ? 'Desenvolvimento Web' : 'Web Development',
      description: language === 'pt'
        ? 'Crio sites e aplicações web modernas, rápidas e responsivas que funcionam perfeitamente em qualquer dispositivo.'
        : 'I create modern, fast, and responsive websites and web applications that work perfectly on any device.'
    },
    {
      id: 'mobile',
      icon: <FaMobileAlt className="w-10 h-10" />,
      title: language === 'pt' ? 'Aplicações Mobile' : 'Mobile Applications',
      description: language === 'pt'
        ? 'Desenvolvo apps para iOS e Android com interface limpa, performance otimizada e experiência fluida.'
        : 'I develop apps for iOS and Android with clean interface, optimized performance and fluid experience.'
    },
    {
      id: 'api',
      icon: <FaServer className="w-10 h-10" />,
      title: language === 'pt' ? 'APIs & Backend' : 'APIs & Backend',
      description: language === 'pt'
        ? 'Desenvolvimento de sistemas de backend completos, incluindo APIs, automações e integrações entre serviços.'
        : 'Development of complete backend systems, including APIs, automations, and integrations between services.'
    },
    {
      id: 'fullstack',
      icon: <FaLaptopCode className="w-10 h-10" />,
      title: language === 'pt' ? 'Soluções Full Stack' : 'Full Stack Solutions',
      description: language === 'pt'
        ? 'Entrego projetos completos que integram frontend, backend e banco de dados em uma solução coesa.'
        : 'I deliver complete projects integrating frontend, backend and database into a cohesive solution.'
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 bg-blue-500/10 text-blue-500 font-bold text-sm uppercase tracking-widest rounded-full mb-4"
          >
            {language === 'pt' ? 'SERVIÇOS' : 'SERVICES'}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-6 text-foreground"
          >
            {language === 'pt' ? 'Serviços' : 'Services'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl max-w-2xl mx-auto leading-relaxed text-foreground/70"
          >
            {language === 'pt' 
              ? 'Soluções completas desde a interface até a infraestrutura'
              : 'Complete solutions from interface to infrastructure'
            }
          </motion.p>
        </div>

        {/* Services Grid - Sem efeitos no card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl p-8 bg-background hover:border hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="p-4 rounded-xl bg-blue-500/10 text-blue-500 w-fit mb-6">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}