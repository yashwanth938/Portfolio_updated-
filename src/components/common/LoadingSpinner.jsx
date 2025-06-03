import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  const spinnerVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const dotVariants = {
    bounce: {
      y: [0, -20, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center z-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-purple-900/20 to-black/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,69,119,0.1),transparent_50%)]"></div>
      
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="relative z-10 flex flex-col items-center space-y-8"
      >
        {/* Logo/Initial */}
        <motion.div 
          className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          style={{ fontFamily: 'Caveat, cursive' }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          YR.
        </motion.div>

        {/* Spinning Ring Loader */}
        <div className="relative">
          <motion.div
            variants={spinnerVariants}
            animate="rotate"
            className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full"
          />
          <motion.div
            variants={spinnerVariants}
            animate="rotate"
            style={{ rotate: 180 }}
            className="absolute inset-0 w-16 h-16 border-4 border-pink-500/30 border-b-pink-500 rounded-full"
          />
        </div>

        {/* Bouncing Dots */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              variants={dotVariants}
              animate="bounce"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
              className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.div
          variants={textVariants}
          className="text-center space-y-2"
        >
          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Loading Portfolio
          </h2>
          <p className="text-purple-300 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            Preparing an amazing experience...
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 2,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;