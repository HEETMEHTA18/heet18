import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';

function TopNav() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const resumePath = '/resume.pdf';

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 border-b px-4 py-3 backdrop-blur-sm ${theme === 'dark' ? 'bg-slate-950/90 border-white/10' : 'bg-white/90 border-slate-200 shadow-sm'}`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <motion.button
          onClick={() => scrollToSection('home')}
          className={`text-lg font-bold transition-colors ${theme === 'dark' ? 'text-white hover:text-purple-300' : 'text-slate-900 hover:text-blue-600'}`}
          whileHover={{ scale: 1.05 }}
        >
          Heet Mehta
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
              whileHover={{ scale: 1.05 }}
            >
              {link.label}
            </motion.button>
          ))}
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          {/* Resume Download Button */}
          <motion.a
            href={resumePath}
            download="Heet-Mehta-Resume.pdf"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <FiDownload size={16} />
            <span>Resume</span>
          </motion.a>

          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            className={`transition-colors p-2 rounded-full ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1 }}
          >
            {
              theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )
            }
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors p-2 rounded-full ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden mt-4 border-t pt-4 ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'}`}
      >
        {navLinks.map((link) => (
          <motion.button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`block w-full text-left px-4 py-2 rounded transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            whileHover={{ x: 4 }}
          >
            {link.label}
          </motion.button>
        ))}
        <motion.a
          href={resumePath}
          download="Heet-Mehta-Resume.pdf"
          className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          <FiDownload size={16} />
          Download Resume
        </motion.a>
      </motion.div>
    </motion.nav>
  );
}

export default TopNav; 