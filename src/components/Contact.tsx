import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { InlineWidget } from "react-calendly";

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
            <div className="bg-space-light/20 backdrop-blur-lg rounded-lg p-6 border border-cosmic-blue/20">
              <InlineWidget url="https://calendly.com/jeanturban/30min?preview_source=et_card&month=2025-02" />
            </div>
          </motion.div>
        </div>


      </div>
    </div>
  );
}

export default Contact;