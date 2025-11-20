// components/modals/BackendModal.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import BaseModal from './BaseModal';
import { FaServer, FaDatabase, FaCloud, FaMicrosoft } from 'react-icons/fa';
import { SiDotnet, SiPostgresql, SiMongodb, SiDocker, SiGraphql } from 'react-icons/si';

interface BackendModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BackendModal({ isOpen, onClose }: BackendModalProps) {
  const { language } = useLanguage();

  const technologies = [
    { icon: <SiDotnet className="text-purple-500" />, name: '.NET Core' },
    { icon: <SiPostgresql className="text-blue-400" />, name: 'PostgreSQL' },
    { icon: <SiMongodb className="text-green-500" />, name: 'MongoDB' },
    { icon: <SiGraphql className="text-pink-500" />, name: 'GraphQL' },
    { icon: <SiDocker className="text-blue-400" />, name: 'Docker' },
    { icon: <FaMicrosoft className="text-blue-500" />, name: 'Azure' }
  ];

  const apiTypes = [
    {
      title: language === 'pt' ? 'API RESTful' : 'RESTful API',
      description: language === 'pt' 
        ? 'APIs seguindo padrões REST com documentação completa e testes'
        : 'REST-compliant APIs with complete documentation and testing',
      features: language === 'pt'
        ? ['Endpoints REST', 'Documentação Swagger', 'Versionamento', 'Testes Unitários']
        : ['REST Endpoints', 'Swagger Documentation', 'Versioning', 'Unit Tests']
    },
    {
      title: language === 'pt' ? 'GraphQL APIs' : 'GraphQL APIs',
      description: language === 'pt'
        ? 'APIs flexíveis com GraphQL para queries eficientes e schema tipado'
        : 'Flexible APIs with GraphQL for efficient queries and typed schema',
      features: language === 'pt'
        ? ['Queries Flexíveis', 'Schema Tipado', 'Subscriptions', 'Resolvers Otimizados']
        : ['Flexible Queries', 'Typed Schema', 'Subscriptions', 'Optimized Resolvers']
    },
    {
      title: language === 'pt' ? 'Minimal APIs' : 'Minimal APIs',
      description: language === 'pt'
        ? 'APIs leves e performáticas com abordagem minimalista do .NET'
        : 'Lightweight and performant APIs with .NET minimalist approach',
      features: language === 'pt'
        ? ['Performance Otimizada', 'Código Limpo', 'Setup Rápido', 'Manutenção Simplificada']
        : ['Optimized Performance', 'Clean Code', 'Quick Setup', 'Simplified Maintenance']
    }
  ];

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={language === 'pt' ? 'API & Backend Development' : 'API & Backend Development'}
      description={language === 'pt'
        ? 'APIs robustas e escaláveis com .NET Core, GraphQL, bancos relacionais e NoSQL'
        : 'Robust and scalable APIs with .NET Core, GraphQL, relational and NoSQL databases'
      }
      icon={<FaServer size={28} className="text-white" />}
      iconColor="#10B981" // green-500
    >
      {/* Technologies */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
          <FaCloud className="mr-3 text-green-500" />
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

      {/* API Types */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
          <FaDatabase className="mr-3 text-purple-500" />
          {language === 'pt' ? 'Tipos de API' : 'API Types'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {apiTypes.map((api, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl border border-gray-700 dark:border-gray-600 bg-gray-800/20 dark:bg-gray-700/20 hover:border-green-400 transition-colors duration-300"
            >
              <h4 className="text-xl font-bold mb-3 text-green-400">{api.title}</h4>
              <p className="text-sm mb-4 text-gray-300 dark:text-gray-400">
                {api.description}
              </p>
              <ul className="space-y-2">
                {api.features.map((feature, featureIndex) => (
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