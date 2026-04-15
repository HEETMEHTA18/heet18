import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

function About() {
  const { theme } = useTheme();
  const profileImage = `${process.env.PUBLIC_URL || ''}/my-photo.jpg`;

  return (
    <section id="about" className="min-h-screen max-w-3xl mx-auto px-4 py-16 md:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-2xl sm:text-3xl font-semibold mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
      >
        About Me
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`w-48 h-64 rounded-lg overflow-hidden flex-shrink-0 border ${theme === 'dark' ? 'bg-gray-700 border-white/10' : 'bg-white border-slate-200 shadow-lg'}`}
        >
          <img 
            src={profileImage} 
            alt="Heet Mehta" 
            className="w-full h-full object-cover"
            loading="lazy"
            width="192"
            height="256"
          />
        </motion.div>
        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`p-4 rounded-lg text-center border ${theme === 'dark' ? 'bg-gray-800/50 border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}
            >
              <div className={`${theme === 'dark' ? 'text-purple-400' : 'text-blue-600'} mb-2`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M12 15h.01" />
                </svg>
              </div>
              <h3 className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Experience</h3>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>Learning Technologies</p>
               </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`p-4 rounded-lg text-center border ${theme === 'dark' ? 'bg-gray-800/50 border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}
            >
              <div className={`${theme === 'dark' ? 'text-purple-400' : 'text-blue-600'} mb-2`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Completed</h3>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>2+ Projects</p>
            </motion.div> 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={`p-4 rounded-lg text-center border ${theme === 'dark' ? 'bg-gray-800/50 border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}
            >
              <div className={`${theme === 'dark' ? 'text-purple-400' : 'text-blue-600'} mb-2`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 0a5 5 0 11-7.072 7.072m7.072-7.072L5.636 18.364m0 0L12 12m0 0l7.072 7.072M12 12L5.636 5.636" />
                </svg>
              </div>
              <h3 className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Contact</h3>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>Online 24/7</p>
            </motion.div>
          </div>
          <motion.p
            className={`space-y-4 mb-6 text-base sm:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Hi, I'm Heet Mehta : A  developer with a keen interest in building smart, real-world  solutions. From IoT innovations to interactive web apps, Love turning ideas into impactful digital experiences. Always curious, always learning ready to collaborate and create something amazing together! 
          </motion.p>
        
        
        </div>
      </div>
    </section>
  );
}

export default About; 