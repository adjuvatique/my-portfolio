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

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Freelance QA Engineer',
    company: '(Self-employed)',
    period: 'Jan 2023 – Present (2 years 4 months)',
    location: 'United Kingdom',
    bullets: [
      'Tested over 10 web and mobile applications (MVPs & production) with focus on usability, functionality, and stability',
      'Wrote & executed detailed test cases, recreated issues and collaborated with clients to clarify requirements',
      'Logged 100+ bugs in Jira, including several high-priority issues that improved release quality',
      'Performed API & microservice testing with Postman & Kafka; integration & exploratory testing',
      'Used Chrome DevTools, Charles Proxy, Kibana, DBeaver (PostgreSQL) for log analysis & backend validation',
      'Ran cross-browser and cross-device testing',
      'Selected projects:',
      ' • TwiceUp: UI & database testing via DevTools & PostgreSQL; found 20+ UX issues',
      ' • Turbo Casino: Validated registration, payment & gameplay flows; Charles Proxy for backend checks',
      ' • Benefactory: REST API testing (filters & review CRUD); reported bugs via Jira templates'
    ]
  },
  {
    id: 2,
    role: 'QA Engineer',
    company: 'Z-Software GmbH',
    period: 'Aug 2024 – Apr 2025 (9 months)',
    location: 'Hamburg, Germany',
    bullets: [
      'Middle QA Engineer; reason for leaving: pursued new opportunities after unmet agreements',
      'Conducted gameplay testing to ensure high-quality user experience',
      'Developed & executed comprehensive test scenarios to identify issues',
      'Logged & tracked bugs in Jira; collaborated with dev team for resolution',
      'Performed regression testing to verify fixes and maintain integrity',
      'Tested across platforms to guarantee consistent performance',
      'Gave actionable feedback on game design to enhance player engagement',
      'Mentored junior testers and improved internal review workflow'
    ]
  }
];

const Experience: React.FC = () => (
  <section id="experience" className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white inline-block relative">
          Professional Experience
          <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 translate-y-2"></span>
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          My recent roles in quality assurance, highlighting key responsibilities and achievements.
        </p>
      </div>
      
      <div className="space-y-12">
        {experiences.map((exp) => (
          <article
            key={exp.id}
            className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 items-start"
          >
            {/* Лева колонка — период и иконка */}
            <div className="flex items-center md:flex-col text-blue-600 dark:text-blue-400">
              <Calendar className="w-5 h-5 mr-2 md:mr-0 md:mb-2" />
              <time className="text-sm font-medium">{exp.period}</time>
            </div>

            {/* Правая колонка — контент */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
              <div className="flex items-center mb-3">
                <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.role} {exp.company && <span className="text-gray-600 dark:text-gray-400 font-normal">{exp.company}</span>}
                </h3>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">{exp.location}</div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
