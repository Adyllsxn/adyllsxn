// components/sections/About.tsx
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { theme } = useTheme();
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('languages');

  const categories = {
    languages: {
      title: language === 'pt' ? 'Linguagens' : 'Languages',
      skills: ['JavaScript', 'TypeScript', 'C#', 'HTML/CSS', 'SQL']
    },
    frameworks: {
      title: language === 'pt' ? 'Frameworks' : 'Frameworks',
      skills: ['React', 'Next.js', 'ASP.NET Core', 'React Native']
    },
    tools: {
      title: language === 'pt' ? 'Ferramentas' : 'Tools',
      skills: ['Git', 'Azure', 'Ubuntu', 'Expo', 'MongoDB', 'PostgreSQL', 'Docker', 'VS Code']
    }
  };

  return (
    <section 
      id="about" 
      className="py-16 lg:py-20 transition-all duration-300 overflow-hidden"
      style={{
        backgroundColor: 'var(--background)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section com Glow Effect */}
        <motion.div 
          className="text-center mb-12 lg:mb-16 relative"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background Glow */}
          <div className={`absolute inset-0 -z-10 rounded-full blur-3xl opacity-20 ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-300'
          }`}></div>
          
          <motion.p 
            className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-3 inline-block"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {language === 'pt' ? 'SOBRE MIM' : 'ABOUT ME'}
          </motion.p>
          
          <motion.h2 
            className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r ${
              theme === 'dark' 
                ? 'from-blue-400 to-purple-500' 
                : 'from-blue-600 to-purple-600'
            } bg-clip-text text-transparent`}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {language === 'pt' ? 'Minha Jornada!' : 'My Journey!'}
          </motion.h2>
          
          <motion.div 
            className={`w-20 h-1 mx-auto rounded-full ${
              theme === 'dark' ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-purple-600'
            }`}
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto relative">
          {/* Floating Background Elements */}
          <motion.div 
            className={`absolute -top-10 -left-10 w-20 h-20 rounded-full ${
              theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-200/50'
            } blur-xl`}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          
          <motion.div 
            className={`absolute -bottom-10 -right-10 w-16 h-16 rounded-full ${
              theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-200/50'
            } blur-xl`}
            animate={{
              y: [0, 15, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          ></motion.div>

          {/* Text Content com Card Estiloso */}
          <motion.div 
            className={`relative p-8 sm:p-10 rounded-2xl backdrop-blur-sm border ${
              theme === 'dark' 
                ? 'bg-gray-900/50 border-gray-700/50' 
                : 'bg-white/80 border-gray-200/50'
            } shadow-2xl mb-8`}
            initial={{ y: 40, opacity: 0, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            whileHover={{
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.5)"
            }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            viewport={{ once: true }}
          >
            {/* Corner Accents */}
            <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${
              theme === 'dark' ? 'border-blue-500' : 'border-blue-600'
            }`}></div>
            <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${
              theme === 'dark' ? 'border-purple-500' : 'border-purple-600'
            }`}></div>
            <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${
              theme === 'dark' ? 'border-green-500' : 'border-green-600'
            }`}></div>
            <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${
              theme === 'dark' ? 'border-yellow-500' : 'border-yellow-600'
            }`}></div>

            <motion.div 
              className="space-y-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className={`text-lg leading-relaxed font-medium ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>
                {language === 'pt' 
                  ? <>E aí! Sou o <strong className="text-blue-400 font-bold">Domingos Nascimento</strong>, também conhecido como <strong className="text-purple-400 font-bold">Adyllsxn</strong>, um desenvolvedor <span className="text-green-400 font-bold">Full Stack</span> viciado em criar experiências digitais que <span className="text-yellow-400 font-bold">impactam</span> e <span className="text-pink-400 font-bold">encantam</span>.</>
                  : <>Hey! I'm <strong className="text-blue-400 font-bold">Domingos Nascimento</strong>, also known as <strong className="text-purple-400 font-bold">Adyllsxn</strong>, a <span className="text-green-400 font-bold">Full Stack Developer</span> obsessed with creating digital experiences that <span className="text-yellow-400 font-bold">impact</span> and <span className="text-pink-400 font-bold">delight</span>.</>
                }
              </p>
              
              <p className={`text-lg leading-relaxed font-medium ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>
                {language === 'pt' 
                  ? <>No <span className="text-red-400 font-bold">backend</span>, construo <strong className="text-blue-400">sistemas robustos</strong> com <strong className="text-green-400">ASP.NET Core</strong> - performance e escalabilidade são minha obsessão! No <span className="text-indigo-400 font-bold">frontend</span>, crio <strong className="text-purple-400">interfaces modernas</strong> com <strong className="text-cyan-400">React.js</strong> que fazem os usuários dizerem <em className="text-yellow-400">"UAU!"</em></>
                  : <>On the <span className="text-red-400 font-bold">backend</span>, I build <strong className="text-blue-400">robust systems</strong> with <strong className="text-green-400">ASP.NET Core</strong> - performance and scalability are my obsession! On the <span className="text-indigo-400 font-bold">frontend</span>, I create <strong className="text-purple-400">modern interfaces</strong> with <strong className="text-cyan-400">React.js</strong> that make users say <em className="text-yellow-400">"WOW!"</em></>
                }
              </p>
              
              <p className={`text-lg leading-relaxed font-medium ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>
                {language === 'pt' 
                  ? <>E para <span className="text-orange-400 font-bold">mobile</span> não fico de fora! Desenvolvo apps <strong className="text-green-400">multiplataforma</strong> com <strong className="text-blue-400">React Native + Expo</strong> que rodam tão bem quanto nativos. <span className="text-pink-400">✨</span></>
                  : <>And for <span className="text-orange-400 font-bold">mobile</span>? I'm all in! I develop <strong className="text-green-400">cross-platform apps</strong> with <strong className="text-blue-400">React Native + Expo</strong> that run as smooth as native. <span className="text-pink-400">✨</span></>
                }
              </p>
            </motion.div>
          </motion.div>

          {/* Categorias Interativas */}
          <motion.div 
            className="mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold text-center mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {language === 'pt' ? '💻 Minhas Skills' : '💻 My Skills'}
            </h3>
            
            {/* Botões das Categorias */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {Object.entries(categories).map(([key, category]) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === key
                      ? theme === 'dark'
                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : theme === 'dark'
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 border border-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.title}
                </motion.button>
              ))}
            </div>

            {/* Skills da Categoria Ativa */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {categories[activeCategory as keyof typeof categories].skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className={`px-4 py-3 rounded-xl text-sm font-bold border-2 backdrop-blur-sm ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 text-gray-200 border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/20'
                        : 'bg-white/80 text-gray-800 border-blue-400/30 hover:border-blue-500 hover:bg-blue-500/20'
                    } transition-all duration-300 cursor-default`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}