'use client';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { getProcessSteps } from '@/utils/process.utils';
import { Icons } from '@/utils/icons.utils';

export default function Process() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const steps = getProcessSteps();

  return (
    <section id="process" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center mb-8">
            <div className={`h-px w-12 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
            <span className={`mx-6 text-xs font-normal uppercase tracking-[0.2em] ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
            }`}>
              {language === 'pt' ? 'PROCESSO' : 'PROCESS'}
            </span>
            <div className={`h-px w-12 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
          </div>
          
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {language === 'pt' ? 'Como trabalho' : 'How I work'}
          </h2>
          
          <p className={`text-sm font-light leading-relaxed tracking-wide ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {language === 'pt' 
              ? 'Um fluxo claro e organizado para entregar resultados consistentes'
              : 'A clear and organized flow to deliver consistent results'
            }
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = Icons[step.icon as keyof typeof Icons];
            const isLast = index === steps.length - 1;
            
            return (
              <div key={step.id} className="relative">
                {/* Timeline line */}
                {!isLast && (
                  <div className={`absolute left-6 top-14 bottom-0 w-px ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
                  }`}></div>
                )}

                <div className="relative flex items-start mb-12 lg:mb-16">
                  {/* Number Circle */}
                  <div className={`relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-6 ${
                    theme === 'dark' 
                      ? 'bg-gray-800 border border-gray-700' 
                      : 'bg-white border border-gray-300'
                  }`}>
                    <span className={`text-lg font-normal ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {step.number}
                    </span>
                    
                    {/* Inner dot */}
                    <div className={`absolute w-3 h-3 rounded-full ${
                      theme === 'dark' ? 'bg-blue-500' : 'bg-blue-400'
                    }`}></div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className={`rounded-xl p-6 transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gray-900/30 hover:bg-gray-900/50'
                        : 'bg-white/80 hover:bg-white'
                    } backdrop-blur-sm border ${
                      theme === 'dark' 
                        ? 'border-gray-800/40 hover:border-gray-700/60' 
                        : 'border-gray-200/60 hover:border-gray-300/80'
                    }`}>
                      {/* Icon and Title Row */}
                      <div className="flex items-center mb-4">
                        {IconComponent && (
                          <div className={`p-2 rounded-lg mr-4 ${
                            theme === 'dark' 
                              ? 'bg-gray-800/50 text-gray-400' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                        )}
                        
                        <h3 className={`text-xl font-normal ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {step.title[language]}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className={`font-light leading-relaxed tracking-wide ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {step.description[language]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className={`text-sm font-light ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
          }`}>
            {language === 'pt' 
              ? 'Cada etapa é colaborativa e transparente'
              : 'Each step is collaborative and transparent'
            }
          </p>
        </div>
      </div>
    </section>
  );
}