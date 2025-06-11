import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../../components/Button';
import { ArrowRight, Calendar, MessageSquare } from 'lucide-react';

interface ServiceCTAProps {
  inView: boolean;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({ inView }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      className="text-center mb-12"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div 
        className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-100 shadow-xl shadow-blue-900/5 relative overflow-hidden"
        variants={itemVariants}
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <motion.h3 
          className="text-2xl md:text-3xl font-bold mb-4 text-gray-900"
          variants={itemVariants}
        >
          Ready to Transform Your Educational Journey?
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg"
          variants={itemVariants}
        >
          Join thousands of students who have accelerated their learning and achieved their academic goals with our AI-powered educational solutions.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <Button 
            variant="primary" 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8"
            icon={<Calendar size={18} />}
          >
            Schedule a Demo
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8"
            icon={<MessageSquare size={18} />}
          >
            Talk to an Advisor
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCTA; 