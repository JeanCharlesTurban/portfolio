import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-space font-bold mb-6 text-cosmic-blue">
            John Doe
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Full Stack Developer & Space Enthusiast
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-space-light/20 backdrop-blur-lg rounded-lg p-6 border border-cosmic-blue/20">
            <h2 className="text-2xl font-space font-bold mb-4 text-cosmic-blue">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate developer with a love for creating beautiful, functional web experiences. 
              With over 5 years of experience in full-stack development, I specialize in building 
              scalable applications that make a difference.
            </p>
          </div>

          <div className="bg-space-light/20 backdrop-blur-lg rounded-lg p-6 border border-cosmic-blue/20">
            <h2 className="text-2xl font-space font-bold mb-4 text-cosmic-blue">Current Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              Currently exploring new frontiers in web development, focusing on creating immersive user 
              experiences and pushing the boundaries of what's possible on the web.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center space-x-6"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="text-gray-300 hover:text-cosmic-blue transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="text-gray-300 hover:text-cosmic-blue transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:contact@example.com"
             className="text-gray-300 hover:text-cosmic-blue transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default About