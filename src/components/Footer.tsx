
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} Sarthak Pranit. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">GitHub</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
