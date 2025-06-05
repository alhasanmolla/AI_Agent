import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      content: 'contact@example.com',
      link: 'mailto:contact@example.com',
    },
    {
      icon: <FiPhone size={24} />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Location',
      content: 'New York, NY, USA',
      link: 'https://maps.google.com/?q=New+York,+NY,+USA',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary dark:bg-accent mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent mb-4">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{info.title}</h3>
              <a 
                href={info.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors"
              >
                {info.content}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div 
              className="p-8 bg-primary dark:bg-accent text-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Let's Discuss Your Project</h3>
              <p className="mb-6">
                I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don't hesitate to use the form.              
              </p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <FiMail className="mr-3" /> Email: contact@example.com
                </p>
                <p className="flex items-center">
                  <FiPhone className="mr-3" /> Call: +1 (555) 123-4567
                </p>
                <p className="flex items-center">
                  <FiMapPin className="mr-3" /> Location: New York, NY, USA
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
                  There was an error sending your message. Please try again later.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-primary dark:focus:ring-accent focus:border-primary dark:focus:border-accent dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-primary dark:focus:ring-accent focus:border-primary dark:focus:border-accent dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-primary dark:focus:ring-accent focus:border-primary dark:focus:border-accent dark:bg-gray-800 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-primary dark:focus:ring-accent focus:border-primary dark:focus:border-accent dark:bg-gray-800 dark:text-white"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors dark:bg-accent dark:hover:bg-blue-600 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-2" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;