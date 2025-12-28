'use client';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  getAboutData, 
  handleDownloadCV, 
  handleWhatsApp, 
  handleEmail 
} from '@/utils/about.utils';

export default function About() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const about = getAboutData();

  const onDownloadCV = () => handleDownloadCV(language);
  const onWhatsApp = () => handleWhatsApp(language, about.contact.phone);
  const onEmail = () => handleEmail(about.contact.email);

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center mb-8">
            <div className={`h-px w-12 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
            <span className={`mx-6 text-xs font-normal uppercase tracking-[0.2em] ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
            }`}>
              {language === 'pt' ? 'SOBRE' : 'ABOUT'}
            </span>
            <div className={`h-px w-12 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
          </div>
          
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {about.title[language]}
          </h2>
          
          <p className={`text-sm font-light leading-relaxed tracking-wide ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {about.subtitle[language]}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Profile & Contact */}
            <div className="lg:col-span-1">
              <div className={`rounded-xl p-6 sticky top-24 ${
                theme === 'dark'
                  ? 'bg-gray-900/30 border border-gray-800/40'
                  : 'bg-white/80 border border-gray-200/60'
              } backdrop-blur-sm`}>
                
                {/* Profile Info */}
                <div className="text-center mb-8">
                  <div className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    theme === 'dark' 
                      ? 'bg-gray-800' 
                      : 'bg-gray-100'
                  }`}>
                    <span className={`text-2xl font-normal ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      DN
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-normal mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Domingos Nascimento
                  </h3>
                  <p className={`text-sm font-light ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Full Stack Developer
                  </p>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={onDownloadCV}
                    className={`w-full py-3 px-4 rounded-lg text-sm font-normal flex items-center justify-center gap-2 transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <span>{about.cta.cv[language]}</span>
                    <span className="text-xs">PDF</span>
                  </button>
                  
                  <button
                    onClick={onWhatsApp}
                    className={`w-full py-3 px-4 rounded-lg text-sm font-normal flex items-center justify-center gap-2 transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <span>{about.cta.whatsapp}</span>
                  </button>

                  <button
                    onClick={onEmail}
                    className={`w-full py-3 px-4 rounded-lg text-sm font-normal flex items-center justify-center gap-2 transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <span>{about.cta.email}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {/* About Text */}
                <div className="space-y-6">
                  {about.paragraphs[language].map((paragraph, index) => (
                    <p
                      key={index}
                      className={`text-base leading-relaxed font-light tracking-wide ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Key Skills */}
                <div>
                  <div className="mb-8">
                    <h3 className={`text-2xl font-normal mb-6 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {language === 'pt' ? 'Principais Tecnologias' : 'Key Technologies'}
                    </h3>
                    
                    <p className={`text-sm font-light mb-8 ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {language === 'pt' 
                        ? 'Tecnologias que utilizo para criar soluções robustas'
                        : 'Technologies I use to create robust solutions'
                      }
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {about.keySkills.map((category, catIndex) => (
                      <div
                        key={catIndex}
                        className={`rounded-xl p-5 ${
                          theme === 'dark'
                            ? 'bg-gray-900/30 border border-gray-800/40'
                            : 'bg-white/80 border border-gray-200/60'
                        } backdrop-blur-sm`}
                      >
                        <h4 className={`text-sm font-normal mb-4 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {category.category}
                        </h4>
                        
                        <ul className="space-y-2">
                          {category.skills.map((skill, skillIndex) => (
                            <li
                              key={skillIndex}
                              className={`text-sm font-light ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                              }`}
                            >
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Note */}
                <div className={`pt-8 border-t ${
                  theme === 'dark' ? 'border-gray-800' : 'border-gray-300'
                }`}>
                  <p className={`text-sm font-light ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {language === 'pt'
                      ? 'Interessado em trabalhar juntos? Vamos conversar.'
                      : 'Interested in working together? Let’s talk.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}