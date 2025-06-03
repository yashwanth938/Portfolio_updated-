import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaJava, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaLinux,
  FaCloud, FaBrain, FaCog, FaUsers, FaLightbulb, FaComments
} from 'react-icons/fa';
import {
  SiSelenium, SiPostman, SiJenkins, SiTestinglibrary, SiJunit5,
  SiCloudflare, SiSalesforce, SiPostgresql, SiApachemaven
} from 'react-icons/si';
import AnimatedHeading from '../components/common/AnimatedHeading';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Unique gradients for skills
  const skillGradients = [
    "from-violet-500/80 to-fuchsia-500/80",
    "from-cyan-500/80 to-blue-500/80", 
    "from-emerald-500/80 to-teal-500/80",
    "from-orange-500/80 to-pink-500/80",
    "from-indigo-500/80 to-purple-500/80",
    "from-rose-500/80 to-orange-500/80",
    "from-sky-500/80 to-cyan-500/80",
    "from-lime-500/80 to-green-500/80",
    "from-amber-500/80 to-yellow-500/80",
    "from-red-500/80 to-pink-500/80",
    "from-purple-500/80 to-indigo-500/80",
    "from-teal-500/80 to-emerald-500/80",
    "from-blue-500/80 to-violet-500/80",
    "from-pink-500/80 to-rose-500/80",
    "from-green-500/80 to-lime-500/80",
    "from-yellow-500/80 to-amber-500/80",
    "from-fuchsia-500/80 to-purple-500/80",
    "from-cyan-400/80 to-blue-600/80",
    "from-emerald-400/80 to-green-600/80",
    "from-orange-400/80 to-red-600/80"
  ];

  const skillCategories = [
    {
      title: "AI & Analytics",
      icon: FaBrain,
      gradient: "from-indigo-500/80 to-pink-500/80",
      skills: [
        { name: "Salesforce AI Associate", level: 95, icon: SiSalesforce },
        { name: "Salesforce AI Specialist", level: 90, icon: SiSalesforce },
        { name: "Einstein Analytics", level: 85, icon: FaBrain },
        { name: "AI-Driven Testing", level: 80, icon: FaLightbulb }
      ]
    },
    {
      title: "Automation Tools & Cloud",
      icon: FaCloud,
      gradient: "from-blue-400/80 to-purple-500/80",
      skills: [
        { name: "Selenium WebDriver", level: 95, icon: SiSelenium },
        { name: "Microsoft Azure (AZ-900)", level: 90, icon: SiCloudflare },
        { name: "Heroku Deployment", level: 85, icon: FaCloud },
        { name: "Docker Containers", level: 80, icon: FaDocker }
      ]
    },
    {
      title: "Testing Methodologies",
      icon: SiTestinglibrary,
      gradient: "from-green-400/80 to-cyan-500/80",
      skills: [
        { name: "RestAssured API Testing", level: 95, icon: SiPostman },
        { name: "TestNG Framework", level: 90, icon: SiJunit5 },
        { name: "JMeter Performance", level: 85, icon: FaCog },
        { name: "Jenkins CI/CD", level: 80, icon: SiJenkins }
      ]
    },
    {
      title: "Programming Tools",
      icon: FaCog,
      gradient: "from-orange-400/80 to-red-500/80",
      skills: [
        { name: "Java", level: 90, icon: FaJava },
        { name: "React.js", level: 85, icon: FaReact },
        { name: "Node.js", level: 80, icon: FaNodeJs },
        { name: "PostgreSQL", level: 85, icon: SiPostgresql }
      ]
    },
    {
      title: "Soft Skills",
      icon: FaUsers,
      gradient: "from-pink-400/80 to-rose-500/80",
      skills: [
        { name: "Problem Solving", level: 95, icon: FaLightbulb },
        { name: "Team Collaboration", level: 90, icon: FaUsers },
        { name: "Communication", level: 85, icon: FaComments },
        { name: "Leadership", level: 80, icon: FaUsers }
      ]
    }
  ];

  // Smooth fade-in animation for main cards (not slide)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Fade-in animation for main category cards
  const categoryVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1] // Custom spring-like easing
      }
    }
  };

  // Fade-in animation for skill cards
  const skillVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1
      }
    })
  };

  // Skill card component with unique hover animation
  const SkillCard = ({ skill, index }) => {
    const gradientIndex = index % skillGradients.length;
    
    return (
      <motion.div
        custom={index}
        variants={skillVariants}
        className="group relative overflow-hidden"
        whileHover={{ 
          scale: 1.05,
          transition: { 
            duration: 0.3, 
            ease: "easeOut" 
          }
        }}
      >
        <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl backdrop-blur-sm border border-purple-500/20 group-hover:border-purple-400/50 transition-all duration-300">
          <div className="flex items-center space-x-3">
            <motion.div
              className={`p-2 rounded-lg bg-gradient-to-r ${skillGradients[gradientIndex]}`}
              whileHover={{ 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5, repeat: 0 }
              }}
            >
              <skill.icon className="text-white" size={20} />
            </motion.div>
            <span className="text-white font-medium">{skill.name}</span>
          </div>
        </div>

        {/* Animated glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
          style={{ 
            background: `linear-gradient(135deg, transparent 20%, ${skillGradients[gradientIndex].split(' ')[1].replace('/80', '')} 140%)`,
            filter: 'blur(8px)'
          }}
        />
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      {/* Background - unchanged as requested */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-orange-950/60 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-800/20 to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,69,119,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(75,0,130,0.2),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="text-center mb-16">
            <AnimatedHeading
              text="Technical Expertise"
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            />
            <motion.p
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { duration: 1 }
                }
              }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              style={{ fontFamily: 'Wotfard, sans-serif' }}
            >
              Comprehensive skill set spanning AI-powered testing, cloud administration,
              and automation frameworks with industry certifications and hands-on experience.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                // Glassy effect for main cards
                className="bg-gray-900/30 rounded-2xl p-6 border border-purple-500/30 
                           backdrop-blur-md shadow-xl hover:shadow-purple-500/10
                           hover:border-purple-400/50 transition-all duration-500
                           relative overflow-hidden"
                style={{
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                {/* Glassy internal gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 pointer-events-none"></div>
                
                {/* Category header */}
                <div className="flex items-center space-x-3 mb-6 relative z-10">
                  <div 
                    className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} shadow-lg`}
                  >
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={categoryIndex * 4 + skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Centered Certifications Highlight - FIXED ALIGNMENT */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.8,
                  delay: 0.5,
                  ease: "easeOut"
                }
              }
            }}
            className="mt-16 flex justify-center items-center w-full"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 bg-gray-800/40 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 max-w-2xl w-full">
              {/* Salesforce Certification */}
              <div className="flex items-center space-x-4 text-center sm:text-left">
                <SiSalesforce className="text-blue-400" size={32} />
                <div>
                  <h4 className="text-lg font-bold text-white">Salesforce Certified</h4>
                  <p className="text-purple-300">AI Associate & AI Specialist</p>
                </div>
              </div>
              
              {/* Divider */}
              <div className="w-16 h-px sm:w-px sm:h-12 bg-purple-500/30"></div>
              
              {/* Azure Certification */}
              <div className="flex items-center space-x-4 text-center sm:text-left">
                <SiCloudflare className="text-blue-500" size={32} />
                <div>
                  <h4 className="text-lg font-bold text-white">Microsoft Azure</h4>
                  <p className="text-purple-300">Fundamentals (AZ-900)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
