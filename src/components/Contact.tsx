import React from 'react';
import { AtSign, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Get In Touch</h2>
          <span className="block w-24 h-1 bg-blue-600 mx-auto mb-4"></span>
          <p className="text-lg text-gray-300">
            I'm always open to new opportunities and collaborations.
          </p>
        </div>

        {/* Contact Items */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-blue-600 p-3 rounded-full mb-4">
              <AtSign className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold mb-1">Email</h4>
            <a
              href="mailto:a.bilanins@yahoo.com"
              className="text-gray-300 hover:text-white"
            >
              a.bilanins@yahoo.com
            </a>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-600 p-3 rounded-full mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold mb-1">Phone</h4>
            <a
              href="tel:+447935487870"
              className="text-gray-300 hover:text-white"
            >
              +44 7935 487870
            </a>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-blue-600 p-3 rounded-full mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold mb-1">Telegram</h4>
            <a
              href="https://t.me/adjuvatiue"
              target="_blank"
              rel="noopener"
              className="text-gray-300 hover:text-white"
            >
              @adjuvatiue
            </a>
          </div>
        </div>

        {/* Social & Resume */}
        <div className="mt-12 flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/aleksandrs-b-69ba5135a/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
            >
              <Linkedin className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href="https://github.com/adjuvatique"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
            >
              <Github className="w-5 h-5 text-gray-300" />
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/10l-6_VSs80IEqHV06Vg_EyuVWMK2h2wa/view?usp=sharing"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
          >
            Download Resume
            <Send className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
