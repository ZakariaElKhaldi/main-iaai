import { useState, useEffect, useRef } from 'react';
import { HeroModel } from './componanents/HeroModel';
import { motion, useInView } from 'framer-motion';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const inView = useInView(heroRef, { once: false, amount: 0.3 });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section 
      ref={heroRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 to-white text-neutral-800 overflow-hidden font-sans"
    >
      {/* Subtle background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-200 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-teal-200 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-100 blur-3xl"></div>
      </div>
      
      {/* Content container */}
      <Container 
        maxWidth="full" 
        className="relative z-10 py-12 md:py-16 lg:py-28 pt-24 md:pt-28 lg:pt-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 mx-auto"
        responsiveSpacing={true}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between md:gap-8 lg:gap-12">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2 lg:w-5/12 mb-12 md:mb-0">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-700 to-teal-600"
              custom={0}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              Learn Faster <span className="text-blue-600">with AI</span>
            </motion.h1>
            
            <motion.p
              className="text-base text-neutral-600 mb-8 md:mb-10 max-w-md leading-relaxed"
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              Personalized education that adapts to your unique learning style and pace
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-3 gap-3 mb-8"
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="flex flex-col items-center py-3 px-2 rounded-lg bg-white shadow-md border border-blue-50">
                <span className="text-blue-600 text-xl font-bold mb-1">87%</span>
                <span className="text-xs font-medium text-neutral-500">Faster Learning</span>
              </div>
              <div className="flex flex-col items-center py-3 px-2 rounded-lg bg-white shadow-md border border-blue-50">
                <span className="text-teal-600 text-xl font-bold mb-1">94%</span>
                <span className="text-xs font-medium text-neutral-500">Completion</span>
              </div>
              <div className="flex flex-col items-center py-3 px-2 rounded-lg bg-white shadow-md border border-blue-50">
                <span className="text-amber-600 text-xl font-bold mb-1">12K+</span>
                <span className="text-xs font-medium text-neutral-500">Students</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              custom={3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <Button 
                variant="primary" 
                size="lg"
                className="shadow-md shadow-blue-500/15 hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-[1.02] px-6 py-3 text-base font-medium rounded-lg"
              >
                Try Free Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="hover:bg-blue-50 transition-all duration-300 px-6 py-3 text-base font-medium rounded-lg border-blue-200"
              >
                Explore Courses
              </Button>
            </motion.div>

            {/* Social proof - using real testimonials instead of generic stats */}
            <motion.div 
              className="mt-8"
              custom={4}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-medium text-base">
                    S
                  </div>
                  <div>
                    <div className="flex mb-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-neutral-600 italic leading-relaxed">"Mastered complex topics in half the time compared to traditional courses."</p>
                    <p className="text-xs text-neutral-500 mt-1.5 font-medium">— Sarah K., Data Science Student</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right side - 3D model */}
          <motion.div 
            className="w-full md:w-1/2 lg:w-7/12 h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="w-[90%] md:w-[95%] h-[90%] md:h-[95%] relative">
              <HeroModel isHovered={isHovered} />
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-blue-200 opacity-20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-teal-200 opacity-10"></div>
              
              {/* Interactive feature indicators */}
              <motion.div 
                className="absolute top-[15%] left-[15%] px-3 py-2 bg-white rounded-md text-xs font-medium text-blue-700 shadow-sm border border-blue-100"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span>Personalized Path</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-[20%] right-[15%] px-3 py-2 bg-white rounded-md text-xs font-medium text-teal-700 shadow-sm border border-teal-100"
                animate={{ 
                  y: [0, 10, 0],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 4.5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <span>Progress Tracking</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute top-[40%] right-[10%] px-3 py-2 bg-white rounded-md text-xs font-medium text-purple-700 shadow-sm border border-purple-100"
                animate={{ 
                  y: [0, -8, 0],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <span>AI Tutoring</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
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
