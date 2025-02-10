import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:jt665@cornell.edu?subject=Reaching Out&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-space font-bold mb-6 text-cosmic-blue">
            Contact Me
          </h1>
          <p className="text-xl text-gray-300">
            Let's start a conversation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-space-light/20 backdrop-blur-lg rounded-lg p-6 border border-cosmic-blue/20">
              <h2 className="text-2xl font-space font-bold mb-6 text-cosmic-blue">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-300">
                  <Mail size={20} className="text-cosmic-blue" />
                  <span>jt665@cornell.edu</span>
                </div>
                {/* <div className="flex items-center space-x-4 text-gray-300">
                  <Phone size={20} className="text-cosmic-blue" />
                  <span>+1 (555) 123-4567</span>
                </div> */}
                <div className="flex items-center space-x-4 text-gray-300">
                  <MapPin size={20} className="text-cosmic-blue" />
                  <span>New York City, NY</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-space-light/20 backdrop-blur-lg rounded-lg p-6 border border-cosmic-blue/20">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-space-dark/50 border border-cosmic-blue/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cosmic-blue"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-space-dark/50 border border-cosmic-blue/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cosmic-blue"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-space-dark/50 border border-cosmic-blue/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cosmic-blue"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-cosmic-blue hover:bg-cosmic-blue/90 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;