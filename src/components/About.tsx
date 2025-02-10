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
            Jean Turban
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
          Building Scalable Tech, Driving Impact, Empowering Innovation. 
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
              I’m a  <strong className="text-cosmic-blue" className="text-cosmic-blue">🚀 product and engineering leader</strong> with  <strong className="text-cosmic-blue">10+ years of experience</strong> building and scaling  <strong className="text-cosmic-blue">SaaS startups</strong> from early-stage to  <strong className="text-cosmic-blue">Series B</strong>. 
              I’ve studied at  <strong className="text-cosmic-blue">top institutions</strong> like  <strong className="text-cosmic-blue">Cornell</strong> 🎓 and  <strong className="text-cosmic-blue">Cambridge</strong>, earning a  <strong className="text-cosmic-blue">B.S. in Mechanical Engineering</strong> and an  <strong className="text-cosmic-blue">M.Eng. in Systems Engineering</strong> from  <strong className="text-cosmic-blue">Cornell University</strong>. 
              My background in  <strong className="text-cosmic-blue">systems thinking</strong> 🧠 and  <strong className="text-cosmic-blue">structured problem-solving</strong> has shaped how I approach  <strong className="text-cosmic-blue">product development, AI integration, and scalable architecture</strong>.
            </p>
            <br></br><br></br>
            <p className="text-gray-300 leading-relaxed">
              As  <strong className="text-cosmic-blue">co-founder of Talentpath</strong>, I led our engineering team, helping  <strong className="text-cosmic-blue">12+ startups launch their products</strong> and growing the company from  <strong className="text-cosmic-blue">$0 to $400K ARR</strong> 💰. 
              Before that, I was  <strong className="text-cosmic-blue">VP of Engineering at StartupTree</strong>, where I built features that drove engagement across  <strong className="text-cosmic-blue">100+ universities</strong>, reducing churn by  <strong className="text-cosmic-blue">60%</strong> 📉 and increasing platform adoption 📈.
            </p>
            <br></br><br></br>
            <p className="text-gray-300 leading-relaxed">
              I’ve worked across  <strong className="text-cosmic-blue">product, engineering, and analytics</strong>, always focusing on  <strong className="text-cosmic-blue">data-driven decision-making</strong>,  <strong className="text-cosmic-blue">AI-driven automation</strong>, and  <strong className="text-cosmic-blue">scaling technology</strong> to meet business needs. 
              Whether it's  <strong className="text-cosmic-blue">mentoring startups</strong> 💡, designing  <strong className="text-cosmic-blue">MVP frameworks</strong> 🏗️, or optimizing  <strong className="text-cosmic-blue">cloud infrastructure</strong> ☁️, I love  <strong className="text-cosmic-blue">solving complex problems</strong> 🔍 and turning ideas into  <strong className="text-cosmic-blue">real, impactful products</strong> 🚀.
            </p>

          </div>

          <div className="bg-space-light/20 backdrop-blur-lg rounded-lg p-6 border border-cosmic-blue/20">
            <h2 className="text-2xl font-space font-bold mb-4 text-cosmic-blue">Current Mission</h2>
            <p className="text-gray-300 leading-relaxed">
            I am driven by a passion for building scalable, data-driven, and AI-powered technology that transforms ideas into real, impactful products. My mission is to help startups innovate, scale, and succeed by applying structured problem-solving, systems thinking, and cutting-edge engineering.
            <br></br><br></br>
            Through mentorship, automation, and strategic product development, I strive to empower teams, optimize technology, and create solutions that drive growth, efficiency, and long-term success. Whether it’s designing MVP frameworks, architecting scalable infrastructure, or integrating AI, I am committed to turning complex challenges into opportunities for innovation. 🚀
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