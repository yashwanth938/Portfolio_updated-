import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  shadow = 'md',
  padding = 'p-6',
  ...props 
}) => {
  const shadows = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };

  const hoverEffects = hover ? {
    whileHover: { 
      y: -5, 
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
    },
    transition: { duration: 0.3 }
  } : {};

  return (
    <motion.div
      className={`
        bg-white rounded-xl border border-gray-200 
        ${shadows[shadow]} 
        ${padding} 
        transition-shadow duration-300
        ${className}
      `}
      {...hoverEffects}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;