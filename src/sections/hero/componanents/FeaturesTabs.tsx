import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

interface FeaturesTabsProps {
  inView: boolean;
}

/**
 * Interactive tabs showing different features
 */
export const FeaturesTabs: React.FC<FeaturesTabsProps> = ({ inView }) => {
  const [activeTab, setActiveTab] = useState('learn');

  // Feature data by tab
  const featuresByTab = {
    learn: [
      'Personalized learning paths',
      'Engaging interactive content',
      'Expert-crafted curriculum'
    ],
    practice: [
      'Hands-on projects',
      'Real-world applications',
      'Instant feedback system'
    ],
    achieve: [
      'Industry-recognized certifications',
      'Portfolio development',
      'Career placement support'
    ]
  };

  // Color schemes by tab
  const tabColors = {
    learn: {
      active: 'bg-gradient-to-r from-blue-500 to-blue-600',
      hover: 'hover:bg-blue-50',
      check: 'text-blue-500'
    },
    practice: {
      active: 'bg-gradient-to-r from-teal-500 to-teal-600',
      hover: 'hover:bg-teal-50',
      check: 'text-teal-500'
    },
    achieve: {
      active: 'bg-gradient-to-r from-amber-500 to-amber-600',
      hover: 'hover:bg-amber-50',
      check: 'text-amber-500'
    }
  };

  return (
    <motion.div
      className="mb-8 bg-white/60 backdrop-blur-sm p-1 rounded-xl shadow-sm border border-blue-100/50 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="flex">
        {Object.keys(featuresByTab).map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-300 ${
              activeTab === tab 
                ? `${tabColors[tab as keyof typeof tabColors].active} text-white shadow-md` 
                : `text-neutral-600 ${tabColors[tab as keyof typeof tabColors].hover}`
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mt-4 px-4 pb-3"
        >
          <ul className="space-y-2">
            {featuresByTab[activeTab as keyof typeof featuresByTab].map((item, i) => (
              <motion.li 
                key={i} 
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                <Check 
                  size={16} 
                  className={`${tabColors[activeTab as keyof typeof tabColors].check} mt-1 mr-2 flex-shrink-0`} 
                />
                <span className="text-sm">{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Path guides */}
          <svg className="absolute bottom-3 right-3 w-20 h-20 pointer-events-none opacity-10" aria-hidden="true">
            <motion.path
              d="M5,15 Q12,5 20,15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </svg>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default FeaturesTabs; 