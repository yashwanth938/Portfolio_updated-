import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGraduationCap, FaCertificate, FaAward, FaUser, 
  FaBrain, FaCloud, FaRocket, FaCode 
} from 'react-icons/fa';
import { SiSalesforce, SiCloudflare } from 'react-icons/si';
import AnimatedHeading from '../components/common/AnimatedHeading';
import profilepic from '../assets/images/Pic2.jpg'; // Adjust the path as necessary

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const achievements = [
    {
      icon: SiSalesforce,
      title: "Salesforce AI Certified",
      description: "AI Associate & AI Specialist",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: SiCloudflare ,
      title: "Azure Fundamentals",
      description: "AZ-900 Certified",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: FaAward,
      title: "40%+ Efficiency Gains",
      description: "Through AI-powered testing",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaCode,
      title: "500+ Test Cases",
      description: "Automated testing suite",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <AnimatedHeading
              text="About Me"
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            />
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              style={{ fontFamily: 'Wotfard, sans-serif' }}
            >
              Passionate QA Engineer and Azure Administrator dedicated to delivering 
              high-quality software solutions through innovative testing methodologies 
              and cloud-based technologies.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Professional Summary */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Professional Summary
                </h3>
                <div className="space-y-4 text-gray-300" style={{ fontFamily: 'Wotfard, sans-serif' }}>
                  <p className="leading-relaxed">
                    As a <span className="text-purple-400 font-semibold">QA Engineer & Azure Administrator</span> with 
                    over 1 year of experience, I specialize in creating comprehensive testing solutions that drive 
                    significant efficiency improvements. My expertise spans AI-powered testing methodologies, 
                    cloud-based application management, and automation frameworks.
                  </p>
                  <p className="leading-relaxed">
                    Currently working at <span className="text-purple-400 font-semibold">Keywords Studios</span>, 
                    I have successfully implemented testing solutions that achieved 40%+ efficiency gains while 
                    maintaining the highest quality standards. My approach combines technical expertise with 
                    innovative problem-solving to deliver exceptional results.
                  </p>
                  <p className="leading-relaxed">
                    I hold <span className="text-purple-400 font-semibold">Salesforce AI certifications</span> and 
                    <span className="text-purple-400 font-semibold"> Microsoft Azure Fundamentals (AZ-900)</span>, 
                    positioning me at the forefront of AI-driven testing and cloud administration technologies.
                  </p>
                </div>
              </div>

              {/* Key Strengths */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Key Strengths
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: FaBrain, text: "AI-Driven Testing", color: "text-purple-400" },
                    { icon: FaCloud, text: "Cloud Architecture", color: "text-blue-400" },
                    { icon: FaRocket, text: "Performance Optimization", color: "text-green-400" },
                    { icon: FaCode, text: "Test Automation", color: "text-pink-400" }
                  ].map((strength, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-900/50 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                    >
                      <strength.icon className={`${strength.color} text-xl`} />
                      <span className="text-gray-300 font-medium text-sm">{strength.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content - Professional Photo */}
            <motion.div 
              variants={imageVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Background Decoration */}
                <div className="absolute -inset-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-10 blur-2xl"></div>
                
                {/* Photo Container */}
                <div className="relative bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm">
                  <div className="w-80 h-80 rounded-xl overflow-hidden">
                    <img
                      src={profilepic}
                      alt="Yaswanth rongala - Professional Photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating Badge */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-3 shadow-lg border border-purple-400/30"
                  >
                    <SiSalesforce className="text-white text-2xl" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Achievements Grid */}
          <motion.div 
            variants={itemVariants}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-white text-center mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Key Achievements
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-2xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300"
                >
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                    <achievement.icon className="text-white text-2xl" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Philosophy */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
              <FaUser className="text-4xl text-purple-400 mx-auto mb-6" />
              <blockquote className="text-xl text-gray-300 italic leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                "I believe in the power of innovative testing methodologies and AI-driven solutions 
                to transform how we ensure software quality. Every challenge is an opportunity 
                to create more efficient, reliable, and scalable solutions."
              </blockquote>
              <p className="text-purple-400 font-semibold mt-4" style={{ fontFamily: 'Caveat, cursive' }}>
                — Yaswanth Rongala
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;