import React from 'react';
import { motion } from 'framer-motion';

function MyExperience() {
  const frontendSkills = [
    { name: "HTML", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "C/C++", level: "Basics" },
    { name: "Git", level: "Advanced" },
    { name: "React", level: "Learning " },
  ];

  const backendSkills = [
    { name: "Node JS", level: "Basics" },
    { name: "Python", level: "Basics" },
    { name: "Mongo DB", level: "Learning" },
  ];

  return (
    <section id="skills" className="min-h-screen max-w-3xl mx-auto px-4 py-16 md:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-white"
      >
        My Experience
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-purple-400 mb-4">Frontend Development</h3>
          <div className="grid grid-cols-2 gap-4">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-800/50 p-4 rounded-lg"
              >
                <h4 className="text-sm font-semibold text-white">{skill.name}</h4>
                <p className="text-xs text-gray-400">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-purple-400 mb-4">Backend Development</h3>
          <div className="grid grid-cols-2 gap-4">
            {backendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-800/50 p-4 rounded-lg"
              >
                <h4 className="text-sm font-semibold text-white">{skill.name}</h4>
                <p className="text-xs text-gray-400">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyExperience; 