import { useState } from 'react';
import { HeroModel } from './componanents/HeroModel';
import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { theme } from '../../theme';

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 to-white text-neutral-800 overflow-hidden">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-200 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-teal-200 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-100 blur-3xl"></div>
      </div>
      
      {/* Content container */}
      <Container 
        maxWidth="2xl" 
        className="relative z-10 py-12 md:py-16 lg:py-24 pt-24 md:pt-28 lg:pt-32"
        responsiveSpacing={true}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <motion.div 
            className="w-full md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium inline-block mb-4 md:mb-6">
                The Future of Education
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-teal-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Transform Learning with AI-Powered Education
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg text-neutral-600 mb-6 md:mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              Personalized learning experiences that adapt to individual needs, making education more effective, engaging, and accessible for everyone.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <Button variant="primary" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div 
              className="mt-8 md:mt-12 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.7 }}
            >
              <div className="flex -space-x-2 mr-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <span className="text-xs font-medium text-gray-600">User</span>
                  </div>
                ))}
              </div>
              <div className="text-xs md:text-sm">
                <span className="font-medium text-blue-700">500+</span>
                <span className="text-neutral-600"> educators trust iaai</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side - 3D model */}
          <motion.div 
            className="w-full md:w-1/2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <HeroModel isHovered={isHovered} />
          </motion.div>
        </div>
      </Container>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#EFF6FF"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};
