import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    year: "2025",
    link: "#",
    description: "Validates technical expertise in developing, deploying, and maintaining applications on AWS."
  },
  {
    title: "React Native Specialist",
    issuer: "Meta",
    year: "2024",
    link: "#",
    description: "Advanced certification covering cross-platform mobile development with React Native."
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Coursera",
    year: "2023",
    link: "#",
    description: "Comprehensive program covering frontend and backend technologies including MERN stack."
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 border-b transition-colors duration-500 overflow-hidden relative" style={{ borderColor: "var(--card-border)" }}>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#00D0FF] text-[10px] font-black tracking-[0.3em] uppercase mb-1 font-poppins">Achievements</p>
          <h2 className="section-title mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D0FF] to-cyan-300">Certifications</span>
          </h2>
          <div className="w-24 h-[4px] bg-gradient-to-r from-[#00D0FF] to-transparent mb-6 rounded-full shadow-[0_0_15px_rgba(0,208,255,0.5)]" />
          <p className="section-copy max-w-2xl">
            A showcase of my professional qualifications and continuous learning journey in software engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-10 card-style overflow-hidden flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-cyan-accent/10 group-hover:bg-cyan-accent transition-colors text-cyan-accent group-hover:text-zinc-950">
                  <FaCertificate size={20} />
                </div>
                <span className="px-4 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300"
                  style={{
                    borderColor: "var(--card-border)",
                    color: "var(--text-secondary)",
                    backgroundColor: "var(--bg-secondary)"
                  }}>
                  {cert.year}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-accent transition-colors" style={{ color: "var(--text-primary)" }}>
                {cert.title}
              </h3>
              <p className="text-[12px] font-bold text-cyan-accent/80 uppercase tracking-[0.1em] mb-4">
                {cert.issuer}
              </p>
              <p className="leading-relaxed mb-8 text-sm font-normal flex-grow" style={{ color: "var(--text-secondary)" }}>
                {cert.description}
              </p>

              <div className="mt-auto">
                <a href={cert.link} className="inline-flex items-center gap-2 hover:text-cyan-accent text-sm font-bold uppercase tracking-widest transition-colors" style={{ color: "var(--text-primary)" }}>
                  View Credential <FaExternalLinkAlt size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
