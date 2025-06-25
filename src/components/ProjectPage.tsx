// ProjectPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

interface GalleryImage {
  url: string;
  title: string;
  description: string;
}

export interface FullProjectPageProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  overview?: string;
  githubLink?: string;
  demoLink?: string;
  gallery?: GalleryImage[];
  challenges?: string[];
  solutions?: string[];
  achievements?: string[];
  conclusion?: string;
}

export default function ProjectPage(props: FullProjectPageProps) {
  const {
    title,
    description,
    image,
    technologies,
    overview,
    githubLink,
    demoLink,
    gallery = [],
    challenges = [],
    solutions = [],
    achievements = [],
    conclusion
  } = props;

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-96">
        <div className="absolute inset-0">
          <img src={image} alt={title} className="w-full h-full object-cover" />
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

          {/* Optional Links */}
          {(githubLink || demoLink) && (
            <div className="flex gap-4 mb-12">
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn-dark">
                  <Github className="w-5 h-5" />
                  View Source
                </a>
              )}
              {demoLink && (
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn-blue">
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
            </div>
          )}

          {/* Overview */}
          {overview && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-gray-700 leading-relaxed">{overview}</p>
            </div>
          )}

          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{tech}</span>
                ))}
              </div>
            </div>
          )}

          {/* Gallery */}
          {gallery.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {gallery.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <img src={item.url} alt={item.title} className="w-full h-64 object-cover" />
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
                {challenges.length > 0 && (
                  <div className="bg-red-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-red-900 mb-4">Challenges</h3>
                    <ul className="space-y-3">
                      {challenges.map((c, i) => (
                        <li key={i} className="flex gap-3">
                          <div className="w-2 h-2 mt-2 rounded-full bg-red-600"></div>
                          <p className="text-red-800">{c}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {solutions.length > 0 && (
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Solutions</h3>
                    <ul className="space-y-3">
                      {solutions.map((s, i) => (
                        <li key={i} className="flex gap-3">
                          <div className="w-2 h-2 mt-2 rounded-full bg-green-600"></div>
                          <p className="text-green-800">{s}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Achievements */}
          {achievements.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Achievements</h2>
              <ul className="space-y-3">
                {achievements.map((a, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-blue-600"></div>
                    <p className="text-gray-700">{a}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

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
