import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { certificationsData } from "./Certifications";
import { motion } from "framer-motion";

const CertificateViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const cert = certificationsData.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  if (!cert) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Certificate Not Found</h2>
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

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-12 md:pt-28 md:pb-20 relative overflow-hidden flex flex-col">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00D0FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 flex-grow flex flex-col">
        {/* Back button at the very top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-8 flex justify-between items-center"
        >
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white text-sm font-medium hover:bg-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer"
          >
            <FaArrowLeft /> Back
          </button>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start justify-center flex-grow w-full">
          {/* Left side: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="w-full lg:w-2/3 flex items-center justify-center bg-[#0a0a0a] rounded-3xl border border-white/5 p-4 md:p-6 overflow-hidden shadow-2xl transition-transform duration-500 min-h-[30vh]"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-auto max-h-[50vh] lg:max-h-[80vh] object-contain rounded-xl"
            />
          </motion.div>

          {/* Right side: Info Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-6 lg:p-8 flex flex-col relative overflow-hidden h-full min-h-[auto] lg:min-h-[400px]"
          >
            {/* Decorative elements for the card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D0FF]/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

            <motion.p variants={itemVariants} className="text-[#00D0FF] text-xs font-black tracking-[0.2em] uppercase mb-2 font-poppins">{cert.issuer}</motion.p>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-6 leading-tight">
              {cert.title}
            </motion.h2>

            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[2px] bg-[#00D0FF]"></div>
              <span className="text-gray-300 text-sm font-medium tracking-wide">Issued: {cert.year}</span>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8 flex-grow">
              <h3 className="text-white font-bold tracking-wider mb-3 uppercase text-sm border-b border-white/10 pb-2">About This Certificate</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {cert.description}
              </p>
            </motion.div>

            {cert.link !== "#" && (
              <motion.div variants={itemVariants} className="mt-8">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center items-center gap-2 px-6 py-4 rounded-xl bg-[#00D0FF]/10 border border-[#00D0FF]/30 text-[#00D0FF] font-bold text-sm hover:bg-[#00D0FF] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,208,255,0.15)] hover:shadow-[0_0_20px_rgba(0,208,255,0.4)]"
                >
                  Verify Credential <FaExternalLinkAlt size={12} />
                </a>
              </motion.div>
            )}

            <motion.div variants={itemVariants} className="mt-8 pt-6 border-t border-white/5">
              <p className="text-[10px] text-gray-500 uppercase tracking-wider leading-relaxed">
                This is an official certification verified and issued by <span className="text-gray-300 font-bold">{cert.issuer}</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CertificateViewer;
