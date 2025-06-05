import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm <span className="text-primary dark:text-accent">Al Hasan</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mt-4 text-gray-700 dark:text-gray-300">
              Software Engineer & Product Analyst
            </h2>
            <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-lg">
              I build data-driven solutions and machine learning models to solve complex problems.
              Passionate about quantitative finance, HFT strategies, and cybersecurity.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="/resume.pdf"
                download
                className="bg-primary hover:bg-primary-dark dark:bg-accent dark:hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-lg flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="mr-2" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;