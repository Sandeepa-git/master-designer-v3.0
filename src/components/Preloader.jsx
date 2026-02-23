import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
    // Staggered letter animation for "MASTER DESIGNER"
    const title = "MASTER DESIGNER";
    const letters = title.split("");

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                scale: 1.05,
                filter: "blur(10px)",
                transition: { duration: 0.6, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        >
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Rotating ring */}
            <motion.div
                className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border border-white/[0.03]"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full border border-dashed border-cyan-500/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Corner accents */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-cyan-500/30"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-cyan-500/30"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-cyan-500/30"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-cyan-500/30"
            />

            {/* Ambient glow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0.3] }}
                transition={{ duration: 2 }}
                className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"
            />

            {/* Main content */}
            <div className="relative flex flex-col items-center z-10">
                {/* Logo */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className="mb-8 relative"
                >
                    <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl scale-150" />
                    <img src="/assets/images/logo.png" alt="Logo" className="w-20 h-auto relative z-10 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]" />
                </motion.div>

                {/* Animated title letters */}
                <div className="flex items-center justify-center mb-6 overflow-hidden">
                    {letters.map((letter, i) => (
                        <motion.span
                            key={i}
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.5 + i * 0.04,
                                ease: "easeOut"
                            }}
                            className={`text-lg md:text-2xl font-black tracking-[0.15em] ${letter === ' ' ? 'mx-2' :
                                i >= 7 ? 'bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-300' : 'text-white'
                                }`}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                {/* Version badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="px-6 py-1.5 border border-white/10 rounded-full mb-8 bg-white/[0.02] backdrop-blur-sm"
                >
                    <span className="text-gray-500 text-xs tracking-[0.3em] font-mono whitespace-nowrap">V3.0</span>
                </motion.div>

                {/* Progress bar */}
                <div className="w-56 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 3.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 rounded-full"
                    />
                    {/* Glowing dot at end of progress */}
                    <motion.div
                        initial={{ left: "0%" }}
                        animate={{ left: "100%" }}
                        transition={{ duration: 3.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                    />
                </div>

                {/* Loading text with typing effect */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 flex items-center gap-1"
                >
                    <span className="text-gray-600 text-[10px] tracking-[0.4em] font-mono uppercase">Loading</span>
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        className="text-cyan-500 text-[10px] font-mono"
                    >
                        ●
                    </motion.span>
                </motion.div>
            </div>

            {/* Scan line effect */}
            <motion.div
                initial={{ top: "-5%" }}
                animate={{ top: "105%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none"
            />
        </motion.div>
    );
};

export default Preloader;
