import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMembersProps {
  inView: boolean;
  scrollProgress: MotionValue<number>;
}

const TeamMembers: React.FC<TeamMembersProps> = ({ inView, scrollProgress }) => {
  // Parallax effect for team cards
  const y1 = useTransform(scrollProgress, [0, 1], [0, -30]);
  const y2 = useTransform(scrollProgress, [0, 1], [0, -15]);
  const y3 = useTransform(scrollProgress, [0, 1], [0, -45]);
  const y4 = useTransform(scrollProgress, [0, 1], [0, -20]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      bio: 'Former education consultant with 15+ years experience, passionate about transforming learning through technology.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
      y: y1
    },
    {
      name: 'David Chen',
      role: 'CTO & Co-Founder',
      bio: 'AI specialist with background in machine learning and educational technology. Led development at several EdTech startups.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      y: y2
    },
    {
      name: 'Maya Patel',
      role: 'Chief Learning Officer',
      bio: 'Former professor and curriculum designer specialized in personalized learning and educational psychology.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
      y: y3
    },
    {
      name: 'James Wilson',
      role: 'Head of AI Research',
      bio: 'PhD in Computer Science with focus on neural networks and natural language processing in educational contexts.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      y: y4
    }
  ];

  return (
    <div>
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Leadership Team</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet the passionate experts behind our mission to revolutionize education
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {teamMembers.map((member, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
            variants={itemVariants}
            style={{ y: member.y }}
          >
            <div className="relative h-60 overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-1/3"></div>
              <div className="absolute top-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end gap-2">
                <a href="#" className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-colors">
                  <Twitter size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-600 hover:text-white transition-colors">
                  <Mail size={16} />
                </a>
              </div>
            </div>
            <div className="p-5">
              <h4 className="text-lg font-bold mb-1">{member.name}</h4>
              <p className="text-blue-600 text-sm mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TeamMembers; 