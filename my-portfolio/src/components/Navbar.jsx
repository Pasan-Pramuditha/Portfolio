import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLight, setIsLight] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "light";
    }
    return false;
  });

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [isLight]);

  const toggleTheme = () => setIsLight(!isLight);

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 font-outfit ${scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 shadow-lg py-4" : "bg-transparent py-6"}`}>
      <div className={`mx-auto max-w-[1600px] flex items-center justify-between px-4 md:px-8 transition-all duration-500`}>

        {/* LOGO */}
        <a
          href="#home"
          className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-colors flex-shrink-0"
          style={{ color: isLight ? "var(--text-primary)" : "white" }}
        >
          <span className="text-[#00D0FF]">Pasan</span> Pramuditha
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-4 mx-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-[11px] xl:text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-full z-10 ${isActive ? "text-[#00D0FF]" : "text-zinc-400 hover:text-white"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-[#00D0FF]/10 rounded-full border border-[#00D0FF]/20 shadow-[0_0_15px_rgba(0,208,255,0.15)] -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="relative w-14 h-7 rounded-full border p-1 flex items-center cursor-pointer overflow-hidden transition-all duration-300 hover:border-[#00D0FF]/50 shadow-[0_0_10px_transparent] hover:shadow-[0_0_15px_rgba(0,208,255,0.2)] flex-shrink-0"
            aria-label="Toggle Theme"
            style={{
              backgroundColor: isLight ? "#e2e8f0" : "rgba(24, 24, 27, 0.5)",
              borderColor: isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"
            }}
          >
            <motion.div
              animate={{ x: isLight ? 28 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-5 h-5 rounded-full bg-[#00D0FF] flex items-center justify-center text-zinc-950 z-10 shadow-[0_0_10px_rgba(0,208,255,0.6)]"
            >
              {isLight ? <FaSun size={10} /> : <FaMoon size={10} />}
            </motion.div>
            <div
              className="absolute inset-0 flex justify-between px-2 items-center opacity-[0.4] select-none pointer-events-none transition-colors"
              style={{ color: "var(--text-primary)" }}
            >
              <span className="pl-[1px]"><FaMoon size={10} /></span>
              <span className="pr-[1px]"><FaSun size={10} /></span>
            </div>
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-[#00D0FF] hover:border-[#00D0FF]/30 transition-all flex-shrink-0"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-[80px] sm:top-[90px] rounded-2xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl p-6 lg:hidden shadow-2xl flex flex-col gap-4"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className={`text-[13px] font-bold uppercase tracking-[0.2em] transition-all px-4 py-3 rounded-xl border ${isActive
                    ? "bg-[#00D0FF]/10 text-[#00D0FF] border-[#00D0FF]/30"
                    : "border-transparent text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
