import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable background scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    // Hide preloader after 2.5 seconds to let animations finish smoothly
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }, 2500);

    // Cleanup function in case component unmounts
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Split text for letter animation
  const title = "PASAN PRAMUDITHA";
  const titleLetters = Array.from(title);

  const containerVariants = {
    hidden: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="preloader-container"
          variants={containerVariants}
          initial="hidden"
          exit="exit"
        >
          {/* Animated background glow matching the theme */}
          <motion.div
            className="preloader-glow"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="preloader-content">
            <motion.div
              className="spinner-modern"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="spinner-arc"></div>
              <div className="spinner-arc-inner"></div>
            </motion.div>

            <div className="preloader-title-container">
              {titleLetters.map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="preloader-letter"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
              ))}
            </div>

            <motion.p
              className="preloader-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              INITIALIZING PORTFOLIO<span className="dot-anim">...</span>
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
