import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, BookOpen, Clock, Share2, Code, Sparkles } from 'lucide-react';

interface FeatureCardsProps {
  inView: boolean;
}

const FeatureCards: React.FC<FeatureCardsProps> = ({ inView }) => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      title: 'AI-Powered Learning',
      description: 'Personalized education that adapts to each student\'s unique learning style and pace.',
      color: 'blue'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-purple-600" />,
      title: 'Comprehensive Curriculum',
      description: 'Extensively researched content developed by education experts and AI specialists.',
      color: 'purple'
    },
    {
      icon: <Clock className="w-6 h-6 text-teal-600" />,
      title: 'Real-time Progress Tracking',
      description: 'Monitor learning progress with detailed analytics and personalized insights.',
      color: 'teal'
    },
    {
      icon: <Share2 className="w-6 h-6 text-indigo-600" />,
      title: 'Collaborative Learning',
      description: 'Connect with peers and instructors in interactive virtual learning environments.',
      color: 'indigo'
    },
    {
      icon: <Code className="w-6 h-6 text-pink-600" />,
      title: 'Coding & Technical Skills',
      description: 'Learn practical programming and tech skills with hands-on interactive exercises.',
      color: 'pink'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      title: 'Creative Project Tools',
      description: 'Express your ideas with integrated creative tools for all types of projects.',
      color: 'amber'
    }
  ];

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
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const getCardColorClasses = (color: string) => {
    switch(color) {
      case 'blue':
        return 'bg-blue-50 border-blue-100 hover:border-blue-200';
      case 'purple':
        return 'bg-purple-50 border-purple-100 hover:border-purple-200';
      case 'teal':
        return 'bg-teal-50 border-teal-100 hover:border-teal-200';
      case 'indigo':
        return 'bg-indigo-50 border-indigo-100 hover:border-indigo-200';
      case 'pink':
        return 'bg-pink-50 border-pink-100 hover:border-pink-200';
      case 'amber':
        return 'bg-amber-50 border-amber-100 hover:border-amber-200';
      default:
        return 'bg-gray-50 border-gray-100 hover:border-gray-200';
    }
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className={`rounded-xl p-6 border transition-all duration-300 ${getCardColorClasses(feature.color)} hover:shadow-md`}
          variants={itemVariants}
        >
          <div className="mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-gray-600 mb-4">{feature.description}</p>
          <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
            <span>Learn more</span>
            <ArrowRight size={16} className="ml-1" />
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeatureCards; 