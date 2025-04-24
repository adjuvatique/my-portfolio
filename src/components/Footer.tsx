import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-bold text-xl text-blue-600 dark:text-blue-400 mb-2">
                QA Portfolio
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Crafting quality software through rigorous testing.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <div className="flex justify-center md:justify-end space-x-6 mb-4">
                <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
                <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
                <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
                <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center md:justify-end">
                © {currentYear} Jane Smith. Made with 
                <Heart className="w-4 h-4 text-red-500 mx-1" />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;