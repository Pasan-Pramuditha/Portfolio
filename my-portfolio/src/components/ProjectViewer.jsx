import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaGithub, FaCheck } from "react-icons/fa";
import { projectsData } from "./Projects";
import { motion, AnimatePresence } from "framer-motion";

const ProjectViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find(p => p.id === id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
  }, [id]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center text-[var(--text-primary)]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-[#00D0FF]/20 text-[#00D0FF] rounded-full hover:bg-[#00D0FF]/30 transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const projectImages = project.images && project.images.length > 0 ? project.images : [project.image];
  const activeImage = projectImages[activeImageIndex];

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-12 md:pt-28 md:pb-20 relative overflow-hidden flex flex-col">
      {/* Background ambient light */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00D0FF]/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10 flex-grow flex flex-col">
        {/* Back button at the very top */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-between items-center"
        >
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[var(--card-border)] text-[var(--text-primary)] text-sm font-medium hover:bg-[var(--card-bg)] hover:border-[var(--text-primary)] transition-all duration-300 cursor-pointer"
          >
            <FaArrowLeft /> Back
          </button>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start justify-center flex-grow w-full">

          {/* Left side: Image & Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:sticky lg:top-[120px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full bg-[var(--card-bg)] rounded-[2rem] p-2 overflow-hidden shadow-2xl relative border border-[var(--card-border)] group"
            >
              {/* Carousel arrows */}
              {projectImages.length > 1 && (
                <>
                  <div
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white cursor-pointer opacity-0 group-hover:opacity-100 hover:bg-[#00D0FF] hover:scale-110 transition-all duration-300 z-10"
                  >
                    <FaArrowLeft size={14} />
                  </div>
                  <div
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white cursor-pointer opacity-0 group-hover:opacity-100 hover:bg-[#00D0FF] hover:scale-110 transition-all duration-300 z-10"
                  >
                    <FaArrowRight size={14} />
                  </div>
                </>
              )}

              <div className="w-full h-auto max-h-[60vh] rounded-[1.5rem] overflow-hidden bg-[var(--bg-primary)]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    src={activeImage}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-[1.5rem]"
                  />
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Thumbnails row */}
            {projectImages.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide mt-2"
              >
                {projectImages.slice(0, 4).map((imgUrl, index) => (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`flex-shrink-0 w-24 h-16 md:w-32 md:h-24 rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-300 ${index === activeImageIndex ? 'border-[#00D0FF] shadow-[0_0_15px_rgba(0,208,255,0.4)]' : 'border-transparent opacity-50 hover:opacity-100'}`}
                  >
                    <img src={imgUrl} className="w-full h-full object-cover rounded-xl border border-[var(--card-border)]" alt={`thumbnail-${index}`} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right side: Info Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2 flex flex-col pt-2 md:pt-4"
          >
            {/* Title Area */}
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[var(--text-primary)] mb-4 md:mb-6 leading-tight tracking-wide uppercase">
              {project.title}
            </motion.h2>

            <motion.div variants={itemVariants} className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "2rem" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-[2px] bg-[#00D0FF]"
              />
              <span className="text-[#00D0FF] text-xs md:text-sm font-bold tracking-widest uppercase">
                {project.year}
              </span>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="mb-8 md:mb-10">
              <p className="text-[var(--text-secondary)] text-sm sm:text-base md:text-[17px] leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </motion.div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <motion.div variants={itemVariants} className="mb-8 md:mb-10">
                <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)] tracking-wide mb-4 md:mb-5">Key Features</h3>
                <ul className="flex flex-col gap-3">
                  {project.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-3 text-sm md:text-[15px] text-[var(--text-secondary)]"
                    >
                      <span className="text-[#00D0FF] mt-1"><FaCheck size={12} className="md:w-3.5 md:h-3.5" /></span>
                      <span className="leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <motion.div variants={itemVariants} className="mb-8 md:mb-10">
                <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)] tracking-wide mb-4 md:mb-5">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-[13px] font-bold tracking-wider uppercase border border-[#00D0FF]/30 text-[#00D0FF] bg-[#00D0FF]/5 hover:bg-[#00D0FF]/10 transition-colors shadow-sm cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 md:gap-5 mt-2 md:mt-4 w-full">
              {project.demoLink && (
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsVideoModalOpen(true)}
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-8 py-3.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold text-sm tracking-wide hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] transition-shadow duration-300"
                >
                  Live Demo <FaExternalLinkAlt size={14} />
                </motion.button>
              )}
              {project.link && (
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-8 py-3.5 rounded-xl bg-transparent border border-[var(--card-border)] text-[var(--text-secondary)] font-bold text-sm tracking-wide hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] transition-colors duration-300"
                >
                  View Code <FaGithub size={18} />
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-[var(--card-border)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-[#00D0FF] text-white rounded-full flex items-center justify-center transition-colors font-bold text-xl"
              >
                ✕
              </button>
              <iframe 
                src={project.demoLink ? project.demoLink.replace(/\/view.*$/, '/preview') : ''} 
                className="w-full h-full border-0" 
                allow="autoplay; fullscreen" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectViewer;
