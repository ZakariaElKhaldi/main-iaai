import React from 'react';
import { motion } from 'framer-motion';

interface ContactMapProps {
  inView: boolean;
}

const ContactMap: React.FC<ContactMapProps> = ({ inView }) => {
  // Animation variants
  const mapVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4
      }
    }
  };
  
  return (
    <motion.div
      variants={mapVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="h-full"
    >
      <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white h-full">
        <div className="h-[500px] md:h-full w-full relative">
          {/* Map iframe */}
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.77791412804!2d-122.43195572963884!3d37.75890177285447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1624556047526!5m2!1sen!2sus"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            loading="lazy"
            className="absolute inset-0"
          ></iframe>
          
          {/* Location marker/popup */}
          <div className="absolute top-10 left-10 bg-white shadow-lg rounded-lg p-4 max-w-xs">
            <h4 className="font-bold text-gray-900 mb-1">IAAI Headquarters</h4>
            <p className="text-gray-600 text-sm mb-2">123 AI Innovation Center, San Francisco, CA 94105</p>
            <a 
              href="https://maps.google.com/maps?q=San+Francisco+CA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMap; 