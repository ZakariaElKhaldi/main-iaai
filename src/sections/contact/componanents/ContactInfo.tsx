import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Globe } from 'lucide-react';

interface ContactInfoProps {
  inView: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ inView }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-blue-600" />,
      title: "Phone",
      details: ["+1 (555) 123-4567"]
    },
    {
      icon: <Mail className="w-5 h-5 text-blue-600" />,
      title: "Email",
      details: ["info@iaai-education.com", "support@iaai-education.com"]
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
      title: "Location",
      details: ["123 AI Innovation Center", "San Francisco, CA 94105"]
    },
    {
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 2PM"]
    },
    {
      icon: <Globe className="w-5 h-5 text-blue-600" />,
      title: "Social Media",
      details: ["@iaai_education"]
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8"
    >
      <h3 className="text-xl font-bold mb-6 text-gray-900">Contact Information</h3>
      
      <div className="space-y-5">
        {contactInfo.map((item, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="flex items-start"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4">
              {item.icon}
            </div>
            <div>
              <h4 className="font-medium text-gray-900">{item.title}</h4>
              <div className="mt-1 space-y-1">
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600">{detail}</p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        variants={itemVariants}
        className="mt-8 pt-6 border-t border-gray-100"
      >
        <h4 className="font-medium text-gray-900 mb-2">Connect with us</h4>
        <div className="flex space-x-3">
          {/* Social Media Icons */}
          <a href="#" className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="#" className="w-9 h-9 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition-colors">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </a>
          <a href="#" className="w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="#" className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo; 