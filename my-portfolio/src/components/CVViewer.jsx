import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiDownload, HiOutlineEye } from "react-icons/hi";
import { motion } from "framer-motion";

const CVViewer = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] py-20 px-4 sm:px-6 relative overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-accent/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Actions */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)] hover:text-cyan-accent transition-colors group"
                        >
                            <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                            Back to Portfolio
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-black mt-4 text-[var(--text-primary)]">
                            Curriculum <span className="text-cyan-accent">Vitae</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center gap-4"
                    >
                        <a
                            href="/My_Cv.pdf"
                            download="Pasan_Pramuditha_CV.pdf"
                            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-bold text-sm text-cyan-accent hover:bg-cyan-accent/10 transition-all shadow-lg"
                        >
                            <HiDownload size={18} />
                            Download PDF
                        </a>
                    </motion.div>
                </div>

                {/* PDF Viewer Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="relative w-full aspect-[1/1.414] md:h-[1100px] bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm"
                >
                    {!isLoaded && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                            <div className="w-12 h-12 border-4 border-cyan-accent/20 border-t-cyan-accent rounded-full animate-spin" />
                            <p className="text-xs font-bold uppercase tracking-widest text-cyan-accent animate-pulse">Loading Document...</p>
                        </div>
                    )}
                    
                    <iframe
                        src="/My_Cv.pdf#toolbar=0"
                        className="w-full h-full border-none"
                        onLoad={() => setIsLoaded(true)}
                        title="CV Viewer"
                    />

                    {/* Interactive Overlay Hint */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-zinc-900/80 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-zinc-400 select-none pointer-events-none flex items-center gap-2">
                        <HiOutlineEye size={14} className="text-cyan-accent" />
                        Full Viewing Mode Enabled
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center mt-12 pb-12"
                >
                    <p className="text-[var(--text-secondary)] text-sm mb-6">Need a copy for your records?</p>
                    <a
                        href="/My_Cv.pdf"
                        download="Pasan_Pramuditha_CV.pdf"
                        className="inline-flex items-center gap-2 text-cyan-accent font-bold uppercase tracking-widest text-xs hover:underline decoration-2 underline-offset-8"
                    >
                        Download official CV version
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default CVViewer;
