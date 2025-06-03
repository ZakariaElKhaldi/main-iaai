import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingWordsProps {
  words: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
}

/**
 * Component that rotates through a list of words with animation
 * Enhanced with smoother transitions and improved typography
 */
export const RotatingWords: React.FC<RotatingWordsProps> = ({ 
  words, 
  interval = 2000, 
  className = "",
  textClassName = "text-blue-600 font-bold"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % words.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [words, interval]);
  
  return (
    <div className={`relative h-[1.2em] overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className={`absolute inset-0 ${textClassName} tracking-tight`}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.25, 0.1, 0.25, 1],
            opacity: { duration: 0.3 }
          }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RotatingWords; 