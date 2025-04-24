import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { AtSign, MapPin, Phone, Send, Linkedin, Github } from 'lucide-react';

const SERVICE_ID  = 'service_xlmd9vl';
const TEMPLATE_ID = 'template_bob4746';
const USER_ID     = '0cmiBGnjqtBs2EGtM';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(null);
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        setFormStatus({ submitted: true, success: true, message: "Thank you! I'll get back to you soon." });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(err => {
        console.error('EmailJS error:', err);
        setFormStatus({ submitted: true, success: false, message: 'Failed to send, please try again later.' });
      });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            Get In Touch
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 translate-y-2"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Interested in working together? I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {formStatus && (
            <div
              className={`p-4 rounded-lg text-center ${
                formStatus.success
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                  : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
              }`}
            >
              {formStatus.message}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">Select a subject</option>
            <option>Project Inquiry</option>
            <option>Job Opportunity</option>
            <option>Collaboration</option>
            <option>General Question</option>
          </select>

          <textarea
            name="message"
            rows={6}
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
          />

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
          >
            <Send className="w-5 h-5 mr-2" /> Send Message
          </button>
        </form>

        <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md space-y-6">
          <div className="flex items-start">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
              <AtSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
              <a href="mailto:a.bilanins@yahoo.com" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                a.bilanins@yahoo.com
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
              <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</h4>
              <a href="tel:+447935487870" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                +44 7935 487870
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Telegram</h4>
              <a href="https://t.me/adjuvatiue" target="_blank" rel="noopener" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                @adjuvatiue
              </a>
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            <a href="https://www.linkedin.com/in/aleksandrs-b-69ba5135a/" target="_blank" rel="noopener" aria-label="LinkedIn" className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
              <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </a>
            <a href="https://github.com/adjuvatique" target="_blank" rel="noopener" aria-label="GitHub" className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
              <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/10l-6_VSs80IEqHV06Vg_EyuVWMK2h2wa/view?usp=sharing"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Download Resume
            <Send className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
