import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from './shared/TextReveal';
import GradientText from './shared/GradientText';
import RotatingText from '../componanents/RotatingText';

interface AnimatedHeadingProps {
  inView: boolean;
}

/**
 * An animated heading component for the hero section
 * Enhanced with modern typography and improved spacing
 */
export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  inView
}) => {
  // Animation variants for fade-in effects
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Words to cycle through for the rotating text - more impactful adjectives
  const rotatingWords = ["smarter", "faster", "deeper", "better"];

  return (
    <motion.h1 
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      {/* Combined "Learn" and rotating words on the same line */}
      <div className="flex items-center gap-3 mb-4">
        <TextReveal 
          text="Learn" 
          delay={0.1} 
          className="font-extrabold text-gray-800" 
        />
        <div className="flex-shrink-0">
          <RotatingText
            texts={rotatingWords}
            mainClassName="px-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white overflow-hidden py-1 sm:py-1.5 justify-center rounded-lg shadow-sm"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
      </div>
      
      <div className="relative mt-1 mb-2">
        <GradientText 
          className="relative block leading-tight" 
          gradientType="custom"
          customGradient="from-blue-600 via-blue-500 to-indigo-600"
          animate={true}
        >
          with Intelligent AI
        </GradientText>
      </div>

      {/* Hidden paths for guiding user's eye */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" aria-hidden="true">
        <motion.path
          d="M20,50 C120,30 220,40 320,50"
          fill="none"
          stroke="rgba(59, 130, 246, 0.3)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.path
          d="M20,70 C150,100 250,80 320,70"
          fill="none"
          stroke="rgba(79, 70, 229, 0.3)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
      </svg>
    </motion.h1>
  );
};

export default AnimatedHeading; 