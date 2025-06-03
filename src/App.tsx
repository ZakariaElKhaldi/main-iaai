import React from 'react';
import { Hero } from './sections/hero';
import { Navbar } from './components/Navbar';
import { Container } from './components/Container';
import { theme } from './theme';

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
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
                Innovative <span className="text-blue-600">Features</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Feature card 1 */}
                <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Learning</h3>
                  <p className="text-neutral-600">Personalized education that adapts to each student's unique learning style and pace.</p>
                </div>
                
                {/* Feature card 2 */}
                <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Secure Learning Environment</h3>
                  <p className="text-neutral-600">Privacy-focused platform ensuring student data is protected and secure at all times.</p>
                </div>
                
                {/* Feature card 3 */}
                <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Real-time Progress Tracking</h3>
                  <p className="text-neutral-600">Monitor learning progress with detailed analytics and personalized insights.</p>
                </div>
              </div>
            </Container>
          </section>
          
          {/* Courses Section Placeholder */}
          <section id="courses" className="py-12 sm:py-16 md:py-20 bg-white">
            <Container maxWidth="2xl" centerContent={true}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
                Popular <span className="text-blue-600">Courses</span>
              </h2>
              {/* Course cards will go here */}
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