import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { certificationsData } from "./Certifications"; // Import data

const AllCertifications = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-28 pb-20 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00D0FF]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white text-sm font-medium hover:bg-white/5 hover:border-white/20 transition-all duration-300 mb-12"
        >
          <FaArrowLeft /> Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#00D0FF] text-[10px] font-black tracking-[0.3em] uppercase mb-1 font-poppins">Achievements</p>
          <h2 className="section-title mb-4 flex flex-wrap items-center gap-4">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D0FF] to-cyan-300">Certifications</span>
          </h2>
          <div className="w-24 h-[4px] bg-gradient-to-r from-[#00D0FF] to-transparent mb-6 rounded-full shadow-[0_0_15px_rgba(0,208,255,0.5)]" />
          <p className="section-copy max-w-2xl">
            A comprehensive list of my professional certifications and achievements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden flex flex-col h-full bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#00D0FF]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,208,255,0.1)]"
            >
              <div className="h-48 w-full overflow-hidden relative border-b border-[var(--card-border)]">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href={cert.link} className="flex items-center gap-2 text-white font-medium bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-[#00D0FF] hover:border-[#00D0FF] transition-all">
                    View Certification <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-white bg-black/50 px-3 py-1 rounded-full border border-white/10">
                    {cert.year}
                  </span>
                  <span className="text-xs font-bold text-[#00D0FF] tracking-wider uppercase">
                    {cert.issuer}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00D0FF] transition-colors leading-tight">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-gray-400 flex-grow leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCertifications;
