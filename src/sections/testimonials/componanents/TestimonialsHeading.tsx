import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

interface TestimonialsHeadingProps {
  inView: boolean;
}

const TestimonialsHeading: React.FC<TestimonialsHeadingProps> = ({ inView }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Add GSAP animation for the gradient text
  useEffect(() => {
    if (inView) {
      const gradientText = document.querySelector('.gradient-text');
      if (gradientText) {
        gsap.fromTo(
          gradientText,
          { backgroundPosition: '0% 50%' },
          { 
            backgroundPosition: '100% 50%', 
            duration: 5, 
            repeat: -1, 
            yoyo: true,
            ease: 'sine.inOut' 
          }
        );
      }
    }
    
    return () => {
      gsap.killTweensOf('.gradient-text');
    };
  }, [inView]);

  return (
    <motion.div
      className="text-center"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Pre-heading with enhanced animation */}
      <motion.div 
        className="inline-block mb-2 px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
        variants={itemVariants}
        whileHover={{ scale: 1.05, backgroundColor: '#dbeafe' }}
      >
        Testimonials
      </motion.div>
      
      {/* Main heading with enhanced animation */}
      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
        variants={itemVariants}
      >
        What Our <motion.span 
          className="gradient-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent bg-size-200"
          style={{ backgroundSize: '200% 100%' }}
          whileHover={{ scale: 1.05 }}
        >Students Say</motion.span>
      </motion.h2>
      
      {/* Subheading with enhanced animation */}
      <motion.p 
        className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl"
        variants={itemVariants}
        whileInView={{ 
          opacity: [0.8, 1], 
          transition: { duration: 2, repeat: Infinity, repeatType: 'reverse' } 
        }}
      >
        Hear from students and professionals who have transformed their educational 
        journey with our AI-powered learning platform.
      </motion.p>
    </motion.div>
  );
};

export default TestimonialsHeading; 