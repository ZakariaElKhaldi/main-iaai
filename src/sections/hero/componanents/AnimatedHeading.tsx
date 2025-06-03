import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from './shared/TextReveal';
import GradientText from './shared/GradientText';
import RotatingText from '../componanents/RotatingText';
import { Sparkles } from 'lucide-react';

interface AnimatedHeadingProps {
  inView: boolean;
  scrollYProgress?: any;
}

/**
 * An animated heading component for the hero section
 * Enhanced with modern typography and improved spacing
 */
export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  inView,
  scrollYProgress
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

  // Words to cycle through for the rotating text - more impactful verbs
  const rotatingWords = ["accelerate", "transform", "revolutionize", "personalize"];

  return (
    <motion.h1 
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <TextReveal text="Unlock" delay={0.1} className="font-extrabold" />
        <TextReveal text="Your" delay={0.2} className="font-extrabold" />
      </div>
      
      <div className="relative mb-2 inline-block">
        <GradientText 
          className="relative block leading-tight" 
          gradientType="custom"
          customGradient="from-blue-500 via-blue-600 to-indigo-700"
        >
          Learning Potential
        </GradientText>
        <Sparkles className="absolute -top-4 -right-8 text-amber-400 animate-pulse" size={32} />
      </div>
      
      {/* Fixed layout container for the rotating text and "with AI" */}
      <div className="flex items-center mt-2">
        <div className="flex-shrink-0 mr-2">
          <RotatingText
            texts={rotatingWords}
            mainClassName="px-3 bg-blue-500 text-white overflow-hidden py-1 sm:py-1.5 justify-center rounded-lg"
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
        <div className="flex-shrink-0">
          <span className="text-blue-600 font-black text-shadow-sm whitespace-nowrap">with AI</span>
        </div>
      </div>

      {/* Hidden paths for guiding user's eye */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" aria-hidden="true">
        <motion.path
          d="M20,50 C120,30 220,40 320,50"
          fill="none"
          stroke="rgba(37, 99, 235, 0.3)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.path
          d="M20,70 C150,100 250,80 320,70"
          fill="none"
          stroke="rgba(13, 148, 136, 0.3)"
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