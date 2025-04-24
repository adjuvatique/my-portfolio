import React, { useState } from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

const Projects: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Test Cases Collection',
      description: 'Набор из более чем 100 кейсов, написанных в TestRail: functional, regression, edge-case сценарии.',
      link: 'ВАША_ССЫЛКА_НА_TESTRAIL',
    },
    {
      id: 2,
      title: 'Checklists & Bug Reports',
      description: 'Примеры чек-листов и баг-репортов, оформленных в Confluence и Jira — для web, mobile и game проектов.',
      link: 'ВАША_ССЫЛКА_НА_BUG_REPORTS',
    },
    {
      id: 3,
      title: 'Stepik Certificate',
      description: 'Сертификат об окончании курса SQL for Analysts на Stepik.',
      link: 'https://stepik.org/certificate/9c3c6f7fb57e9f36d6dc5a3667dea80751e28319.png',
    },
    {
      id: 4,
      title: 'Telegram Quiz Bot 🤖',
      description: 'Бот на Python (python-telegram-bot) для multiple-choice викторин с подсчётом очков и логированием.',
      link: 'https://github.com/adjuvatique/Telegram_quiz_bot',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white inline-block relative">
            My Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 translate-y-2"></span>
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Короткий обзор моих ключевых работ и ссылок на их описание.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {p.description}
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    Посмотреть <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  <button
                    onClick={() => setActiveId(activeId === p.id ? null : p.id)}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 flex items-center"
                  >
                    {activeId === p.id ? 'Скрыть' : 'Подробнее'}
                    <ChevronRight
                      className={`w-4 h-4 ml-1 transition-transform ${
                        activeId === p.id ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                </div>
                {activeId === p.id && (
                  <p className="mt-4 text-gray-600 dark:text-gray-400 italic">
                    {p.id === 1 && 'Написано и поддерживается более 100 детализированных тест-кейсов в TestRail, которые покрывают функциональные, регрессионные и edge-case сценарии — существенно повысили качество релизов.'}
                    {p.id === 2 && 'Разработаны шаблоны чек-листов и баг-репортов в Confluence и Jira. Упорядочили процесс регистрации дефектов, что снизило время на triage на 30%.'}
                    {p.id === 3 && 'Успешно завершил курс «SQL for Analysts» на Stepik. Оптимизировал сложные SQL-запросы и освоил методики анализа данных для QA.'}
                    {p.id === 4 && 'Создал Telegram Quiz Bot на Python с использованием python-telegram-bot. Бот поддерживает multiple-choice викторины, подсчёт очков, логирование активности и интеграцию с CI.'}
                  </p>
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
