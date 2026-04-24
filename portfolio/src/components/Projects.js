import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';
import InfiniteMenu from './ui/InfiniteMenu';

const GITHUB_USERNAME = 'HEETMEHTA18';

const binaryBattlesProject = {
  id: 'binary-battles-dev',
  title: 'BinaryBattles.dev',
  description: 'Fast-paced binary strategy battles. Play now on the live website.',
  link: 'https://binarybattles.dev',
  language: 'TypeScript',
  image: '/coding-bingo.png',
};

const infiniteMenuItems = [
  {
    image: '/coding-bingo.png',
    link: 'https://binarybattles.dev',
    title: 'BinaryBattles.dev',
    description: 'Fast-paced binary strategy battles. Play now on the live website.',
  },
  {
    image: '/coastal-guardian.png',
    link: 'https://github.com/HEETMEHTA18/Coastal-Guardian',
    title: 'Coastal-Guardian',
    description: 'AI-powered platform for real-time coastal threat assessment',
  },
  {
    image: '/checkmate.png',
    link: 'https://github.com/HEETMEHTA18/CheckMate',
    title: 'CheckMate',
    description: 'Maths based document verification system',
  },
  {
    image: '/animation-io.png',
    link: 'https://github.com/HEETMEHTA18/Animation.io',
    title: 'Animation.io',
    description: 'Web Animations Collection',
  },
];

function Projects() {
  const { theme } = useTheme();

  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div
        className={`relative overflow-hidden rounded-[2rem] border px-4 py-10 sm:px-6 md:px-8 shadow-2xl backdrop-blur-xl ${
          theme === 'dark' ? 'border-white/10 bg-slate-950/75' : 'border-slate-200 bg-white/90'
        }`}
      >
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            My Portfolio
          </h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
            Featured project
          </p>
        </motion.div>

        <p className={`text-center text-sm mb-10 md:mb-12 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
          Showing 1 project
        </p>

        <motion.div
          className={`relative mb-10 md:mb-14 rounded-3xl overflow-hidden border ${theme === 'dark' ? 'border-cyan-400/30 bg-slate-900/70' : 'border-cyan-300 bg-cyan-50/60'} shadow-2xl`}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="relative h-[430px] sm:h-[520px] md:h-[620px]">
            <InfiniteMenu items={infiniteMenuItems} scale={1.08} />
          </div>
        </motion.div>

        <div className="min-h-[320px]">
          <motion.div
            className="grid grid-cols-1 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <motion.a
              href={binaryBattlesProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full cursor-pointer"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            >
              <div
                className={`relative h-full rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500 hover:shadow-purple-500/20'
                    : 'bg-white border border-slate-200 hover:border-blue-400 hover:shadow-blue-500/10'
                }`}
              >
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${
                    theme === 'dark' ? 'bg-gradient-to-br from-purple-600/20 to-blue-600/20' : 'bg-gradient-to-br from-blue-500/10 to-purple-500/10'
                  }`}
                  initial={false}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative p-5 sm:p-6 h-full flex flex-col">
                  <div className="mb-4 overflow-hidden rounded-xl border border-slate-700/20">
                    <img
                      src={binaryBattlesProject.image}
                      alt={`${binaryBattlesProject.title} preview`}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex items-start justify-between mb-4 gap-3">
                    <h3
                      className={`text-lg sm:text-xl font-bold transition-colors line-clamp-2 ${
                        theme === 'dark' ? 'text-white group-hover:text-purple-300' : 'text-slate-900 group-hover:text-blue-600'
                      }`}
                    >
                      {binaryBattlesProject.title}
                    </h3>
                  </div>

                  <p className={`text-sm mb-4 flex-grow line-clamp-3 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                    {binaryBattlesProject.description}
                  </p>

                  <div className={`flex flex-col gap-4 pt-4 mt-auto ${theme === 'dark' ? 'border-t border-gray-700' : 'border-t border-slate-200'}`}>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-full text-white font-medium">
                        {binaryBattlesProject.language}
                      </span>
                    </div>

                    <div
                      className={`flex items-center justify-between transition-colors ${
                        theme === 'dark' ? 'text-gray-400 group-hover:text-white' : 'text-slate-500 group-hover:text-slate-900'
                      }`}
                    >
                      <span className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>Visit Website</span>
                      <FiExternalLink size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          </motion.div>
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
