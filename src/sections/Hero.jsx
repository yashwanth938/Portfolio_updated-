import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaEye, FaArrowDown,FaCloud  } from 'react-icons/fa';
import Button from '../components/common/Button';
import mainpic from '../assets/images/cut_pic.jpg';
import resume from '../assets/Yaswanths resume_QA.pdf'; // Path to your resume file

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Content - Mobile: Center, Desktop: Left */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.p 
                className="text-purple-400 font-medium text-xl tracking-wide"
                style={{fontFamily: 'Wotfard, sans-serif' }}
              >
                Hello, I'm
              </motion.p>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
                style={{ fontFamily: 'Caveat, cursive' }}
              >
                Yaswanth Rongala
              </motion.h1>
              
              {/* Typewriter Effect for Title */}
              <div className="h-16 sm:h-20 lg:h-25 flex justify-center lg:justify-start items-center">
                <TypeAnimation
                  sequence={[
                    'QA Engineer',
                    2000,
                    'Azure Administrator',
                    2000,
                    'AI prompt Engineer',
                    2000,
                    'Certified Salesforce AI Professional',
                    2000,
                  ]}
                  wrapper="h2"
                  speed={50}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 via-orange-500/80 to-purple-800/70 bg-clip-text text-transparent"
                  style={{ 
                    fontFamily: 'Wotfard, sans-serif',
                    display: 'inline-block',
                    minHeight: '1.2em'
                  }}
                  repeat={Infinity}
                />
              </div>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0"
              style={{ fontFamily: 'Wotfard, sans-serif' }}
            >
              Salesforce Certified AI Professional with 1+ years of experience driving 
              40%+ efficiency gains through AI-powered testing solutions and cloud-based 
              application management.
            </motion.p>

            {/* CTA Buttons - Mobile: Centered, Desktop: Left aligned */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
            >
              {/* View My Work Button */}
              <Button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto bg-gradient-to-r from-black via-purple-700 to-purple-800 hover:from-purple-600 hover:to-purple-800 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 border border-purple-500/20 hover:border-purple-400/40 flex items-center justify-center gap-3"
              >
                <FaEye />
                View My Work
              </Button>

              {/* Download Resume Button */}
              <a
                href={resume}
                download="Yaswanths_resume_QA.pdf"
                className="w-full sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black font-medium px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <FaDownload className="flex-shrink-0" />
                  <span>Download Resume</span>
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 max-w-md mx-auto lg:max-w-none lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">1+</div>
                <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">40%+</div>
                <div className="text-xs sm:text-sm text-gray-400">Efficiency Gains</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">500+</div>
                <div className="text-xs sm:text-sm text-gray-400">Test Cases</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Professional Photo */}
          <motion.div 
            variants={imageVariants}
            className="flex justify-center lg:justify-end order-first lg:order-last"
          >
            <div className="relative">
              {/* Floating Decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              
              {/* Photo Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-purple-400/10 shadow-2xl shadow-purple-500/10">
                  <img
                    src={mainpic}
                    alt="Yaswanth Rongala - QA Engineer & Azure Administrator"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold text-sm sm:text-base">QA</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg"
                >
                  
                  <FaCloud className="text-white text-3xl  font-bold"/>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-12 sm:mt-16 lg:mt-24"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            <FaArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
