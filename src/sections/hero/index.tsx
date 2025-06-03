import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import AnimatedHeading from './componanents/AnimatedHeading';
import CallToAction from './componanents/CallToAction';
import BackgroundElements from './componanents/BackgroundElements';
import VisualGuides from './componanents/VisualGuides';

/**
 * The main Hero section component
 * Uses modular components for better organization and maintenance
 */
export const Hero = () => {
  // Reference and visibility tracking for animations
  const heroRef = useRef<HTMLDivElement>(null);
  const inView = useInView(heroRef, { once: false, amount: 0.2 });

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  return (
    <section 
      ref={heroRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-white text-neutral-800 overflow-hidden font-sans"
    >
      {/* Background elements with animations */}
      <BackgroundElements />
      
      {/* Visual guides to direct user attention */}
      <VisualGuides inView={inView} />
      
      {/* Content container with adjusted padding and positioning */}
      <div className="relative z-10 flex items-center h-screen py-8 md:py-12 lg:py-20 pt-16 md:pt-20 lg:pt-24 pl-7 sm:pl-8 md:pl-11 lg:pl-16 xl:pl-24 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16">
        {/* Content area */}
        <div className="w-full max-w-2xl mb-8 relative">
          {/* Main heading with animated text effects */}
          <AnimatedHeading inView={inView} />
          
          {/* Description text */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 md:mb-10 max-w-lg leading-relaxed font-medium tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Discover a smarter way to learn with our AI-powered platform that adapts to your unique style and goals. Break through barriers and achieve results you never thought possible.
          </motion.p>
          
          {/* Call to action buttons */}
          <CallToAction inView={inView} />
        </div>
      </div>

      {/* Wave divider with parallax effect */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 z-0"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#EBF5FF"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>
    </section>
  );
};