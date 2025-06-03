import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, FaGithub, FaInstagram , FaEnvelope, 
  FaPhone, FaMapMarkerAlt, FaHeart, FaCode,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialHoverVariants = {
    hover: {
      scale: 1.2,
      y: -3,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.3
      }
    }
  };

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/yash-aa8655135/",
      color: "hover:text-blue-400",
      label: "LinkedIn"
    },
    {
      icon: FaGithub,
      href: "https://github.com/yashwanth938/yashwanth938/tree/main?tab=readme-ov-file",
      color: "hover:text-gray-300",
      label: "GitHub"
    },
    {
      icon: FaInstagram ,
      href: "https://www.instagram.com/training__to_be_hokage/",
      color: "hover:text-blue-400",
      label: "instagram"
    },
    {
      icon: FaEnvelope,
      href: "mailto:rongalayaswanth@gmail.com",
      color: "hover:text-red-400",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900 to-transparent border-t border-purple-500/20">
      {/* Enhanced Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,69,119,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(75,0,130,0.3),transparent_50%)]"></div>
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 sm:py-16"
        >
          {/* Mobile-First Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section - Mobile Centered */}
            <motion.div 
              variants={itemVariants} 
              className="md:col-span-2 lg:col-span-2 text-center md:text-left"
            >
              <div className="mb-6">
                <motion.h3 
                  className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-4"
                  style={{ fontFamily: 'Caveat, cursive' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Yaswanth Rongala
                </motion.h3>
                <motion.p 
                  className="text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0 text-sm sm:text-base" 
                  style={{ fontFamily: 'Wotfard, sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  QA Engineer & Azure Administrator passionate about delivering innovative 
                  testing solutions and cloud-based technologies that drive efficiency and quality.
                </motion.p>
              </div>

              {/* Contact Info - Mobile Centered */}
              <div className="space-y-3 flex flex-col items-center md:items-start">
                <motion.div 
                  className="flex items-center justify-center md:justify-start space-x-3 text-gray-400"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaEnvelope className="text-red-400 flex-shrink-0" />
                  <span className="text-sm">rongalayaswanth@gmail.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center md:justify-start space-x-3 text-gray-400"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaPhone className="text-green-400 flex-shrink-0" />
                  <span className="text-sm">+91 9381422269</span>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center md:justify-start space-x-3 text-gray-400"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaMapMarkerAlt className="text-blue-400 flex-shrink-0" />
                  <span className="text-sm">Vishakaptanam, India</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links - Mobile Centered */}
            <motion.div variants={itemVariants} className="text-center md:text-left">
              <h4 
                className="text-lg font-semibold text-white mb-6" 
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Quick Links
              </h4>
              <nav className="space-y-3 flex flex-col items-center md:items-start">
                {quickLinks.map((link, index) => (
                  <motion.button
                    key={index}
                    onClick={() => scrollToSection(link.id)}
                    whileHover={{ x: 5, color: '#a855f7' }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-purple-400 transition-all duration-300 text-sm font-medium"
                  >
                    {link.name}
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            {/* Connect Section - Mobile Centered */}
            <motion.div variants={itemVariants} className="text-center md:text-left">
              <h4 
                className="text-lg font-semibold text-white mb-6" 
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Connect With Me
              </h4>
              
              {/* Social Links - Mobile Centered */}
              <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={socialHoverVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/20 hover:border-purple-400/40 text-gray-400 ${social.color} transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>

              {/* Status - Mobile Centered */}
              <motion.div 
                className="flex items-center justify-center md:justify-start space-x-2 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div 
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-gray-400">Available for opportunities</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-purple-500/20 mt-12 pt-8"
          >
            {/* Copyright & Back to Top - Mobile Centered */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
              
              {/* Copyright - Mobile Centered */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-2 text-gray-400 text-sm order-2 md:order-1"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-2">
                  <span>© 2025 Yaswanth Rongala. Made with</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaHeart className="text-red-400" size={12} />
                  </motion.div>
                  <span>and</span>
                  <FaCode className="text-purple-400" size={12} />
                </div>
              </motion.div>

              {/* Back to Top - Mobile Centered */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-all duration-300 text-sm font-medium order-1 md:order-2 px-4 py-2 rounded-lg border border-purple-500/20 hover:border-purple-400/40 hover:bg-purple-500/10"
              >
                <span>Back to Top</span>
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowUp size={12} />
                </motion.div>
              </motion.button>
            </div>

            {/* Additional Info - Always Centered */}
            <motion.div 
              variants={itemVariants}
              className="mt-6 text-center"
            >
              <motion.p 
                className="text-xs text-gray-500"
                whileHover={{ scale: 1.02, color: '#9ca3af' }}
                transition={{ duration: 0.2 }}
              >
                Built with React, Framer Motion, and Tailwind CSS • Optimized for performance and accessibility
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Floating Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white shadow-lg hover:shadow-purple-500/30 transition-all duration-300 z-50 border border-purple-400/30"
        whileHover={{ 
          scale: 1.15, 
          y: -3,
          boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaArrowUp size={18} />
        </motion.div>
      </motion.button>
    </footer>
  );
};

export default Footer;
