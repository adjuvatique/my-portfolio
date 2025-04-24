import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Brand */}
        <div className="space-y-2">
          <h4 className="text-xl font-bold text-white">Aleksandrs Bilanins</h4>
          <p className="text-sm">QA Engineer | Manual & API Testing | Automation Aspirant</p>
        </div>

        {/* Column 2: Navigation */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-4">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Column 3: Copy */}
        <div className="text-center md:text-right space-y-1">
          <p className="text-sm">
            © {currentYear} Aleksandrs Bilanins
          </p>
          <p className="text-sm flex items-center justify-center md:justify-end">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" />
          </p>
          <p className="text-sm">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
