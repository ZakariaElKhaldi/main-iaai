import { useState } from 'react';
import { HeroModel } from './componanents/HeroModel';
import { motion } from 'framer-motion';

export const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-indigo-950 to-purple-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-purple-500 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500 blur-3xl"></div>
      </div>
      
      {/* Content container - adjusted padding-top for navbar */}
      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10 flex flex-col lg:flex-row items-center">
        {/* Text content */}
        <motion.div 
          className="w-full lg:w-1/2 mb-12 lg:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Revolutionizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Smart Education</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering the next generation through AI-driven personalized learning experiences.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:scale-105 transition duration-300">
              Get Started
            </button>
            <button 
              className="px-8 py-3 rounded-full border border-white/30 backdrop-blur-sm hover:bg-white/10 transition duration-300 flex items-center justify-center gap-2"
              onClick={() => setIsVideoPlaying(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Watch Demo
            </button>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="mt-12 grid grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div>
              <p className="text-3xl font-bold">10k+</p>
              <p className="text-gray-300">Students</p>
            </div>
            <div>
              <p className="text-3xl font-bold">200+</p>
              <p className="text-gray-300">Courses</p>
            </div>
            <div>
              <p className="text-3xl font-bold">95%</p>
              <p className="text-gray-300">Success rate</p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* 3D Model */}
        <motion.div 
          className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <HeroModel />
        </motion.div>
      </div>
      
      {/* Video modal */}
      {isVideoPlaying && (
        <motion.div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" 
          onClick={() => setIsVideoPlaying(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="relative w-full max-w-4xl aspect-video bg-black" 
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <button 
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              onClick={() => setIsVideoPlaying(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            {/* Replace with actual video embed */}
            <div className="w-full h-full flex items-center justify-center bg-gray-900">
              <p className="text-white">Video placeholder</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
