import React, { useState, lazy, Suspense, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import TopNav from './components/Navigation/TopNav';
import Footer from './components/Footer';

// Lazy load components
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const MyExperience = lazy(() => import('./components/MyExperience'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

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

// Navbar
function Navbar() {
  // This top navbar is being removed as per the new design
  return null;
}

// Bottom Navigation
function BottomNavigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [indicatorProps, setIndicatorProps] = useState({ left: 0, width: 0 });
  const btnRefs = useRef({});

  const navItems = [
    { name: "Home", id: "home", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
    { name: "About", id: "about", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
    { name: "Skills", id: "skills", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-0.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    { name: "Projects", id: "projects", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.566 23.566 0 0112 15c-3.179 0-6.22-.582-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    { name: "Contact", id: "contact", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 13a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v15z" /></svg> },
  ];

  // Update indicator position when activeSection changes
  React.useEffect(() => {
    const ref = btnRefs.current[activeSection];
    if (ref && ref.current) {
      setIndicatorProps({
        left: ref.current.offsetLeft,
        width: ref.current.offsetWidth,
      });
    }
  }, [activeSection]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/20 dark:bg-black/20 backdrop-blur-2xl border border-white/30 dark:border-white/10 rounded-full px-2 py-2 shadow-2xl ring-1 ring-black/5">
        <div className="relative flex items-center">
          {/* Animated indicator */}
          <motion.div
            className="absolute top-0 bottom-0 bg-white/80 dark:bg-gray-700/80 rounded-full shadow-sm backdrop-blur-sm"
            animate={{
              width: indicatorProps.width,
              left: indicatorProps.left,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
          {navItems.map((item) => {
            if (!btnRefs.current[item.id]) btnRefs.current[item.id] = React.createRef();
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                ref={btnRefs.current[item.id]}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300 z-10 ${isActive
                    ? "text-black dark:text-white scale-110"
                    : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  }`}
              >
                <span className="transform transition-transform duration-300">
                  {item.icon}
                </span>
              </button>
            );
          })}
        </div>
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


// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// New component to wrap content that uses theme context
function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black' : 'bg-gray-100'} font-sans ${theme}`}>
      <ScrollProgress />
      <TopNav />
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <About />
        <MyExperience />
        <Projects />
        <Contact />
      </Suspense>
      <BottomNavigation />
      <Footer /> {/* Add Footer here */}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}