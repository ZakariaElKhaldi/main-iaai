import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, LightbulbIcon } from 'lucide-react';

interface CompanyStoryProps {
  inView: boolean;
}

const CompanyStory: React.FC<CompanyStoryProps> = ({ inView }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Company image */}
      <motion.div
        className="relative rounded-xl overflow-hidden shadow-lg h-[400px]"
        variants={itemVariants}
      >
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
          alt="Our company story" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end">
          <div className="p-6 text-white">
            <div className="text-sm font-medium mb-1">Founded in 2020</div>
            <div className="text-xl font-bold">Transforming Education with AI</div>
          </div>
        </div>
      </motion.div>
      
      {/* Company story */}
      <motion.div variants={itemVariants}>
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Founded by a team of education experts and AI specialists, IAAI was born from a shared vision: 
          to revolutionize how people learn by harnessing the power of artificial intelligence.
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          We recognized that traditional one-size-fits-all education was failing too many learners. 
          Our AI-powered platform adapts to each individual's learning style, pace, and preferences, 
          creating truly personalized educational experiences that drive better outcomes.
        </p>
        
        {/* Mission and vision */}
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Our Mission</h4>
              <p className="text-gray-600">
                To democratize quality education by creating AI-powered learning tools that adapt 
                to each individual's unique needs and learning style.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
              <LightbulbIcon className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Our Vision</h4>
              <p className="text-gray-600">
                A world where personalized, effective education is accessible to everyone, 
                empowering individuals to reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CompanyStory; 