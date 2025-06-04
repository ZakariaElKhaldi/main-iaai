import React from 'react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Container } from '../../components/Container';
import ServicesHeading from './componanents/ServicesHeading';
import ServicesList from './componanents/ServicesList';
import ServiceCTA from './componanents/ServiceCTA';

/**
 * The Services section component
 * Showcases the company's various educational services
 */
export const Services = () => {
  // Reference and visibility tracking for animations
  const servicesRef = useRef<HTMLDivElement>(null);
  const inView = useInView(servicesRef, { once: false, amount: 0.2 });

  return (
    <section 
      ref={servicesRef}
      id="services"
      className="relative w-full py-20 md:py-28 bg-gradient-to-br from-indigo-50 via-blue-50 to-white text-neutral-800 overflow-hidden font-sans"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute top-1/4 -left-10 w-40 h-40 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>
      
      <Container maxWidth="2xl" centerContent>
        {/* Section heading */}
        <ServicesHeading inView={inView} />
        
        {/* Services grid */}
        <div className="w-full mt-16 relative">
          <ServicesList inView={inView} />
        </div>
        
        {/* Call to action */}
        <div className="w-full mt-20 relative">
          <ServiceCTA inView={inView} />
        </div>
      </Container>
    </section>
  );
};

export default Services; 