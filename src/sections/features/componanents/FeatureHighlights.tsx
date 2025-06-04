import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface FeatureHighlightsProps {
  inView: boolean;
  scrollYProgress: MotionValue<number>;
}

const FeatureHighlights: React.FC<FeatureHighlightsProps> = ({ 
  inView,
  scrollYProgress 
}) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Transform scroll progress for parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const stats = [
    { value: '95%', label: 'Student Satisfaction', color: 'blue' },
    { value: '2.5x', label: 'Learning Efficiency', color: 'purple' },
    { value: '50K+', label: 'Active Learners', color: 'indigo' },
  ];

  return (
    <div className="relative">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Our Impact in <span className="text-blue-600">Numbers</span>
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We're transforming education with proven results and measurable outcomes
        </p>
      </motion.div>
      
      {/* Stats grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            className={`text-center p-8 rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow duration-300`}
            variants={itemVariants}
            style={{ y: index === 0 ? y1 : index === 1 ? y2 : y3 }}
          >
            <div className={`text-4xl md:text-5xl font-bold mb-2 text-${stat.color}-600`}>
              {stat.value}
            </div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Feature highlight */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              Spotlight Feature
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Adaptive Learning Paths</h3>
            <p className="text-gray-600 mb-6">
              Our AI technology creates customized learning pathways for each student, adapting to their strengths, weaknesses, and learning pace. This personalized approach ensures efficient and effective knowledge acquisition.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                'Personalized curriculum sequences',
                'Real-time difficulty adjustments',
                'Focus on knowledge gaps',
                'Emphasis on different learning styles'
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                >
                  <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {item}
                </motion.li>
              ))}
            </ul>
            
            <motion.button 
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn how it works
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Adaptive Learning" 
              className="w-full h-auto" 
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FeatureHighlights; 