import React from 'react';
import { FiGithub, FiLinkedin, FiYoutube, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub size={20} />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FiYoutube size={20} />, url: 'https://youtube.com/c/yourchannel', label: 'YouTube' },
    { icon: <FiTwitter size={20} />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <FiInstagram size={20} />, url: 'https://instagram.com/yourusername', label: 'Instagram' },
    { icon: <FiMail size={20} />, url: 'mailto:youremail@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-primary dark:text-accent">Al Hasan</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Software Engineer & Product Analyst
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-accent transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} Al Hasan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;