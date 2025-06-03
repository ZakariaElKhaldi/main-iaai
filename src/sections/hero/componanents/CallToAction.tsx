import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../../components/Button';
import { ChevronRight, Play, Zap, Users } from 'lucide-react';

interface TrustIndicatorProps {
  icon: React.ReactNode;
  text: string;
  color: string;
  delay?: number;
}

/**
 * A small trust indicator shown below the CTA buttons
 */
const TrustIndicator: React.FC<TrustIndicatorProps> = ({ 
  icon, 
  text, 
  color, 
  delay = 0 
}) => {
  return (
    <motion.div
      className="flex items-center space-x-2"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className={`text-${color}`}>{icon}</div>
      <span>{text}</span>
    </motion.div>
  );
};

interface CallToActionProps {
  inView: boolean;
}

/**
 * Component containing CTA buttons and trust indicators
 */
export const CallToAction: React.FC<CallToActionProps> = ({ inView }) => {
  // Animation variants
  const fadeInUp = {
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

  return (
    <>
      <motion.div 
        className="flex flex-wrap gap-4 mb-6"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Button 
          variant="primary" 
          size="lg"
          className="group relative shadow-md shadow-blue-500/15 hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-[1.02] px-6 py-3 text-base font-medium rounded-lg overflow-hidden"
          icon={<ChevronRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />}
          iconPosition="right"
        >
          <span className="relative z-10">Start Learning Today</span>
          <motion.span 
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 z-0"
            initial={{ x: "100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </Button>
        
        <Button 
          variant="outline" 
          size="lg"
          className="hover:bg-blue-50 transition-all duration-300 px-6 py-3 text-base font-medium rounded-lg border-blue-200 group"
          icon={<Play size={20} className="group-hover:scale-110 transition-transform duration-300" />}
        >
          Watch Demo
        </Button>
        
        {/* Animated arrow to guide user */}
        <motion.div 
          className="absolute -right-10 -bottom-10 pointer-events-none text-blue-300 opacity-20 hidden sm:block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 0.2, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              d="M12 5L12 19M12 19L6 13M12 19L18 13" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.8, repeat: Infinity, repeatDelay: 2 }}
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Trust indicators */}
      <motion.div 
        className="flex flex-wrap items-center gap-6 text-sm text-slate-600"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <TrustIndicator 
          icon={<Zap size={16} />}
          text="Free 14-day trial" 
          color="amber-500"
          delay={0.1}
        />
        <TrustIndicator 
          icon={<Users size={16} />}
          text="No credit card required" 
          color="blue-500"
          delay={0.2}
        />
      </motion.div>
    </>
  );
};

export default CallToAction; 