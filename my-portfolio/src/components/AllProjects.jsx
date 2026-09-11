import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaArrowLeft, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { projectsData } from "./Projects";

const AllProjects = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-16 md:pt-28 md:pb-20 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00D0FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <button
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              const element = document.getElementById('projects');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--card-border)] text-[var(--text-primary)] text-sm font-medium hover:bg-[var(--card-bg-hover)] hover:border-[var(--card-border-hover)] transition-all duration-300 mb-12 cursor-pointer"
        >
          <FaArrowLeft /> Back to My Projects
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#00D0FF] text-[10px] font-black tracking-[0.3em] uppercase mb-1 font-poppins">Recent work </p>
          <h2 className="section-title mb-4 flex flex-wrap items-center gap-4">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D0FF] to-cyan-300">Projects</span>
          </h2>
          <div className="w-24 h-[4px] bg-gradient-to-r from-[#00D0FF] to-transparent mb-6 rounded-full shadow-[0_0_15px_rgba(0,208,255,0.5)]" />
          <p className="section-copy max-w-2xl">
            A comprehensive list of my software engineering projects and digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden flex flex-col h-full bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#00D0FF]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,208,255,0.1)]"
            >
              <div className="h-48 sm:h-56 md:h-64 w-full overflow-hidden relative border-b border-[var(--card-border)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 sm:gap-4">
                  <Link to={`/project/${project.id}`} className="flex items-center gap-2 text-white font-medium bg-black/40 backdrop-blur-md px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-white/20 hover:bg-[#00D0FF] hover:border-[#00D0FF] transition-all text-sm sm:text-base">
                    View Details
                  </Link>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-medium bg-black/40 backdrop-blur-md w-10 h-10 sm:w-12 sm:h-12 justify-center rounded-full border border-white/20 hover:bg-[#00D0FF] hover:border-[#00D0FF] transition-all">
                    <FaGithub size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  </a>
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4 sm:mb-5">
                  <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] bg-[var(--glass-bg)] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-[var(--glass-border)]">
                    {project.year}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#00D0FF] tracking-wider uppercase">
                    {project.category} {project.technologies && project.technologies.length > 2 && `+${project.technologies.length - 2}`}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-[var(--text-primary)] group-hover:text-[#00D0FF] transition-colors leading-tight">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-[var(--text-secondary)] flex-grow leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
