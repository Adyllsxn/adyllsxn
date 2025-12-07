// components/sections/Hero.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { theme } = useTheme();
  const { t, language } = useLanguage();
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = {
    pt: ['Desenvolvedor Full Stack'],
    en: ['Full Stack Developer']
  };

  const currentTexts = texts[language];
  const currentText = currentTexts[currentIndex];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Escrevendo
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Terminou de escrever, espera e começa a apagar
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Apagando
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Terminou de apagar, muda para o próximo texto
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % currentTexts.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentText, currentTexts.length]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center transition-all duration-300 relative py-20 lg:py-0"
      style={{
        backgroundColor: 'var(--background)'
      }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          
          {/* Text Content - Agora com mais espaço */}
          <div className={`text-center lg:text-left flex-1 transition-all duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            
            {/* Main Name */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Domingos<br />Nascimento
            </motion.h1>

            {/* Typewriter Effect */}
            <motion.div 
              className="text-xl sm:text-2xl md:text-3xl mb-8 lg:mb-10 h-14 flex items-center lg:justify-start justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="opacity-90">
                {language === 'pt' ? 'Sou ' : "I'm "}
                <span className="text-blue-500 font-semibold">
                  {displayText}
                </span>
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>
            
            {/* Description */}
            <motion.p 
              className="text-lg sm:text-xl mb-8 lg:mb-10 max-w-2xl leading-relaxed opacity-90 mx-auto lg:mx-0"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {language === 'pt' 
                ? 'Desenvolvendo soluções digitais que impulsionam negócios e encantam usuários. Do conceito à implementação, garantindo qualidade e inovação em cada etapa.'
                : 'Developing digital solutions that boost businesses and delight users. From concept to implementation, ensuring quality and innovation at every stage.'
              }
            </motion.p>
          </div>

          {/* Photo Section - Ajustada para caber na tela */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end w-full max-w-md lg:max-w-lg"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15, 
              duration: 0.8 
            }}
          >
            <motion.div 
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Container da foto - Tamanho reduzido para caber */}
              <motion.div 
                className={`w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 ${
                  theme === 'dark' ? 'border-gray-600' : 'border-gray-200'
                } shadow-2xl relative z-10`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://github.com/Adyllsxn.png" 
                  alt="Domingos Nascimento"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Background decorativo */}
              <div className={`absolute inset-0 rounded-full -z-10 ${
                theme === 'dark' ? 'bg-blue-900/20' : 'bg-blue-100'
              } blur-xl scale-110`}></div>
              
              {/* Decorative elements - Ajustados para não sair da tela */}
              <motion.div 
                className={`absolute -top-4 -right-4 w-8 h-8 rounded-full ${
                  theme === 'dark' ? 'bg-blue-500' : 'bg-blue-400'
                } z-0`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              <motion.div 
                className={`absolute -bottom-6 -left-6 w-8 h-8 rounded-full ${
                  theme === 'dark' ? 'bg-purple-500' : 'bg-purple-400'
                } z-0`}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.7
                }}
              ></motion.div>

              <motion.div 
                className={`absolute top-1/2 -right-8 w-6 h-6 rounded-full ${
                  theme === 'dark' ? 'bg-green-500' : 'bg-green-400'
                } z-0`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2
                }}
              ></motion.div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}