// components/sections/Services.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { services } from '@/data/services';

export default function Services() {
  const { language } = useLanguage();

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

        {/* Services Grid - 3 cards (sem mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
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
                    <Icon className="w-10 h-10" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {service.title[language]}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description[language]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}