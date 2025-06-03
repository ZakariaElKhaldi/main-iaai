import React from 'react';
import { InteractiveGridPattern } from '../../../components/magicui/interactive-grid-pattern';

/**
 * Background decorative elements with animations
 * Enhanced with more engaging hover effects and animations
 */
export const BackgroundElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
        <InteractiveGridPattern
          className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          width={15}
          height={15}
          squares={[100, 100]}
          squaresClassName="hover:fill-blue-500/70 hover:scale-110 hover:z-10 stroke-blue-300/10 transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default BackgroundElements;
