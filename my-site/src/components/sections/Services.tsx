'use client';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { getServices } from '@/utils/services.utils';
import { Icons } from '@/utils/icons.utils';

export default function Services() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const services = getServices();

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Ajustes finais */}
        <div className="text-center mb-16 lg:mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center mb-8">
            <div className={`h-px w-12 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
            <span className={`mx-6 text-xs font-normal uppercase tracking-[0.2em] ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
            }`}>
              {language === 'pt' ? 'SERVIÇOS' : 'SERVICES'}
            </span>
            <div className={`h-px w-12 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
          </div>
          
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {language === 'pt' ? 'O que faço' : 'What I do'}
          </h2>
          
          {/* PARÁGRAFO COM 14px e font-light */}
          <p className={`text-sm font-light leading-relaxed tracking-wide ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {language === 'pt' 
              ? 'Foco em soluções que entregam resultado desde o primeiro pixel'
              : 'Focus on solutions that deliver results from the first pixel'
            }
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons];
            
            return (
              <div
                key={service.id}
                className={`group relative rounded-xl transition-all duration-500 ${
                  theme === 'dark'
                    ? 'bg-gray-900/30 hover:bg-gray-900/50'
                    : 'bg-white/80 hover:bg-white'
                } backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'border-gray-800/40 hover:border-gray-700/60' 
                    : 'border-gray-200/60 hover:border-gray-300/80'
                }`}
              >
                {/* Card Content */}
                <div className="p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-10">
                    <div className={`relative w-12 h-12 rounded-lg flex items-center justify-center ${
                      theme === 'dark'
                        ? 'bg-gray-800/30'
                        : 'bg-gray-100/80'
                    } transition-all duration-500 group-hover:bg-gray-800/50 dark:group-hover:bg-gray-800/70`}>
                      {IconComponent && (
                        <IconComponent className={`w-6 h-6 relative z-10 transition-all duration-500 ${
                          theme === 'dark' 
                            ? 'text-gray-400 group-hover:text-gray-300' 
                            : 'text-gray-500 group-hover:text-gray-700'
                        }`} />
                      )}
                    </div>
                  </div>

                  {/* Title - font-normal */}
                  <h3 className={`text-2xl font-normal mb-4 tracking-tight ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title[language]}
                  </h3>

                  {/* Description - font-light */}
                  <p className={`flex-grow leading-relaxed tracking-wide font-light mb-10 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {service.description[language]}
                  </p>

                  {/* Bottom Indicator */}
                  <div className="mt-auto pt-8 border-t border-gray-800/20 dark:border-gray-700/30">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-light tracking-wider ${
                        theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                      }`}>
                        0{index + 1}
                      </span>
                      
                      <div className="flex items-center space-x-1.5">
                        <span className={`text-xs font-light tracking-wide ${
                          theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                          {language === 'pt' ? 'ativo' : 'active'}
                        </span>
                        <div className="relative">
                          <div className={`w-1.5 h-1.5 rounded-full bg-blue-500/80 animate-pulse`}></div>
                          <div className={`absolute inset-0 w-1.5 h-1.5 rounded-full bg-blue-500/30 animate-ping`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-blue-500/5 to-transparent' 
                    : 'bg-gradient-to-br from-blue-400/5 to-transparent'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Separator */}
        <div className="mt-20 max-w-md mx-auto">
          <div className={`h-px ${
            theme === 'dark' ? 'bg-gradient-to-r from-transparent via-gray-800 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'
          }`}></div>
        </div>
      </div>
    </section>
  );
}