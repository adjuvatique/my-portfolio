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
      role: 'QA Engineer',
      company: 'Z-Software',
      period: 'Aug 2024 – Apr 2025',
      location: 'Remote',
      bullets: [
        'Tested game functionality on PC and mobile, uncovering 30+ UX issues and improving user retention',
        'Wrote over 100 custom test cases in TestRail covering gameplay, UI and performance, cutting UAT bugs by 40%',
        'Logged 150+ bugs in Jira with severity tags, helping developers prioritize and fix faster',
        'Ran performance checks across Windows, Android and iOS platforms, ensuring consistent 60+ FPS',
        'Onboarded junior testers and improved internal review workflow'
      ]
    },
    {
      id: 2,
      role: 'Freelance QA Engineer (Remote)',
      company: '',
      period: 'Jan 2023 – Present',
      location: 'UK & EU',
      bullets: [
        'Collaborated with 10+ web and mobile clients on QA for early-stage apps and MVPs',
        'Wrote test scenarios based on real user flows, focusing on usability, functionality, and edge cases',
        'Reported 100+ bugs, including critical issues, reducing miscommunication errors by 30%',
        'Provided detailed bug reports and checklists in Jira and Confluence'
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
