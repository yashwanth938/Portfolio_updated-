import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaRocket, FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaLinkedin, FaGithub, FaTwitter, FaPaperPlane ,FaInstagram 
} from 'react-icons/fa';
import AnimatedHeading from '../components/common/AnimatedHeading';
import Button from '../components/common/Button';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

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

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "rongalayaswanth@gmail.com",
      href: "mailto:rongalayaswanth@gmail.com",
      color: "text-red-400"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+91 9381422269",
      href: "tel:+919381422269",
      color: "text-green-400"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Vishakaptanam, India",
      href: "#",
      color: "text-blue-400"
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/yash-aa8655135/",
      color: "text-blue-400 hover:text-blue-300"
    },
    {
      icon: FaGithub,
      href: "https://github.com/yashwanth938/",
      color: "text-gray-300 hover:text-white"
    },
    {
      icon: FaInstagram ,
      href: "https://www.instagram.com/training__to_be_hokage/",
      color: "text-blue-400 hover:text-blue-300"
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header - Fixed Rocket Icon Alignment */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            {/* Centered Rocket Icon */}
            <div className="flex justify-center items-center mb-6">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg"
              >
                <FaRocket className="text-white" size={32} />
              </motion.div>
            </div>

            <AnimatedHeading
              text="Get in Touch"
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            />
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              style={{ fontFamily: 'Wotfard, sans-serif' }}
            >
              Ready to collaborate? Let's discuss opportunities, projects, or 
              simply connect. I'm always interested in new challenges and partnerships.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-purple-300 text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-purple-300 text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-purple-300 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                      placeholder="Message Subject"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-purple-300 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                      placeholder="Your message here..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 border border-purple-500/20 hover:border-purple-400/40 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      whileHover={{ x: 10 }}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-purple-500/10 transition-all duration-300 group"
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 ${item.color}`}>
                        <item.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-300 text-sm">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
                
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-8 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-300 mb-4">
                    Let's build something amazing together!
                  </p>
                  <div className="inline-flex items-center space-x-2 text-purple-400">
                    <span>Available for freelance projects</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;