import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Container } from '../../components/Container';
import FeatureHeading from './componanents/FeatureHeading';
import FeatureCards from './componanents/FeatureCards';
import FeatureBackground from './componanents/FeatureBackground';
import FeatureHighlights from './componanents/FeatureHighlights';

/**
 * The Features section component
 * Uses modular components for better organization and maintenance
 */
export const Features = () => {
  // Reference and visibility tracking for animations
  const featuresRef = useRef<HTMLDivElement>(null);
  const inView = useInView(featuresRef, { once: false, amount: 0.2 });

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: featuresRef,
    offset: ["start start", "end start"]
  });

  return (
    <section 
      ref={featuresRef}
      id="features"
      className="relative w-full py-20 md:py-28 bg-gradient-to-tr from-blue-50 via-indigo-50 to-white text-neutral-800 overflow-hidden font-sans"
    >
      {/* Animated background elements */}
      <FeatureBackground />
      
      <Container maxWidth="2xl" centerContent>
        {/* Section heading */}
        <FeatureHeading inView={inView} />
        
        {/* Main feature cards */}
        <div className="w-full mt-12 md:mt-16 relative">
          <FeatureCards inView={inView} />
        </div>
        
        {/* Feature highlights */}
        <div className="w-full mt-20 md:mt-24 relative">
          <FeatureHighlights 
            inView={inView} 
            scrollYProgress={scrollYProgress} 
          />
        </div>
      </Container>

      {/* Decorative bottom divider */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 z-0"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="white"
            fillOpacity="1"
            d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,101.3C672,85,768,75,864,90.7C960,107,1056,149,1152,149.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Features; 