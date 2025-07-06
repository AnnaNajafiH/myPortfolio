import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/portfolio';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaArrowLeft, 
  FaClock, 
  FaCheckCircle,
  FaLightbulb,
  FaCog,
  FaStar,
  FaCode
} from 'react-icons/fa';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Project Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">The project you're looking for doesn't exist.</p>
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <FaArrowLeft />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Back to Projects</span>
            </button>
          </div>

          {/* Project Header */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl mb-8">
            <div className="relative">
              {/* Hero Image */}
              <div className="aspect-video bg-gradient-to-br from-primary-500 to-blue-500 relative overflow-hidden">
                {project.image && !project.image.includes('placeholder') ? (
                  <img 
                    src={project.image} 
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-8xl font-bold opacity-80">
                      {project.name.split(' ').map((word: string) => word[0]).join('')}
                    </div>
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
                
                {/* Title and Status */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-500/90 rounded-full backdrop-blur-sm">
                      <FaCheckCircle className="w-4 h-4" />
                      <span className="font-medium">{project.status}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/90 rounded-full backdrop-blur-sm">
                      <FaClock className="w-4 h-4" />
                      <span className="font-medium">{project.duration}</span>
                    </div>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.name}</h1>
                  <p className="text-xl text-gray-200 max-w-3xl">{project.shortDescription}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-8 border-b border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium"
                >
                  <FaExternalLinkAlt />
                  <span>View Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
                >
                  <FaGithub />
                  <span>View Source Code</span>
                </a>
              </div>
            </div>

            {/* Technologies */}
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <FaCode className="text-primary-600" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* About Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">About This Project</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                {project.detailedDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <FaStar className="text-primary-600" />
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <FaLightbulb className="text-primary-600" />
                Challenges & Solutions
              </h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Details */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <FaCog className="text-primary-600" />
                Technical Implementation
              </h2>
              <div className="space-y-4">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.filter(tech => 
                      ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap'].includes(tech)
                    ).map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.filter(tech => 
                      ['Express.js', 'MongoDB', 'JWT', 'PayPal SDK'].includes(tech)
                    ).map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Other Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.filter(p => p.id !== project.id).slice(0, 2).map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to={`/projects/${relatedProject.id}`}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 relative overflow-hidden">
                    {relatedProject.image ? (
                      <img 
                        src={relatedProject.image} 
                        alt={relatedProject.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-blue-500 flex items-center justify-center">
                        <div className="text-white text-4xl font-bold opacity-80">
                          {relatedProject.name.split(' ').map((word: string) => word[0]).join('')}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {relatedProject.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {relatedProject.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
