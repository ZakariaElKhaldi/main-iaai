import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialCardsProps {
  inView: boolean;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const TestimonialCards: React.FC<TestimonialCardsProps> = ({ inView }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Sample testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Michael Johnson",
      role: "Computer Science Student",
      company: "Stanford University",
      content: "The AI-powered learning platform helped me grasp complex programming concepts that I struggled with for months. The personalized approach and interactive exercises were game-changers for my education.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Data Scientist",
      company: "Tech Innovations Inc.",
      content: "As someone already in the tech industry, I was skeptical about online learning. This platform changed my mind completely. The AI adapts to my skill level and provides challenges that have accelerated my career growth.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 5
    },
    {
      id: 3,
      name: "David Chen",
      role: "High School Student",
      company: "Lincoln High School",
      content: "I've always struggled with traditional teaching methods. This platform identified my learning style and presented material in ways that made sense to me. My grades have improved significantly.",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80",
      rating: 4
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Math Teacher",
      company: "Westside Elementary",
      content: "As an educator, I've integrated this platform into my classroom with amazing results. It allows me to provide personalized attention to each student while collecting valuable insights on their progress.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      rating: 5
    },
    {
      id: 5,
      name: "James Wilson",
      role: "Software Engineer",
      company: "Global Tech Solutions",
      content: "The certification courses on this platform are recognized industry-wide. The practical projects helped me build a strong portfolio that impressed my current employer.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 5
    }
  ];

  // Navigate through testimonials
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full"
      >
        {/* Desktop view - 3 cards side by side */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              variants={itemVariants}
            />
          ))}
        </div>
        
        {/* Mobile view - single card */}
        <div className="md:hidden">
          <TestimonialCard 
            testimonial={testimonials[currentIndex]} 
            variants={itemVariants}
          />
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center mt-8 space-x-2 md:space-x-4">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index >= currentIndex && index < currentIndex + 3 
                    ? "bg-blue-600" 
                    : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  variants: any;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
    >
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${
              i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      
      {/* Content */}
      <p className="text-gray-700 mb-6 flex-grow">"{testimonial.content}"</p>
      
      {/* User */}
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCards; 