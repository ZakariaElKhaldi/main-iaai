import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '../../components/Container';
import TestimonialsHeading from './componanents/TestimonialsHeading';
import TestimonialCards from './componanents/TestimonialCards';

/**
 * The Testimonials section component
 * Showcases student and client testimonials about the platform
 */
export const Testimonials = () => {
  // Reference and visibility tracking for animations
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(testimonialsRef, { once: false, amount: 0.2 });

  return (
    <section 
      ref={testimonialsRef}
      id="testimonials"
      className="relative w-full py-20 md:py-28 bg-white text-neutral-800 overflow-hidden font-sans"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-64 h-64 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>
      
      <Container maxWidth="2xl" centerContent>
        {/* Section heading */}
        <TestimonialsHeading inView={inView} />
        
        {/* Testimonials carousel/cards */}
        <div className="w-full mt-16 relative">
          <TestimonialCards inView={inView} />
        </div>
      </Container>
    </section>
  );
};

export default Testimonials; 