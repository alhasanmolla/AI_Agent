import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
  ];

  const experiences = [
    {
      title: 'Senior Data Scientist',
      company: 'Quantitative Research Firm',
      period: '2021 - Present',
      description: 'Leading a team of data scientists to develop and implement quantitative trading strategies. Utilizing machine learning and statistical models to analyze financial markets and optimize portfolio performance.',
    },
    {
      title: 'Data Engineer',
      company: 'Financial Technology Startup',
      period: '2019 - 2021',
      description: 'Designed and built data pipelines for processing financial data. Implemented real-time analytics systems using Kafka, Spark, and AWS services. Collaborated with data science teams to deploy machine learning models.',
    },
    {
      title: 'Software Developer',
      company: 'Investment Bank',
      period: '2017 - 2019',
      description: 'Developed applications for risk management and trading systems. Worked with large datasets and implemented algorithms for financial analysis. Collaborated with traders and quantitative analysts to improve existing systems.',
    },
  ];

  const education = [
    {
      degree: 'Master of Science in Financial Engineering',
      institution: 'Columbia University',
      period: '2015 - 2017',
      description: 'Specialized in computational finance and machine learning applications in finance. Thesis on algorithmic trading strategies using reinforcement learning.',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      period: '2011 - 2015',
      description: 'Focused on algorithms, data structures, and artificial intelligence. Minor in Mathematics with emphasis on statistical analysis.',
    },
  ];

  const certifications = [
    {
      name: 'Chartered Financial Analyst (CFA) - Level II',
      issuer: 'CFA Institute',
      date: '2022',
    },
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2021',
    },
    {
      name: 'Professional Certificate in FinTech',
      issuer: 'Harvard University',
      date: '2020',
    },
    {
      name: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      date: '2019',
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'experience':
        return (
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                <p className="text-primary dark:text-accent font-medium">{exp.company}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{exp.period}</p>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        );
      case 'education':
        return (
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                <p className="text-primary dark:text-accent font-medium">{edu.institution}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{edu.period}</p>
                <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        );
      case 'certifications':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{cert.name}</h3>
                <p className="text-primary dark:text-accent font-medium">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary dark:bg-accent mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <div className="w-40 h-40 rounded-full bg-gray-300 dark:bg-gray-700 mx-auto mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                  [Profile Photo]
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">Al Hasan</h3>
              <p className="text-center text-primary dark:text-accent font-medium mb-4">Software Engineer & Product Analyst</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <span className="text-gray-600 dark:text-gray-300 font-medium w-24">Location:</span>
                  <span className="text-gray-700 dark:text-gray-200">New York, NY</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 dark:text-gray-300 font-medium w-24">Experience:</span>
                  <span className="text-gray-700 dark:text-gray-200">5+ Years</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 dark:text-gray-300 font-medium w-24">Availability:</span>
                  <span className="text-gray-700 dark:text-gray-200">Full-time</span>
                </div>
              </div>
              
              <a 
                href="/resume.pdf" 
                className="flex items-center justify-center w-full py-2 px-4 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors dark:bg-accent dark:hover:bg-blue-600"
                download
              >
                <FiDownload className="mr-2" /> Download Resume
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Who I Am</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I'm a passionate software engineer and product analyst with expertise in quantitative finance, data engineering, and machine learning. With over 5 years of experience in the financial technology sector, I specialize in building robust systems that leverage data to drive business decisions and create value.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  My background combines technical expertise in software development with deep knowledge of financial markets and quantitative methods. I'm dedicated to creating innovative solutions that bridge the gap between technology and finance, helping organizations harness the power of data to gain competitive advantages.
                </p>
              </div>
              
              <div>
                <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-2 px-4 font-medium ${activeTab === tab.id ? 'text-primary dark:text-accent border-b-2 border-primary dark:border-accent' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                
                {renderTabContent()}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;