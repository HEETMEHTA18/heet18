import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import TypewriterText from './Hero/TypewriterText';

function Hero() {
  return (
    <section id="home" className="min-h-screen max-w-3xl mx-auto px-4 py-16 md:py-24 relative overflow-hidden">
      {/* Starry background image */}
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center"
        style={{ backgroundImage: 'url(/starry-background.jpg)', opacity: 1 }}
      ></div>

      {/* Water reflection container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"
          style={{
            transform: 'scaleY(-1)',
            filter: 'blur(8px)',
            maskImage: 'linear-gradient(to bottom, transparent, black 50%, transparent)',
          }}
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"
          style={{
            transform: 'scaleY(-1)',
            filter: 'blur(8px)',
            maskImage: 'linear-gradient(to bottom, transparent, black 50%, transparent)',
          }}
        />
      </div>

      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center relative z-0">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Heet Mehta
        </motion.h1>
        <TypewriterText
          text="Frontend Developer | Animation Artist | UI/UX Designer"
          className="mt-4 text-gray-300 text-base sm:text-lg px-4"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-8 w-48 h-64 bg-gray-700 rounded-t-full rounded-b-full overflow-hidden flex items-end justify-center relative"
        >
          <img 
            src="/my-photo.jpg" 
            alt="Heet Mehta" 
            className="w-full h-full object-cover"
            loading="lazy"
            width="192"
            height="256"
          />
          {/* Photo reflection */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"
            style={{
              transform: 'scaleY(-1)',
              filter: 'blur(4px)',
              maskImage: 'linear-gradient(to bottom, transparent, black 50%, transparent)',
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="flex justify-center gap-6 mt-8"
        >
          <a 
            href="https://github.com/heetmehta18" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/heetmehta18" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-blue-400 hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero; 