import React from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FloatingBadgeProps {
  children: ReactNode;
  delay?: number;
  inView?: boolean;
  className?: string;
  hoverEffect?: boolean;
}

/**
 * A reusable floating badge component with hover effects
 */
export const FloatingBadge: React.FC<FloatingBadgeProps> = ({ 
  children, 
  delay = 0, 
  inView = true,
  className = '',
  hoverEffect = true
}) => {
  return (
    <motion.div
      className={`inline-flex items-center space-x-3 bg-white/70 backdrop-blur-sm 
                 px-6 py-3 rounded-full shadow-lg shadow-blue-500/10 border 
                 border-blue-100/50 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.7, delay }}
      whileHover={hoverEffect ? { 
        y: -5, 
        boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.2)',
        transition: { duration: 0.2 }
      } : undefined}
    >
      {children}
    </motion.div>
  );
};

export default FloatingBadge; 