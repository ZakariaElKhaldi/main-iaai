import React from 'react';
import { motion } from 'framer-motion';
import { Book, PenTool, Award, GraduationCap, BarChart2, Globe } from 'lucide-react';
import { Button } from '../../../components/Button';

interface ServicesListProps {
  inView: boolean;
}

const ServicesList: React.FC<ServicesListProps> = ({ inView }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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

  const services = [
    {
      icon: <Book className="w-6 h-6 text-white" />,
      title: 'Personalized Learning Platforms',
      description: 'AI-driven learning environments that adapt to each student\'s unique pace, style, and knowledge gaps.',
      color: 'bg-blue-600',
      link: '#'
    },
    {
      icon: <PenTool className="w-6 h-6 text-white" />,
      title: 'Exam Preparation Services',
      description: 'Targeted preparation programs for standardized tests with personalized study plans and practice.',
      color: 'bg-indigo-600',
      link: '#'
    },
    {
      icon: <Award className="w-6 h-6 text-white" />,
      title: 'Professional Certification Tracks',
      description: 'Industry-recognized certification programs with hands-on projects and real-world applications.',
      color: 'bg-purple-600',
      link: '#'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: 'Academic Tutoring',
      description: 'One-on-one and small group tutoring sessions with AI-assisted learning analytics.',
      color: 'bg-teal-600',
      link: '#'
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      title: 'Learning Analytics',
      description: 'Comprehensive data insights into learning patterns, strengths, and areas for improvement.',
      color: 'bg-amber-600',
      link: '#'
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: 'Global Language Learning',
      description: 'Immersive language programs powered by AI conversation partners and cultural insights.',
      color: 'bg-red-600',
      link: '#'
    }
  ];

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {services.map((service, index) => (
        <motion.div 
          key={index}
          className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          variants={itemVariants}
        >
          <div className={`${service.color} p-4 flex items-center`}>
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white ml-4">{service.title}</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-6">{service.description}</p>
            <Button 
              variant="outline" 
              size="sm"
              className="w-full justify-center"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServicesList; 