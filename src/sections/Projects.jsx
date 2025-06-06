import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode, FaArrowRight, FaTimes, FaCheckCircle, FaClock, FaUsers, FaTools } from 'react-icons/fa';
import AnimatedHeading from '../components/common/AnimatedHeading';
import Button from '../components/common/Button';
import azureimg from '../assets/images/Azure.png';
import aipimg from '../assets/images/Apiimg.png';
import automationimg from '../assets/images/Automationimg.png';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "API Testing for Microservices Architecture",
      description: "Comprehensive API testing suite with 500+ automated test cases for a travel booking system. Implemented RestAssured, TestNG, and JMeter for performance testing with 10,000 concurrent users.",
      image: aipimg,
      technologies: ["RestAssured", "TestNG", "JMeter", "Java", "Maven"],
      github: "https://github.com/yashwanth938/yashwanth938/tree/main?tab=readme-ov-file",
      demo: "https://demo.api-testing.com",
      category: "Automation Testing",
      detailedDescription: "A comprehensive API testing framework designed for microservices architecture in a travel booking system. This project demonstrates advanced testing strategies and automation capabilities.",
      features: [
        "500+ automated test cases covering all API endpoints",
        "Performance testing with JMeter for 10,000 concurrent users",
        "Data-driven testing with Excel and CSV integration",
        "Continuous integration with Jenkins pipeline",
        "Detailed HTML reporting with screenshots",
        "Database validation and API response verification"
      ],
      challenges: [
        "Handling complex booking workflows with multiple dependencies",
        "Managing test data across different environments",
        "Implementing parallel execution for faster test runs",
        "Creating reusable test components for maintainability"
      ],
      outcomes: [
        "40% reduction in manual testing effort",
        "99.9% API endpoint coverage achieved",
        "50% faster release cycles",
        "Zero production bugs related to API functionality"
      ],
      duration: "6 months",
      teamSize: "3 QA Engineers",
      role: "QA Engineer"
    },
    {
      id: 2,
      title: "Azure Cloud Complaint Management Portal",
      description: "Heroku-deployed complaint entry portal achieving 99.9% uptime. Features containerized application deployment with Postgres integration and automated backup systems.",
      image: azureimg,
      technologies: ["Heroku", "PostgreSQL", "Docker", "Node.js", "React"],
      github: "https://github.com/yashwanth938/yashwanth938/tree/main?tab=readme-ov-file",
      demo: "https://complaint-portal.herokuapp.com",
      category: "Cloud Application",
      detailedDescription: "A robust complaint management system deployed on Heroku cloud platform with enterprise-grade reliability and scalability features.",
      features: [
        "Real-time complaint tracking and status updates",
        "Role-based access control with admin dashboard",
        "Automated email notifications for stakeholders",
        "Advanced search and filtering capabilities",
        "Data export functionality in multiple formats",
        "Responsive design for mobile and desktop users"
      ],
      challenges: [
        "Ensuring 99.9% uptime with cloud deployment",
        "Implementing secure user authentication",
        "Managing database performance with growing data",
        "Creating intuitive user interface for all user types"
      ],
      outcomes: [
        "99.9% uptime achieved over 12 months",
        "60% faster complaint resolution time",
        "500+ daily active users",
        "95% customer satisfaction rating"
      ],
      duration: "4 months",
      teamSize: "2 Full-stack Developers",
      role: "Azure Administrator"
    },
    {
      id: 3,
      title: "Selenium Automation Testing Suite",
      description: "Cross-browser test automation framework with Jenkins CI/CD integration. Created reusable test functions and maintained high test coverage metrics for enterprise applications.",
      image: automationimg,
      technologies: ["Selenium WebDriver", "Jenkins", "Java", "TestNG", "Maven"],
      github: "https://github.com/yashwanth938/yashwanth938/tree/main?tab=readme-ov-file",
      demo: "https://automation-reports.com",
      category: "Test Automation",
      detailedDescription: "An enterprise-grade Selenium automation framework designed for cross-browser testing with continuous integration capabilities.",
      features: [
        "Cross-browser testing on Chrome, Firefox, and Safari",
        "Page Object Model design pattern implementation",
        "Data-driven testing with external data sources",
        "Parallel execution across multiple browsers",
        "Comprehensive reporting with ExtentReports",
        "Screenshot capture for failed test cases"
      ],
      challenges: [
        "Managing cross-browser compatibility issues",
        "Handling dynamic web elements and waits",
        "Creating maintainable test architecture",
        "Implementing robust error handling mechanisms"
      ],
      outcomes: [
        "85% test coverage achieved across web applications",
        "70% reduction in manual testing time",
        "99% test reliability with minimal flaky tests",
        "Seamless integration with CI/CD pipeline"
      ],
      duration: "5 months",
      teamSize: "4 QA Engineers",
      role: "Automation testing Engineer"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Modern Card Animation - Zoom + Fade
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Modal Animation Variants
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 100
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <section id="projects" className="py-20 lg:py-32">
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
              text="Featured Projects"
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            />
            <motion.p 
              variants={cardVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              style={{ fontFamily: 'Wotfard, sans-serif'}}
            >
              Showcasing my expertise in QA engineering, Azure administration, and 
              automation testing through real-world projects and technical achievements.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-2xl overflow-hidden border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    variants={imageVariants}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-600/80 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex justify-between items-center pt-4">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <FaGithub size={20} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                      >
                        <FaExternalLinkAlt size={20} />
                      </motion.a>
                    </div>
                    
                    <motion.button
                      onClick={() => openProjectDetails(project)}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center space-x-2 text-sm font-medium"
                    >
                      <span>View Details</span>
                      <FaArrowRight size={12} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* GitHub CTA */}
          <motion.div 
            variants={cardVariants}
            className="text-center"
          >
            <div className="inline-flex flex-col items-center space-y-4 p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-gray-900/30 to-purple-900/20 backdrop-blur-sm">
              <FaCode className="text-4xl text-purple-400 mb-2" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Explore More Projects
              </h3>
              <p className="text-gray-300 text-center max-w-md mb-6">
                Discover additional projects, code samples, and technical contributions on my GitHub profile.
              </p>
              
              <Button
                onClick={() => window.open('https://github.com/yashwanth938/yashwanth938/tree/main?tab=readme-ov-file', '_blank')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 border border-purple-500/20 hover:border-purple-400/40 flex items-center gap-3"
              >
                <FaGithub />
                View All Projects on GitHub
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeProjectDetails}
            >
              {/* Modal Content */}
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative bg-gradient-to-br from-gray-900/95 to-purple-900/30 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30 backdrop-blur-md"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  onClick={closeProjectDetails}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors duration-300 z-10"
                >
                  <FaTimes size={24} />
                </motion.button>

                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  {/* Header */}
                  <motion.div variants={itemVariants} className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <span className="px-4 py-2 bg-purple-600/80 text-white text-sm font-medium rounded-full">
                        {selectedProject.category}
                      </span>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <FaClock />
                          <span>{selectedProject.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaUsers />
                          <span>{selectedProject.teamSize}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h2>
                    
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {selectedProject.detailedDescription}
                    </p>

                    <div className="text-purple-300 font-medium">
                      Role: {selectedProject.role}
                    </div>
                  </motion.div>

                  {/* Project Image */}
                  <motion.div variants={itemVariants} className="rounded-xl overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>

                  {/* Technologies */}
                  <motion.div variants={itemVariants} className="space-y-4">
                    <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                      <FaTools className="text-purple-400" />
                      <span>Technologies Used</span>
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Features */}
                  <motion.div variants={itemVariants} className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="flex items-start space-x-3 p-3 bg-gray-800/30 rounded-lg"
                        >
                          <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Challenges & Outcomes Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Challenges */}
                    <motion.div variants={itemVariants} className="space-y-4">
                      <h3 className="text-xl font-bold text-white">Challenges Overcome</h3>
                      <div className="space-y-3">
                        {selectedProject.challenges.map((challenge, index) => (
                          <div
                            key={index}
                            className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg"
                          >
                            <span className="text-gray-300 text-sm">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Outcomes */}
                    <motion.div variants={itemVariants} className="space-y-4">
                      <h3 className="text-xl font-bold text-white">Project Outcomes</h3>
                      <div className="space-y-3">
                        {selectedProject.outcomes.map((outcome, index) => (
                          <div
                            key={index}
                            className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg"
                          >
                            <span className="text-gray-300 text-sm">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Action Buttons */}
                  <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      onClick={() => window.open(selectedProject.github, '_blank')}
                      className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <FaGithub />
                      View Source Code
                    </Button>
                    <Button
                      onClick={() => window.open(selectedProject.demo, '_blank')}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
