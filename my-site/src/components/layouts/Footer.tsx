'use client';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { getFooterData } from '@/utils/footer.utils';

export default function Footer() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const footer = getFooterData();

  return (
    <footer className="py-8 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className={`text-sm font-light ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
          }`}>
            {footer.copyright[language]}
          </p>
          <p className={`text-xs font-light mt-2 ${
            theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            Developer & Designer
          </p>
        </div>
      </div>
    </footer>
  );
}