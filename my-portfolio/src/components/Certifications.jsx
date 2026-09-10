import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import htmlCertImg from "../assets/Introduction to Html.png";

export const certificationsData = [
  {
    id: "html-intro",
    title: "Introduction to HTML",
    issuer: "sololearn",
    year: "2023",
    link: "#",
    image: htmlCertImg,
    description: "Demonstrates a theoretical and practical understanding of HTML."
  },
  {
    id: "rn-specialist",
    title: "React Native Specialist",
    issuer: "Meta",
    year: "2024",
    link: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    description: "Advanced certification covering cross-platform mobile development with React Native."
  },
  {
    id: "full-stack",
    title: "Full-Stack Web Development",
    issuer: "Coursera",
    year: "2023",
    link: "#",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
    description: "Comprehensive program covering frontend and backend technologies including MERN stack."
  },
  {
    id: "gcp-professional",
    title: "Google Cloud Professional",
    issuer: "Google",
    year: "2023",
    link: "#",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop",
    description: "Advanced certification for designing and managing scalable cloud architectures."
  }
];

const Certifications = () => {
  // Only show the first 3 certifications on the home page
  const previewCerts = certificationsData.slice(0, 3);

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewCerts.map((cert, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden flex flex-col h-full bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#00D0FF]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,208,255,0.1)] min-h-[380px] sm:min-h-[420px]"
            >
              <div className="h-48 sm:h-64 w-full overflow-hidden relative border-b border-[var(--card-border)]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link to={`/certification/${cert.id}`} className="flex items-center gap-2 text-white font-medium bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-[#00D0FF] hover:border-[#00D0FF] transition-all">
                    View Certification <FaExternalLinkAlt size={14} />
                  </Link>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-5">
                  <span className="text-sm font-bold text-[var(--text-primary)] bg-[var(--glass-bg)] px-4 py-1.5 rounded-full border border-[var(--glass-border)]">
                    {cert.year}
                  </span>
                  <span className="text-sm font-bold text-[#00D0FF] tracking-wider uppercase">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[var(--text-primary)] group-hover:text-[#00D0FF] transition-colors leading-tight">
                  {cert.title}
                </h3>

                <p className="text-base text-[var(--text-secondary)] flex-grow leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link
            to="/certifications"
            className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm text-[var(--text-primary)] border border-[#00D0FF]/30 hover:border-[#00D0FF] hover:bg-[#00D0FF]/10 transition-all duration-300"
          >
            View All Certifications <FaArrowRight className="text-[#00D0FF]" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

