// components/ui/Alert.tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaExclamationTriangle, FaTimes } from 'react-icons/fa';

interface AlertProps {
  type: 'success' | 'error';
  message: string;
  isVisible: boolean;
  onClose: () => void;
  autoHide?: boolean;
  duration?: number;
}

export default function Alert({ 
  type, 
  message, 
  isVisible, 
  onClose,
  autoHide = true,
  duration = 6000 
}: AlertProps) {
  
  // Configurações baseadas no tipo
  const config = {
    success: {
      icon: FaCheck,
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30',
      textColor: 'text-green-600',
      iconColor: 'text-green-500'
    },
    error: {
      icon: FaExclamationTriangle,
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-500/30',
      textColor: 'text-red-600',
      iconColor: 'text-red-500'
    }
  };

  const { icon: Icon, bgColor, borderColor, textColor, iconColor } = config[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 30 
          }}
          className={`fixed top-6 right-6 z-50 p-4 rounded-xl border-2 backdrop-blur-sm ${bgColor} ${borderColor} shadow-2xl max-w-sm`}
        >
          <div className="flex items-start space-x-3">
            <div className={`flex-shrink-0 ${iconColor}`}>
              <Icon className="w-5 h-5 mt-0.5" />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className={`font-medium ${textColor} text-sm leading-relaxed`}>
                {message}
              </p>
            </div>
            
            <button
              onClick={onClose}
              className={`flex-shrink-0 p-1 rounded-full hover:bg-black/10 transition-colors ${textColor}`}
            >
              <FaTimes className="w-3 h-3" />
            </button>
          </div>
          
          {/* Progress Bar */}
          {autoHide && (
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: duration / 1000, ease: "linear" }}
              className={`absolute bottom-0 left-0 right-0 h-1 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} origin-left rounded-b-xl`}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}