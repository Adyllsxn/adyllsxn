// components/sections/About.tsx
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { aboutTexts } from '@/data/about';
import { skillCategories } from '@/data/skills';
import { FaDownload, FaWhatsapp, FaEnvelope, FaGlobe } from 'react-icons/fa';

export default function About() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('languages');

  const handleDownloadCV = () => {
    const cvFile = language === 'pt' ? 'cv-pt.pdf' : 'cv-en.pdf';
    const cvPath = `/cv/${cvFile}`;
    
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = cvFile;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleWhatsApp = () => {
    const phone = '+244935751955';
    const message = language === 'pt' 
      ? 'Olá! Gostaria de conversar sobre um projeto.'
      : 'Hello! I would like to discuss a project.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:domingos.nxscimento@gmail.com';
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
        {/* Section Title */}
        <div className="container section-title text-center mb-12 lg:mb-16">
          <span className="subtitle text-blue-500 font-bold text-sm uppercase tracking-widest mb-3">
            {language === 'pt' ? 'SOBRE MIM' : 'ABOUT ME'}
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {language === 'pt' ? 'Sobre Mim' : 'About Me'}
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {language === 'pt' 
              ? 'Desenvolvendo soluções digitais que impulsionam negócios e encantam usuários'
              : 'Developing digital solutions that boost businesses and delight users'
            }
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Profile Card - Lado Esquerdo */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={`profile-card rounded-2xl p-8 ${
                theme === 'dark' 
                  ? 'bg-gray-900/50 border border-gray-700/50' 
                  : 'bg-white/80 border border-gray-200/50'
              } shadow-2xl backdrop-blur-sm sticky top-24`}>
                
                {/* Profile Header */}
                <div className="profile-header text-center pb-6 border-b border-gray-600/30 mb-6">
                  <div className="profile-avatar relative mx-auto mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-500/20 relative flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                      <FaGlobe className="text-white text-5xl" />
                    </div>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Domingos Nascimento
                  </h3>
                  <span className="text-blue-500 font-medium text-sm">
                    Full Stack Developer
                  </span>
                </div>

                {/* Profile Actions */}
                <div className="profile-actions space-y-3">
                  <button 
                    onClick={handleDownloadCV}
                    className={`w-full py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    <FaDownload className="w-5 h-5" />
                    {language === 'pt' ? 'Baixar CV' : 'Download CV'}
                  </button>
                  
                  <button 
                    onClick={handleWhatsApp}
                    className={`w-full py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    WhatsApp
                  </button>

                  <button 
                    onClick={handleEmail}
                    className={`w-full py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 border transition-all duration-300 ${
                      theme === 'dark'
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <FaEnvelope className="w-5 h-5" />
                    Email
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Content - Lado Direito */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                {/* Bio Section */}
                <div className="bio-section">
                  <div className="section-tag inline-block px-4 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm font-semibold mb-4">
                    {language === 'pt' ? 'Sobre Mim' : 'About Me'}
                  </div>
                  <h2 className={`text-2xl font-bold mb-6 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {aboutTexts[language].title}
                  </h2>
                  
                  <div className="space-y-4">
                    <p className={`text-base leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {aboutTexts[language].paragraph1}
                    </p>
                    
                    <p className={`text-base leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {aboutTexts[language].paragraph2}
                    </p>
                  </div>
                </div>

                {/* Skills Section */}
                <div className="skills-showcase">
                  <div className="section-tag inline-block px-4 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm font-semibold mb-4">
                    {language === 'pt' ? 'Skills Principais' : 'Core Skills'}
                  </div>
                  <h3 className={`text-2xl font-bold mb-8 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {language === 'pt' ? 'Proficiência Técnica' : 'Technical Proficiency'}
                  </h3>

                  {/* Categorias Interativas */}
                  <div className="mb-8">
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                      {Object.entries(skillCategories).map(([key, category]) => (
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
                          {category.title[language]}
                        </motion.button>
                      ))}
                    </div>

                    {/* Skills Grid */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                      >
                        {skillCategories[activeCategory].skills.map((skill, index) => {
                          const Icon = skill.icon;
                          
                          return (
                            <motion.div
                              key={skill.name}
                              className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 cursor-default ${
                                theme === 'dark'
                                  ? 'bg-gray-800/50 border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/20'
                                  : 'bg-white/80 border-blue-400/30 hover:border-blue-500 hover:bg-blue-500/20'
                              }`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{
                                scale: 1.05,
                                y: -2,
                              }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <div className="text-3xl mb-2">
                                <Icon className={skill.color} />
                              </div>
                              <span className={`text-sm font-bold text-center ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                              }`}>
                                {skill.name}
                              </span>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}