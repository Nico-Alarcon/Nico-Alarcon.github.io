import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

interface GalleryImage {
  url: string;
  title: string;
  description: string;
}

interface ProjectPageProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  achievements: string[];
  githubLink?: string;
  demoLink?: string;
  gallery?: GalleryImage[];
  overview?: string;
  challenges?: string[];
  solutions?: string[];
  conclusion?: string;
}

export default function ProjectPage({
  title,
  description,
  image,
  technologies,
  achievements,
  githubLink,
  demoLink,
  gallery = [],
  overview,
  challenges = [],
  solutions = [],
  conclusion
}: ProjectPageProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90"></div>
        </div>
        
        <div className="relative container mx-auto px-6 h-full">
          <button
            onClick={() => navigate('/')}
            className="absolute top-8 flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </button>
          
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
            <p className="text-xl text-blue-100 max-w-2xl">{description}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Links */}
          {(githubLink || demoLink) && (
            <div className="flex gap-4 mb-12">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Source
                </a>
              )}
              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
            </div>
          )}

          {/* Project Overview */}
          {overview && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-gray-700 leading-relaxed">{overview}</p>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Gallery */}
          {gallery.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {gallery.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges and Solutions */}
          {(challenges.length > 0 || solutions.length > 0) && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Challenges & Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Challenges */}
                {challenges.length > 0 && (
                  <div className="bg-red-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-red-900 mb-4">Challenges</h3>
                    <ul className="space-y-3">
                      {challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 mt-2 rounded-full bg-red-600"></div>
                          <p className="text-red-800">{challenge}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Solutions */}
                {solutions.length > 0 && (
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Solutions</h3>
                    <ul className="space-y-3">
                      {solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 mt-2 rounded-full bg-green-600"></div>
                          <p className="text-green-800">{solution}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Key Achievements */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Achievements</h2>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-600"></div>
                  <p className="text-gray-700">{achievement}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Conclusion */}
          {conclusion && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed">{conclusion}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}