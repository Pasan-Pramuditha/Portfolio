import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedinIn, FaWhatsapp, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    year: "2026",
    stack: "React, Tailwind CSS, Vite",
    description:
      "A responsive portfolio experience designed to showcase skills, projects, and contact details with a clean and professional layout.",
  },
  {
    title: "Business Management System",
    year: "2025",
    stack: "Java, MySQL",
    description:
      "A desktop system created to manage records, reports, and business workflows with a structured and efficient interface.",
  },
  {
    title: "Sales Analysis Dashboard",
    year: "2025",
    stack: "Python, Data Visualization",
    description:
      "A data-focused project that transforms raw sales information into readable visual insights for better decision making.",
  },
  {
    title: "Reservation Platform",
    year: "2024",
    stack: "JavaFX, MySQL",
    description:
      "A reservation management solution that streamlines customer details, booking status, and service tracking in one flow.",
  },
];

const contactLinks = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaGithub, label: "GitHub", href: "#" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "#" },
];

const Projects = () => {
  return (
    <>
      {/* Projects Gallery */}
      <section id="projects" className="py-24 transition-colors duration-500">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="mb-16">
            <p className="section-kicker">Portfolio</p>
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-copy">
              A collection of work that reflects my practical experience in building
              software solutions and digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-10 card-style overflow-hidden"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="h-14 w-1 flex bg-cyan-accent/30 group-hover:bg-cyan-accent transition-colors" />
                  <span className="px-4 py-1.5 rounded-full border bg-zinc-950/10 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ borderColor: "var(--card-border)", color: "var(--text-secondary)" }}>
                    {project.year}
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-accent transition-colors" style={{ color: "var(--text-primary)" }}>
                  {project.title}
                </h3>
                <p className="text-[11px] font-bold text-cyan-accent/60 uppercase tracking-[0.2em] mb-6">
                  {project.stack}
                </p>
                <p className="leading-relaxed mb-10 text-base font-normal" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <button className="bg-zinc-800 hover:bg-cyan-accent hover:text-zinc-950 text-white px-6 py-3 rounded-xl font-bold text-[13px] transition-all flex items-center gap-2 group/btn uppercase tracking-widest">
                    Details <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-12 h-12 flex items-center justify-center rounded-xl border text-zinc-400 hover:border-cyan-accent hover:text-cyan-accent hover:bg-cyan-accent/5 transition-all" style={{ borderColor: "var(--card-border)" }}>
                    <FaGithub size={18} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t transition-colors duration-500" style={{ borderColor: "var(--card-border)", backgroundColor: "var(--bg-secondary)" }}>
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="section-kicker">Contact</p>
              <h2 className="section-title mb-8">Let&apos;s build something together.</h2>
              <p className="section-copy mb-12">
                If you need a polished portfolio, a business system, or a modern
                frontend that stands out, I&apos;m ready to collaborate.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl border flex items-center justify-center text-cyan-accent group-hover:border-cyan-accent/50 transition-all" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}>
                    <FaExternalLinkAlt size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>Email Me</p>
                    <p className="font-bold" style={{ color: "var(--text-primary)" }}>pasan@example.com</p>
                  </div>
                </div>
                <div className="flex gap-3 pt-6">
                  {contactLinks.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="w-11 h-11 flex items-center justify-center rounded-full border text-zinc-400 hover:border-cyan-accent hover:text-cyan-accent hover:bg-cyan-accent/5 transition-all"
                      style={{ borderColor: "var(--card-border)" }}
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-12 rounded-3xl border shadow-2xl"
              style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="field-group">
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>Full Name</span>
                  <input type="text" placeholder="Your name" />
                </div>
                <div className="field-group">
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>Email Address</span>
                  <input type="email" placeholder="you@example.com" />
                </div>
              </div>
              <div className="field-group mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>Subject</span>
                <input type="text" placeholder="Project inquiry" />
              </div>
              <div className="field-group mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>Message</span>
                <textarea rows="5" placeholder="Tell me about your idea..."></textarea>
              </div>
              <button className="w-full bg-cyan-accent hover:bg-cyan-accent-hover text-zinc-950 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[11px] transition-all shadow-lg shadow-cyan-accent/10">
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t transition-colors duration-500 text-center" style={{ borderColor: "var(--card-border)" }}>
        <p className="text-[10px] font-bold uppercase tracking-[0.4em]" style={{ color: "var(--text-secondary)" }}>
          &copy; 2026 <span style={{ color: "var(--text-primary)" }}>Pasan Pramuditha</span>.
        </p>
      </footer>
    </>
  );
};

export default Projects;

