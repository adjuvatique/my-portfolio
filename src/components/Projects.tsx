import React, { useState } from 'react';
import { ExternalLink, ChevronRight, Code, BugOff, GitBranch } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  role: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  tools: string[];
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform Quality Assurance",
      description: "Implemented comprehensive testing strategy for a high-traffic e-commerce platform handling 50,000+ daily transactions.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["E-commerce", "Automation", "Performance"],
      role: "Lead QA Engineer",
      challenges: [
        "High transaction volume with complex shopping cart logic",
        "Multiple payment gateways requiring thorough testing",
        "Mobile responsiveness across 20+ device profiles"
      ],
      solutions: [
        "Developed Selenium-based automated test suite covering 90% of critical paths",
        "Implemented JMeter performance tests simulating peak traffic scenarios",
        "Created BDD framework with Cucumber for better stakeholder communication"
      ],
      results: [
        "Reduced critical production bugs by 78% in the first quarter",
        "Decreased regression testing time from 3 days to 4 hours",
        "Improved overall application performance by identifying and resolving 12 major bottlenecks"
      ],
      tools: ["Selenium", "JMeter", "Cucumber", "Jenkins", "JIRA", "JavaScript"]
    },
    {
      id: 2,
      title: "Healthcare Application Security Testing",
      description: "Led security and compliance testing for a HIPAA-compliant healthcare management system used by 200+ medical facilities.",
      image: "https://images.pexels.com/photos/6476261/pexels-photo-6476261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Healthcare", "Security", "Compliance"],
      role: "Security QA Specialist",
      challenges: [
        "HIPAA compliance requirements with zero tolerance for data leaks",
        "Complex user permission system with multiple access levels",
        "Integration with legacy systems requiring robust API testing"
      ],
      solutions: [
        "Implemented OWASP security testing methodology with automated scanning",
        "Developed custom permission testing framework to validate access controls",
        "Created comprehensive API test suite with Postman and Newman"
      ],
      results: [
        "Zero security vulnerabilities in production after implementation",
        "Achieved 100% HIPAA compliance in external audit",
        "Reduced user permission issues by 94%"
      ],
      tools: ["OWASP ZAP", "Burp Suite", "Postman", "Newman", "Python", "Selenium"]
    },
    {
      id: 3,
      title: "Banking App Test Automation Framework",
      description: "Designed and implemented a custom test automation framework for a mobile banking application serving 2M+ users.",
      image: "https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Banking", "Mobile", "Framework"],
      role: "Test Automation Architect",
      challenges: [
        "High security requirements with complex transaction flows",
        "Multiple platform support (iOS, Android, Web)",
        "Real-time transaction processing requiring reliable test data"
      ],
      solutions: [
        "Designed hybrid test framework with Appium for mobile and Selenium for web",
        "Implemented test data management system with Docker-based reset capabilities",
        "Created CI/CD pipeline with parallel test execution reducing test time by 70%"
      ],
      results: [
        "Achieved 95% test automation coverage for critical paths",
        "Reduced release cycle from 2 weeks to 3 days",
        "Zero critical bugs in production for 6 consecutive releases"
      ],
      tools: ["Appium", "Selenium", "Docker", "GitHub Actions", "Java", "TestNG"]
    },
    {
      id: 4,
      title: "SaaS Platform Performance Optimization",
      description: "Led performance testing initiative for a SaaS platform experiencing scalability issues during peak usage.",
      image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["SaaS", "Performance", "Scalability"],
      role: "Performance Testing Specialist",
      challenges: [
        "System crashes during peak user loads of 10,000+ concurrent users",
        "Slow database response times affecting overall application performance",
        "Complex microservice architecture making issue isolation difficult"
      ],
      solutions: [
        "Implemented comprehensive JMeter test scripts simulating real user scenarios",
        "Created performance monitoring dashboard with Grafana and Prometheus",
        "Developed load testing strategy targeting specific microservices"
      ],
      results: [
        "Improved application performance by 300% during peak loads",
        "Identified and resolved 15 critical bottlenecks in database queries",
        "Established performance baseline and ongoing monitoring system"
      ],
      tools: ["JMeter", "Grafana", "Prometheus", "K6", "PostgreSQL", "Docker"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            Project Portfolio
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 transform translate-y-2"></span>
          </h2>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my most impactful quality assurance projects, highlighting my approach to testing challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs font-medium px-2 py-1 rounded-full bg-blue-600/80 text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{project.role}</span>
                  <button 
                    onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                    className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    {activeProject === project.id ? 'View Less' : 'View Details'}
                    <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${activeProject === project.id ? 'rotate-90' : ''}`} />
                  </button>
                </div>
                
                {activeProject === project.id && (
                  <div className="mt-6 space-y-6 animate-fadeIn">
                    <div>
                      <div className="flex items-center mb-2">
                        <BugOff className="w-5 h-5 text-red-500 mr-2" />
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white">Key Challenges</h4>
                      </div>
                      <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                        {project.challenges.map((challenge, index) => (
                          <li key={index}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <Code className="w-5 h-5 text-green-500 mr-2" />
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white">Solutions & Approach</h4>
                      </div>
                      <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                        {project.solutions.map((solution, index) => (
                          <li key={index}>{solution}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <GitBranch className="w-5 h-5 text-blue-500 mr-2" />
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white">Results & Impact</h4>
                      </div>
                      <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                        {project.results.map((result, index) => (
                          <li key={index}>{result}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, index) => (
                          <span 
                            key={index} 
                            className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;