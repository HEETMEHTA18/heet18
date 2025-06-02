import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="min-h-screen max-w-3xl mx-auto px-4 py-16 md:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-gray-800 dark:text-white"
      >
        About Me
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-48 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden flex-shrink-0"
        >
          <img 
            src="/my-photo.jpg" 
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
              className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg text-center"
            >
              <div className="text-purple-600 dark:text-purple-400 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M12 15h.01" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Experience</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">X+ Years Working</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg text-center"
            >
              <div className="text-purple-600 dark:text-purple-400 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Completed</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Y+ Projects</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg text-center"
            >
              <div className="text-purple-600 dark:text-purple-400 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 0a5 5 0 11-7.072 7.072m7.072-7.072L5.636 18.364m0 0L12 12m0 0l7.072 7.072M12 12L5.636 5.636" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Support</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Online 24/7</p>
            </motion.div>
          </div>
          <motion.p
            className="space-y-4 text-gray-700 dark:text-gray-300 mb-6 text-base sm:text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frontend Developer. I create web pages with UI / UX user Interfaces, I have years of experience and many clients are happy with the work I did.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Contact Me
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default About; 