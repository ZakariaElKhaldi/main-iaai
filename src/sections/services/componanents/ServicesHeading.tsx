import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';

interface ServicesHeadingProps {
  inView: boolean;
}

const ServicesHeading: React.FC<ServicesHeadingProps> = ({ inView }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const highlightVariants = {
    hidden: { width: 0 },
    visible: { 
      width: '100%',
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4
      }
    }
  };

  const floatVariants = {
    hidden: { y: 0 },
    visible: {
      y: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="text-center relative"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Decorative elements */}
      <motion.div 
        className="absolute -top-10 -left-10 w-20 h-20 text-blue-500 opacity-20"
        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
        animate={inView ? { opacity: 0.2, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M47.7,-57.2C59,-47.3,63.6,-29.7,67.4,-11.1C71.2,7.4,74.3,26.9,67.1,41.8C60,56.8,42.5,67.2,24.4,70.8C6.3,74.3,-12.4,71,-29.2,63.5C-46,56,-60.9,44.4,-69.5,28.7C-78.1,13,-80.5,-6.7,-73.2,-21.9C-66,-37.1,-49.2,-47.9,-33.5,-56.6C-17.8,-65.2,-3.1,-71.8,10.6,-70.8C24.2,-69.9,36.3,-67.2,47.7,-57.2Z" transform="translate(100 100)" />
        </svg>
      </motion.div>
      
      <motion.div 
        className="absolute -bottom-5 -right-10 w-24 h-24 text-indigo-500 opacity-20"
        initial={{ opacity: 0, scale: 0.8, rotate: 20 }}
        animate={inView ? { opacity: 0.2, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: 20 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M47.3,-57.2C59.9,-46.8,68.2,-30.8,71.6,-13.5C75,3.8,73.5,22.5,64.8,36.3C56.1,50.1,40.1,59.1,23.4,65.2C6.7,71.3,-10.7,74.4,-25.9,69.6C-41.1,64.8,-54.1,52.1,-62.3,36.5C-70.5,20.9,-73.8,2.4,-70.8,-15.8C-67.7,-34,-58.2,-51.8,-44.1,-62.1C-30,-72.4,-11.4,-75.1,3.9,-69.6C19.2,-64.1,34.7,-67.6,47.3,-57.2Z" transform="translate(100 100)" />
        </svg>
      </motion.div>
      
      {/* Floating particles */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-blue-400 opacity-60"
        variants={floatVariants}
        animate="visible"
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-indigo-400 opacity-60"
        variants={floatVariants}
        animate="visible"
        transition={{ delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-purple-400 opacity-40"
        variants={floatVariants}
        animate="visible"
        transition={{ delay: 2 }}
      />
      
      {/* Pre-heading */}
      <motion.div 
        className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium shadow-sm"
        variants={itemVariants}
      >
        <Zap size={16} className="text-blue-600" />
        <span>Our Services</span>
      </motion.div>
      
      {/* Main heading */}
      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight relative inline-block"
        variants={itemVariants}
      >
        <span className="relative z-10">Comprehensive Educational</span>
        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent block md:inline-block"> Solutions</span>
        <motion.span 
          className="absolute bottom-0 left-0 h-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full -z-10"
          variants={highlightVariants}
        ></motion.span>
      </motion.h2>
      
      {/* Subheading */}
      <motion.p 
        className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
        variants={itemVariants}
      >
        Discover our range of AI-powered educational services designed to enhance
        learning outcomes and provide personalized educational experiences.
      </motion.p>
      
      {/* Animated divider */}
      <motion.div
        className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mx-auto mt-8"
        initial={{ width: 0, opacity: 0 }}
        animate={inView ? { width: 96, opacity: 1 } : { width: 0, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      ></motion.div>
      
      {/* Sparkle effect */}
      <motion.div 
        className="absolute -right-4 top-1/4 text-yellow-400"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { 
          scale: [0, 1.2, 1],
          opacity: [0, 1, 0.8]
        } : { scale: 0, opacity: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Sparkles size={20} />
      </motion.div>
      <motion.div 
        className="absolute -left-2 bottom-1/4 text-yellow-400"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { 
          scale: [0, 1.2, 1],
          opacity: [0, 1, 0.8]
        } : { scale: 0, opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Sparkles size={16} />
      </motion.div>
    </motion.div>
  );
};

export default ServicesHeading; 