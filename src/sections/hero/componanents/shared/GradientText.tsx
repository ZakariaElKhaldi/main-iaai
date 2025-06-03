import React from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  gradientType?: 'blue' | 'teal' | 'purple' | 'custom';
  customGradient?: string;
  animate?: boolean;
  delay?: number;
}

/**
 * A reusable component for displaying text with animated gradient effects
 * Enhanced with more vibrant gradients and smoother animations
 */
export const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  className = "",
  gradientType = 'blue',
  customGradient,
  animate = true,
  delay = 0
}) => {
  // Determine the gradient style based on the type
  const getGradientClass = () => {
    if (customGradient) return customGradient;
    
    switch(gradientType) {
      case 'blue':
        return 'from-blue-500 via-blue-600 to-indigo-700';
      case 'teal':
        return 'from-teal-400 via-cyan-500 to-blue-600';
      case 'purple':
        return 'from-purple-500 via-indigo-600 to-blue-700';
      default:
        return 'from-blue-500 via-blue-600 to-indigo-700';
    }
  };

  return (
    <motion.span
      className={`bg-gradient-to-r ${getGradientClass()} bg-clip-text text-transparent ${animate ? 'bg-300% animate-gradient' : ''} ${className}`}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 1.2, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{
        backgroundSize: animate ? '200% auto' : 'auto',
        backgroundPosition: animate ? 'left center' : 'center'
      }}
    >
      {children}
    </motion.span>
  );
};

export default GradientText; 