'use client';
import React, { useState, useEffect } from 'react';
import { FiMessageSquare } from 'react-icons/fi'; // ← CORRETO
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { getWhatsAppData } from '@/utils/whatsapp.utils';

export default function FloatingWhatsApp() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const whatsapp = getWhatsAppData();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [heartbeat, setHeartbeat] = useState(false);

  // Mostra após 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Animação de batimento cardíaco
  useEffect(() => {
    if (!isVisible || isHovering) return;
    
    const interval = setInterval(() => {
      setHeartbeat(true);
      setTimeout(() => setHeartbeat(false), 600);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible, isHovering]);

  const handleClick = () => {
    const url = `https://wa.me/${whatsapp.phone}?text=${encodeURIComponent(whatsapp.messages[language])}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* WhatsApp Flutuante */}
      <div
        className={`fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-40 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <button
          onClick={handleClick}
          onMouseEnter={() => {
            setIsHovering(true);
            setHeartbeat(false);
          }}
          onMouseLeave={() => setIsHovering(false)}
          className={`relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-xl transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-green-500 hover:bg-green-600'
          } ${heartbeat ? 'scale-110' : 'scale-100'} ${
            isHovering ? 'scale-110' : ''
          }`}
          style={{
            boxShadow: heartbeat 
              ? `0 0 0 0 ${theme === 'dark' ? '#059669' : '#10b981'}, 0 0 0 4px ${theme === 'dark' ? 'rgba(5, 150, 105, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`
              : undefined
          }}
        >
          {/* Efeito de pulso */}
          {heartbeat && (
            <div className="absolute inset-0 rounded-full animate-ping opacity-75"
              style={{
                backgroundColor: theme === 'dark' ? '#059669' : '#10b981',
                animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1)'
              }}
            ></div>
          )}

          {/* Ícone de mensagem (WhatsApp) */}
          <FiMessageSquare 
            className={`w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform duration-300 group-hover:scale-110 ${
              heartbeat ? 'scale-110' : 'scale-100'
            }`} 
          />

          {/* Tooltip */}
          <div className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-lg text-xs font-normal whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
            theme === 'dark'
              ? 'bg-gray-800 text-gray-300'
              : 'bg-white text-gray-700 shadow-lg'
          }`}>
            {language === 'pt' ? 'Conversar no WhatsApp' : 'Chat on WhatsApp'}
            <div className={`absolute top-1/2 left-full transform -translate-y-1/2 w-2 h-2 rotate-45 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}></div>
          </div>
        </button>

        {/* Estilos inline */}
        <style jsx>{`
          @keyframes ping {
            0% {
              transform: scale(1);
              opacity: 0.75;
            }
            100% {
              transform: scale(1.5);
              opacity: 0;
            }
          }
          .animate-ping {
            animation: ping 1s cubic-bezier(0, 0, 0.2, 1);
          }
        `}</style>
      </div>
    </>
  );
}