import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaJava, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaLinux,
  FaCloud, FaBrain, FaCog, FaUsers, FaLightbulb, FaComments
} from 'react-icons/fa';
import { 
  SiSelenium, SiPostman, SiJenkins, SiTestinglibrary, SiJunit5,
  SiCloudflare , SiSalesforce, SiPostgresql, SiApachemaven 
} from 'react-icons/si';
import AnimatedHeading from '../components/common/AnimatedHeading';
import useAnimatedCounter from '../hooks/useAnimatedCounter';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "AI & Analytics",
      icon: FaBrain,
      color: "from-purple-900/40 to-pink-600/40",
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
      color: "from-blue-500/40 to-purple-700/40",
      skills: [
        { name: "Selenium WebDriver", level: 95, icon: SiSelenium },
        { name: "Microsoft Azure (AZ-900)", level: 90, icon: SiCloudflare  },
        { name: "Heroku Deployment", level: 85, icon: FaCloud },
        { name: "Docker Containers", level: 80, icon: FaDocker }
      ]
    },
    {
      title: "Testing Methodologies",
      icon: SiTestinglibrary,
      color: "from-green-300/40 to-blue-800",
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
      color: "from-orange-700/40 to-red-800",
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
      color: "from-pink-500 to-purple-500",
      skills: [
        { name: "Problem Solving", level: 95, icon: FaLightbulb },
        { name: "Team Collaboration", level: 90, icon: FaUsers },
        { name: "Communication", level: 85, icon: FaComments },
        { name: "Leadership", level: 80, icon: FaUsers }
      ]
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

  const categoryVariants = {
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

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1
      }
    })
  };

  const SkillBar = ({ skill, index }) => {
    const animatedValue = useAnimatedCounter(skill.level, inView, 1000 + index * 200);

    return (
      <motion.div
        custom={index}
        variants={skillVariants}
        className="space-y-2"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <skill.icon className="text-purple-400" size={20} />
            <span className="text-white font-medium">{skill.name}</span>
          </div>
          <span className="text-purple-300 font-bold">{animatedValue}%</span>
        </div>
        
        <div className="w-full bg-gray-700 rounded-full h-2">
          <motion.div
            className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      {/* Updated Background - Black to Deep Orange Gradient */}
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
          {/* Section Header */}
          <div className="text-center mb-16">
            <AnimatedHeading
              text="Technical Expertise"
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            />
            <motion.p 
              variants={categoryVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              style={{ fontFamily: 'Wotfard, sans-serif' }}
            >
              Comprehensive skill set spanning AI-powered testing, cloud administration, 
              and automation frameworks with industry certifications and hands-on experience.
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                className="bg-gradient-to-br from-gray-900/50 to-purple-900/30 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      index={categoryIndex * 4 + skillIndex} 
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Highlight */}
          <motion.div 
            variants={categoryVariants}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm">
              <SiSalesforce className="text-blue-400" size={32} />
              <div className="text-left">
                <h4 className="text-lg font-bold text-white">Salesforce Certified</h4>
                <p className="text-purple-300">AI Associate & AI Specialist</p>
              </div>
              <div className="w-px h-12 bg-purple-500/30"></div>
              <SiCloudflare  className="text-blue-500" size={32} />
              <div className="text-left">
                <h4 className="text-lg font-bold text-white">Microsoft Azure</h4>
                <p className="text-purple-300">Fundamentals (AZ-900)</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;