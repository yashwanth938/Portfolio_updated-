import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollIndicator = ({ className = '' }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform-gpu z-50 ${className}`}
      style={{ scaleX, transformOrigin: '0%' }}
    />
  );
};

export const CircularScrollIndicator = ({ className = '' }) => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      className={`fixed bottom-8 right-8 z-50 ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        onClick={scrollToTop}
        className="relative w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>

        {/* Progress circle */}
        <svg
          className="absolute inset-0 w-12 h-12 transform -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="4"
            fill="none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="white"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress
            }}
            initial={{ pathLength: 0 }}
          />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default ScrollIndicator;