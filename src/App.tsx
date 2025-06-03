import React from 'react';
import { Hero } from './sections/hero';
import { Navbar } from './components/Navbar';
import { Container } from './components/Container';
import { Button } from './components/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Brain } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class AppErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('App Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">{this.state.error?.message}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const App = () => {
  console.log('App component rendering');
  
  return (
    <AppErrorBoundary>
      <div className="min-h-screen bg-white text-neutral-800">
        <Navbar />
        <main>
          <AppErrorBoundary>
            <Hero />
          </AppErrorBoundary>
          
          {/* Features Section */}
          <section id="features" className="py-12 sm:py-16 md:py-20 bg-blue-50">
            <Container maxWidth="2xl" centerContent={true}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
                Innovative <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Features</span>
              </h2>
              
              {/* Bento grid layout */}
              <div className="bento-grid">
                {/* Feature card 1 - Spans 4 columns */}
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100/60 card-hover md:bento-span-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">AI-Powered Learning</h3>
                  <p className="text-neutral-600 mb-4">Personalized education that adapts to each student's unique learning style and pace.</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>Learn more</span>
                    <ArrowRight size={18} className="ml-2" />
                  </div>
                </motion.div>
                
                {/* Feature card 2 - Spans 8 columns */}
                <motion.div 
                  className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 shadow-md card-hover md:bento-span-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                    <div className="md:max-w-md">
                      <h3 className="text-2xl font-bold mb-3">Real-time Adapting Curriculum</h3>
                      <p className="text-blue-100 mb-6">Our AI-driven system adjusts difficulty and content based on your performance and learning patterns, ensuring optimal growth.</p>
                      <button className="inline-flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white font-medium transition-colors">
                        See how it works
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center">
                        <Brain size={56} className="text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Feature card 3 - Spans 6 columns */}
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-sm border border-teal-100/60 card-hover md:bento-span-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Secure Learning Environment</h3>
                  <p className="text-neutral-600 mb-4">Privacy-focused platform ensuring student data is protected and secure at all times.</p>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-teal-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      End-to-end encryption for all student data
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-teal-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      GDPR compliant infrastructure
                    </li>
                  </ul>
                </motion.div>
                
                {/* Feature card 4 - Spans 6 columns */}
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-sm border border-amber-100/60 card-hover md:bento-span-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Real-time Progress Tracking</h3>
                  <p className="text-neutral-600 mb-4">Monitor learning progress with detailed analytics and personalized insights.</p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-amber-600">87%</div>
                      <div className="text-sm text-neutral-600">Average improvement</div>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-amber-600">24/7</div>
                      <div className="text-sm text-neutral-600">Access to insights</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Container>
          </section>
          
          {/* Courses Section Placeholder */}
          <section id="courses" className="py-12 sm:py-16 md:py-20 bg-white">
            <Container maxWidth="2xl" centerContent={true}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
                Popular <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Courses</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Course Card 1 */}
                <motion.div 
                  className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm card-hover group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90 group-hover:opacity-80 opacity-90 transition-opacity duration-300"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
                      alt="AI Fundamentals" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs text-white font-medium">
                      Beginner
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white text-blue-600 hover:text-blue-700 font-medium px-6 py-2 rounded-full flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span>View Course</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-neutral-800">AI Fundamentals</h3>
                    <p className="text-neutral-600 mb-4">Learn the core concepts and applications of artificial intelligence.</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <span className="text-sm font-bold text-neutral-700 ml-1">4.9</span>
                        <span className="text-xs text-neutral-500 ml-1">(2,345)</span>
                      </div>
                      <div className="font-bold text-blue-600">$49.99</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Course Card 2 */}
                <motion.div 
                  className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm card-hover group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-teal-800/90 group-hover:opacity-80 opacity-90 transition-opacity duration-300"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                      alt="Machine Learning Mastery" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs text-white font-medium">
                      Intermediate
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white text-teal-600 hover:text-teal-700 font-medium px-6 py-2 rounded-full flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span>View Course</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-neutral-800">Machine Learning Mastery</h3>
                    <p className="text-neutral-600 mb-4">Master advanced machine learning algorithms and techniques.</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <span className="text-sm font-bold text-neutral-700 ml-1">4.8</span>
                        <span className="text-xs text-neutral-500 ml-1">(1,987)</span>
                      </div>
                      <div className="font-bold text-teal-600">$79.99</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Course Card 3 */}
                <motion.div 
                  className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm card-hover group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-purple-800/90 group-hover:opacity-80 opacity-90 transition-opacity duration-300"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80" 
                      alt="Deep Learning & Neural Networks" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs text-white font-medium">
                      Advanced
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white text-purple-600 hover:text-purple-700 font-medium px-6 py-2 rounded-full flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span>View Course</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-neutral-800">Deep Learning & Neural Networks</h3>
                    <p className="text-neutral-600 mb-4">Dive deep into neural networks and build sophisticated AI models.</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <span className="text-sm font-bold text-neutral-700 ml-1">4.9</span>
                        <span className="text-xs text-neutral-500 ml-1">(1,245)</span>
                      </div>
                      <div className="font-bold text-purple-600">$99.99</div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-12 text-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 border-blue-200 hover:border-blue-300 hover:bg-blue-50"
                >
                  View All Courses
                </Button>
              </div>
            </Container>
          </section>
          
          {/* About Section Placeholder */}
          <section id="about" className="py-12 sm:py-16 md:py-20 bg-blue-50">
            <Container maxWidth="2xl" centerContent={true}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
                About <span className="text-blue-600">iaai</span>
              </h2>
              {/* About content will go here */}
            </Container>
          </section>
          
          {/* Testimonials Section Placeholder */}
          <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-white">
            <Container maxWidth="2xl" centerContent={true}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
                What Our <span className="text-blue-600">Students Say</span>
              </h2>
              {/* Testimonial cards will go here */}
            </Container>
          </section>
          
          {/* Pricing Section Placeholder */}
          <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-blue-50">
            <Container maxWidth="2xl" centerContent={true}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
                Flexible <span className="text-blue-600">Pricing</span>
              </h2>
              {/* Pricing cards will go here */}
            </Container>
          </section>
        </main>
        
        <footer className="bg-neutral-800 text-white py-12">
          <Container maxWidth="2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">iaai</h3>
                <p className="text-neutral-300">Transforming education through AI-powered learning experiences.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-neutral-300 hover:text-white transition-colors">Features</a></li>
                  <li><a href="#courses" className="text-neutral-300 hover:text-white transition-colors">Courses</a></li>
                  <li><a href="#pricing" className="text-neutral-300 hover:text-white transition-colors">Pricing</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-400">
              <p>&copy; {new Date().getFullYear()} iaai. All rights reserved.</p>
            </div>
          </Container>
        </footer>
      </div>
    </AppErrorBoundary>
  );
};

export default App;