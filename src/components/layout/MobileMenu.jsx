import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaTimes,  } from 'react-icons/fa';

const MobileMenu = ({ onClose, scrollToSection }) => {
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  const itemVariants = {
    closed: {
      x: 50,
      opacity: 0
    },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  const menuItems = ['About', 'Projects', 'Skills', 'Experience', 'Contact'];
  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/yash-aa8655135/', color: 'text-blue-400' },
    { icon: FaGithub, href: 'https://github.com/yashwanth938/yashwanth938/tree/main?tab=readme-ov-file', color: 'text-gray-300' },
    { icon: FaEnvelope, href: 'mailto:rongalayaswanth@gmail.com', color: 'text-red-400' },
    { icon: FaPhone, href: 'tel:+1234567890', color: 'text-green-400' }
  ];

  const handleMenuItemClick = (item) => {
    scrollToSection(item.toLowerCase());
    onClose();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      <motion.div
        variants={menuVariants}
        initial="closed"
        animate="open"
        exit="closed"
        className="fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-gray-900 via-purple-900/20 to-black border-l border-purple-500/20 z-50 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-2xl text-gray-300 hover:text-white"
        >
          <FaTimes />
        </button>

        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex-1">
            <nav className="space-y-6">
              {menuItems.map((item, i) => (
                <motion.button
                  key={item}
                  custom={i}
                  variants={itemVariants}
                  onClick={() => handleMenuItemClick(item)}
                  className="block w-full text-left text-xl font-medium text-gray-300 hover:text-white hover:bg-purple-500/10 px-4 py-3 rounded-lg transition-all duration-300"
                >
                  {item}
                </motion.button>
              ))}
            </nav>

            <motion.div
              custom={5}
              variants={itemVariants}
              className="mt-12 p-4 bg-purple-900/20 rounded-lg border border-purple-500/20 text-center"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <FaEnvelope className="text-red-400" />
                  <span className="text-sm">rongalayaswanth@gmail.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <FaPhone className="text-green-400" />
                  <span className="text-sm">+91 9381422269</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              custom={6}
              variants={itemVariants}
              className="mt-8 text-center"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`${social.color} hover:text-white transition-colors duration-300`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            custom={7}
            variants={itemVariants}
            className="py-6 border-t border-purple-500/20 text-center"
          >
            <p className="text-sm text-gray-400">
              © 2025 Yaswanth Rongala
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default MobileMenu;
