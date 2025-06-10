import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

export default TypewriterText;

<img 
  src="/my-photo.webp" // use a compressed WebP version
  alt="Heet Mehta" 
  className="w-full h-full object-cover"
  loading="lazy"
  width="192"
  height="256"
/>