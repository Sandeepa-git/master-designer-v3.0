
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const titleVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 1.5 + (i * 0.1), // Delay after preloader
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        }),
    };

    const subtitleVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 2.2,
                duration: 0.8,
            },
        },
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-4">
            {/* Background & Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 scale-105"
                >
                    <source src="/assets/videos/hero.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container relative z-20 text-center flex flex-col items-center">
                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm tracking-[0.3em] text-cyan-400 mb-8 uppercase backdrop-blur-md">
                        DESIGNATHON
                    </span>
                </motion.div>

                {/* Main Heading - Staggered */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] md:leading-[1.15] mb-12 py-4">
                    <div className="overflow-visible py-2">
                        <motion.span
                            custom={0}
                            initial="hidden"
                            animate="visible"
                            variants={titleVariant}
                            className="block text-white px-2"
                        >
                            MASTER
                        </motion.span>
                    </div>
                    <div className="overflow-visible py-2">
                        <motion.span
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            variants={titleVariant}
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 px-2"
                        >
                            DESIGNER <span className="inline-block text-3xl md:text-5xl text-gray-500 font-medium ml-4 pb-1">V3.0</span>
                        </motion.span>
                    </div>
                </h1>

                {/* Subheadline */}
                <motion.p
                    variants={subtitleVariant}
                    initial="hidden"
                    animate="visible"
                    className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light uppercase tracking-wide"
                >
                    The ultimate all-island graphic design competition and workshop series. <br className="hidden md:block" />
                    Discovering top design talent in Sri Lanka.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                    <a
                        href="https://drive.google.com/file/d/1ZVYPhk0o5MEbdwiw0CAl7De6W6cAs7zx/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Delegate Booklet
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 animate-pulse">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-500 to-transparent opacity-50" />
            </motion.div>
        </section>
    );
};

export default Hero;
