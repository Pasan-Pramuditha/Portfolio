import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loading = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-accent/20 rounded-full blur-[120px]"
                />
            </div>

            <div className="relative flex flex-col items-center">
                {/* Logo/Icon Pulsing */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                    className="relative mb-8"
                >
                    <div className="w-24 h-24 rounded-2xl border-2 border-cyan-accent/30 flex items-center justify-center bg-cyan-accent/5 backdrop-blur-xl shadow-[0_0_30px_rgba(0,208,255,0.2)]">
                        <motion.div
                            animate={{
                                opacity: [0.4, 1, 0.4],
                                scale: [0.95, 1.05, 0.95],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="text-cyan-accent text-4xl font-black italic tracking-tighter"
                        >
                            PP
                        </motion.div>
                    </div>

                    {/* Orbiting particles */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-4 border border-dashed border-cyan-accent/20 rounded-full"
                    />
                </motion.div>

                {/* Name with Gradient */}
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-2xl md:text-3xl font-black tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent via-white to-cyan-accent/70 text-center"
                >
                    Pasan Pramuditha
                </motion.h2>

                {/* Progress bar line */}
                <div className="mt-8 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                    <motion.div
                        initial={{ left: "-100%" }}
                        animate={{ left: "100%" }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-cyan-accent to-transparent"
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="mt-4 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500"
                >
                    Initializing Digital Space
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Loading;
