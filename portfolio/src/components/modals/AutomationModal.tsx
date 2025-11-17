// components/modals/AutomationModal.tsx
'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCurrencyConverter } from '@/hooks/useCurrencyConverter';
import { 
  FaTimes,
  FaRobot,
  FaCog,
  FaSync,
  FaDatabase,
  FaRocket,
  FaClock,
  FaTasks,
  FaMicrosoft,
  FaCloud
} from 'react-icons/fa';
import { 
  SiDotnet,
  SiDocker,
  SiRabbitmq,
  SiRedis,
  SiAmazon
} from 'react-icons/si';

interface AutomationModalProps {
  onClose: () => void;
}

export default function AutomationModal({ onClose }: AutomationModalProps) {
  const { theme } = useTheme();
  const { language } = useLanguage();

  // Preços base em USD para Automação
  const basePrices = {
    basicAutomation: { baseCurrency: 'USD' as const, baseAmount: 400 },
    advancedBots: { baseCurrency: 'USD' as const, baseAmount: 800 },
    workflowSystem: { baseCurrency: 'USD' as const, baseAmount: 1200 },
    enterpriseAutomation: { baseCurrency: 'USD' as const, baseAmount: 2500 }
  };

  const { getPrices, loading } = useCurrencyConverter(basePrices.basicAutomation);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const technologies = [
    { icon: <SiDotnet className="text-purple-500" />, name: '.NET Core' },
    { icon: <FaCog className="text-blue-500" />, name: 'Hangfire' },
    { icon: <SiRabbitmq className="text-orange-500" />, name: 'RabbitMQ' },
    { icon: <SiRedis className="text-red-400" />, name: 'Redis' },
    { icon: <FaDatabase className="text-green-500" />, name: 'SQL Server' },
    { icon: <SiDocker className="text-blue-400" />, name: 'Docker' },
    { icon: <SiAmazon className="text-orange-400" />, name: 'AWS' },
    { icon: <FaMicrosoft className="text-blue-500" />, name: 'Azure' }
  ];

  const automationTypes = [
    {
      type: language === 'pt' ? 'Automação Básica' : 'Basic Automation',
      description: language === 'pt' 
        ? 'Jobs simples e agendamento de tarefas para automatizar processos rotineiros'
        : 'Simple jobs and task scheduling to automate routine processes',
      features: language === 'pt'
        ? ['Jobs Agendados', 'Tarefas Recorrentes', 'Processamento em Background', 'Logs Básicos', 'Entrega em 2 semanas']
        : ['Scheduled Jobs', 'Recurring Tasks', 'Background Processing', 'Basic Logs', 'Delivery in 2 weeks'],
      basePrice: basePrices.basicAutomation
    },
    {
      type: language === 'pt' ? 'Bots Avançados' : 'Advanced Bots',
      description: language === 'pt'
        ? 'Bots inteligentes para automação de processos complexos e integrações'
        : 'Intelligent bots for complex process automation and integrations',
      features: language === 'pt'
        ? ['Bots Customizados', 'Integração APIs', 'Processamento em Lote', 'Monitoramento', 'Dashboard', 'Entrega em 4 semanas']
        : ['Custom Bots', 'API Integration', 'Batch Processing', 'Monitoring', 'Dashboard', 'Delivery in 4 weeks'],
      basePrice: basePrices.advancedBots
    },
    {
      type: language === 'pt' ? 'Sistema de Workflow' : 'Workflow System',
      description: language === 'pt'
        ? 'Sistemas completos de workflow com filas e processamento distribuído'
        : 'Complete workflow systems with queues and distributed processing',
      features: language === 'pt'
        ? ['Workflows Complexos', 'Message Queues', 'Processamento Paralelo', 'Retry Mechanism', 'Escalabilidade', 'Entrega em 6 semanas']
        : ['Complex Workflows', 'Message Queues', 'Parallel Processing', 'Retry Mechanism', 'Scalability', 'Delivery in 6 weeks'],
      basePrice: basePrices.workflowSystem
    },
    {
      type: language === 'pt' ? 'Automação Enterprise' : 'Enterprise Automation',
      description: language === 'pt'
        ? 'Solução completa de automação para grandes volumes e alta disponibilidade'
        : 'Complete automation solution for large volumes and high availability',
      features: language === 'pt'
        ? ['Alta Disponibilidade', 'Auto-scaling', 'Monitoramento Avançado', 'Alertas', 'Backup & Recovery', 'Suporte 24/7']
        : ['High Availability', 'Auto-scaling', 'Advanced Monitoring', 'Alerts', 'Backup & Recovery', '24/7 Support'],
      basePrice: basePrices.enterpriseAutomation
    }
  ];

  const methodology = language === 'pt' 
    ? [
        'Análise de Processos e Requisitos',
        'Design da Arquitetura de Automação',
        'Desenvolvimento com .NET Core',
        'Implementação de Jobs e Workers',
        'Testes e Otimização',
        'Deploy e Monitoramento'
      ]
    : [
        'Process Analysis and Requirements',
        'Automation Architecture Design',
        'Development with .NET Core',
        'Jobs and Workers Implementation',
        'Testing and Optimization',
        'Deployment and Monitoring'
      ];

  const automationCategories = [
    {
      name: 'Background Jobs',
      description: language === 'pt' 
        ? 'Tarefas em segundo plano com Hangfire para processamento assíncrono'
        : 'Background tasks with Hangfire for asynchronous processing'
    },
    {
      name: 'Workers & Services',
      description: language === 'pt'
        ? 'Serviços Windows/Linux workers para processamento contínuo'
        : 'Windows/Linux worker services for continuous processing'
    },
    {
      name: 'Bots & RPA',
      description: language === 'pt'
        ? 'Robotic Process Automation para automação de interfaces'
        : 'Robotic Process Automation for interface automation'
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mb-4">
                <FaRobot size={28} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-3">
                {language === 'pt' ? 'Automação & Bots' : 'Automation & Bots'}
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {language === 'pt'
                  ? 'Sistemas de automação inteligente com .NET Core, workers e processamento em background'
                  : 'Intelligent automation systems with .NET Core, workers and background processing'
                }
              </p>
            </div>

            {/* Technologies Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                <FaCog className="mr-3 text-purple-500" />
                {language === 'pt' ? 'Tecnologias' : 'Technologies'}
              </h3>
              
              <div className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-purple-50'
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
                          : 'bg-white hover:bg-purple-100'
                      } shadow-md`}
                    >
                      <span className="text-2xl mb-2">{tech.icon}</span>
                      <span className="text-sm font-medium text-center">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Automation Categories */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                <FaTasks className="mr-3 text-blue-500" />
                {language === 'pt' ? 'Categorias de Automação' : 'Automation Categories'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {automationCategories.map((category, index) => (
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
                    <h4 className="font-bold text-lg mb-2 text-purple-500">{category.name}</h4>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {category.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Automation Types & Pricing */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                <FaClock className="mr-3 text-green-500" />
                {language === 'pt' ? 'Tipos de Automação' : 'Automation Types'}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {automationTypes.map((automationType, index) => {
                  const prices = getPrices(automationType.basePrice.baseAmount, automationType.basePrice.baseCurrency);
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                        theme === 'dark'
                          ? 'bg-gray-800 border-gray-700 hover:border-purple-500'
                          : 'bg-white border-gray-200 hover:border-purple-400'
                      } shadow-lg`}
                    >
                      <h4 className="text-xl font-bold mb-3 text-center">{automationType.type}</h4>
                      <p className={`text-sm mb-4 text-center ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {automationType.description}
                      </p>
                      
                      {/* Prices */}
                      <div className="mb-4 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
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
                        {automationType.features.map((feature, featureIndex) => (
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