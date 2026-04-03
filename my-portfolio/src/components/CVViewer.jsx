import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiDownload, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";

// Register pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const CVViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [containerWidth, setContainerWidth] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const handleResize = () => {
            const container = document.getElementById("pdf-container");
            if (container) {
                setContainerWidth(container.clientWidth);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setIsLoaded(true);
    }

    const changePage = (offset) => {
        setPageNumber(prevPageNumber => Math.min(Math.max(1, prevPageNumber + offset), numPages));
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-[var(--bg-primary)] py-20 px-4 sm:px-6 relative overflow-hidden transition-colors duration-500"
        >
            {/* Advanced Ambient Animated Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.1, 1],
                        rotate: [0, 45, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-accent/15 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 60, 0],
                        scale: [1, 1.2, 1],
                        rotate: [0, -90, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px]"
                />
                {/* Additional floating particles */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 0.3, 0],
                        }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            delay: i * 3,
                        }}
                        className="absolute w-1 h-1 bg-cyan-accent rounded-full blur-sm"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${80 - i * 10}%`,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header Actions */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <motion.div
                            whileHover={{ x: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border font-bold text-[11px] uppercase tracking-widest transition-all duration-300 group shadow-sm hover:shadow-lg"
                                style={{ 
                                    backgroundColor: "var(--card-bg)", 
                                    borderColor: "var(--card-border)",
                                    color: "var(--text-primary)"
                                }}
                            >
                                <HiArrowLeft className="text-cyan-accent group-hover:scale-125 transition-transform" />
                                Back to Portfolio
                            </Link>
                        </motion.div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-6xl font-black mt-6 text-[var(--text-primary)]"
                        >
                            Curriculum <span className="text-cyan-accent text-gradient-cyan">Vitae</span>
                        </motion.h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex items-center gap-4"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05, y: -4, boxShadow: "0 10px 25px -5px rgba(0, 208, 255, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            href="/Pasan_Pramuditha_CV.pdf"
                            download="Pasan_Pramuditha_CV"
                            className="flex items-center gap-2 px-8 py-4 transition-all rounded-xl font-black text-xs uppercase tracking-widest text-zinc-950 border-none relative overflow-hidden group"
                            style={{ 
                                background: "linear-gradient(135deg, #00D0FF 0%, #00aacc 100%)"
                            }}
                        >
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                            <HiDownload size={18} />
                            Download CV
                        </motion.a>
                    </motion.div>
                </div>

                {/* PDF Viewer Container with Interactive Tilt/Depth effect */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                    whileHover={{ y: -10 }}
                    className="relative w-full min-h-[600px] rounded-[2.5rem] overflow-hidden border shadow-2xl backdrop-blur-md p-4 md:p-10 transition-shadow duration-500 hover:shadow-cyan-accent/20"
                    style={{ 
                        backgroundColor: "var(--card-bg)", 
                        borderColor: "var(--card-border)" 
                    }}
                    id="pdf-container"
                >
                    {/* Interior Decorative Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-accent/5 rounded-full blur-[80px] -z-10" />

                    {!isLoaded && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-[var(--bg-primary)] z-20">
                            <div className="relative">
                                <div className="w-16 h-16 border-4 border-cyan-accent/10 border-t-cyan-accent rounded-full animate-spin" />
                                <div className="absolute inset-0 border-4 border-indigo-500/10 border-b-indigo-500 rounded-full animate-spin [animation-duration:1.5s]" />
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-accent animate-pulse">Initializing Viewer</p>
                        </div>
                    )}
                    
                    <div className="flex justify-center flex-col items-center relative z-10">
                        <Document
                            file="/Pasan_Pramuditha_CV.pdf"
                            onLoadSuccess={onDocumentLoadSuccess}
                            loading={null}
                            className="max-w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={pageNumber}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="rounded-lg overflow-hidden shadow-2xl"
                                >
                                    <Page 
                                        pageNumber={pageNumber} 
                                        width={containerWidth ? Math.min(containerWidth - (window.innerWidth < 768 ? 40 : 80), 850) : 300}
                                        renderAnnotationLayer={true}
                                        renderTextLayer={true}
                                        className="rounded-lg"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </Document>

                        {/* Enhanced Page Navigation */}
                        <AnimatePresence>
                            {numPages > 1 && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-6 mt-8 bg-white/5 backdrop-blur-2xl px-6 py-2 rounded-2xl border border-white/10 shadow-2xl group hover:border-cyan-accent/30 transition-all"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.1, x: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => changePage(-1)}
                                        disabled={pageNumber <= 1}
                                        className={`p-2 rounded-lg transition-all ${pageNumber <= 1 ? "text-zinc-600 cursor-not-allowed opacity-30" : "text-cyan-accent bg-cyan-accent/10"}`}
                                    >
                                        <HiChevronLeft size={20} />
                                    </motion.button>
                                    
                                    <div className="flex flex-col items-center">
                                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-0.5">Page</span>
                                        <div className="text-xs font-black tracking-widest text-[var(--text-primary)]">
                                            <span className="text-cyan-accent text-sm">{pageNumber}</span>
                                            <span className="mx-1.5 text-zinc-600">/</span>
                                            <span className="text-zinc-400">{numPages}</span>
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.1, x: 3 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => changePage(1)}
                                        disabled={pageNumber >= numPages}
                                        className={`p-2 rounded-lg transition-all ${pageNumber >= numPages ? "text-zinc-600 cursor-not-allowed opacity-30" : "text-cyan-accent bg-cyan-accent/10"}`}
                                    >
                                        <HiChevronRight size={20} />
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Additional floating decorative elements */}
                <div className="mt-20 flex justify-center gap-2 md:gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-pulse" style={{ animationDelay: `${i * 0.5}s` }} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default CVViewer;
