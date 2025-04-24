import React from 'react';
import { ArrowDown, Clipboard, Code, TestTube } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-2xl font-medium text-blue-600 dark:text-blue-400 mb-2 animate-fadeIn">
              Hello, I'm
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight animate-slideIn">
              Jane Smith
              <span className="block text-blue-600 dark:text-blue-400 mt-2">QA Engineer</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-fadeIn delay-200">
              Detail-oriented Quality Assurance Engineer with 6+ years of experience ensuring software excellence through comprehensive testing strategies. Specialized in automation, performance testing, and building robust QA frameworks that catch issues before they reach production.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 animate-fadeIn delay-300">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all transform hover:scale-105"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all transform hover:scale-105"
              >
                View Projects
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center animate-fadeIn delay-400">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-blue-500 to-teal-400 opacity-20 dark:opacity-30 absolute -top-5 -left-5"></div>
              <div className="w-64 h-64 sm:w-80 sm:h-80 relative z-10 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="col-span-2 sm:col-span-1 bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition-all">
                    <TestTube className="w-8 h-8 text-blue-500 mb-2" />
                    <h3 className="font-medium text-gray-900 dark:text-white">Test Automation</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Selenium, Cypress, Playwright</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition-all">
                    <Code className="w-8 h-8 text-teal-500 mb-2" />
                    <h3 className="font-medium text-gray-900 dark:text-white">CI/CD</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Jenkins, GitHub Actions</p>
                  </div>
                  <div className="col-span-2 bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition-all">
                    <Clipboard className="w-8 h-8 text-orange-500 mb-2" />
                    <h3 className="font-medium text-gray-900 dark:text-white">Testing Lifecycle</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Requirements Analysis • Test Planning • Execution • Reporting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#skills" aria-label="Scroll to Skills section">
            <ArrowDown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;