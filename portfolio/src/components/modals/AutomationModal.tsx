// components/modals/AutomationModal.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import BaseModal from './BaseModal';
import { FaRobot, FaCog, FaSync, FaCode } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';

interface AutomationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AutomationModal({ isOpen, onClose }: AutomationModalProps) {
  const { language } = useLanguage();

  const technologies = [
    { icon: <SiDotnet className="text-purple-500" />, name: '.NET Core' },
    { icon: <FaCog className="text-blue-500" />, name: 'Hangfire' },
    { icon: <FaSync className="text-green-500" />, name: 'BackgroundService' },
    { icon: <FaCode className="text-cyan-500" />, name: 'Web Scraping' },
    { icon: <div className="text-yellow-500 text-2xl">+2</div>, name: language === 'pt' ? 'e mais...' : 'and more...' }
  ];

  const automationTypes = [
    {
      title: language === 'pt' ? 'Bots & RPA' : 'Bots & RPA',
      description: language === 'pt'
        ? 'Automação de processos robóticos para tarefas repetitivas e web scraping'
        : 'Robotic process automation for repetitive tasks and web scraping',
      features: language === 'pt'
        ? ['Web Scraping', 'Automação de UI', 'Integração APIs', 'Relatórios Automáticos', 'Processamento de Dados']
        : ['Web Scraping', 'UI Automation', 'API Integration', 'Automatic Reports', 'Data Processing']
    },
    {
      title: language === 'pt' ? 'Jobs & Workers' : 'Jobs & Workers',
      description: language === 'pt'
        ? 'Sistemas de processamento em background e tarefas agendadas'
        : 'Background processing systems and scheduled tasks',
      features: language === 'pt'
        ? ['Tarefas Agendadas', 'Processamento em Background', 'Filas de Trabalho', 'Monitoramento', 'Execução Contínua']
        : ['Scheduled Tasks', 'Background Processing', 'Work Queues', 'Monitoring', 'Continuous Execution']
    }
  ];

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={language === 'pt' ? 'Automação & Bots' : 'Automation & Bots'}
      description={language === 'pt'
        ? 'Sistemas de automação com .NET para processos repetitivos, web scraping e tarefas em background'
        : 'Automation systems with .NET for repetitive processes, web scraping and background tasks'
      }
      icon={<FaRobot size={28} className="text-white" />}
      iconColor="#8B5CF6" // purple-500
    >
      {/* Technologies */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
          <FaCog className="mr-3 text-purple-500" />
          {language === 'pt' ? 'Tecnologias' : 'Technologies'}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-4 rounded-lg bg-gray-800/40 dark:bg-gray-700/40 shadow-md hover:scale-105 transition-transform duration-300"
            >
              <span className="text-2xl mb-2">{tech.icon}</span>
              <span className="text-sm font-medium text-center">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Automation Types */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
          <FaRobot className="mr-3 text-blue-500" />
          {language === 'pt' ? 'Especializações' : 'Specializations'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {automationTypes.map((automation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl border border-gray-700 dark:border-gray-600 bg-gray-800/20 dark:bg-gray-700/20 hover:border-purple-400 transition-colors duration-300"
            >
              <h4 className="text-xl font-bold mb-3 text-purple-400">{automation.title}</h4>
              <p className="text-sm mb-4 text-gray-300 dark:text-gray-400">
                {automation.description}
              </p>
              <ul className="space-y-2">
                {automation.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-300 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </BaseModal>
  );
}