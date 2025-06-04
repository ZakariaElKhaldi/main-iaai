import React, { useState, useEffect } from 'react';
import { Hero } from './sections/hero';
import { Features } from './sections/features';
import { About } from './sections/about';
import { Services } from './sections/services';
import { Testimonials } from './sections/testimonials';
import { Contact } from './sections/contact';
import { Navbar } from './components/Navbar';
import { Container } from './components/Container';
import ClickSpark from './components/ClickSpark';

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
      <ClickSpark
        sparkColor="#1E90FF"
        sparkSize={15}
        sparkRadius={30}
        sparkCount={15}
        duration={600}
        extraScale={1.6}
      >
      <div className="min-h-screen bg-white text-neutral-800">
        <Navbar />
        <main>
          <AppErrorBoundary>
            <Hero />
          </AppErrorBoundary>
          
            <AppErrorBoundary>
              <Features />
            </AppErrorBoundary>
            
            <AppErrorBoundary>
              <About />
            </AppErrorBoundary>
            
            <AppErrorBoundary>
              <Services />
            </AppErrorBoundary>
            
            {/* Testimonials Section */}
            <AppErrorBoundary>
              <Testimonials />
            </AppErrorBoundary>
            
            {/* Contact Section with Map */}
            <AppErrorBoundary>
              <Contact />
            </AppErrorBoundary>
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
      </ClickSpark>
    </AppErrorBoundary>
  );
};

export default App;