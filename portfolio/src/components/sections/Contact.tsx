// components/sections/Contact.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContactForm } from '@/hooks/useContactForm';
import Alert from '@/components/ui/Alert';
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaPaperPlane,
  FaGlobeAmericas
} from 'react-icons/fa';

export default function Contact() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    resetForm
  } = useContactForm();

  const subjectOptions = [
    { value: 'web-development', label: language === 'pt' ? '🚀 Desenvolvimento Web' : '🚀 Web Development' },
    { value: 'backend', label: language === 'pt' ? '⚙️ Backend & APIs' : '⚙️ Backend & APIs' },
    { value: 'automation', label: language === 'pt' ? '🤖 Automação' : '🤖 Automation' },
    { value: 'other', label: language === 'pt' ? '✨ Outros' : '✨ Other' }
  ];

  const contactInfo = [
    {
      icon: <FaWhatsapp className="text-green-400" size={28} />,
      title: 'WhatsApp',
      value: '+244 935 751 955',
      link: 'https://wa.me/244935751955',
      description: language === 'pt' ? 'Resposta rápida' : 'Quick response'
    },
    {
      icon: <FaEnvelope className="text-blue-400" size={28} />,
      title: 'Email',
      value: 'domingos.nxscimento@gmail.com',
      link: 'mailto:domingos.nxscimento@gmail.com',
      description: language === 'pt' ? 'Resposta em 24h' : 'Response within 24h'
    },
    {
      icon: <FaGlobeAmericas className="text-purple-400" size={28} />,
      title: language === 'pt' ? 'Localização' : 'Location',
      value: language === 'pt' ? 'Luanda, Angola' : 'Luanda, Angola',
      description: language === 'pt' ? 'Disponível remotamente' : 'Available remotely'
    }
  ];

  // Mensagens de alerta
  const alertMessages = {
    success: language === 'pt' 
      ? '✅ Mensagem enviada com sucesso! Entrarei em contato em breve.' 
      : '✅ Message sent successfully! I\'ll contact you soon.',
    error: language === 'pt' 
      ? '❌ Erro ao enviar mensagem. Tente novamente.' 
      : '❌ Error sending message. Please try again.'
  };

  return (
    <>
      {/* Alert Component */}
      <Alert
        type="success"
        message={alertMessages.success}
        isVisible={submitStatus === 'success'}
        onClose={() => resetForm()}
        autoHide={true}
        duration={6000}
      />
      
      <Alert
        type="error"
        message={alertMessages.error}
        isVisible={submitStatus === 'error'}
        onClose={() => resetForm()}
        autoHide={true}
        duration={6000}
      />

      <section 
        id="contact" 
        className="py-16 lg:py-20 transition-all duration-300 relative overflow-hidden"
        style={{
          backgroundColor: 'var(--background)'
        }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            theme === 'dark' ? 'bg-blue-600' : 'bg-blue-400'
          }`}></div>
          <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            theme === 'dark' ? 'bg-purple-600' : 'bg-purple-400'
          }`}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-20"
          >
            <span className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-3 block">
              {language === 'pt' ? 'CONTATO' : 'CONTACT'}
            </span>
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-6 ${
              theme === 'dark' 
                ? 'text-white' 
                : 'text-gray-900'
            }`}>
              {language === 'pt' ? 'Vamos Conversar?' : "Let's Talk?"}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {language === 'pt' 
                ? 'Pronto para transformar sua ideia em realidade? Vamos criar algo incrível juntos!'
                : 'Ready to turn your idea into reality? Let\'s create something amazing together!'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Information - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className={`text-3xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {language === 'pt' ? '💬 Vamos Conectar!' : '💬 Let\'s Connect!'}
                </h3>
                <p className={`text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {language === 'pt' 
                    ? 'Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte de sua visão.'
                    : 'I\'m always open to discussing new projects, creative ideas or opportunities to be part of your vision.'
                  }
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`group p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500 hover:bg-gray-800/80'
                        : 'bg-white/80 border-gray-200 hover:border-blue-500 hover:bg-white'
                    } shadow-lg hover:shadow-xl`}
                    onClick={() => item.link && window.open(item.link, '_blank')}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                      }`}>
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-bold text-lg mb-1 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {item.title}
                        </h4>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`text-lg font-semibold hover:text-blue-500 transition-colors block mb-1 break-all ${
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className={`text-lg font-semibold mb-1 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {item.value}
                          </p>
                        )}
                        <p className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border-2 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700'
                    : 'bg-gradient-to-br from-white to-gray-100 border-gray-200'
                }`}
              >
                <h4 className={`font-bold text-lg mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {language === 'pt' ? '📈 Estatísticas Rápidas' : '📈 Quick Stats'}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className={`text-2xl font-black ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      24h
                    </div>
                    <div className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {language === 'pt' ? 'Resposta' : 'Response'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-black ${
                      theme === 'dark' ? 'text-green-400' : 'text-green-600'
                    }`}>
                      100%
                    </div>
                    <div className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {language === 'pt' ? 'Dedicado' : 'Dedicated'}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl border-2 backdrop-blur-sm ${
                theme === 'dark'
                  ? 'bg-gray-800/30 border-gray-700'
                  : 'bg-white/50 border-gray-200'
              } shadow-2xl`}
            >
              <h3 className={`text-3xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {language === 'pt' ? '📨 Envie sua Mensagem' : '📨 Send Your Message'}
              </h3>
              <p className={`text-lg mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {language === 'pt' 
                  ? 'Preencha o formulário abaixo e entrarei em contato o mais rápido possível!'
                  : 'Fill out the form below and I\'ll get back to you as soon as possible!'
                }
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field - ÚNICO campo como no HTML que funciona */}
                <div className="space-y-2">
                  <label htmlFor="name" className={`block text-sm font-semibold ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {language === 'pt' ? 'Nome' : 'Name'} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 text-lg ${
                      theme === 'dark'
                        ? 'bg-gray-700/50 border-gray-600 text-white focus:border-blue-500 focus:bg-gray-700/80'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:bg-white'
                    } placeholder-gray-500`}
                    placeholder={language === 'pt' ? 'João' : 'John'}
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className={`block text-sm font-semibold ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 text-lg ${
                      theme === 'dark'
                        ? 'bg-gray-700/50 border-gray-600 text-white focus:border-blue-500 focus:bg-gray-700/80'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:bg-white'
                    } placeholder-gray-500`}
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className={`block text-sm font-semibold ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {language === 'pt' ? '📋 Tipo de Projeto' : '📋 Project Type'} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    required
                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 text-lg appearance-none ${
                      theme === 'dark'
                        ? 'bg-gray-700/50 border-gray-600 text-white focus:border-blue-500 focus:bg-gray-700/80'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:bg-white'
                    }`}
                  >
                    <option value="">{language === 'pt' ? 'Selecione uma opção' : 'Select an option'}</option>
                    {subjectOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className={`block text-sm font-semibold ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {language === 'pt' ? '💭 Sua Mensagem' : '💭 Your Message'} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    required
                    rows={6}
                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 text-lg resize-none ${
                      theme === 'dark'
                        ? 'bg-gray-700/50 border-gray-600 text-white focus:border-blue-500 focus:bg-gray-700/80'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:bg-white'
                    } placeholder-gray-500`}
                    placeholder={language === 'pt' 
                      ? 'Conte-me sobre seu projeto, ideias e objetivos...' 
                      : 'Tell me about your project, ideas and goals...'
                    }
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-5 px-8 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                    isSubmitting
                      ? 'bg-gray-500 cursor-not-allowed'
                      : theme === 'dark'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg shadow-blue-500/30'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{language === 'pt' ? 'Enviando...' : 'Sending...'}</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5" />
                      <span>{language === 'pt' ? 'Enviar Mensagem' : 'Send Message'}</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Clean */}
      <footer className={`py-8 transition-all duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center space-y-4">
            
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                © {new Date().getFullYear()} adyllsxn. {language === 'pt' 
                  ? 'Todos os direitos reservados.' 
                  : 'All rights reserved.'
                }
              </p>
            </motion.div>

          </div>
        </div>
      </footer>
    </>
  );
}