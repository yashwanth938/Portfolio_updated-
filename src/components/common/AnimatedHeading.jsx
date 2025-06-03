import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeading = ({ 
  text, 
  className = '', 
  style = {},
  animationType = 'fade-up',
  delay = 0 
}) => {
  
  const headingVariants = {
    'fade-up': {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: "easeOut"
        }
      }
    },
    'slide-in': {
      hidden: { opacity: 0, x: -100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: "easeOut"
        }
      }
    },
    'scale': {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          delay,
          ease: "easeOut"
        }
      }
    },
    'letters': {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.03,
          delayChildren: delay
        }
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Letter-by-letter animation
  if (animationType === 'letters') {
    return (
      <motion.h1
        variants={headingVariants[animationType]}
        initial="hidden"
        animate="visible"
        className={className}
        style={style}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>
    );
  }

  // Word-by-word animation
  if (animationType === 'words') {
    const wordVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    };

    return (
      <motion.h1
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: delay
            }
          }
        }}
        initial="hidden"
        animate="visible"
        className={className}
        style={style}
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
    );
  }

  // Default animations
  return (
    <motion.h1
      variants={headingVariants[animationType] || headingVariants['fade-up']}
      initial="hidden"
      animate="visible"
      className={className}
      style={style}
    >
      {text}
    </motion.h1>
  );
};

export default AnimatedHeading;