import React from 'react';
import {
  TestTube,
  Clipboard,
  GitBranch,
  Database,
  Cpu,
  Zap,
  ServerCrash,
  Monitor,
} from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    {
      category: 'Manual Testing',
      icon: <Clipboard className="w-6 h-6 text-teal-500" />,
      tools: [
        'Test Case Design',
        'Functional Testing',
        'Regression Testing',
        'Integration Testing',
        'Localization Testing',
        'Acceptance Testing',
        'Exploratory Testing',
      ],
    },
    {
      category: 'API Testing & Logging',
      icon: <TestTube className="w-6 h-6 text-blue-500" />,
      tools: [
        'Postman',
        'API Testing',
        'Charles Proxy',
        'Log Analysis (Kibana)',
      ],
    },
    {
      category: 'Test Management',
      icon: <ServerCrash className="w-6 h-6 text-orange-500" />,
      tools: ['Jira', 'TestRail', 'TestIT', 'Confluence'],
    },
    {
      category: 'CI / CD & Version Control',
      icon: <GitBranch className="w-6 h-6 text-violet-500" />,
      tools: ['Git', 'TeamCity', 'GitHub Actions', 'Jenkins'],
    },
    {
      category: 'Database & Querying',
      icon: <Database className="w-6 h-6 text-emerald-500" />,
      tools: ['SQL', 'PostgreSQL', 'MySQL'],
    },
    {
      category: 'Game Testing',
      icon: <Monitor className="w-6 h-6 text-pink-500" />,
      tools: ['Unity', 'Unreal Engine', 'Performance Testing'],
    },
    {
      category: 'Automation (Learning)',
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      tools: ['Python', 'Selenium WebDriver'],
    },
    {
      category: 'Web Fundamentals',
      icon: <Cpu className="w-6 h-6 text-indigo-500" />,
      tools: ['HTML', 'CSS'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            Technical Skills
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 transform translate-y-2"></span>
          </h2>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive experience across multiple testing methodologies, tools and environments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-2">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.tools.map((tool) => (
                  <li key={tool} className="text-gray-700 dark:text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
