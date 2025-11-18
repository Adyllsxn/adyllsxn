// components/modals/WebDevelopmentModal.tsx
'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCurrencyConverter } from '@/hooks/useCurrencyConverter';
import { 
  FaTimes,
  FaCode,
  FaPalette,
  FaRocket,
  FaLaptop,
  FaSync
} from 'react-icons/fa';
import { 
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript
} from 'react-icons/si';

interface WebDevelopmentModalProps {
  onClose: () => void;
}

export default function WebDevelopmentModal({ onClose }: WebDevelopmentModalProps) {
  const { theme } = useTheme();
  const { language } = useLanguage();

  // Preços base em USD (mais fácil para conversão)
  const basePrices = {
    landingPage: { baseCurrency: 'USD' as const, baseAmount: 180 },
    onePage: { baseCurrency: 'USD' as const, baseAmount: 350 },
    staticSite: { baseCurrency: 'USD' as const, baseAmount: 500 },
    dynamicSite: { baseCurrency: 'USD' as const, baseAmount: 800 }
  };

  const { getPrices, loading } = useCurrencyConverter(basePrices.landingPage);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const technologies = [
    { icon: <SiHtml5 className="text-orange-500" />, name: 'HTML5' },
    { icon: <SiCss3 className="text-blue-500" />, name: 'CSS3' },
    { icon: <SiTailwindcss className="text-cyan-500" />, name: 'Tailwind CSS' },
    { icon: <SiJavascript className="text-yellow-400" />, name: 'JavaScript' },
    { icon: <SiTypescript className="text-blue-500" />, name: 'TypeScript' },
    { icon: <SiReact className="text-cyan-400" />, name: 'React.js' },
    { icon: <SiNextdotjs className="text-white" />, name: 'Next.js' }
  ];

  const webTypes = [
    {
      type: language === 'pt' ? 'Landing Pages' : 'Landing Pages',
      description: language === 'pt' 
        ? 'Páginas de conversão otimizadas para capturar leads e vendas'
        : 'Optimized conversion pages to capture leads and sales',
      features: language === 'pt'
        ? ['Design Responsivo', 'Otimização SEO', 'Formulários de Contato', 'Integração com APIs', 'Entrega em 1 semana']
        : ['Responsive Design', 'SEO Optimization', 'Contact Forms', 'API Integration', 'Delivery in 1 week'],
      basePrice: basePrices.landingPage
    },
    {
      type: language === 'pt' ? 'One Page' : 'One Page',
      description: language === 'pt'
        ? 'Sites completos em uma única página com navegação suave'
        : 'Complete websites in a single page with smooth navigation',
      features: language === 'pt'
        ? ['Scroll Suave', 'Animações', 'Design Moderno', 'Otimizado para Mobile', 'Entrega em 2 semanas']
        : ['Smooth Scroll', 'Animations', 'Modern Design', 'Mobile Optimized', 'Delivery in 2 weeks'],
      basePrice: basePrices.onePage
    },
    {
      type: language === 'pt' ? 'Sites Estáticos' : 'Static Sites',
      description: language === 'pt'
        ? 'Sites rápidos e seguros sem necessidade de banco de dados'
        : 'Fast and secure websites without database requirements',
      features: language === 'pt'
        ? ['Alta Performance', 'Segurança', 'Baixo Custo', 'Fácil Manutenção', 'Entrega em 3 semanas']
        : ['High Performance', 'Security', 'Low Cost', 'Easy Maintenance', 'Delivery in 3 weeks'],
      basePrice: basePrices.staticSite
    },
    {
      type: language === 'pt' ? 'Sites Dinâmicos' : 'Dynamic Sites',
      description: language === 'pt'
        ? 'Sites com integração API, conteúdo dinâmico e painel administrativo'
        : 'Sites with API integration, dynamic content and admin panel',
      features: language === 'pt'
        ? ['Integração API', 'Painel Admin', 'Conteúdo Dinâmico', 'Blog Integrado', 'Entrega em 4-6 semanas']
        : ['API Integration', 'Admin Panel', 'Dynamic Content', 'Integrated Blog', 'Delivery in 4-6 weeks'],
      basePrice: basePrices.dynamicSite
    }
  ];

  const methodology = language === 'pt' 
    ? [
        'Consulta e Análise de Requisitos',
        'Prototipagem e Design UI/UX',
        'Desenvolvimento com React/Next.js',
        'Integração com APIs Externas',
        'Otimização e Testes Responsivos',
        'Deploy e Entrega do Projeto'
      ]
    : [
        'Consultation and Requirements Analysis',
        'Prototyping and UI/UX Design',
        'Development with React/Next.js',
        'Integration with External APIs',
        'Optimization and Responsive Testing',
        'Deployment and Project Delivery'
      ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className={`relative max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
            theme === 'dark' 
              ? 'bg-gray-900 text-white' 
              : 'bg-white text-gray-900'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button with Blinking Effect */}
          <motion.button
            onClick={onClose}
            className={`absolute top-4 right-4 z-10 p-3 rounded-full transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-red-500/20 hover:bg-red-500/30 text-red-400' 
                : 'bg-red-100 hover:bg-red-200 text-red-500'
            } shadow-lg`}
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                '0 0 0px rgba(239, 68, 68, 0)',
                '0 0 20px rgba(239, 68, 68, 0.6)',
                '0 0 0px rgba(239, 68, 68, 0)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaTimes size={20} />
          </motion.button>

          <div className="p-6">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
                <FaCode size={28} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-3">
                {language === 'pt' ? 'Desenvolvimento Web' : 'Web Development'}
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {language === 'pt'
                  ? 'Sites modernos, responsivos e de alta performance com as melhores tecnologias frontend'
                  : 'Modern, responsive and high-performance websites with the best frontend technologies'
                }
              </p>
            </div>

            {/* Technologies Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                <FaPalette className="mr-3 text-blue-500" />
                {language === 'pt' ? 'Tecnologias' : 'Technologies'}
              </h3>
              
              <div className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-blue-50'
              }`}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${
                        theme === 'dark' 
                          ? 'bg-gray-700 hover:bg-gray-600' 
                          : 'bg-white hover:bg-blue-100'
                      } shadow-md`}
                    >
                      <span className="text-2xl mb-2">{tech.icon}</span>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Web Types & Pricing */}
            <div className="mb-8">
              <div className="flex items-center justify-center mb-6">
                <FaLaptop className="mr-3 text-green-500" />
                <h3 className="text-2xl font-bold">
                  {language === 'pt' ? 'Tipos de Site' : 'Website Types'}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {webTypes.map((webType, index) => {
                  const prices = getPrices(webType.basePrice.baseAmount, webType.basePrice.baseCurrency);
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                        theme === 'dark'
                          ? 'bg-gray-800 border-gray-700 hover:border-blue-500'
                          : 'bg-white border-gray-200 hover:border-blue-400'
                      } shadow-lg`}
                    >
                      <h4 className="text-xl font-bold mb-3 text-center">{webType.type}</h4>
                      <p className={`text-sm mb-4 text-center ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {webType.description}
                      </p>
                      
                      {/* Prices */}
                      <div className="mb-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        {loading ? (
                          <div className="flex items-center justify-center py-4">
                            <FaSync className="animate-spin mr-2" />
                            <span>{language === 'pt' ? 'Carregando preços...' : 'Loading prices...'}</span>
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="text-center">
                              <div className="font-bold">{prices.kz}</div>
                              <div className="text-xs opacity-70">Kwanza</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold">{prices.usd}</div>
                              <div className="text-xs opacity-70">Dólar</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold">{prices.eur}</div>
                              <div className="text-xs opacity-70">Euro</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold">{prices.brl}</div>
                              <div className="text-xs opacity-70">Real</div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Features */}
                      <ul className="space-y-2">
                        {webType.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Methodology Section */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                <FaRocket className="mr-3 text-purple-500" />
                {language === 'pt' ? 'Metodologia' : 'Methodology'}
              </h3>
              <div className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-purple-50'
              }`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {methodology.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                        theme === 'dark' 
                          ? 'bg-purple-500 text-white' 
                          : 'bg-purple-100 text-purple-600'
                      }`}>
                        {index + 1}
                      </span>
                      <span className="text-sm">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <motion.a
                href="https://wa.me/935751955"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">💬</span>
                {language === 'pt' ? 'Solicitar Orçamento' : 'Request Quote'}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}