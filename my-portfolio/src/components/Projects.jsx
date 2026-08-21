import { motion } from "framer-motion";
import { FaArrowRight, FaGithub } from "react-icons/fa";

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

const Projects = () => {
  return (
    <section id="projects" className="py-24 border-b transition-colors duration-500 overflow-hidden relative" style={{ borderColor: "var(--card-border)" }}>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#00D0FF] text-[10px] font-black tracking-[0.3em] uppercase mb-1 font-poppins">Portfolio</p>
          <h2 className="section-title mb-4">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D0FF] to-cyan-300">Projects</span>
          </h2>
          <div className="w-24 h-[4px] bg-gradient-to-r from-[#00D0FF] to-transparent mb-6 rounded-full shadow-[0_0_15px_rgba(0,208,255,0.5)]" />
          <p className="section-copy max-w-2xl">
            A collection of work that reflects my practical experience in building
            software solutions and digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-10 card-style overflow-hidden"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="h-14 w-1 flex bg-cyan-accent/30 group-hover:bg-cyan-accent transition-colors" />
                <span className="px-4 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300"
                  style={{
                    borderColor: "var(--card-border)",
                    color: "var(--text-secondary)",
                    backgroundColor: "var(--bg-secondary)"
                  }}>
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
                <button className="hover:bg-cyan-accent hover:text-zinc-950 px-6 py-3 rounded-xl font-bold text-[13px] transition-all flex items-center gap-2 group/btn uppercase tracking-widest"
                  style={{ backgroundColor: "var(--bg-secondary)", color: "var(--text-primary)" }}>
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
  );
};

export default Projects;
