import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from './shared/TextReveal';
import GradientText from '../../hero/componanents/shared/GradientText';

interface FeatureHeadingProps {
  inView: boolean;
}

const FeatureHeading: React.FC<FeatureHeadingProps> = ({ inView }) => {
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

  return (
    <motion.div
      className="text-center"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Pre-heading */}
      <motion.div 
        className="inline-block mb-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
        variants={itemVariants}
      >
        Innovative Features
      </motion.div>
      
      {/* Main heading */}
      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
        variants={itemVariants}
      >
        <TextReveal 
          text="Transforming learning with" 
          delay={0.2} 
          className="inline-block font-bold text-gray-800" 
        />
        <div className="mt-2">
          <GradientText 
            className="inline-block" 
            gradientType="custom"
            customGradient="from-blue-600 via-indigo-500 to-purple-600"
            animate={true}
          >
            cutting-edge AI technology
          </GradientText>
        </div>
      </motion.h2>
      
      {/* Subheading */}
      <motion.p 
        className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl"
        variants={itemVariants}
      >
        Discover how our intelligent platform adapts to your unique learning style,
        creating personalized educational experiences that drive results.
      </motion.p>
    </motion.div>
  );
};

export default FeatureHeading; 