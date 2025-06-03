import React from 'react';
import { motion } from 'framer-motion';

const BackgroundLines = ({ className = '', svgOptions = { duration: 10 } }) => {
  const { duration } = svgOptions;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Define animated gradients */}
          <motion.linearGradient
            id="lineGradient1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            animate={{
              x1: ["0%", "100%", "0%"],
              x2: ["100%", "200%", "100%"],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </motion.linearGradient>

          <motion.linearGradient
            id="lineGradient2"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            animate={{
              x1: ["100%", "0%", "100%"],
              x2: ["200%", "100%", "200%"],
            }}
            transition={{
              duration: duration * 1.2,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
          >
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </motion.linearGradient>

          <motion.linearGradient
            id="lineGradient3"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            animate={{
              x1: ["50%", "150%", "50%"],
              x2: ["150%", "250%", "150%"],
            }}
            transition={{
              duration: duration * 0.8,
              repeat: Infinity,
              ease: "linear",
              delay: 4,
            }}
          >
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(16, 185, 129, 0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </motion.linearGradient>
        </defs>

        {/* Static background lines */}
        <g opacity="0.1">
          {[...Array(12)].map((_, i) => (
            <line
              key={`static-${i}`}
              x1="0"
              y1={i * 20}
              x2="400"
              y2={i * 20}
              stroke="currentColor"
              strokeWidth="0.5"
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <line
              key={`static-v-${i}`}
              x1={i * 20}
              y1="0"
              x2={i * 20}
              y2="200"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          ))}
        </g>

        {/* Animated lines */}
        <g>
          {[2, 5, 8].map((row, index) => (
            <line
              key={`animated-${index}`}
              x1="0"
              y1={row * 20}
              x2="400"
              y2={row * 20}
              stroke={`url(#lineGradient${index + 1})`}
              strokeWidth="2"
              strokeLinecap="round"
            />
          ))}
        </g>

        {/* Intersection points */}
        {[2, 5, 8].map((row) =>
          [5, 10, 15].map((col, index) => (
            <motion.circle
              key={`dot-${row}-${col}`}
              cx={col * 20}
              cy={row * 20}
              r="2"
              fill="currentColor"
              opacity="0.5"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.5,
              }}
            />
          ))
        )}
      </svg>
    </div>
  );
};

export default BackgroundLines;