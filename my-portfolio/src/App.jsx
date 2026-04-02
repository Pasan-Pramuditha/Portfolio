import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensuring the loader stays for a satisfying duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loading key="loader" />}
      </AnimatePresence>

      <motion.div 
        className="app-shell"
        initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
        animate={!loading ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </motion.div>
    </>
  );
}

export default App;
