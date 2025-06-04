import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, LineChart, Sparkles, Clock, Heart } from 'lucide-react';

interface CompanyValuesProps {
  inView: boolean;
}

const CompanyValues: React.FC<CompanyValuesProps> = ({ inView }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const values = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: 'Student-Centered',
      description: 'We put learners first in everything we do, focusing on their unique needs and goals.'
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      title: 'Integrity & Trust',
      description: 'We maintain the highest standards of ethics and transparency in our operations.'
    },
    {
      icon: <LineChart className="w-6 h-6 text-purple-600" />,
      title: 'Data-Driven Excellence',
      description: 'We leverage data insights to continuously improve our educational approaches.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-teal-600" />,
      title: 'Innovation',
      description: 'We constantly explore new ideas and technologies to enhance learning experiences.'
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      title: 'Efficiency',
      description: 'We optimize learning processes to help students achieve more in less time.'
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-600" />,
      title: 'Passion for Education',
      description: 'We\'re driven by a genuine love for learning and helping others succeed.'
    }
  ];

  return (
    <div>
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Core Values</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          These principles guide everything we do as we work to transform education through AI
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {values.map((value, index) => (
          <motion.div 
            key={index}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            variants={itemVariants}
          >
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              {value.icon}
            </div>
            <h4 className="text-xl font-bold mb-2">{value.title}</h4>
            <p className="text-gray-600">{value.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CompanyValues; 