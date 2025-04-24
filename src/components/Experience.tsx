import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: 'Freelance QA Engineer (Self-employed)',
      company: '',
      period: 'Jan 2023 – Present (2 years 4 months)',
      location: 'United Kingdom',
      bullets: [
        'Tested over 10 web and mobile applications (MVPs and production) with focus on usability, functionality, and stability',
        'Wrote and executed detailed test cases, recreated issues, and collaborated with clients to clarify requirements',
        'Logged 100+ bugs in Jira, including several high-priority issues that improved release quality',
        'Performed API and microservice testing using Postman and Kafka; conducted integration and exploratory testing',
        'Worked with tools like Chrome DevTools, Charles Proxy, Kibana, and DBeaver (PostgreSQL) for log analysis and backend validation',
        'Ran cross-browser and cross-device testing',
        'Selected Projects:',
        '• TwiceUp: UI and database testing with Chrome DevTools and PostgreSQL (DBeaver); identified 20+ UX issues',
        '• Turbo Casino: Validated registration, payment, and gameplay flows; used Charles Proxy for backend event validation',
        '• Benefactory: Performed REST API testing for filters and review CRUD; reported bugs using Jira templates with severity tags'
      ]
    },
    {
      id: 2,
      role: 'QA Engineer',
      company: 'Z-Software GmbH',
      period: 'Aug 2024 – Apr 2025 (9 months)',
      location: 'Hamburg, Germany',
      bullets: [
        'Middle QA Engineer',
        'Reason for Leaving: Pursued new opportunities due to unmet agreements with the employer',
        'Conducted thorough gameplay testing to ensure a high-quality user experience',
        'Developed and executed comprehensive test scenarios to identify issues',
        'Documented bugs and collaborated with the development team for effective resolution',
        'Analyzed and assessed game quality, providing actionable feedback for improvements',
        'Performed regression testing to verify fixes and maintain software integrity',
        'Tested across various platforms to ensure consistent performance and quality',
        'Participated in test planning to align testing efforts with project goals',
        'Provided constructive feedback on game design to enhance player engagement',
        'Mentored and trained junior team members to foster a collaborative environment'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            Professional Experience
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 transform translate-y-2"></span>
          </h2>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            My recent roles in quality assurance, highlighting key responsibilities and achievements.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="md:flex md:items-start md:space-x-8">
              <div className="flex-shrink-0 mb-4 md:mb-0 text-blue-600 dark:text-blue-400">
                <Calendar className="w-5 h-5 inline-block mr-2" />
                <span className="font-medium">{exp.period}</span>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex-1">
                <div className="flex items-center mb-2">
                  <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.role}{exp.company && ` @ ${exp.company}`}
                  </h3>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">{exp.location}</div>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
