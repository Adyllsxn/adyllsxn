// components/sections/Hero.tsx
'use client';
import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getHeroData } from '@/utils/hero.utils';

export default function Hero() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [photoLoaded, setPhotoLoaded] = useState(false);
  
  const hero = getHeroData(language);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 lg:py-0">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className={`text-center lg:text-left flex-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight">
              {hero.name.split(' ')[0]}<br />
              <span className="font-normal">{hero.name.split(' ')[1]}</span>
            </h1>

            {/* Title */}
            <h2 className="text-[15px] uppercase tracking-widest mb-6 opacity-80 font-normal">
              {hero.title}
            </h2>

            {/* Description */}
            <p className={`text-[13px] mb-12 max-w-2xl leading-relaxed tracking-wide ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            } font-light`}>
              {hero.description}
            </p>
            
            {/* CTA Buttons - SETAS QUE VIRAM PARA BAIXO NO HOVER */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start items-start">
              
              {/* Botão Primário */}
              <a 
                href="#contact" 
                className="group relative inline-flex items-center"
              >
                <span className={`text-[14px] font-medium tracking-wide transition-all duration-300 ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                } group-hover:uppercase group-hover:tracking-widest`}>
                  {hero.cta.primary}
                </span>
                
                {/* Container da seta com duas setas sobrepostas */}
                <span className="ml-3 relative w-5 h-5 overflow-hidden">
                  {/* Seta normal (→) */}
                  <span className={`absolute inset-0 transition-all duration-300 flex items-center justify-center ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  } group-hover:-translate-y-full`}>
                    →
                  </span>
                  
                  {/* Seta no hover (↓) */}
                  <span className={`absolute inset-0 transition-all duration-300 flex items-center justify-center ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  } translate-y-full group-hover:translate-y-0`}>
                    ↓
                  </span>
                </span>
              </a>
              
              {/* Botão Secundário */}
              <a 
                href="#projects" 
                className="group relative inline-flex items-center"
              >
                <span className={`text-[14px] font-medium tracking-wide transition-all duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                } group-hover:uppercase group-hover:tracking-widest`}>
                  {hero.cta.secondary}
                </span>
                
                {/* Container da seta com duas setas sobrepostas */}
                <span className="ml-3 relative w-5 h-5 overflow-hidden">
                  {/* Seta normal (→) */}
                  <span className={`absolute inset-0 transition-all duration-300 flex items-center justify-center ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  } group-hover:-translate-y-full`}>
                    →
                  </span>
                  
                  {/* Seta no hover (↓) */}
                  <span className={`absolute inset-0 transition-all duration-300 flex items-center justify-center ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  } translate-y-full group-hover:translate-y-0`}>
                    ↓
                  </span>
                </span>
              </a>

            </div>
          </div>

          {/* Photo */}
          <div className="flex-1 flex justify-center lg:justify-end w-full max-w-xs lg:max-w-lg">
            <div className="relative">
              <div className={`w-56 h-56 sm:w-64 sm:h-64 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border ${
                theme === 'dark' ? 'border-gray-800/50' : 'border-gray-300/50'
              } shadow-xl ${!photoLoaded ? 'bg-gray-300 animate-pulse' : ''}`}>
                {!photoLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300"></div>
                )}
                <img 
                  src={hero.photoUrl} 
                  alt={hero.photoAlt}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    !photoLoaded ? 'opacity-0' : 'opacity-100'
                  } hover:scale-105`}
                  onLoad={() => setPhotoLoaded(true)}
                  loading="eager"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}