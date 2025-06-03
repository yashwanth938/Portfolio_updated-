import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  type = 'button',
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-medium rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-3 relative overflow-hidden';
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border border-purple-500/20 hover:border-purple-400/40 hover:shadow-purple-500/25',
    secondary: 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent',
    outline: 'border border-purple-500/30 text-purple-300 hover:border-purple-400 hover:bg-purple-500/10 bg-transparent',
    ghost: 'text-gray-300 hover:text-white hover:bg-purple-500/10 bg-transparent'
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const shimmerVariants = {
    initial: {
      x: '-100%'
    },
    hover: {
      x: '100%',
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      {...props}
    >
      {/* Shimmer Effect */}
      <motion.div
        variants={shimmerVariants}
        initial="initial"
        whileHover="hover"
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      
      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-3">
        {children}
      </span>
    </motion.button>
  );
};

export default Button;