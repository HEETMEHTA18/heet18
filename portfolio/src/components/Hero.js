import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Hero() {
  const profileImage = `${process.env.PUBLIC_URL || ''}/my-photo.jpg`;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) * 0.03;
    const y = (clientY - innerHeight / 2) * 0.03;
    setMousePosition({ x, y });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  const socialIcons = [
    {
      icon: FaGithub,
      href: 'https://github.com/heetmehta18',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/heetmehta18',
      label: 'LinkedIn',
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen max-w-6xl mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-24"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.10),_transparent_30%)]" />
        <motion.div
          className="absolute top-12 left-8 h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.6, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-24 right-16 h-1 w-1 rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.7)]"
          animate={{ opacity: [0.15, 0.9, 0.15], scale: [1, 1.8, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 pt-2 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="w-full order-2 lg:order-1 text-center lg:text-left"
        >
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] sm:text-sm text-gray-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            Available for freelance and productive work
          </div>

          <motion.h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent break-words">
            Heet Mehta
          </motion.h1>

          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 px-1 sm:px-0 leading-snug">
            Frontend Developer | Animation Artist | UI/UX Designer
          </p>

          <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed px-1 sm:px-0">
            I believe that a great user experience is not just a feature, but the core of any successful digital product.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 max-w-xl mx-auto lg:mx-0">
            <motion.a
              href="#contact"
              className="inline-flex w-auto min-w-[140px] justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm sm:text-base text-white font-semibold text-center backdrop-blur-md"
              whileHover={{ scale: 1.04, borderColor: 'rgba(168, 85, 247, 0.55)' }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.a>
          </div>

          <motion.div variants={itemVariants} className="mt-7 flex justify-center lg:justify-start gap-5 text-xl text-gray-400">
            {socialIcons.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-300"
                  whileHover={{ scale: 1.18, y: -3 }}
                  whileTap={{ scale: 0.94 }}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full order-1 lg:order-2 max-w-[250px] sm:max-w-[300px] md:max-w-md lg:max-w-none"
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: 'spring', stiffness: 250, damping: 20 }}
        >
          <div className="relative rounded-[1.6rem] sm:rounded-[2rem] border border-white/10 bg-white/5 p-2.5 sm:p-4 shadow-2xl backdrop-blur-xl mx-auto">
            <motion.div
              className="absolute -inset-1 sm:-inset-2 rounded-[1.6rem] sm:rounded-[2rem] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl"
              animate={{ opacity: [0.45, 0.8, 0.45] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] sm:rounded-[1.6rem] bg-gradient-to-br from-blue-500/30 via-gray-900 to-purple-500/30"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src={profileImage}
                alt="Heet Mehta"
                className="h-full w-full object-cover"
                loading="lazy"
                width="420"
                height="525"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
