import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaGithub, FaCheck } from "react-icons/fa";
import { projectsData } from "./Projects";
import { motion } from "framer-motion";

const ProjectViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find(p => p.id === id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00D0FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10 flex-grow flex flex-col">
        {/* Back button at the very top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-between items-center"
        >
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300 cursor-pointer"
          >
            <FaArrowLeft /> Back
          </button>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start justify-center flex-grow w-full">
          
          {/* Left side: Image & Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:sticky lg:top-[120px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: -30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full bg-white rounded-[2rem] p-2 overflow-hidden shadow-2xl relative"
            >
              {/* Carousel arrows */}
              {projectImages.length > 1 && (
                <>
                  <div 
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-black/60 transition-colors z-10"
                  >
                     <FaArrowLeft size={14} />
                  </div>
                  <div 
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-black/60 transition-colors z-10"
                  >
                     <FaArrowRight size={14} />
                  </div>
                </>
              )}

              <img
                src={activeImage}
                alt={project.title}
                className="w-full h-auto max-h-[60vh] object-cover rounded-[1.5rem]"
              />
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
                  <div 
                    key={index} 
                    onClick={() => setActiveImageIndex(index)}
                    className={`flex-shrink-0 w-24 h-16 md:w-32 md:h-24 rounded-2xl overflow-hidden border-2 cursor-pointer transition-all ${index === activeImageIndex ? 'border-[#00D0FF]' : 'border-transparent opacity-50 hover:opacity-100'}`}
                  >
                     <img src={imgUrl} className="w-full h-full object-cover rounded-xl" alt={`thumbnail-${index}`} />
                  </div>
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
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white mb-6 leading-tight tracking-wide uppercase">
              {project.title}
            </motion.h2>

            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <div className="w-10 h-[2px] bg-[#00D0FF]"></div>
              <span className="text-[#00D0FF] text-sm font-bold tracking-widest uppercase">
                {project.year}
              </span>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="mb-10">
              <p className="text-zinc-300 text-base md:text-[17px] leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </motion.div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <motion.div variants={itemVariants} className="mb-10">
                <h3 className="text-xl font-bold text-white tracking-wide mb-5">Key Features</h3>
                <ul className="flex flex-col gap-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[15px] text-zinc-300">
                      <span className="text-[#00D0FF] mt-1"><FaCheck size={14} /></span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <motion.div variants={itemVariants} className="mb-10">
                <h3 className="text-xl font-bold text-white tracking-wide mb-5">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-5 py-2 rounded-full text-[13px] font-bold tracking-wider uppercase border border-[#00D0FF]/30 text-[#00D0FF] bg-[#00D0FF]/5 hover:bg-[#00D0FF]/10 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap sm:flex-row gap-5 mt-4">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-3 px-8 py-3.5 rounded-xl bg-[#e4e4e7] text-zinc-900 font-bold text-sm tracking-wide hover:bg-white transition-all duration-300"
                >
                  Live Demo <FaExternalLinkAlt size={14} />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-3 px-8 py-3.5 rounded-xl bg-transparent border border-zinc-700 text-zinc-300 font-bold text-sm tracking-wide hover:border-zinc-500 hover:text-white transition-all duration-300"
                >
                  View Code <FaGithub size={18} />
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectViewer;
