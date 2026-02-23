import React from 'react';
import { motion } from 'framer-motion';

const Motto = () => {
    return (
        <section className="py-24 md:py-32 bg-black relative flex items-center justify-center overflow-hidden min-h-[50vh]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/images/banner-bottom-50.png"
                    alt="Motto Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
            </div>

            {/* Animated glow orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container relative z-10 text-center px-6">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-cyan-400 text-xs md:text-sm tracking-[0.4em] font-bold uppercase mb-6"
                >
                    MASTER DESIGNER
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-2">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
                            Good Design
                        </span>
                    </h2>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-cyan-200 to-white">
                            Creates Culture
                        </span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-8"
                >
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-6" />
                    <span className="text-gray-500 text-lg md:text-xl font-light tracking-[0.5em]">V3.0</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Motto;
