import React from 'react';
import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { Container } from '../../components/Container';
import TestimonialsHeading from './componanents/TestimonialsHeading';
import TestimonialCards from './componanents/TestimonialCards';
import { gsap } from 'gsap';

/**
 * The Testimonials section component
 * Showcases student and client testimonials about the platform
 */
export const Testimonials = () => {
  // Reference and visibility tracking for animations
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const bgBlobsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(testimonialsRef, { once: false, amount: 0.2 });

  // Animate background blobs
  useEffect(() => {
    if (inView && bgBlobsRef.current) {
      const blobs = bgBlobsRef.current.querySelectorAll('.bg-blob');
      
      blobs.forEach((blob, index) => {
        gsap.to(blob, {
          x: `${Math.sin(index * 0.5) * 30}px`,
          y: `${Math.cos(index * 0.5) * 30}px`,
          duration: 8 + index * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.5
        });
      });
    }
    
    return () => {
      gsap.killTweensOf('.bg-blob');
    };
  }, [inView]);

  return (
    <section 
      ref={testimonialsRef}
      id="testimonials"
      className="relative w-full py-20 md:py-28 bg-white text-neutral-800 overflow-hidden font-sans"
    >
      {/* Background elements */}
      <div 
        ref={bgBlobsRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="bg-blob absolute top-1/3 -right-32 w-64 h-64 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="bg-blob absolute -bottom-32 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="bg-blob absolute top-1/4 left-1/3 w-48 h-48 rounded-full bg-gradient-to-tr from-blue-50 to-indigo-50 mix-blend-multiply filter blur-2xl opacity-20"></div>
        <div className="bg-blob absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-gradient-to-bl from-purple-50 to-blue-50 mix-blend-multiply filter blur-2xl opacity-20"></div>
      </div>
      
      <Container maxWidth="2xl" centerContent>
        {/* Section heading */}
        <TestimonialsHeading inView={inView} />
        
        {/* Testimonials carousel/cards */}
        <div className="w-full max-w-6xl mx-auto mt-16 relative px-4">
          <TestimonialCards inView={inView} />
        </div>
      </Container>
    </section>
  );
};

export default Testimonials; 