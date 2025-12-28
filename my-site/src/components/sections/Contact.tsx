'use client';
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { getContactData } from '@/utils/contact.utils';
import { useContactForm } from '@/hooks/useContactForm';
import { FiMail, FiMessageCircle } from 'react-icons/fi'; // ← Adicionar ícones

export default function Contact() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const contact = getContactData();
  
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    resetForm
  } = useContactForm();

  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        resetForm();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus, resetForm]);

  const handleWhatsApp = () => {
    const message = language === 'pt' 
      ? 'Olá! Gostaria de conversar sobre um projeto.'
      : 'Hello! I would like to discuss a project.';
    const url = `https://wa.me/${contact.contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleEmail = () => {
    window.location.href = `mailto:${contact.contactInfo.email}`;
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center mb-6 sm:mb-8">
            <div className={`h-px w-8 sm:w-12 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
            <span className={`mx-4 sm:mx-6 text-xs font-normal uppercase tracking-[0.2em] ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
            }`}>
              {language === 'pt' ? 'CONTATO' : 'CONTACT'}
            </span>
            <div className={`h-px w-8 sm:w-12 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {contact.title[language]}
          </h2>
          
          <p className={`text-sm font-light leading-relaxed tracking-wide px-4 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {contact.subtitle[language]}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Info - Side */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              {/* Contact Card */}
              <div className={`rounded-xl p-5 sm:p-6 ${
                theme === 'dark'
                  ? 'bg-gray-900/30 border border-gray-800/40'
                  : 'bg-white/80 border border-gray-200/60'
              } backdrop-blur-sm`}>
                <h3 className={`text-lg sm:text-xl font-normal mb-4 sm:mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {language === 'pt' ? 'Entre em contato' : 'Get in touch'}
                </h3>

                <div className="space-y-4">
                  {/* Email Button - HOVER AZUL */}
                  <button
                    onClick={handleEmail}
                    className={`group w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-300 flex items-center cursor-pointer border border-transparent hover:border-blue-500/30 ${
                      theme === 'dark'
                        ? 'bg-gray-800/30 hover:bg-gray-800/50 hover:bg-blue-500/10'
                        : 'bg-gray-100/80 hover:bg-gray-200/80 hover:bg-blue-500/10'
                    }`}
                  >
                    <div className={`p-2 rounded mr-3 transition-all duration-300 group-hover:scale-110 ${
                      theme === 'dark' 
                        ? 'bg-gray-800 text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-500/20' 
                        : 'bg-gray-200 text-gray-600 group-hover:text-blue-600 group-hover:bg-blue-100'
                    }`}>
                      <FiMail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm font-light mb-1 truncate group-hover:text-blue-500 transition-colors">
                        Email
                      </div>
                      <div className={`text-sm sm:text-base font-normal truncate transition-colors group-hover:text-blue-500 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {contact.contactInfo.email}
                      </div>
                    </div>
                    {/* Seta - aparece no hover */}
                    <div className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        →
                      </span>
                    </div>
                  </button>

                  {/* WhatsApp Button - HOVER VERDE */}
                  <button
                    onClick={handleWhatsApp}
                    className={`group w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-300 flex items-center cursor-pointer border border-transparent hover:border-green-500/30 ${
                      theme === 'dark'
                        ? 'bg-gray-800/30 hover:bg-gray-800/50 hover:bg-green-500/10'
                        : 'bg-gray-100/80 hover:bg-gray-200/80 hover:bg-green-500/10'
                    }`}
                  >
                    <div className={`p-2 rounded mr-3 transition-all duration-300 group-hover:scale-110 ${
                      theme === 'dark' 
                        ? 'bg-gray-800 text-gray-400 group-hover:text-green-400 group-hover:bg-green-500/20' 
                        : 'bg-gray-200 text-gray-600 group-hover:text-green-600 group-hover:bg-green-100'
                    }`}>
                      <FiMessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm font-light mb-1 truncate group-hover:text-green-500 transition-colors">
                        WhatsApp
                      </div>
                      <div className={`text-sm sm:text-base font-normal truncate transition-colors group-hover:text-green-500 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {contact.contactInfo.whatsapp}
                      </div>
                    </div>
                    {/* Seta - aparece no hover */}
                    <div className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-green-400' : 'text-green-600'
                      }`}>
                        →
                      </span>
                    </div>
                  </button>
                </div>

                {/* Response Time */}
                <div className={`mt-4 sm:mt-6 pt-4 sm:pt-6 border-t ${
                  theme === 'dark' ? 'border-gray-800' : 'border-gray-300'
                }`}>
                  <div className="flex items-center">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 ${
                      theme === 'dark' ? 'bg-blue-500' : 'bg-blue-400'
                    }`}></div>
                    <span className={`text-xs font-light ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {language === 'pt' 
                        ? 'Resposta rápida'
                        : 'Quick response'
                      }
                    </span>
                  </div>
                </div>
              </div>

              {/* Availability Status */}
              <div className={`rounded-xl p-5 sm:p-6 ${
                theme === 'dark'
                  ? 'bg-gray-900/30 border border-gray-800/40'
                  : 'bg-white/80 border border-gray-200/60'
              }`}>
                <div className="flex items-center mb-3">
                  <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-2 sm:mr-3 ${
                    theme === 'dark' ? 'bg-green-500' : 'bg-green-400'
                  }`}></div>
                  <span className={`text-sm font-normal ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {language === 'pt' ? 'Disponível' : 'Available'}
                  </span>
                </div>
                <p className={`text-xs font-light ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  {language === 'pt'
                    ? 'Aceitando novos projetos'
                    : 'Accepting new projects'
                  }
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`rounded-xl p-5 sm:p-6 order-1 lg:order-2 ${
              theme === 'dark'
                ? 'bg-gray-900/30 border border-gray-800/40'
                : 'bg-white/80 border border-gray-200/60'
            } backdrop-blur-sm`}>
              {/* Alert Messages */}
              {submitStatus === 'success' && (
                <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-green-500/10 border border-green-500/20' 
                    : 'bg-green-100 border border-green-200'
                }`}>
                  <div className="flex items-center">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 sm:mr-3 ${
                      theme === 'dark' ? 'bg-green-500' : 'bg-green-400'
                    }`}></div>
                    <p className={`text-xs sm:text-sm font-light ${
                      theme === 'dark' ? 'text-green-400' : 'text-green-700'
                    }`}>
                      {contact.alerts.success[language]}
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-red-500/10 border border-red-500/20' 
                    : 'bg-red-100 border border-red-200'
                }`}>
                  <div className="flex items-center">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 sm:mr-3 ${
                      theme === 'dark' ? 'bg-red-500' : 'bg-red-400'
                    }`}></div>
                    <p className={`text-xs sm:text-sm font-light ${
                      theme === 'dark' ? 'text-red-400' : 'text-red-700'
                    }`}>
                      {contact.alerts.error[language]}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name Field */}
                <div>
                  <label className={`block text-xs sm:text-sm font-light mb-1 sm:mb-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {contact.form.name[language]} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500'
                        : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                    placeholder={language === 'pt' ? 'Seu nome' : 'Your name'}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className={`block text-xs sm:text-sm font-light mb-1 sm:mb-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {contact.form.email[language]} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500'
                        : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                    placeholder="email@exemplo.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className={`block text-xs sm:text-sm font-light mb-1 sm:mb-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {contact.form.message[language]} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    required
                    rows={3}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm transition-all duration-300 resize-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500'
                        : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                    placeholder={language === 'pt' 
                      ? 'Conte-me sobre seu projeto...' 
                      : 'Tell me about your project...'
                    }
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-sm font-normal transition-all duration-300 cursor-pointer relative overflow-hidden ${
                    isSubmitting
                      ? 'bg-gray-500 cursor-not-allowed'
                      : theme === 'dark'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  <span className="relative flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        {contact.form.sending[language]}
                      </>
                    ) : (
                      <>
                        {contact.form.submit[language]}
                        <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                          →
                        </span>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}