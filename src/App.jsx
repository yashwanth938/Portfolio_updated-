import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

// UI Components
import LoadingSpinner from './components/common/LoadingSpinner';

// Styles
import './styles/animations.css';
import './styles/components.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: { 
      opacity: 0,
      y: 50
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.5
      }
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="app">
      {/* Dynamic Black-to-Dark Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-purple-900/20 to-black/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,69,119,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen"
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;