import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, PenTool, Award, GraduationCap, BarChart2, Globe, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '../../../components/Button';

interface ServicesListProps {
  inView: boolean;
}

interface ServiceFeature {
  text: string;
}

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  accent: string;
  gradient: string;
  stats: string;
  features: ServiceFeature[];
}

const ServicesList: React.FC<ServicesListProps> = ({ inView }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services: Service[] = [
    {
      icon: Book,
      title: 'Personalized Learning',
      description: 'AI adapts to your unique learning DNA',
      color: 'from-blue-600 to-cyan-500',
      accent: 'blue',
      gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      stats: '94% Success Rate',
      features: [
        { text: 'Adaptive learning paths' },
        { text: 'Personalized content delivery' },
        { text: 'Progress tracking dashboard' }
      ]
    },
    {
      icon: PenTool,
      title: 'Exam Mastery',
      description: 'Turn test anxiety into confidence',
      color: 'from-indigo-600 to-purple-500',
      accent: 'indigo',
      gradient: 'bg-gradient-to-br from-indigo-50 to-purple-50',
      stats: '40% Score Boost',
      features: [
        { text: 'Practice test simulations' },
        { text: 'Targeted weakness improvement' },
        { text: 'Strategic study planning' }
      ]
    },
    {
      icon: Award,
      title: 'Career Acceleration',
      description: 'Industry credentials that open doors',
      color: 'from-purple-600 to-pink-500',
      accent: 'purple',
      gradient: 'bg-gradient-to-br from-purple-50 to-pink-50',
      stats: '3x Faster Growth',
      features: [
        { text: 'Industry-recognized certifications' },
        { text: 'Job placement assistance' },
        { text: 'Career path optimization' }
      ]
    },
    {
      icon: GraduationCap,
      title: 'Expert Mentorship',
      description: 'Learn from the best, become the best',
      color: 'from-teal-600 to-green-500',
      accent: 'teal',
      gradient: 'bg-gradient-to-br from-teal-50 to-green-50',
      stats: '1:1 Guidance',
      features: [
        { text: 'Live coaching sessions' },
        { text: 'Industry expert matching' },
        { text: 'Personalized feedback' }
      ]
    },
    {
      icon: BarChart2,
      title: 'Progress Intelligence',
      description: 'Your growth, visualized and optimized',
      color: 'from-amber-600 to-orange-500',
      accent: 'amber',
      gradient: 'bg-gradient-to-br from-amber-50 to-orange-50',
      stats: 'Real-time Insights',
      features: [
        { text: 'AI-powered analytics' },
        { text: 'Predictive performance models' },
        { text: 'Visual learning maps' }
      ]
    },
    {
      icon: Globe,
      title: 'Global Fluency',
      description: 'Speak like a native, think like a local',
      color: 'from-red-600 to-rose-500',
      accent: 'red',
      gradient: 'bg-gradient-to-br from-red-50 to-rose-50',
      stats: '12 Languages',
      features: [
        { text: 'Immersive language environments' },
        { text: 'Cultural context learning' },
        { text: 'Conversation practice with AI' }
      ]
    }
  ];

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
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      }
    }
  };

  const glowVariants = {
    rest: { opacity: 0, scale: 0.8 },
    hover: { 
      opacity: [0, 0.6, 0], 
      scale: [0.8, 1.2, 1],
      transition: { 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const featuresVariants = {
    collapsed: { 
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    expanded: { 
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const featureItemVariants = {
    collapsed: { opacity: 0, y: 10 },
    expanded: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {services.map((service, i) => {
        const Icon = service.icon;
        const isHovered = hoveredIndex === i;
        const isExpanded = expandedIndex === i;
        
        return (
          <motion.div 
            key={i}
            variants={itemVariants}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleCardClick(i)}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            aria-label={`${service.title} service information`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleCardClick(i);
                e.preventDefault();
              }
            }}
          >
            {/* Glow Effect */}
            <motion.div 
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              variants={glowVariants}
              initial="rest"
              animate={isHovered ? "hover" : "rest"}
            />
            
            {/* Main Card */}
            <div className={`relative bg-white rounded-2xl overflow-hidden border border-gray-100 group-hover:border-transparent transition-all duration-500 ${service.gradient} backdrop-blur-sm ${isExpanded ? 'shadow-xl' : 'shadow-md'}`}>
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-full translate-y-12 -translate-x-12" />
              </div>
              
              {/* Content */}
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div 
                    className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-1 text-xs font-semibold text-gray-500 bg-white/70 px-3 py-1 rounded-full"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: isHovered ? 1 : 0.7, x: isHovered ? 0 : 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sparkles className="w-3 h-3" aria-hidden="true" />
                    {service.stats}
                  </motion.div>
                </div>
                
                {/* Title & Description */}
                <div className="mb-6">
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 leading-relaxed font-medium"
                    animate={{ 
                      color: isHovered ? '#374151' : '#6B7280'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.description}
                  </motion.p>
                </div>
                
                {/* Features List (Expandable) */}
                <motion.div
                  className="overflow-hidden mb-6"
                  initial="collapsed"
                  animate={isExpanded ? "expanded" : "collapsed"}
                  variants={featuresVariants}
                >
                  <ul className="space-y-2 pt-2">
                    {service.features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-center gap-2 text-gray-600"
                        variants={featureItemVariants}
                      >
                        <CheckCircle size={16} className={`text-${service.accent}-500`} aria-hidden="true" />
                        <span>{feature.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                {/* Action Button */}
                <motion.div
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: isHovered ? 1 : 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button 
                    variant="primary"
                    size="sm"
                    className={`bg-gradient-to-r ${service.color} hover:shadow-lg text-white w-full justify-center font-semibold transition-all duration-300 group-hover:scale-105`}
                    icon={
                      <motion.div
                        animate={{ x: isHovered ? 2 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight size={16} aria-hidden="true" />
                      </motion.div>
                    }
                    iconPosition="right"
                    aria-label={`Explore ${service.title}`}
                  >
                    <motion.span
                      animate={{ letterSpacing: isHovered ? '0.5px' : '0px' }}
                      transition={{ duration: 0.2 }}
                    >
                      {isExpanded ? 'Get Started' : 'Explore Now'}
                    </motion.span>
                  </Button>
                </motion.div>
              </div>
              
              {/* Animated Border */}
              <motion.div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100`}
                style={{ 
                  background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
                  backgroundSize: '200% 200%'
                }}
                animate={isHovered ? {
                  backgroundPosition: ['0% 0%', '100% 100%'],
                  transition: { duration: 1.5, repeat: Infinity }
                } : {}}
                aria-hidden="true"
              />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ServicesList;