// components/layouts/Sidebar.tsx
'use client';
import React, { useState } from 'react';
import { 
  FiHome, 
  FiUser, 
  FiFileText, 
  FiImage, 
  FiLayers, 
  FiMail,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiMoon,
  FiSun,
  FiChevronDown
} from 'react-icons/fi';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const menuItems = [
    { name: t('home'), href: '#home', icon: <FiHome size={24} /> },
    { name: t('about'), href: '#about', icon: <FiUser size={24} /> },
    { name: t('portfolio'), href: '#portfolio', icon: <FiImage size={24} /> },
    { name: t('services'), href: '#services', icon: <FiLayers size={24} /> },
    { name: t('contact'), href: '#contact', icon: <FiMail size={24} /> },
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://x.com/Adyllsxn', icon: <FiTwitter size={16} /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/adyllsxn/', icon: <FiLinkedin size={16} /> },
    { name: 'Instagram', href: 'https://www.instagram.com/adyllsxn/', icon: <FiInstagram size={16} /> },
    { name: 'Github', href: 'https://github.com/Adyllsxn', icon: <FiGithub size={16} /> },
  ];

  const languageOptions = [
    { value: 'pt', label: t('portuguese') },
    { value: 'en', label: t('english') }
  ];

  const currentLanguage = languageOptions.find(opt => opt.value === language);

  return (
    <div 
      className="fixed left-6 top-20 bottom-20 w-72 rounded-2xl border flex flex-col p-4 shadow-2xl transition-all duration-300 backdrop-blur-sm"
      style={{
        backgroundColor: theme === 'dark' ? '#1B1B1B' : 'rgba(255, 255, 255, 0.8)',
        borderColor: theme === 'dark' ? '#374151' : 'rgba(209, 213, 219, 0.6)'
      }}
    >
      
      {/* Controls - Dark/Light e PT/EN */}
      <div className="flex justify-between items-center mb-6 px-2">
        {/* Dark/Light Toggle */}
        <div className="flex items-center space-x-2">
          <FiMoon size={16} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
          <button
            onClick={toggleTheme}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${
              theme === 'dark' ? 'bg-gray-700 justify-end' : 'bg-gray-300 justify-start'
            }`}
          >
            <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
          </button>
          <FiSun size={16} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} />
        </div>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
              theme === 'dark' 
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <span className="whitespace-nowrap">
              {currentLanguage?.label}
            </span>
            <FiChevronDown size={14} className={`transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown */}
          {isLanguageOpen && (
            <div className={`absolute top-10 right-0 w-36 rounded-lg shadow-lg border transition-all duration-200 z-50 ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}>
              {languageOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    if (option.value !== language) {
                      toggleLanguage();
                    }
                    setIsLanguageOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-sm transition-colors whitespace-nowrap ${
                    option.value === language
                      ? theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700'
                      : theme === 'dark' ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'
                  } ${option.value === 'pt' ? 'rounded-t-lg' : 'rounded-b-lg'}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Menu Navigation */}
      <nav className="flex-1 flex flex-col justify-center">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`flex items-center py-2 px-3 rounded-xl transition-all duration-200 group ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:bg-gray-700/80 hover:text-white'
                    : 'text-gray-700 hover:bg-gray-800/80 hover:text-white'
                }`}
              >
                <span className={`mr-3 group-hover:text-white ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {item.icon}
                </span>
                <span className="font-medium text-sm whitespace-nowrap">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="mt-auto">
        <div className="flex justify-center space-x-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className={`w-8 h-8 flex items-center justify-center rounded-lg hover:text-white transition-all duration-200 ${
                theme === 'dark'
                  ? 'bg-gray-800/80 text-gray-400 hover:bg-gray-600'
                  : 'bg-gray-200/80 text-gray-600 hover:bg-gray-800/80'
              }`}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}