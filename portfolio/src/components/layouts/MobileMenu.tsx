// components/layouts/MobileMenu.tsx
'use client';
import React, { useState } from 'react';
import { 
  FiHome, 
  FiUser, 
  FiFileText, 
  FiImage, 
  FiLayers, 
  FiMail,
  FiMenu,
  FiX,
  FiMoon,
  FiSun,
  FiChevronDown,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiTwitter
} from 'react-icons/fi';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MobileMenu() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const menuItems = [
    { name: t('home'), href: '#home', icon: <FiHome size={20} /> },
    { name: t('about'), href: '#about', icon: <FiUser size={20} /> },
    { name: t('portfolio'), href: '#portfolio', icon: <FiImage size={20} /> },
    { name: t('services'), href: '#services', icon: <FiLayers size={20} /> },
    { name: t('contact'), href: '#contact', icon: <FiMail size={20} /> },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Adyllsxn', icon: <FiGithub size={18} /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/adyllsxn/', icon: <FiLinkedin size={18} /> },
    { name: 'Instagram', href: 'https://www.instagram.com/adyllsxn/', icon: <FiInstagram size={18} /> },
    { name: 'Twitter', href: 'https://x.com/Adyllsxn', icon: <FiTwitter size={18} /> },
  ];

  const languageOptions = [
    { value: 'pt', label: t('portuguese') },
    { value: 'en', label: t('english') }
  ];

  const currentLanguage = languageOptions.find(opt => opt.value === language);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`lg:hidden fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ${
          theme === 'dark' 
            ? 'bg-gray-800 text-white hover:bg-gray-700' 
            : 'bg-white text-gray-900 hover:bg-gray-100'
        } shadow-2xl border ${
          theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
        }`}
      >
        <FiMenu size={20} />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div 
            className={`absolute top-0 right-0 h-full w-80 max-w-full transform transition-transform duration-300 ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-2xl`}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      theme === 'dark'
                        ? 'text-gray-400 hover:bg-gray-800 hover:text-white'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark' 
                    ? 'hover:bg-gray-800 text-gray-400' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Controls */}
            <div className="p-6 border-b border-gray-700">
              <div className="flex justify-between items-center">
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
                    <div className={`absolute top-10 right-0 w-32 rounded-lg shadow-lg border transition-all duration-200 z-50 ${
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
            </div>

            {/* Menu Items */}
            <nav className="p-6">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center py-3 px-4 rounded-xl transition-all duration-200 group ${
                        theme === 'dark'
                          ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <span className={`mr-3 group-hover:text-white ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}