import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'Automated Quantitative Research Simulation',
      description: 'Built a backtesting system using Python and Backtrader to test HFT strategies with real-time market data.',
      technologies: ['Python', 'Backtrader', 'Pandas', 'NumPy', 'QuantLib'],
      category: 'Quant Finance',
      github: 'https://github.com/yourusername/quant-research',
      demo: 'https://demo.example.com',
      image: '/project1.jpg'
    },
    {
      id: 2,
      title: 'Real-time Financial Data Pipeline',
      description: 'Designed a Kafka-based streaming pipeline for processing real-time stock market data with Spark and Snowflake.',
      technologies: ['Kafka', 'Spark', 'Snowflake', 'Python', 'AWS'],
      category: 'Data Engineering',
      github: 'https://github.com/yourusername/data-pipeline',
      demo: 'https://demo.example.com',
      image: '/project2.jpg'
    },
    {
      id: 3,
      title: 'Portfolio Optimization Algorithm',
      description: 'Developed a machine learning-based portfolio optimization algorithm using modern portfolio theory and reinforcement learning.',
      technologies: ['Python', 'TensorFlow', 'PyPortfolioOpt', 'Pandas', 'Matplotlib'],
      category: 'Quant Finance',
      github: 'https://github.com/yourusername/portfolio-optimization',
      demo: 'https://demo.example.com',
      image: '/project3.jpg'
    },
    {
      id: 4,
      title: 'Cybersecurity Threat Detection System',
      description: 'Built an anomaly detection system for identifying potential security threats using machine learning algorithms.',
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Elasticsearch', 'Kibana'],
      category: 'Cybersecurity',
      github: 'https://github.com/yourusername/threat-detection',
      demo: 'https://demo.example.com',
      image: '/project4.jpg'
    },
    {
      id: 5,
      title: 'Personal Finance Dashboard',
      description: 'Created a React-based dashboard for personal finance tracking with data visualization and budget planning features.',
      technologies: ['React', 'D3.js', 'Node.js', 'Express', 'MongoDB'],
      category: 'Web Development',
      github: 'https://github.com/yourusername/finance-dashboard',
      demo: 'https://demo.example.com',
      image: '/project5.jpg'
    },
    {
      id: 6,
      title: 'Algorithmic Trading Bot',
      description: 'Developed an automated trading bot that executes trades based on technical indicators and sentiment analysis.',
      technologies: ['Python', 'NLTK', 'Alpha Vantage API', 'Pandas', 'Docker'],
      category: 'Quant Finance',
      github: 'https://github.com/yourusername/trading-bot',
      demo: 'https://demo.example.com',
      image: '/project6.jpg'
    },
  ];

  const categories = ['All', 'Quant Finance', 'Data Engineering', 'Cybersecurity', 'Web Development'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary dark:bg-accent mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full ${activeFilter === category ? 'bg-primary text-white dark:bg-accent' : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'} transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
            >
              <div className="h-48 bg-gray-300 dark:bg-gray-700 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  [Project Image]
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary dark:text-accent hover:underline flex items-center"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary dark:text-accent hover:underline flex items-center"
                  >
                    <FiExternalLink className="mr-1" /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;