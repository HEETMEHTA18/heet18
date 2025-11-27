import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: "Coding-Bingo-Platform",
      image: "/coding-bingo.png",
      link: "https://github.com/HEETMEHTA18/Coding-Bingo-Platform",
      description: "Multiplayer coding games for developers & teams"
    },
    {
      title: "Coastal-Guardian",
      image: "/coastal-guardian.png",
      link: "https://github.com/HEETMEHTA18/Coastal-Guardian",
      description: "AI-powered platform for real-time coastal threat assessment"
    },
    {
      title: "Web-Dev-Framework",
      image: "/web-dev-framework.png",
      link: "https://github.com/HEETMEHTA18/Web-Dev-Framework",
      description: "Repository for web development students"
    },
    {
      title: "CheckMate",
      image: "/checkmate.png",
      link: "https://github.com/HEETMEHTA18/CheckMate",
      description: "Maths based document verification system"
    },
    {
      title: "Animation.io",
      image: "/animation-io.png",
      link: "https://github.com/HEETMEHTA18/Animation.io",
      description: "Web Animations Collection"
    },
    {
      title: "Sasta-Shark-Tank",
      image: "/sasta-shark-tank.png",
      link: "https://github.com/HEETMEHTA18/Sasta-Shark-Tank",
      description: "Interactive project for pitching business ideas"
    },
    {
      title: "Smart Traffic Light System",
      image: "/smart-traffic-light-screenshot.jpg",
      link: "https://github.com/HEETMEHTA18/Smart-Traffic-Light-System-With-Adaptive-Siganal",
      description: "Smart Traffic Light Control System with ESP32"
    },
    {
      title: "solar_system_project",
      image: "/placeholder-solar-system.jpg",
      link: "https://github.com/HEETMEHTA18/solar_system_project",
      description: "Simulation of the solar system"
    },
    {
      title: "weatherSphere",
      image: "/weather-sphere-screenshot.jpg",
      link: "https://github.com/HEETMEHTA18/weatherSphere",
      description: "Responsive weather forecasting website"
    },
    {
      title: "jobHive_Frontend",
      image: "/jobhive.png",
      link: "https://github.com/HEETMEHTA18/jobHive_Frontend",
      description: "Frontend for JobHive"
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
              {project.description && (
                <p className="text-sm text-gray-400 mt-2 line-clamp-2">{project.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;