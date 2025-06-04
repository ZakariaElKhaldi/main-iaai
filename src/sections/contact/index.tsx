import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '../../components/Container';
import ContactHeading from './componanents/ContactHeading';
import ContactInfo from './componanents/ContactInfo';
import ContactForm from './componanents/ContactForm';
import ContactMap from './componanents/ContactMap';

/**
 * The Contact section component
 * Provides contact information, form, and map location
 */
export const Contact = () => {
  // Reference and visibility tracking for animations
  const contactRef = useRef<HTMLDivElement>(null);
  const inView = useInView(contactRef, { once: false, amount: 0.2 });

  return (
    <section 
      ref={contactRef}
      id="contact"
      className="relative w-full py-20 md:py-28 bg-gradient-to-b from-white to-blue-50 text-neutral-800 overflow-hidden font-sans"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <Container maxWidth="2xl" centerContent>
        {/* Section heading */}
        <ContactHeading inView={inView} />
        
        <div className="w-full mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact information and form - left side */}
          <div className="lg:col-span-2 space-y-10">
            <ContactInfo inView={inView} />
            <ContactForm inView={inView} />
          </div>
          
          {/* Map - right side */}
          <div className="lg:col-span-3">
            <ContactMap inView={inView} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact; 