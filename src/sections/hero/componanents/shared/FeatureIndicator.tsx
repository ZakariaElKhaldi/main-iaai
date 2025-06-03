import React from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureIndicatorProps {
  icon: ReactNode;
  text: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  color: 'blue' | 'teal' | 'purple' | 'amber';
  delay?: number;
  pulseEffect?: boolean;
}

/**
 * A floating feature indicator that appears around the 3D model
 */
export const FeatureIndicator: React.FC<FeatureIndicatorProps> = ({ 
  icon, 
  text, 
  position, 
  color, 
  delay = 0,
  pulseEffect = true
}) => {
  // Map color to Tailwind classes
  const colorClasses = {
    blue: {
      text: 'text-blue-700',
      border: 'border-blue-100'
    },
    teal: {
      text: 'text-teal-700',
      border: 'border-teal-100'
    },
    purple: {
      text: 'text-purple-700',
      border: 'border-purple-100'
    },
    amber: {
      text: 'text-amber-700',
      border: 'border-amber-100'
    }
  };

  const { text: textColor, border: borderColor } = colorClasses[color];

  return (
    <motion.div
      className={`absolute px-3 py-2 bg-white/90 rounded-md text-xs font-medium ${textColor} 
                shadow-sm ${borderColor} border z-10`}
      style={{
        top: position.top,
        bottom: position.bottom,
        left: position.left,
        right: position.right,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: pulseEffect ? [0, position.top ? -5 : 5, 0] : 0,
        transition: {
          y: {
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
            delay
          },
          opacity: {
            duration: 0.5,
            delay
          },
          scale: {
            duration: 0.5,
            delay
          }
        }
      }}
      whileHover={{ 
        scale: 1.05, 
        transition: { duration: 0.2 } 
      }}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span>{text}</span>
      </div>
    </motion.div>
  );
};

export default FeatureIndicator; 