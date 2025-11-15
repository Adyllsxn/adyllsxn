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

// Textos traduzidos
const translations = {
  pt: {
    home: 'Início',
    about: 'Sobre',
    resume: 'Currículo',
    portfolio: 'Portfólio',
    services: 'Serviços',
    contact: 'Contato',
    viewWork: 'Ver Meu Trabalho',
    getInTouch: 'Entrar em Contato',
    aboutMe: 'Sobre Mim',
    creativeDeveloper: 'Desenvolvedor Criativo & Designer',
    passionateDeveloper: 'Desenvolvedor apaixonado com 5+ anos de experiência criando soluções digitais.',
    projects: 'Projetos',
    years: 'Anos',
    satisfaction: 'Satisfação',
    portuguese: 'Português',
    english: 'Inglês'
  },
  en: {
    home: 'Home',
    about: 'About',
    resume: 'Resume',
    portfolio: 'Portfolio',
    services: 'Services',
    contact: 'Contact',
    viewWork: 'View My Work',
    getInTouch: 'Get In Touch',
    aboutMe: 'About Me',
    creativeDeveloper: 'Creative Developer & Designer',
    passionateDeveloper: 'Passionate developer with 5+ years of experience creating digital solutions.',
    projects: 'Projects',
    years: 'Years',
    satisfaction: 'Satisfaction',
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