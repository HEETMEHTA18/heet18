import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const GITHUB_USERNAME = 'HEETMEHTA18';

const projectDescriptions = {
  'Coding-Bingo-Platform': 'Multiplayer coding games for developers & teams',
  'Coastal-Guardian': 'AI-powered platform for real-time coastal threat assessment',
  'Web-Dev-Framework': 'Repository for web development students',
  'CheckMate': 'Maths based document verification system',
  'Animation.io': 'Web Animations Collection',
  'Sasta-Shark-Tank': 'Interactive project for pitching business ideas',
  'Smart-Traffic-Light-System-With-Adaptive-Siganal': 'Smart Traffic Light Control System with ESP32',
  'solar_system_project': 'Simulation of the solar system',
  'weatherSphere': 'Responsive weather forecasting website',
  'jobHive_Frontend': 'Frontend for JobHive'
};

const fallbackProjects = [
  {
    id: 'coding-bingo-platform',
    title: 'Coding-Bingo-Platform',
    description: 'Multiplayer coding games for developers & teams',
    link: 'https://github.com/HEETMEHTA18/Coding-Bingo-Platform',
    stars: 12,
    language: 'JavaScript'
  },
  {
    id: 'coastal-guardian',
    title: 'Coastal-Guardian',
    description: 'AI-powered platform for real-time coastal threat assessment',
    link: 'https://github.com/HEETMEHTA18/Coastal-Guardian',
    stars: 8,
    language: 'Python'
  },
  {
    id: 'web-dev-framework',
    title: 'Web-Dev-Framework',
    description: 'Repository for web development students',
    link: 'https://github.com/HEETMEHTA18/Web-Dev-Framework',
    stars: 15,
    language: 'HTML'
  },
  {
    id: 'checkmate',
    title: 'CheckMate',
    description: 'Maths based document verification system',
    link: 'https://github.com/HEETMEHTA18/CheckMate',
    stars: 6,
    language: 'Python'
  },
  {
    id: 'animation-io',
    title: 'Animation.io',
    description: 'Web Animations Collection',
    link: 'https://github.com/HEETMEHTA18/Animation.io',
    stars: 20,
    language: 'JavaScript'
  },
  {
    id: 'sasta-shark-tank',
    title: 'Sasta-Shark-Tank',
    description: 'Interactive project for pitching business ideas',
    link: 'https://github.com/HEETMEHTA18/Sasta-Shark-Tank',
    stars: 4,
    language: 'React'
  }
];

function Projects() {
  const { theme } = useTheme();
  const [projects, setProjects] = useState(fallbackProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&order=desc&per_page=12`);
        if (!response.ok) throw new Error('Failed to fetch repositories');

        const data = await response.json();
        const filtered = data
          .filter((repo) => !repo.fork || repo.stargazers_count > 5)
          .map((repo) => ({
            id: repo.id,
            title: repo.name,
            description: projectDescriptions[repo.name] || repo.description || 'No description available',
            link: repo.html_url,
            stars: repo.stargazers_count,
            language: repo.language || 'Other',
          }))
          .slice(0, 12);

        setProjects(filtered.length > 0 ? filtered : fallbackProjects);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };

  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className={`relative overflow-hidden rounded-[2rem] border px-4 py-10 sm:px-6 md:px-8 shadow-2xl backdrop-blur-xl ${theme === 'dark' ? 'border-white/10 bg-slate-950/75' : 'border-slate-200 bg-white/90'}`}>
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>My Portfolio</h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
            Explore my recent projects and contributions on GitHub
          </p>
        </motion.div>

        <p className={`text-center text-sm mb-10 md:mb-12 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
          Showing {projects.length} projects
        </p>

        <div className="min-h-[320px]">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {projects.map((project) => (
                <motion.div
                  key={project.id || project.title}
                  variants={cardVariants}
                  layout
                >
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full cursor-pointer"
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                  >
                    <div className={`relative h-full rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500 hover:shadow-purple-500/20' : 'bg-white border border-slate-200 hover:border-blue-400 hover:shadow-blue-500/10'}`}>
                      <motion.div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${theme === 'dark' ? 'bg-gradient-to-br from-purple-600/20 to-blue-600/20' : 'bg-gradient-to-br from-blue-500/10 to-purple-500/10'}`}
                        initial={false}
                        transition={{ duration: 0.3 }}
                      />

                      <div className="relative p-5 sm:p-6 h-full flex flex-col">
                        <div className="flex items-start justify-between mb-4 gap-3">
                          <h3 className={`text-lg sm:text-xl font-bold transition-colors line-clamp-2 ${theme === 'dark' ? 'text-white group-hover:text-purple-300' : 'text-slate-900 group-hover:text-blue-600'}`}>
                            {project.title}
                          </h3>
                          <FiGithub className={`transition-colors shrink-0 ${theme === 'dark' ? 'text-gray-500 group-hover:text-purple-400' : 'text-slate-500 group-hover:text-blue-500'}`} size={20} />
                        </div>

                        <p className={`text-sm mb-4 flex-grow line-clamp-3 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                          {project.description}
                        </p>

                        <div className={`flex flex-col gap-4 pt-4 mt-auto ${theme === 'dark' ? 'border-t border-gray-700' : 'border-t border-slate-200'}`}>
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-xs bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-full text-white font-medium">
                              {project.language}
                            </span>
                            {project.stars > 0 && (
                              <div className="flex items-center gap-1 text-yellow-400 text-sm font-semibold">
                                <FiStar size={14} fill="currentColor" />
                                <span>{project.stars}</span>
                              </div>
                            )}
                          </div>

                          <div className={`flex items-center justify-between transition-colors ${theme === 'dark' ? 'text-gray-400 group-hover:text-white' : 'text-slate-500 group-hover:text-slate-900'}`}>
                            <span className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>View on GitHub</span>
                            <FiExternalLink size={18} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {loading && (
            <div className="mt-8 flex items-center justify-center gap-3 text-gray-400">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-purple-500 border-t-transparent" />
              <span className="text-sm">Loading projects...</span>
            </div>
          )}
        </div>

        <motion.p
          className={`text-center text-sm mt-14 ${theme === 'dark' ? 'text-gray-500' : 'text-slate-600'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          View all my projects on{' '}
          <motion.a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            GitHub
          </motion.a>
        </motion.p>
      </div>
    </section>
  );
}

export default Projects;