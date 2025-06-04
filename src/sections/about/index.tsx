import { useRef } from 'react';
import { motion, useInView, useScroll } from 'framer-motion';
import { Container } from '../../components/Container';
import AboutHeading from './componanents/AboutHeading';
import CompanyStory from './componanents/CompanyStory';
import TeamMembers from './componanents/TeamMembers';
import CompanyValues from './componanents/CompanyValues';

/**
 * The About Us section component
 * Provides information about the company, its mission, values, and team
 */
export const About = () => {
  // Reference and visibility tracking for animations
  const aboutRef = useRef<HTMLDivElement>(null);
  const inView = useInView(aboutRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start start", "end start"]
  });

  return (
    <section 
      ref={aboutRef}
      id="about"
      className="relative w-full py-20 md:py-28 bg-white text-neutral-800 overflow-hidden font-sans"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <Container maxWidth="2xl" centerContent>
        {/* Section heading */}
        <AboutHeading inView={inView} />
        
        {/* Company story and mission */}
        <div className="w-full mt-16 relative">
          <CompanyStory inView={inView} />
        </div>
        
        {/* Company core values */}
        <div className="w-full mt-24 relative">
          <CompanyValues inView={inView} />
        </div>
        
        {/* Team members */}
        <div className="w-full mt-24 relative">
          <TeamMembers inView={inView} scrollProgress={scrollYProgress} />
        </div>
      </Container>
    </section>
  );
};

export default About; 