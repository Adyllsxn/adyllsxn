// contexts/LanguageContext.tsx
'use client';
import React, { createContext, useContext, useState } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 🔴 ATUALIZADO: Adicionado 'projects' e 'process'
const translations = {
  pt: {
    home: 'Início',
    about: 'Sobre',
    services: 'Serviços',
    projects: 'Projetos',    
    process: 'Processo',   
    contact: 'Contato',
    portuguese: 'Português',
    english: 'Inglês'
  },
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    projects: 'Projects',    
    process: 'Process',      
    contact: 'Contact',
    // ... outras traduções existentes
    portuguese: 'Portuguese',
    english: 'English'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};