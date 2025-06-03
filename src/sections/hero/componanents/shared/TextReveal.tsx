import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  duration?: number;
}

/**
 * A component that reveals text with a sliding animation
 * Enhanced with smoother animations and better typography
 */
export const TextReveal: React.FC<TextRevealProps> = ({ 
  text, 
  delay = 0, 
  direction = 'up',
  className = '',
  duration = 0.8
}) => {
  // Set initial and animate properties based on direction
  const getAnimationProps = () => {
    switch (direction) {
      case 'up':
        return {
          initial: { y: '100%', opacity: 0 },
          animate: { y: '0%', opacity: 1 }
        };
      case 'down':
        return {
          initial: { y: '-100%', opacity: 0 },
          animate: { y: '0%', opacity: 1 }
        };
      case 'left':
        return {
          initial: { x: '100%', opacity: 0 },
          animate: { x: '0%', opacity: 1 }
        };
      case 'right':
        return {
          initial: { x: '-100%', opacity: 0 },
          animate: { x: '0%', opacity: 1 }
        };
      default:
        return {
          initial: { y: '100%', opacity: 0 },
          animate: { y: '0%', opacity: 1 }
        };
    }
  };

  const animProps = getAnimationProps();

  return (
    <div className={`relative overflow-hidden inline-block ${className}`}>
      <motion.div
        initial={animProps.initial}
        animate={animProps.animate}
        transition={{ 
          duration, 
          delay, 
          ease: [0.25, 0.1, 0.25, 1]
        }}
        className="tracking-tight leading-tight"
      >
        {text}
      </motion.div>
    </div>
  );
};

export default TextReveal; 