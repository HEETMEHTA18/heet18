import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

function TopNav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 px-4 py-3"
    >
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        {/* Your Name */}
        <span className="text-lg font-bold text-white">
          Heet Mehta
        </span>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="text-gray-400 hover:text-white transition-colors p-2 rounded-full"
          aria-label="Toggle theme"
        >
          {
            theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg> // Sun Icon
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg> // Moon Icon
            )
          }
        </button>
      </div>
    </motion.nav>
  );
}

export default TopNav; 