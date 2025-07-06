import React from 'react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const skillCategories = [
    { name: 'Languages', items: skills.languages },
    { name: 'Frameworks', items: skills.frameworks },
    { name: 'Databases', items: skills.databases },
    { name: 'Tools', items: skills.tools },
    { name: 'Other', items: skills.other }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-light">
              The tools and technologies I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skillCategories.map((category, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4 text-center">
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.items.map((skill: string, skillIndex: number) => (
                    <div key={skillIndex} className="text-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
