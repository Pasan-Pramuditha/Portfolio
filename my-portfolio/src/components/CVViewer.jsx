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
        <div className="min-h-screen bg-[var(--bg-primary)] py-20 px-4 sm:px-6 relative overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-accent/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
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
                    className="relative w-full min-h-[500px] bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm p-4 md:p-8"
                    id="pdf-container"
                >
                    {!isLoaded && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[var(--bg-primary)] z-20">
                            <div className="w-12 h-12 border-4 border-cyan-accent/20 border-t-cyan-accent rounded-full animate-spin" />
                            <p className="text-xs font-bold uppercase tracking-widest text-cyan-accent animate-pulse">Rendering Document...</p>
                        </div>
                    )}
                    
                    <div className="flex justify-center flex-col items-center">
                        <Document
                            file="/My_Cv.pdf"
                            onLoadSuccess={onDocumentLoadSuccess}
                            loading={null}
                            className="max-w-full"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={pageNumber}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="shadow-2xl"
                                >
                                    <Page 
                                        pageNumber={pageNumber} 
                                        width={containerWidth ? Math.min(containerWidth - 64, 900) : 300}
                                        renderAnnotationLayer={true}
                                        renderTextLayer={true}
                                        className="rounded-lg overflow-hidden"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </Document>

                        {/* Page Navigation */}
                        {numPages > 1 && (
                            <div className="flex items-center gap-8 mt-8 bg-zinc-900/60 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/10">
                                <button
                                    onClick={() => changePage(-1)}
                                    disabled={pageNumber <= 1}
                                    className={`p-2 rounded-full transition-all ${pageNumber <= 1 ? "text-zinc-600 cursor-not-allowed" : "text-cyan-accent hover:bg-cyan-accent/10"}`}
                                >
                                    <HiChevronLeft size={24} />
                                </button>
                                <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">
                                    Page <span className="text-cyan-accent">{pageNumber}</span> of {numPages}
                                </span>
                                <button
                                    onClick={() => changePage(1)}
                                    disabled={pageNumber >= numPages}
                                    className={`p-2 rounded-full transition-all ${pageNumber >= numPages ? "text-zinc-600 cursor-not-allowed" : "text-cyan-accent hover:bg-cyan-accent/10"}`}
                                >
                                    <HiChevronRight size={24} />
                                </button>
                            </div>
                        )}
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
