import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Michael Chen",
      role: "CTO",
      company: "TechSolutions Inc.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "Jane's expertise in QA transformed our development process. Her implementation of automated testing frameworks reduced our release cycle by 60% while improving product quality. Her ability to think critically about potential issues before they arise has been invaluable."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "FinTech Solutions",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "Working with Jane was a game-changer for our product team. Her meticulous approach to testing uncovered critical issues that would have affected thousands of users. She's not just a QA engineer; she's a true advocate for quality who understands the business impact of her work."
    },
    {
      id: 3,
      name: "David Rodriguez",
      role: "Lead Developer",
      company: "HealthTech Systems",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "As a developer, I've worked with many QA professionals, but Jane stands out for her technical depth and collaborative approach. She doesn't just find bugs; she helps solve them. Her understanding of both testing and development made our integration testing process seamless."
    },
    {
      id: 4,
      name: "Emily Wong",
      role: "Director of Engineering",
      company: "WebApps Co.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "Jane's leadership in quality assurance fundamentally changed how our organization approaches software quality. Her implementation of shift-left testing practices helped us identify issues earlier in the development cycle, saving countless hours and resources."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            Client Testimonials
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 transform translate-y-2"></span>
          </h2>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            What colleagues and clients say about my work and approach to quality assurance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <Quote className="w-12 h-12 text-blue-500/20 dark:text-blue-400/20 mb-4" />
              
              <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-8">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeIndex === index 
                        ? 'bg-blue-600 dark:bg-blue-400 w-6' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;