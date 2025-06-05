import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'R', level: 75 },
        { name: 'Scala', level: 70 },
      ],
    },
    {
      category: 'Data Engineering',
      items: [
        { name: 'Apache Spark', level: 90 },
        { name: 'Kafka', level: 85 },
        { name: 'Airflow', level: 80 },
        { name: 'Hadoop', level: 75 },
        { name: 'Snowflake', level: 85 },
      ],
    },
    {
      category: 'Machine Learning',
      items: [
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'MLflow', level: 75 },
        { name: 'Computer Vision', level: 70 },
        { name: 'NLP', level: 80 },
      ],
    },
    {
      category: 'DevOps & Cloud',
      items: [
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'AWS', level: 80 },
        { name: 'Azure', level: 75 },
        { name: 'CI/CD', level: 80 },
      ],
    },
    {
      category: 'Web Development',
      items: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      category: 'Finance & Quant',
      items: [
        { name: 'Algorithmic Trading', level: 85 },
        { name: 'Risk Management', level: 80 },
        { name: 'Portfolio Optimization', level: 85 },
        { name: 'Financial Modeling', level: 80 },
        { name: 'Time Series Analysis', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary dark:bg-accent mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div 
              key={groupIndex}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div 
                        className="bg-primary dark:bg-accent h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 + (skillIndex * 0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;