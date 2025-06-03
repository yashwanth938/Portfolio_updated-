import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode, FaArrowRight } from 'react-icons/fa';
import AnimatedHeading from '../components/common/AnimatedHeading';
import Button from '../components/common/Button';
import azureimg from '../assets/images/Azure.png';
import aipimg from '../assets/images/Apiimg.png'; // Assuming you have an image for Azure projects
import automationimg from '../assets/images/Automationimg.png';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 1,
      title: "API Testing for Microservices Architecture",
      description: "Comprehensive API testing suite with 500+ automated test cases for a travel booking system. Implemented RestAssured, TestNG, and JMeter for performance testing with 10,000 concurrent users.",
      image: aipimg,
      technologies: ["RestAssured", "TestNG", "JMeter", "Java", "Maven"],
      github: "https://github.com/yaswanth-kura/api-testing-suite",
      demo: "https://demo.api-testing.com",
      category: "Testing Automation"
    },
    {
      id: 2,
      title: "Azure Cloud Complaint Management Portal",
      description: "Heroku-deployed complaint entry portal achieving 99.9% uptime. Features containerized application deployment with Postgres integration and automated backup systems.",
      image: azureimg,
      technologies: ["Heroku", "PostgreSQL", "Docker", "Node.js", "React"],
      github: "https://github.com/yaswanth-kura/complaint-portal",
      demo: "https://complaint-portal.herokuapp.com",
      category: "Cloud Application"
    },
    {
      id: 3,
      title: "Selenium Automation Testing Suite",
      description: "Cross-browser test automation framework with Jenkins CI/CD integration. Created reusable test functions and maintained high test coverage metrics for enterprise applications.",
      image: automationimg,
      technologies: ["Selenium WebDriver", "Jenkins", "Java", "TestNG", "Maven"],
      github: "https://github.com/yaswanth-kura/selenium-automation",
      demo: "https://automation-reports.com",
      category: "Test Automation"
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
                      whileHover={{ x: 5 }}
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

          {/* GitHub CTA - Clean Design Without Background Effects */}
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
              
              {/* Clean GitHub Button with Subtle Hover */}
              <Button
                onClick={() => window.open('https://github.com/yaswanth-kura', '_blank')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 border border-purple-500/20 hover:border-purple-400/40 flex items-center gap-3"
              >
                <FaGithub />
                View All Projects on GitHub
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;