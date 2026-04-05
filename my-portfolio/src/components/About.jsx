import { motion } from "framer-motion";
import {
  HiOutlineCommandLine,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineSparkles,
} from "react-icons/hi2";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-24 border-b transition-colors duration-500 overflow-hidden relative" style={{ borderColor: "var(--card-border)" }}>
        {/* Ambient Glowing Orbs */}
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-cyan-accent/5 
          rounded-full blur-[150px] pointer-events-none transition-opacity duration-500" style={{ opacity: "var(--hero-glow-opacity)" }} />
        <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-indigo-500/5 
          rounded-full blur-[120px] pointer-events-none transition-opacity duration-500" style={{ opacity: "calc(var(--hero-glow-opacity) * 0.8)" }} />

        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-cyan-accent text-[10px] font-black tracking-[0.3em] uppercase mb-1 font-poppins">Get to know me</p>
            <h2 className="section-title mb-4 flex flex-wrap items-center gap-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-cyan-300">Me</span>
            </h2>
            <div className="w-24 h-[4px] bg-gradient-to-r from-cyan-accent to-transparent mb-12 rounded-full shadow-[0_0_15px_rgba(0,208,255,0.5)]" />
          </motion.div>

          {/* Info Cards Grid */}
          <div className="info-card-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="info-card"
            >
              <div className="info-card-title">
                <span className="icon-container"><HiOutlineCommandLine /></span> Full-Stack Dev
              </div>
              <div className="info-card-subtitle">.NET | Flutter | React | Next.js | Java | Python</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="info-card"
            >
              <div className="info-card-title">
                <span className="icon-container"><HiOutlineBriefcase /></span> Work Experience
              </div>
              <div className="info-card-subtitle"> Intern Software Engineer @ Sri Lanka Telecom PLC </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="info-card"
            >
              <div className="info-card-title">
                <span className="icon-container"><HiOutlineAcademicCap /></span> Academic
              </div>
              <div className="info-card-subtitle">BSc (Hons) | HND | Diploma</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="info-card"
            >
              <div className="info-card-title">
                <span className="icon-container"><HiOutlineSparkles /></span> Interests
              </div>
              <div className="info-card-subtitle">AI | Cloud Deployment | Architecture</div>
            </motion.div>
          </div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-glass-container"
          >
            <p className="about-paragraph">
              I'm <span className="highlight-text">Pasan Pramuditha</span>, a motivated and detail-oriented undergraduate IT student focused on building dynamic and problem-solving software solutions.
            </p>
            <p className="about-paragraph">
              I specialize in software development using technologies such as <span className="highlight-text">.NET, Flutter, React, Next.js, Java, Python</span> and <span className="highlight-text">MySQL</span>. I've developed platforms including a digital system for SLT Internal Solutions Management to streamline operations, an AI-powered personal finance and expense tracker called <span className="highlight-text">SmartFin</span>, and various other management and networked systems.
            </p>
            <p className="about-paragraph">
              Recently, I worked as an <span className="highlight-text">Intern Software Engineer at Sri Lanka Telecom PLC (SLTMobitel)</span> in the Talent Development Section, contributing to internal systems. I am continually advancing my expertise in <span className="highlight-text">.NET Core backend architecture</span> and crafting intuitive, user-friendly mobile interfaces using <span className="highlight-text">Flutter</span>.
            </p>
            <p className="about-paragraph">
              Academically, I hold a Higher Diploma in Software Engineering (BTEC HND level 5) from <span className="highlight-text">Pearson College London</span>, completed at Esoft Metro Campus. Currently, I am pursuing a BSc (Hons) in Computer Science (Software Engineering) at the <span className="highlight-text">University of Wolverhampton</span> through Cinec Campus, further strengthening my foundation in programming, networking, and modern software development.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;

