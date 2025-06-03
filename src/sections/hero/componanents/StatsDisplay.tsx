import React from 'react';
import { motion } from 'framer-motion';

interface StatItemProps {
  value: string;
  label: string;
  color: string;
  delay?: number;
  inView: boolean;
}

/**
 * Individual stat item with animation
 */
const StatItem: React.FC<StatItemProps> = ({ 
  value, 
  label, 
  color, 
  delay = 0, 
  inView 
}) => {
  return (
    <motion.div
      className="flex flex-col items-center py-3 px-2 rounded-lg bg-white shadow-md border border-blue-50 hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
      }}
    >
      <motion.span 
        className={`text-${color} text-xl font-bold mb-1`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {value}
      </motion.span>
      <motion.span 
        className="text-xs font-medium text-neutral-500"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
};

interface StatsDisplayProps {
  inView: boolean;
}

/**
 * Component to display key statistics in an animated grid
 */
export const StatsDisplay: React.FC<StatsDisplayProps> = ({ inView }) => {
  // Stats data
  const stats = [
    { value: '87%', label: 'Faster Learning', color: 'blue-600', delay: 0.2 },
    { value: '94%', label: 'Completion', color: 'teal-600', delay: 0.3 },
    { value: '12K+', label: 'Students', color: 'amber-600', delay: 0.4 }
  ];

  return (
    <div className="grid grid-cols-3 gap-3 mb-8 relative">
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          value={stat.value}
          label={stat.label}
          color={stat.color}
          delay={stat.delay}
          inView={inView}
        />
      ))}
      
      {/* Connecting lines between stats */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" aria-hidden="true">
        <motion.path
          d="M75,25 L150,25"
          stroke="rgba(37, 99, 235, 0.2)"
          strokeWidth="1.5"
          strokeDasharray="5,5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.path
          d="M225,25 L300,25"
          stroke="rgba(13, 148, 136, 0.2)"
          strokeWidth="1.5"
          strokeDasharray="5,5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
      </svg>
    </div>
  );
};

export default StatsDisplay; 