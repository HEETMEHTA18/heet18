import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Social Icons
const FaGithub = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
const FaLinkedin = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Animated Background
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          animate={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

// Typewriter
function TypewriterText({ text, className }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="text-blue-400"
      >
        |
      </motion.span>
    </span>
  );
}

// Navbar
function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b border-gray-800"
    >
      <div className="max-w-4xl mx-auto flex justify-center gap-8 py-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`px-2 py-1 capitalize transition-colors ${
              activeSection === item.id ? "text-white font-bold" : "text-gray-400 hover:text-white"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}

function Section({ id, children }) {
  return (
    <section id={id} className="max-w-3xl mx-auto px-4 py-24">
      {children}
    </section>
  );
}

function Hero() {
  return (
    <Section id="home">
      <AnimatedBackground />
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Heet Mehta
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-6 text-center text-gray-300 text-lg"
      >
        <TypewriterText text="Frontend Developer | Animation Artist | UI/UX Designer" className="" />
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="flex justify-center gap-6 mt-8"
      >
        <a href="https://github.com/heetmehta18" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/heetmehta18" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-400 hover:text-white">
          <FaLinkedin />
        </a>
      </motion.div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold mb-6 text-white"
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-gray-300 mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Over the past few years, I've completed a variety of challenging projects, from interactive simulations to real-world web apps. My journey began with online courses and hands-on experimentation, and I've consistently sought out new resources to deepen my understanding of frontend technologies and animation principles.
      </motion.p>
      <motion.p
        className="text-gray-300 mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        I've completed several certifications and followed tutorials from platforms like freeCodeCamp, Coursera, and YouTube. Each project I build is an opportunity to apply what I've learned and push my skills further.
      </motion.p>
      <motion.p
        className="text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        I enjoy experimenting with animations, micro-interactions, and creative UI/UX solutions. My goal is to craft digital experiences that are not only functional but also delightful and memorable.
      </motion.p>
    </Section>
  );
}

function Skills() {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "React", level: 85 },
    { name: "Tailwind CSS", level: 82 },
    { name: "Framer Motion", level: 80 },
    { name: "Three.js", level: 70 },
    { name: "Figma", level: 70 },
  ];
  return (
    <Section id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold mb-6 text-white"
      >
        Skills
      </motion.h2>
      <motion.p
        className="text-gray-400 mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My technical foundation comes from a mix of formal courses, online tutorials, and real-world project experience. I believe in continuous learning and regularly update my skills by following the latest trends and best practices in frontend development.
      </motion.p>
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="flex justify-between text-gray-200 text-sm mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded">
              <motion.div
                className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded"
                style={{ width: `${skill.level}%` }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  const projects = [
    {
      title: "solar_system_project",
      description: "A simulation of the solar system, visualizing orbits of planets and their moons. This project was inspired by my fascination with astronomy and built after studying orbital mechanics through online resources and coding tutorials. I completed this project as a personal challenge to improve my JavaScript and animation skills.",
      link: "https://github.com/heetmehta18/solar_system_project",
    },
    {
      title: "weatherSphere",
      description: "A weather visualization app that displays real-time weather data with engaging graphics and animations. I learned to work with APIs and asynchronous JavaScript while building this project, referencing documentation and community forums to overcome challenges.",
      link: "https://github.com/heetmehta18/weatherSphere",
    },
    {
      title: "HEETMEHTA18.github.io",
      description: "My animated portfolio website built with React, Tailwind CSS, and Framer Motion. I designed and developed this site from scratch, iterating based on feedback and best practices in modern web design.",
      link: "https://heetmehta18.github.io/",
    },
    {
      title: "Smart-Traffic-Light-System-With-Adaptive-Siganal",
      description: "A smart traffic light system that adapts signal timings based on real-time traffic data. I completed this as part of a group project, collaborating with peers and using GitHub for version control. This experience taught me the importance of teamwork and clear communication.",
      link: "https://github.com/heetmehta18/Smart-Traffic-Light-System-With-Adaptive-Siganal",
    },
    {
      title: "Sasta-Shark-Tank",
      description: "A fun web app inspired by Shark Tank, where users can pitch quirky startup ideas. This project helped me improve my React skills and learn about state management in larger applications.",
      link: "https://github.com/heetmehta18/Sasta-Shark-Tank",
    },
  ];
  return (
    <Section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold mb-6 text-white"
      >
        Projects
      </motion.h2>
      <div className="space-y-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-gray-900 rounded-lg p-5 border border-gray-800"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold text-blue-300">{p.title}</div>
                <div className="text-gray-400 text-sm">{p.description}</div>
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 md:mt-0 text-sm text-blue-400 hover:underline"
              >
                View
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold mb-6 text-white"
      >
        Get In Touch
      </motion.h2>
      <motion.p
        className="text-gray-300 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Whether you have a project in mind, want to collaborate, or just wish to connect, feel free to reach out. I'm always open to discussing new opportunities and sharing what I've learned along the way.
      </motion.p>
      <div className="space-y-2 mb-4">
        <div className="text-gray-400 text-sm">Email</div>
        <div className="text-white font-medium">heetmehta18125@gmail.com</div>
        <div className="text-gray-400 text-sm mt-4">Phone</div>
        <div className="text-white font-medium">+91 96645 17017</div>
      </div>
      <div className="flex gap-4 mt-6">
        <a href="https://github.com/heetmehta18" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/heetmehta18" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-400 hover:text-white">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/heetmehta18" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-400 hover:text-white">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.265.058-1.645.069-4.849.069s-3.584-.011-4.849-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.646 2.163 15.266 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.77.131 4.672.355 3.678 1.349c-.994.994-1.218 2.092-1.277 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.282.283 2.38 1.277 3.374.994.994 2.092 1.218 3.374 1.277C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.059 2.38-.283 3.374-1.277.994-.994 1.218-2.092 1.277-3.374.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.282-.283-2.38-1.277-3.374-.994-.994-2.092-1.218-3.374-1.277C15.668.013 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 16 12a3.999 3.999 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
          </svg>
        </a>
      </div>
      <div className="text-center text-gray-600 mt-8 text-xs">
        © Copyright 2024 Design by Heet
      </div>
    </Section>
  );
}

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
} 