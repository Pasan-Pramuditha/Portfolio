import { useState } from "react";
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
  FaCode
} from "react-icons/fa";

import profileImg from "../assets/profile.png";

const socialLinks = [
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaGithub, href: "https://https://github.com/Pasan-Pramuditha.com/", label: "GitHub" },
  { icon: FaWhatsapp, href: `https://wa.me/${"+94 77 813 6626".replace(/[^0-9]/g, "")}` },
  { icon: FaEnvelope, href: "pasanpr58@gmail.com", label: "Email" },
];

const Hero = () => {
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
    { content: FaReact, type: "icon" },
    { content: FaNodeJs, type: "icon" },
    { content: FaJs, type: "icon" },
    { content: FaCss3Alt, type: "icon" },
    { content: FaHtml5, type: "icon" },
    { content: FaCode, type: "icon" },
  ];

  const [randomValues] = useState(() =>
    floatingItems.map(() => ({
      left: `${Math.random() * 95}%`,
      top: `${Math.random() * 95}%`,
      duration: 12 + Math.random() * 10,
      delay: Math.random() * 5
    }))
  );

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden px-6 md:px-12 xl:px-24 font-outfit transition-colors duration-500"
      style={{ backgroundColor: "var(--bg-primary)" }}
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
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-0 right-0 h-[300px] bg-gradient-to-b from-transparent via-cyan-accent to-transparent skew-y-12 blur-3xl"
        />
      </div>

      {/* Dynamic Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
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
            duration: 25,
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
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundColor: "var(--color-cyan-accent)", opacity: "var(--hero-glow-opacity)" }}
          className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full blur-[150px]"
        />
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
              top: randomValues[i].top
            }}
            animate={{
              y: ["-30px", "30px", "-30px"],
              x: ["-30px", "30px", "-30px"],
              opacity: [0, "var(--hero-float-item-opacity)", 0],
              scale: [1, 1.3, 1]
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

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between z-10 w-full max-w-7xl">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-3/5 xl:w-2/3 flex flex-col items-start mt-12 lg:mt-0"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold mb-6 tracking-tight whitespace-nowrap text-cyan-accent"
            style={{ textShadow: "0 0 20px rgba(0, 208, 255, 0.3)" }}
          >
            Pasan Pramuditha
          </h1>
          <p className="text-lg md:text-xl mb-12 max-w-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            I am a Software Engineering undergraduate focused on building modern,
            resilient digital experiences with a clean aesthetic.
          </p>

          <div className="flex flex-wrap gap-5 mb-14">
            <a
              href="#cv"
              className="bg-cyan-accent hover:bg-cyan-accent/90 text-zinc-950 px-8 py-3 rounded-full text-[15px] font-bold transition-all shadow-lg shadow-cyan-accent/20 flex items-center"
            >
              View CV
            </a>
            <a
              href="#contact"
              className="border px-8 py-3 rounded-full text-[15px] font-bold transition-all hover:bg-white/5"
              style={{ borderColor: "var(--text-primary)", color: "var(--text-primary)" }}
            >
              Contact me
            </a>
          </div>

          <div className="flex gap-4">
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

        {/* Right Content / Image (Professional Photo) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-2/5 flex justify-center lg:justify-end items-end mt-16 lg:mt-0"
        >
          <div className="relative w-80 md:w-96 lg:w-[480px] flex items-end justify-center group mt-10">
            {/* Intense glow matching the dark theme */}
            <div className="absolute inset-x-0 bottom-10 h-1/2 bg-cyan-accent rounded-full blur-[130px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />

            <div
              className="relative w-full z-10"
              style={{
                /* CSS mask to seamlessly blend the bottom of the photo into the background */
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)"
              }}
            >
              <img
                src={profileImg}
                alt="Pasan Pramuditha"
                className="w-full h-auto object-cover object-bottom transition-all duration-700 mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


