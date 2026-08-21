import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaCode,
  FaPython,
  FaDatabase,
  FaDocker,
  FaFigma,
  FaAws,
  FaGitAlt,
  FaTerminal
} from "react-icons/fa";

import profileImg from "../assets/profile.png";

const socialLinks = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/pasan-pramuditha-31b2b2286", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/Pasan-Pramuditha", label: "GitHub" },
  { icon: FaWhatsapp, href: `https://wa.me/${"+94 77 813 6626".replace(/[^0-9]/g, "")}` },
  { icon: FaEnvelope, href: "mailto:pasanpr58@gmail.com", label: "Email" },
];

const Home = () => {
  const floatingItems = [
    { content: "{ }", type: "text" },
    { content: "< >", type: "text" },
    { content: "404", type: "text" },
    { content: "div", type: "text" },
    { content: "span", type: "text" },
    { content: "class", type: "text" },
    { content: "CSS", type: "text" },
    { content: "function", type: "text" },
    { content: "/>", type: "text" },
    { content: "java", type: "text" },
    { content: "npm", type: "text" },
    { content: "API", type: "text" },
    { content: "flex", type: "text" },
    { content: "git", type: "text" },
    { content: "SQL", type: "text" },
    { content: "NoSQL", type: "text" },
    { content: "React", type: "text" },
    { content: "console.log()", type: "text" },
    { content: "const", type: "text" },
    { content: "=>", type: "text" },
    { content: FaReact, type: "icon" },
    { content: FaNodeJs, type: "icon" },
    { content: FaJs, type: "icon" },
    { content: FaCss3Alt, type: "icon" },
    { content: FaHtml5, type: "icon" },
    { content: FaCode, type: "icon" },
    { content: FaPython, type: "icon" },
    { content: FaDatabase, type: "icon" },
    { content: FaDocker, type: "icon" },
    { content: FaFigma, type: "icon" },
    { content: FaAws, type: "icon" },
    { content: FaGitAlt, type: "icon" },
    { content: FaTerminal, type: "icon" }
  ];

  const [randomValues] = useState(() =>
    floatingItems.map(() => ({
      left: `${Math.random() * 95}%`,
      top: `${Math.random() * 95}%`,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 5,
      rotate: Math.random() * 360,
      rotateMove: (Math.random() - 0.5) * 60,
      yMove: (Math.random() - 0.5) * 60,
      xMove: (Math.random() - 0.5) * 60
    }))
  );

  const [particles] = useState(() =>
    Array.from({ length: 100 }).map(() => {
      const size = Math.random() * 3 + 1;
      return {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.3 + 0.1,
        yMove: (Math.random() - 0.5) * 100,
        xMove: (Math.random() - 0.5) * 100,
      };
    })
  );

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center overflow-hidden px-4 sm:px-6 md:px-12 xl:px-24 pt-28 sm:pt-32 pb-24 sm:pb-32 lg:pt-0 lg:pb-0 font-outfit transition-colors duration-500 border-b"
      style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--card-border)" }}
    >
      {/* Premium Background Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Scanning Light Beam */}
        <motion.div
          animate={{
            top: ["-10%", "110%"],
            opacity: [0, "var(--hero-glow-opacity)", 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-0 right-0 h-[300px] bg-gradient-to-b from-transparent via-cyan-accent to-transparent skew-y-12 blur-3xl"
        />
      </div>

      {/* Dynamic Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundColor: "var(--color-cyan-accent)", opacity: "var(--hero-glow-opacity)" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundColor: "var(--color-cyan-accent)", opacity: "calc(var(--hero-glow-opacity) * 0.5)" }}
          className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundColor: "var(--color-cyan-accent)", opacity: "var(--hero-glow-opacity)" }}
          className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full blur-[150px]"
        />
      </div>

      {/* Particle effect matching the uploaded image */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute bg-cyan-accent rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
            }}
            animate={{
              y: [0, particle.yMove, 0],
              x: [0, particle.xMove, 0],
              opacity: [particle.opacity, 0.8, particle.opacity],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Network background effect (floating elements) refined */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{ opacity: "var(--hero-float-container-opacity)" }}
      >
        {floatingItems.map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-accent font-mono text-xs font-bold opacity-0"
            style={{
              left: randomValues[i].left,
              top: randomValues[i].top,
              rotate: randomValues[i].rotate
            }}
            animate={{
              y: [0, randomValues[i].yMove, 0],
              x: [0, randomValues[i].xMove, 0],
              rotate: [randomValues[i].rotate, randomValues[i].rotate + randomValues[i].rotateMove, randomValues[i].rotate],
              opacity: [0, "var(--hero-float-item-opacity)", 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: randomValues[i].duration,
              repeat: Infinity,
              delay: randomValues[i].delay,
              ease: "linear"
            }}
          >
            {item.type === "icon" ? (
              <item.content size={20} />
            ) : (
              item.content
            )}
          </motion.div>
        ))}
      </div>
      {/* Left Content (Text) - Now follows the image on mobile */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between z-10 w-full max-w-7xl gap-12 lg:gap-0">
        {/* Left Content (Text) - Now follows the image on mobile */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="lg:w-3/5 xl:w-2/3 flex flex-col items-center text-center lg:items-start lg:text-left -mt-8 md:-mt-12 lg:-mt-24"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 text-cyan-accent font-poppins"
            style={{ textShadow: "0 0 30px rgba(0, 208, 255, 0.5), 0 0 15px rgba(0, 208, 255, 0.3)" }}
          >
            Pasan <br className="lg:hidden" /> Pramuditha
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-10 md:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            I am a Software Engineering undergraduate focused on building modern,
            resilient digital experiences with a clean aesthetic.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-14">
            <Link
              to="/cv"
              className="bg-cyan-accent hover:bg-cyan-accent/90 text-zinc-950 px-8 py-3 rounded-full text-[15px] font-bold transition-all shadow-lg shadow-cyan-accent/20 flex items-center"
            >
              View CV
            </Link>
            <a
              href="#contact"
              className="border px-8 py-3 rounded-full text-[15px] font-bold transition-all hover:bg-white/5"
              style={{ borderColor: "var(--text-primary)", color: "var(--text-primary)" }}
            >
              Contact me
            </a>
          </div>

          <div className="flex justify-center lg:justify-start gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-cyan-accent text-cyan-accent hover:bg-cyan-accent hover:text-zinc-950 transition-all shadow-[0_0_10px_rgba(0,208,255,0.2)] hover:shadow-[0_0_20px_rgba(0,208,255,0.4)]"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Content (Image) - Now on top on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-2/5 flex justify-center lg:justify-end items-center lg:items-end mt-8 lg:mt-0"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:h-auto lg:max-w-[480px] flex items-center justify-center lg:items-end group">
            {/* Intense glow matching the dark theme */}
            <div className="absolute inset-0 lg:inset-x-0 lg:bottom-10 lg:h-1/2 bg-cyan-accent rounded-full blur-[60px] lg:blur-[130px] opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />
            <div className="relative w-full h-full lg:h-auto z-10 rounded-full lg:rounded-none overflow-hidden lg:overflow-visible border-4 border-cyan-accent lg:border-none shadow-[0_0_30px_rgba(0,208,255,0.5)] lg:shadow-none hero-mask flex items-center justify-center bg-transparent">
              <img
                src={profileImg}
                alt="Pasan Pramuditha"
                className="w-full h-full lg:h-auto object-cover object-[90%_top] lg:object-bottom transition-all duration-700 mx-auto drop-shadow-2xl scale-125 lg:scale-100"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;


