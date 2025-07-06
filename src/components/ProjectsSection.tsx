import React from 'react';
import { projects } from '../data/portfolio';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-video relative bg-white dark:bg-gray-700 p-1 rounded-t-xl">
                  {project.image && !project.image.includes('placeholder') ? (
                    <img 
                      src={project.image} 
                      alt={`${project.name} preview`}
                      className="w-full h-full object-contain rounded-lg border border-gray-200 dark:border-gray-600 group-hover:scale-[1.02] transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to gradient background if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  {/* Fallback gradient with initials */}
                  <div 
                    className={`absolute inset-2 bg-gradient-to-br from-primary-500 to-blue-500 flex items-center justify-center rounded-lg ${
                      project.image && !project.image.includes('placeholder') ? 'hidden' : ''
                    }`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 rounded-lg"></div>
                    <div className="text-white text-6xl font-bold opacity-50 relative z-10">
                      {project.name.split(' ').map((word: string) => word[0]).join('')}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
