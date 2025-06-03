import { useState, useEffect } from "react";

const useAnimatedCounter = (end, shouldStart = false, duration = 1000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      setCount(0);
      return;
    }

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progress);

      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, shouldStart, duration]);

  return count;
};

export default useAnimatedCounter;
