import React from 'react';
import { motion } from 'framer-motion';

interface AboutHeadingProps {
  inView: boolean;
}

const AboutHeading: React.FC<AboutHeadingProps> = ({ inView }) => {
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
        className="inline-block mb-2 px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
        variants={itemVariants}
      >
        About Us
      </motion.div>
      
      {/* Main heading */}
      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
        variants={itemVariants}
      >
        Revolutionizing Education with
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> AI Technology</span>
      </motion.h2>
      
      {/* Subheading */}
      <motion.p 
        className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl"
        variants={itemVariants}
      >
        We're on a mission to transform the educational landscape by creating smarter, 
        more personalized learning experiences through artificial intelligence.
      </motion.p>
    </motion.div>
  );
};

export default AboutHeading; 