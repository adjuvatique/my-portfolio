import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Senior QA Engineer",
      company: "TechSolutions Inc.",
      duration: "2021 - Present",
      location: "San Francisco, CA",
      description: "Leading quality assurance efforts for enterprise-level software products, focusing on automation frameworks and CI/CD integration.",
      achievements: [
        "Designed and implemented a company-wide test automation strategy reducing testing time by 60%",
        "Mentored a team of 5 junior QA engineers, resulting in improved team productivity",
        "Introduced shift-left testing practices, catching 40% more defects in early development stages",
        "Established performance testing guidelines that improved application performance by 35%"
      ]
    },
    {
      id: 2,
      role: "QA Automation Engineer",
      company: "FinTech Solutions",
      duration: "2018 - 2021",
      location: "Chicago, IL",
      description: "Spearheaded test automation initiatives for a financial services platform handling millions of transactions daily.",
      achievements: [
        "Developed a Selenium-based test framework that achieved 85% coverage of critical financial flows",
        "Implemented API testing strategy using Postman and Newman, covering 200+ endpoints",
        "Reduced regression testing cycle from 5 days to 6 hours through strategic automation",
        "Created disaster recovery testing scenarios that identified critical system vulnerabilities"
      ]
    },
    {
      id: 3,
      role: "Quality Assurance Analyst",
      company: "HealthTech Systems",
      duration: "2016 - 2018",
      location: "Boston, MA",
      description: "Ensured quality of patient management software used by healthcare providers nationwide.",
      achievements: [
        "Conducted thorough testing of HIPAA-compliant healthcare applications",
        "Created detailed test cases covering 100% of critical patient data workflows",
        "Collaborated with development teams to resolve 200+ high-priority defects",
        "Improved test documentation standards, increasing test clarity and reproducibility"
      ]
    },
    {
      id: 4,
      role: "Junior QA Tester",
      company: "WebApps Co.",
      duration: "2014 - 2016",
      location: "Portland, OR",
      description: "Performed manual and early automation testing for web applications and e-commerce platforms.",
      achievements: [
        "Conducted thorough manual testing across multiple browsers and devices",
        "Began transition to automated testing by learning Selenium WebDriver",
        "Identified and documented 300+ defects in pre-release software",
        "Assisted in creating the company's first standardized QA processes"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            Professional Journey
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 transform translate-y-2"></span>
          </h2>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            My career path in quality assurance, highlighting key roles and accomplishments.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 z-10"></div>
                
                <div className={`md:flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Time period - visible on mobile, hidden on desktop */}
                  <div className="md:hidden flex items-center text-blue-600 dark:text-blue-400 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{exp.duration}</span>
                  </div>
                  
                  {/* Content box */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                      <div className="flex items-center mt-1 mb-3 text-gray-700 dark:text-gray-300 justify-start md:justify-start">
                        <Briefcase className={`w-4 h-4 ${index % 2 === 0 ? 'md:order-2 md:ml-1' : 'mr-1'}`} />
                        <span>{exp.company}</span>
                      </div>
                      
                      {/* Time period - hidden on mobile, visible on desktop */}
                      <div className="hidden md:flex items-center text-blue-600 dark:text-blue-400 mb-3">
                        <Calendar className={`w-4 h-4 ${index % 2 === 0 ? 'md:order-2 md:ml-1' : 'mr-1'}`} />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                      
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.location}</div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                      
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                            <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Empty space for timeline layout */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;