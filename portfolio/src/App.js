import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// Social Icons
const FaGithub = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const FaLinkedin = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Scroll Progress Bar
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
}

// Animated Background
// function AnimatedBackground() {
//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
//       {[...Array(30)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
//           initial={{
//             x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
//             y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
//           }}
//           animate={{
//             x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
//             y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
//           }}
//           transition={{
//             duration: Math.random() * 20 + 10,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//         />
//       ))}
//       <motion.div
//         className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10"
//         animate={{
//           x: [0, 100, 0],
//           y: [0, -100, 0],
//           scale: [1, 1.1, 1],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//       />
//       <motion.div
//         className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10"
//         animate={{
//           x: [0, -100, 0],
//           y: [0, 100, 0],
//           scale: [1, 0.9, 1],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//       />
//     </div>
//   );
// }

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
    } else if (currentIndex === text.length) {
      // Typing complete, set a timeout to restart the animation
      const restartTimeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
      }, 2000); // Pause for 2 seconds before restarting
      return () => clearTimeout(restartTimeout);
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
  // This top navbar is being removed as per the new design
  return null;
}

// Bottom Navigation
function BottomNavigation() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> }, // Home Icon
    { name: "About", id: "about", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> }, // About Icon (User)
    { name: "Skills", id: "skills", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-0.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> }, // Skills Icon (Clipboard/List)
    { name: "Projects", id: "projects", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.566 23.566 0 0112 15c-3.179 0-6.22-.582-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> }, // Projects Icon (Briefcase)
    { name: "Contact", id: "contact", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 13a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v15z" /></svg> }, // Contact Icon (Envelope)
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Optional: Add logic to update active section based on scroll position later

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900/90 backdrop-blur-sm rounded-full border border-gray-800 px-6 py-3">
      <div className="flex justify-around items-center h-full w-full">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex flex-col items-center text-xs transition-colors px-4 py-2 rounded-full ${activeSection === item.id ? "text-white bg-purple-600 shadow-lg shadow-purple-600/50" : "text-gray-400 hover:text-white"}`}
          >
            <span className="mb-1">{item.icon}</span>
            {/* Removed text labels for icons */}
          </button>
        ))}
      </div>
    </div>
  );
}

function Section({ id, children }) {
  return (
    <section id={id} className="min-h-screen max-w-3xl mx-auto px-4 py-16 md:py-24">
      {children}
    </section>
  );
}

function Hero() {
  return (
    <Section id="home">
      {/* <AnimatedBackground /> <-- Removed AnimatedBackground */}
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="fixed inset-0 w-full h-full object-cover -z-20"
      >
        {/* Replace with your video source */}
        {/* <source src="/your-iron-man-video.mp4" type="video/mp4" /> */}
        {/* Your browser does not support the video tag. */}
         {/* Removed video source for now to show image */}
      </video>
      {/* Overlay for text readability */}
      <div className="fixed inset-0 bg-black opacity-50 -z-10"></div>

      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center relative z-0"> {/* Ensure content is above video and overlay */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Heet Mehta
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-4 text-gray-300 text-base sm:text-lg px-4"
        >
          <TypewriterText text="Frontend Developer | Animation Artist | UI/UX Designer" className="" />
        </motion.p>
        {/* Placeholder for Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-8 w-48 h-64 bg-gray-700 rounded-t-full rounded-b-full overflow-hidden flex items-end justify-center"
        >
          {/* Replace with your Hero Image */}
          <img src="/my-photo.jpg" alt="Heet Mehta" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="flex justify-center gap-6 mt-8"
        >
          <a href="https://github.com/heetmehta18" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-400 hover:text-white transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/heetmehta18" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-400 hover:text-white transition-colors">
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
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
        className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-white"
      >
        About Me
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Placeholder for About Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-48 h-64 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0"
        >
           {/* Replace with your About Image */}
          <img src="/my-photo.jpg" alt="Heet Mehta" className="w-full h-full object-cover" />
        </motion.div>
        <div className="flex-grow">
           {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-800/50 p-4 rounded-lg text-center"
            >
              <div className="text-purple-400 mb-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M12 15h.01" /></svg></div>
              <h3 className="text-sm font-semibold text-white">Experience</h3>
              <p className="text-xs text-gray-400">X+ Years Working</p>
            </motion.div>
            {/* Completed Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
               className="bg-gray-800/50 p-4 rounded-lg text-center"
            >
               <div className="text-purple-400 mb-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
              <h3 className="text-sm font-semibold text-white">Completed</h3>
              <p className="text-xs text-gray-400">Y+ Projects</p>
            </motion.div>
            {/* Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
               className="bg-gray-800/50 p-4 rounded-lg text-center"
            >
               <div className="text-purple-400 mb-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 0a5 5 0 11-7.072 7.072m7.072-7.072L5.636 18.364m0 0L12 12m0 0l7.072 7.072M12 12L5.636 5.636" /></svg></div>
              <h3 className="text-sm font-semibold text-white">Support</h3>
              <p className="text-xs text-gray-400">Online 24/7</p>
            </motion.div>
          </div>
           <motion.p
              className="space-y-4 text-gray-300 mb-6 text-base sm:text-lg"
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
    </Section>
  );
}

function MyExperience() {
  const frontendSkills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS/SCSS", level: "Advanced" },
    { name: "Javascript", level: "Advanced" },
    { name: "Bootstrap", level: "Intermediate" },
    { name: "Git", level: "Advanced" },
    { name: "React", level: "Advanced" },
  ];

  const backendSkills = [
    { name: "Node JS", level: "Advanced" },
    { name: "Python", level: "Advanced" },
    { name: "MySQL", level: "Advanced" },
    { name: "PHP", level: "Intermediate" },
    { name: "Firebase", level: "Advanced" },
    { name: "Mongo DB", level: "Advanced" },
  ];

  return (
    <Section id="skills">
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
    </Section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Solar System Project",
      // Placeholder image - replace with your project screenshot/mockup
      image: "/placeholder-solar-system.jpg", 
      link: "https://github.com/heetmehta18/solar_system_project" // Link for the demo button
    },
    {
      title: "WeatherSphere",
       // Placeholder image - replace with your project screenshot/mockup
      image: "/weather-sphere-screenshot.jpg",
      link: "https://github.com/heetmehta18/weatherSphere"
    },
    {
      title: "Smart Traffic Light System",
       // Placeholder image - replace with your project screenshot/mockup
      image: "/smart-traffic-light-screenshot.jpg",
      link: "https://github.com/heetmehta18/Smart-Traffic-Light-System-With-Adaptive-Siganal"
    }
    // Add more projects as needed
  ];

  return (
    <Section id="projects">
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
      {/* Removed filter/categorization for simplicity */}
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
               {/* Project Image */}
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
               {/* Overlay with Demo button */}
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
        className="text-2xl sm:text-3xl font-semibold mb-2 text-center text-white"
      >
        Get in touch
      </motion.h2>
       <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl font-semibold text-purple-400 mb-8 text-center"
      >
        Contact Me
      </motion.h3>
      {/* Adjusted layout to use grid for better column control */}
      {/* Refined grid columns for better alignment */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_4fr] gap-8 md:gap-12 lg:gap-16" style={{ maxWidth: '1000px' }}> {/* Added max-width for larger screens and adjusted gap */}
        {/* Talk to me section */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="space-y-6"
        >
          <h4 className="text-lg font-semibold text-white">Talk to me</h4>
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 13a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v15z" /></svg>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <h5 className="text-white">your.email@example.com</h5>
              </div>
               <a href="mailto:your.email@example.com" className="ml-auto text-purple-400 hover:text-white transition-colors">Write Me</a>
            </div>
            {/* Whatsapp */}
            <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12.043 0C5.39 0 .045 5.344.045 12s5.345 12 12 12 12-5.344 12-12-5.345-12-12-12zm2.326 17.236c-.105.055-.25.085-.414.085-.164 0-.307-.029-.413-.085-.106-.056-.21-.13-.313-.224-.105-.093-.2-.202-.289-.32-.09-.116-.169-.255-.236-.414-.066-.159-.115-.339-.146-.54-.03-.2-.046-.388-.046-.569 0-.236.052-.45.156-.641.105-.19.25-.333.436-.437.184-.105.379-.157.586-.157.105 0 .207.019.309.058.103.04.193.096.272.167.08.07.148.15.206.239.059.088.095.174.109.256l.012.045c.023.078.042.16.058.248.016.088.025.169.025.243 0 .04-.003.06-.009.069l-.01.038c-.013.038-.043.074-.089.106-.045.033-.115.075-.206.125-.09.049-.184.102-.283.158-.1.057-.185.1-.256.13-.07.03-.136.049-.199.058-.064.009-.12.014-.167.014zm.975 1.434c.133.2.213.318.24.355.029.036.059.08.09.13.03.05.054.088.072.113.018.025.048.062.09.112.042.05.062.086.062.105 0 .03-.006.054-.018.072-.012.019-.039.03-.078.03-.039 0-.079-.006-.117-.018-.039-.012-.072-.029-.099-.045-.029-.019-.063-.049-.104-.093-.04-.045-.075-.086-.104-.122a1.87 1.87 0 0 0-.183-.22L14 18.076l-.37-.542c-.152-.222-.23-.335-.234-.339-.012-.012-.022-.015-.03-.015a.03.03 0 0 0-.021.007c-.006.004-.008.015-.005.032.004.018.03.06.079.128.05.069.095.136.136.203zM12.044 2.103c-5.414 0-9.804 4.39-9.804 9.804s4.39 9.804 9.804 9.804 9.804-4.39 9.804-9.804-4.39-9.804-9.804-9.804zm-.014 16.448c-.987 0-1.9-.25-2.744-.743-.845-.493-1.529-1.177-2.053-2.053-.523-.876-.785-1.789-.785-2.735 0-.716.165-1.378.495-1.985.33-.607.763-1.134 1.299-1.58.536-.447 1.137-.792 1.803-1.036.666-.244 1.368-.366 2.107-.366.716 0 1.377.164 1.984.494.607.33 1.133.763 1.579 1.299.447.536.792 1.137 1.036 1.802.244.666.366 1.368.366 2.107 0 .987-.25 1.9-.742 2.744-.493.845-1.177 1.529-2.053 2.053-.876.523-1.789.785-2.736.785z"/></svg>
              <div>
                <p className="text-sm text-gray-400">Whatsapp</p>
                <h5 className="text-white">+123 456 7890</h5>
              </div>
               <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="ml-auto text-purple-400 hover:text-white transition-colors">Write Me</a>
            </div>
             {/* Twitter */}
            <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045C7.145 8.317 4.071 6.683 1.937 3.17c-1.1.823-1.741 1.98-1.741 3.308 0 1.15.51 2.182 1.339 2.782-.88-.029-1.71-.268-2.43-.641-.015 3.008 2.22 5.507 5.101 6.07-.67.188-1.372.291-2.09.291-.51 0-1.009-.06-1.49-.144.817 2.558 3.178 4.425 5.997 4.465 2.917 2.27 6.596 3.612 10.551 3.612 1.209 0 1.901-.056 2.794-.139-.941-.751-1.85-1.698-2.621-2.775z"/></svg>
              <div>
                <p className="text-sm text-gray-400">Twitter</p>
                <h5 className="text-white">yourtwitterhandle</h5>
              </div>
              <a href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noopener noreferrer" className="ml-auto text-purple-400 hover:text-white transition-colors">Write Me</a>
            </div>
          </div>
        </motion.div>

        {/* Write me your message form */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className=""
        >
          <h4 className="text-lg font-semibold text-white mb-4">Write me your message</h4>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden pb-16"> {/* Add padding-bottom equal to navbar height */}
      <ScrollProgress />
      {/* <Navbar /> <-- Removed top navbar */}
      <main className="relative">
        <Hero />
        <About />
        <MyExperience />
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Heet Mehta. All rights reserved.</p>
      </footer>
      <BottomNavigation /> {/* Added bottom navbar */}
    </div>
  );
}
