import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../../components/Button';
import { ArrowRight } from 'lucide-react';

interface ServiceCTAProps {
  inView: boolean;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({ inView }) => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="px-8 py-12 md:p-12 text-white relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your educational journey?</h3>
            <p className="text-blue-100 mb-6 md:mb-0 md:pr-8">
              Whether you're a student, educator, or institution, our team can help you leverage
              AI to achieve better learning outcomes and more personalized educational experiences.
            </p>
          </div>
          <div className="lg:col-span-2 flex flex-col md:flex-row lg:flex-col gap-4 justify-center">
            <Button 
              variant="primary"
              className="bg-white text-blue-600 hover:bg-blue-50 shadow-md px-6 py-3 text-center"
            >
              Schedule a Consultation
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-6 py-3 flex items-center justify-center"
            >
              <span>View All Services</span>
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/30 rounded-full translate-y-1/2 -translate-x-1/2"></div>
    </motion.div>
  );
};

export default ServiceCTA; 