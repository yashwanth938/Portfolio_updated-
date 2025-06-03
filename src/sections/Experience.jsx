import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaAward,
  FaRocket, FaUsers, FaTrophy, FaChartLine
} from 'react-icons/fa';
import AnimatedHeading from '../components/common/AnimatedHeading';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      id: 1,
      title: "QA Engineer & Azure Administrator",
      company: "Keywords Studios",
      location: "Remote",
      duration: "2023 - Present",
      type: "Full-time",
      achievements: [
        "Implemented AI-powered testing solutions achieving 40%+ efficiency gains",
        "Managed Azure cloud infrastructure with 99.9% uptime reliability",
        "Created comprehensive test automation frameworks using Selenium WebDriver",
        "Led cross-functional teams in delivering high-quality software products",
        "Developed performance testing strategies using JMeter for 10,000+ concurrent users"
      ],
      technologies: ["Azure", "Selenium", "TestNG", "JMeter", "Jenkins", "Docker"],
      highlights: [
        { icon: FaChartLine, text: "40% Efficiency Increase", color: "text-green-400" },
        { icon: FaTrophy, text: "99.9% Uptime", color: "text-blue-400" },
        { icon: FaRocket, text: "500+ Test Cases", color: "text-purple-400" },
        { icon: FaUsers, text: "Team Leadership", color: "text-pink-400" }
      ]
    },
    {
      id: 2,
      title: "Junior QA Engineer",
      company: "Previous Organization",
      location: "Hyderabad, India",
      duration: "2022 - 2023",
      type: "Full-time",
      achievements: [
        "Developed automated testing scripts using RestAssured for API testing",
        "Collaborated with development teams to implement CI/CD pipelines",
        "Performed manual testing for web and mobile applications",
        "Created detailed test documentation and reporting systems",
        "Contributed to code reviews and quality assurance processes"
      ],
      technologies: ["RestAssured", "Java", "Maven", "Git", "Postman", "SQL"],
      highlights: [
        { icon: FaRocket, text: "API Testing Expert", color: "text-green-400" },
        { icon: FaUsers, text: "Team Collaboration", color: "text-blue-400" },
        { icon: FaChartLine, text: "Quality Improvement", color: "text-purple-400" },
        { icon: FaTrophy, text: "Process Innovation", color: "text-pink-400" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 lg:py-32">
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
              text="Professional Journey"
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            />
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              A timeline of my professional growth, key achievements, and the impact 
              I've made in quality assurance and cloud administration.
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - Fixed */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-700">
              <motion.div
                variants={timelineVariants}
                className="w-full bg-gradient-to-b from-purple-500 to-pink-500"
              />
            </div>

            {/* Experience Items - Fixed Alignment */}
            <div className="space-y-16">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:justify-between`}
                >
                  {/* Timeline Dot - Fixed Position */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black z-10 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* Content Card - Fixed Alignment */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 shadow-xl"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">
                            {experience.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-purple-400 font-semibold mb-2">
                            <FaBriefcase size={16} />
                            <span>{experience.company}</span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <FaCalendarAlt />
                              <span>{experience.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FaMapMarkerAlt />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                          {experience.type}
                        </span>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <FaAward className="text-purple-400 mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2 text-gray-300 text-sm">
                              <span className="text-purple-400 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Highlights */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {experience.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center space-x-2 text-sm">
                            <highlight.icon className={`${highlight.color} text-lg`} />
                            <span className="text-gray-300">{highlight.text}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md border border-purple-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <div className="inline-flex flex-col items-center space-y-4 p-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
              <FaRocket className="text-4xl text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Ready for New Challenges</h3>
              <p className="text-gray-300 text-center max-w-md">
                Looking for opportunities to apply my expertise in QA engineering and 
                Azure administration to drive innovation and quality.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;