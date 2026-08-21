import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t transition-colors duration-500 overflow-hidden" style={{ borderColor: "var(--card-border)", backgroundColor: "var(--bg-primary)" }}>
      {/* Subtle Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-cyan-accent to-transparent opacity-30 shadow-[0_0_15px_rgba(0,208,255,0.5)]" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl py-10">
        <div className="flex flex-col items-center gap-8">
          
          {/* Top Section: Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center text-center w-full"
          >
            <p className="text-[14px] sm:text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Thank you for visiting my portfolio.<br className="hidden sm:block" /> Let&apos;s connect and build something <a href="mailto:pasanpr58@gmail.com" className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 hover:opacity-80 transition-opacity cursor-pointer">amazing together</a>.
            </p>
          </motion.div>

          {/* Bottom Section: Copyright & Built By */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
            
            {/* Left Side: Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[12px] font-bold uppercase tracking-widest text-center sm:text-left" style={{ color: "var(--text-secondary)" }}>
                &copy; {currentYear} All rights reserved.
              </p>
            </motion.div>

            {/* Right Side: Built By */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-accent text-center sm:text-right">
                Built by Pasan Pramuditha
              </p>
            </motion.div>
            
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
