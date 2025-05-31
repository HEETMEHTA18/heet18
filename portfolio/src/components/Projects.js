import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: "Solar System Project",
      image: "/placeholder-solar-system.jpg",
      link: "https://github.com/heetmehta18/solar_system_project"
    },
    {
      title: "WeatherSphere",
      image: "/weather-sphere-screenshot.jpg",
      link: "https://github.com/heetmehta18/weatherSphere"
    },
    {
      title: "Smart Traffic Light System",
      image: "/smart-traffic-light-screenshot.jpg",
      link: "https://github.com/heetmehta18/Smart-Traffic-Light-System-With-Adaptive-Siganal"
    }
  ];

  return (
    <section id="projects" className="min-h-screen max-w-3xl mx-auto px-4 py-16 md:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-semibold mb-2 text-center text-white"
      >
        My Portfolio
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl font-semibold text-purple-400 mb-8 text-center"
      >
        Recent Works
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800/50 rounded-lg overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                width="400"
                height="192"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition-colors"
                >
                  Demo
                </a>
              </motion.div>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects; 