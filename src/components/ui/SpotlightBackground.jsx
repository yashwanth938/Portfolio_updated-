import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const SpotlightBackground = ({ children, className = '', spotlightSize = 300, intensity = 0.8 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `
          radial-gradient(
            ${spotlightSize}px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(255, 255, 255, ${intensity}) 0%,
            rgba(255, 255, 255, 0.4) 25%,
            rgba(248, 250, 252, 0.1) 50%,
            rgba(241, 245, 249, 0.05) 100%
          ),
          linear-gradient(135deg,rgb(32, 33, 34) 0%,rgb(56, 62, 70) 50%,rgb(102, 111, 123) 100%)
        `,
      }}
    >
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SpotlightBackground;