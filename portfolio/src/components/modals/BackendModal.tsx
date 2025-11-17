// components/modals/BackendModal.tsx
'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCurrencyConverter } from '@/hooks/useCurrencyConverter';
import { 
  FaTimes,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaRocket,
  FaSync,
  FaCloud,
  FaMicrosoft,
  FaAws
} from 'react-icons/fa';
import { 
  SiDotnet,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes
} from 'react-icons/si';

interface BackendModalProps {
  onClose: () => void;
}

export default function BackendModal({ onClose }: BackendModalProps) {
  const { theme } = useTheme();
  const { language } = useLanguage();

  // Preços base em USD para Backend
  const basePrices = {
    basicApi: { baseCurrency: 'USD' as const, baseAmount: 300 },
    advancedApi: { baseCurrency: 'USD' as const, baseAmount: 600 },
    fullBackend: { baseCurrency: 'USD' as const, baseAmount: 1000 },
    enterprise: { baseCurrency: 'USD' as const, baseAmount: 2000 }
  };

  const { getPrices, loading } = useCurrencyConverter(basePrices.basicApi);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const technologies = [
    { icon: <SiDotnet className="text-purple-500" />, name: 'ASP.NET Core' },
    { icon: <FaMicrosoft className="text-blue-500" />, name: 'SQL Server' },
    { icon: <SiPostgresql className="text-blue-500" />, name: 'PostgreSQL' },
    { icon: <SiMongodb className="text-green-500" />, name: 'MongoDB' },
    { icon: <SiRedis className="text-red-400" />, name: 'Redis' },
    { icon: <SiDocker className="text-blue-400" />, name: 'Docker' },
    { icon: <SiKubernetes className="text-blue-500" />, name: 'Kubernetes' },
    { icon: <FaAws className="text-orange-500" />, name: 'AWS/Azure' }
  ];

  const apiTypes = [
    {
      type: language === 'pt' ? 'API Básica' : 'Basic API',
      description: language === 'pt' 
        ? 'API simples com endpoints essenciais e documentação básica'
        : 'Simple API with essential endpoints and basic documentation',
      features: language === 'pt'
        ? ['Até 10 Endpoints', 'Documentação Swagger', 'Autenticação Básica', 'SQL Server/PostgreSQL', 'Entrega em 2 semanas']
        : ['Up to 10 Endpoints', 'Swagger Documentation', 'Basic Authentication', 'SQL Server/PostgreSQL', 'Delivery in 2 weeks'],
      basePrice: basePrices.basicApi
    },
    {
      type: language === 'pt' ? 'API Avançada' : 'Advanced API',
      description: language === 'pt'
        ? 'API completa com autenticação JWT, cache e performance otimizada'
        : 'Complete API with JWT authentication, caching and optimized performance',
      features: language === 'pt'
        ? ['Até 25 Endpoints', 'Autenticação JWT', 'Cache com Redis', 'Logging Avançado', 'Testes Unitários', 'Entrega em 4 semanas']
        : ['Up to 25 Endpoints', 'JWT Authentication', 'Redis Caching', 'Advanced Logging', 'Unit Tests', 'Delivery in 4 weeks'],
      basePrice: basePrices.advancedApi
    },
    {
      type: language === 'pt' ? 'Backend Completo' : 'Full Backend',
      description: language === 'pt'
        ? 'Sistema backend completo com microserviços e arquitetura escalável'
        : 'Complete backend system with microservices and scalable architecture',
      features: language === 'pt'
        ? ['Múltiplas APIs', 'Arquitetura Microserviços', 'Message Queues', 'Monitoramento', 'CI/CD Pipeline', 'Entrega em 6-8 semanas']
        : ['Multiple APIs', 'Microservices Architecture', 'Message Queues', 'Monitoring', 'CI/CD Pipeline', 'Delivery in 6-8 weeks'],
      basePrice: basePrices.fullBackend
    },
    {
      type: language === 'pt' ? 'Solução Enterprise' : 'Enterprise Solution',
      description: language === 'pt'
        ? 'Sistema corporativo com alta disponibilidade, segurança e escalabilidade'
        : 'Corporate system with high availability, security and scalability',
      features: language === 'pt'
        ? ['Arquitetura Cloud Native', 'Kubernetes', 'Auto-scaling', 'Backup & Recovery', 'Security Audit', 'Suporte 24/7']
        : ['Cloud Native Architecture', 'Kubernetes', 'Auto-scaling', 'Backup & Recovery', 'Security Audit', '24/7 Support'],
      basePrice: basePrices.enterprise
    }
  ];

  const methodology = language === 'pt' 
    ? [
        'Análise de Requisitos e Design da API',
        'Arquitetura do Banco de Dados',
        'Desenvolvimento com ASP.NET Core',
        'Implementação de Segurança e Autenticação',
        'Testes e Otimização de Performance',
        'Deploy e Documentação Completa'
      ]
    : [
        'Requirements Analysis and API Design',
        'Database Architecture',
        'Development with ASP.NET Core',
        'Security and Authentication Implementation',
        'Testing and Performance Optimization',
        'Deployment and Complete Documentation'
      ];

  const apiArchitectures = [
    {
      name: 'Controller-based API',
      description: language === 'pt' 
        ? 'API tradicional baseada em controllers com estrutura MVC'
        : 'Traditional controller-based API with MVC structure'
    },
    {
      name: 'Minimal API',
      description: language === 'pt'
        ? 'API leve e performática com abordagem minimalista'
        : 'Lightweight and performant API with minimalist approach'
    },
    {
      name: 'Clean Architecture',
      description: language === 'pt'
        ? 'Arquitetura limpa com separação de concerns e testabilidade'
        : 'Clean architecture with separation of concerns and testability'
    }
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
          className={`relative max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                <FaServer size={28} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-3">
                {language === 'pt' ? 'API & Backend Development' : 'API & Backend Development'}
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {language === 'pt'
                  ? 'APIs robustas e escaláveis com ASP.NET Core, arquitetura moderna e alta performance'
                  : 'Robust and scalable APIs with ASP.NET Core, modern architecture and high performance'
                }
              </p>
            </div>

            {/* Technologies Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                <FaCloud className="mr-3 text-green-500" />
                {language === 'pt' ? 'Tecnologias' : 'Technologies'}
              </h3>
              
              <div className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'
              }`}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${
                        theme === 'dark' 
                          ? 'bg-gray-700 hover:bg-gray-600' 
                          : 'bg-white hover:bg-green-100'
                      } shadow-md`}
                    >
                      <span className="text-2xl mb-2">{tech.icon}</span>
                      <span className="text-sm font-medium text-center">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* API Architectures */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                <FaShieldAlt className="mr-3 text-blue-500" />
                {language === 'pt' ? 'Arquiteturas ASP.NET Core' : 'ASP.NET Core Architectures'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {apiArchitectures.map((arch, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-lg border ${
                      theme === 'dark' 
                        ? 'bg-gray-800 border-gray-700' 
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <h4 className="font-bold text-lg mb-2 text-green-500">{arch.name}</h4>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {arch.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* API Types & Pricing */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                <FaDatabase className="mr-3 text-purple-500" />
                {language === 'pt' ? 'Tipos de API' : 'API Types'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {apiTypes.map((apiType, index) => {
                  const prices = getPrices(apiType.basePrice.baseAmount, apiType.basePrice.baseCurrency);
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                        theme === 'dark'
                          ? 'bg-gray-800 border-gray-700 hover:border-green-500'
                          : 'bg-white border-gray-200 hover:border-green-400'
                      } shadow-lg`}
                    >
                      <h4 className="text-xl font-bold mb-3 text-center">{apiType.type}</h4>
                      <p className={`text-sm mb-4 text-center ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {apiType.description}
                      </p>
                      
                      {/* Prices */}
                      <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
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
                        {apiType.features.map((feature, featureIndex) => (
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
                <FaRocket className="mr-3 text-orange-500" />
                {language === 'pt' ? 'Metodologia' : 'Methodology'}
              </h3>
              <div className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-orange-50'
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
                          ? 'bg-orange-500 text-white' 
                          : 'bg-orange-100 text-orange-600'
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