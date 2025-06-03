import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ 
  text, 
  className = '', 
  delay = 0,
  stagger = 0.05,
  ...props 
}) => {
  const words = text.split(' ');

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  };

  const wordVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      {...props}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;