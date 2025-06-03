import { useState, useEffect, useRef } from 'react';
import { HeroModel } from './componanents/HeroModel';
import { motion, useInView } from 'framer-motion';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Brain, Sparkles, BookOpen, Users, ArrowRight, Play, Zap } from 'lucide-react';

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
            {/* Floating Badge */}
            <motion.div 
              className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg shadow-blue-500/10 border border-blue-100/50 mb-8"
              custom={0}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
              </div>
              <span className="text-slate-700 font-medium">Trusted by 50,000+ Students</span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-3 md:mb-4"
              custom={0}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <span className="text-slate-900">Elevate Your</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 bg-clip-text text-transparent relative">
                Learning Journey
                <Sparkles className="absolute -top-4 -right-8 text-amber-400 animate-pulse" size={32} />
              </span>
              <br />
              <span className="text-slate-700">With AI</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-neutral-600 mb-8 md:mb-10 max-w-xl leading-relaxed"
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              Experience the future of education with our intelligent learning platform that adapts to your unique learning style and pace.
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
                className="group relative shadow-md shadow-blue-500/15 hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-[1.02] px-6 py-3 text-base font-medium rounded-lg"
                icon={<ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />}
                iconPosition="right"
              >
                Start Learning Today
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="hover:bg-blue-50 transition-all duration-300 px-6 py-3 text-base font-medium rounded-lg border-blue-200"
                icon={<Play size={20} />}
              >
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex items-center space-x-6 text-sm text-slate-600"
              custom={4}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-2">
                <Zap className="text-amber-500" size={16} />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-blue-500" size={16} />
                <span>No credit card required</span>
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
                  <Brain size={16} />
                  <span>AI-Powered Learning</span>
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
                  <BookOpen size={16} />
                  <span>Smart Insights</span>
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