import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10 dark:bg-accent/10"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: Math.random() * 10 + 10,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-primary dark:text-accent">Al Hasan</span>
          </h1>
          
          <motion.div
            className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="typed-text">Software Engineer & Product Analyst</span>
          </motion.div>
          
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Specializing in building robust systems that leverage data to drive business decisions and create value. With expertise in quantitative finance, data engineering, and machine learning.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a 
              href="#contact" 
              className="px-8 py-3 bg-primary hover:bg-blue-700 text-white rounded-md transition-colors dark:bg-accent dark:hover:bg-blue-600 font-medium"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white font-medium"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a 
            href="#about" 
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FiArrowDown size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;