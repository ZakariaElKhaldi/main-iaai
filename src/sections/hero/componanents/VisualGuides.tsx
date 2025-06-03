import React from 'react';
import { motion } from 'framer-motion';

interface VisualGuidesProps {
  inView: boolean;
}

/**
 * Component with animated SVG paths to guide the user's visual journey
 * Creates a subtle visual flow to direct attention
 */
export const VisualGuides: React.FC<VisualGuidesProps> = ({ inView }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Connection between text and 3D model */}
      <svg 
        className="absolute top-1/4 left-1/2 w-24 h-24 -translate-x-1/2 opacity-10 hidden lg:block" 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <motion.path
          d="M10,50 C30,20 70,80 90,50"
          fill="none"
          stroke="rgba(37, 99, 235, 0.5)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
        <motion.circle
          cx="10"
          cy="50"
          r="3"
          fill="rgba(37, 99, 235, 0.5)"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
        />
        <motion.circle
          cx="90"
          cy="50"
          r="3"
          fill="rgba(37, 99, 235, 0.5)"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: 2.5 }}
        />
      </svg>

      {/* Arrow guides for content flow */}
      <svg className="absolute bottom-10 left-1/4 w-20 h-20 opacity-10 hidden md:block" viewBox="0 0 24 24" aria-hidden="true">
        <motion.path
          d="M12 5v14M5 12h14"
          stroke="rgba(13, 148, 136, 0.5)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? 
            { pathLength: 1, opacity: 0.5, transition: { delay: 1.5, duration: 1.2 } } : 
            { pathLength: 0, opacity: 0 }
          }
        />
        <motion.path
          d="M12 5L7 10M12 5L17 10M12 19L7 14M12 19L17 14M5 12L10 7M5 12L10 17M19 12L14 7M19 12L14 17"
          stroke="rgba(13, 148, 136, 0.5)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? 
            { pathLength: 1, opacity: 0.5, transition: { delay: 2.7, duration: 1 } } : 
            { pathLength: 0, opacity: 0 }
          }
        />
      </svg>

      {/* Infinity path around buttons */}
      <svg className="absolute bottom-20 right-1/4 w-32 h-20 opacity-10 hidden lg:block" viewBox="0 0 100 60" aria-hidden="true">
        <motion.path
          d="M30,30 C45,10 55,10 70,30 C85,50 95,50 95,30 C95,10 85,10 70,30 C55,50 45,50 30,30 C15,10 5,10 5,30 C5,50 15,50 30,30 Z"
          fill="none"
          stroke="rgba(245, 158, 11, 0.5)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? 
            { pathLength: 1, opacity: 0.5, transition: { duration: 2, delay: 2 } } : 
            { pathLength: 0, opacity: 0 }
          }
        />
      </svg>

      {/* Flowing line from top to bottom */}
      <svg className="absolute inset-y-0 right-10 w-10 h-full opacity-10 hidden xl:block" viewBox="0 0 10 100" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          d="M5,0 C2,20 8,40 5,60 C2,80 8,100 5,100"
          fill="none"
          stroke="rgba(37, 99, 235, 0.3)"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? 
            { pathLength: 1, opacity: 0.3, transition: { duration: 3 } } : 
            { pathLength: 0, opacity: 0 }
          }
        />
        <motion.circle
          cx="5"
          cy="5"
          r="2"
          fill="rgba(37, 99, 235, 0.5)"
          animate={inView ? 
            { 
              y: [0, 90, 0], 
              transition: { 
                y: { repeat: Infinity, duration: 10, ease: "easeInOut" },
                delay: 3
              } 
            } : {}
          }
        />
      </svg>
    </div>
  );
};

export default VisualGuides; 