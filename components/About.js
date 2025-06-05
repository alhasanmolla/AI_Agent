import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const About = () => {
  const skills = [
    { category: 'Programming', items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'R', 'Scala'] },
    { category: 'Data Engineering', items: ['Apache Spark', 'Hadoop', 'Kafka', 'Airflow', 'Snowflake'] },
    { category: 'Machine Learning', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'MLflow'] },
    { category: 'DevOps & Cloud', items: ['Docker', 'Kubernetes', 'AWS', 'Azure'] },
    { category: 'Finance Tools', items: ['QuantLib', 'PyPortfolioOpt', 'Backtrader', 'YFinance', 'Alpha Vantage'] },
    { category: 'Web Development', items: ['React', 'Next.js', 'Node.js', 'Express'] },
  ];

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
      </div>
    </section>
  );
};

export default About;