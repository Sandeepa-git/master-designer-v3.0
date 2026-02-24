
import React from 'react';
import { motion } from 'framer-motion';

const phases = [
    {
        id: "01",
        title: "PHASE 01",
        desc: "Online weekend workshops on Adobe Illustrator and Adobe Photoshop. This phase is open to all above 16, providing a foundational and advanced learning experience guided by industry experts."
    },
    {
        id: "02",
        title: "PHASE 02",
        desc: "Contestants invite original design submissions based on a specific theme. Showcase your creative excellence on a national platform individually or as a team of up to three."
    },
    {
        id: "03",
        title: "PHASE 03",
        desc: "The top 15 individuals and 10 teams will compete in a live physical final round. Finalists will present their designs in a live competition, competing for top honors and recognition."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-cyan-400 font-bold tracking-widest text-sm uppercase mb-4 block"
                    >
                        The Process
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase mb-4">
                        PHASES
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mt-6" />
                </div>

                <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center justify-center">
                    {phases.map((phase, idx) => (
                        <motion.div
                            key={phase.id}
                            initial={{ opacity: 0, y: 100, rotateX: 10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 1,
                                delay: idx * 0.1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="relative group w-full max-w-[400px] md:w-1/3"
                            style={{ perspective: "1000px" }}
                        >
                            {/* Card Container - Strict Portrait Design on Desktop, Flexible on Mobile */}
                            <div className="relative aspect-[3/4] md:aspect-[3/4.2] w-full flex flex-col rounded-[2.8rem] p-[3px] bg-gradient-to-br from-purple-500 via-cyan-500/50 to-cyan-500 overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(34,211,238,0.2)]">
                                <div className="absolute inset-0 bg-black rounded-[2.8rem]" />

                                {/* Background Logo - Enhanced Visibility */}
                                <motion.div
                                    initial={{ scale: 1.1, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 0.2 }}
                                    transition={{ duration: 1.2 }}
                                    className="absolute inset-0 pointer-events-none"
                                >
                                    <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
                                        <img src="/assets/images/logo.png" alt="" className="w-full h-full object-cover grayscale invert opacity-50" />
                                    </div>
                                </motion.div>

                                {/* Content - Centered for Portrait View */}
                                <div className="relative h-full flex flex-col items-center justify-center p-8 md:p-12 z-10 text-center pb-24 md:pb-28">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                        className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl md:text-3xl font-black text-white group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-all duration-500 mb-6 md:mb-8"
                                    >
                                        {phase.id}
                                    </motion.div>

                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className="text-2xl md:text-3xl font-black text-white mb-4 md:mb-6 group-hover:text-cyan-400 transition-colors tracking-tighter"
                                    >
                                        {phase.title}
                                    </motion.h3>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5, duration: 0.6 }}
                                        className="text-gray-400 text-sm md:text-lg leading-relaxed font-light group-hover:text-gray-200 transition-colors px-2"
                                    >
                                        {phase.desc}
                                    </motion.p>
                                </div>

                                {/* Bottom Identity Tab */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] md:w-[75%] z-20"
                                >
                                    <div className="relative px-4 py-3 md:px-6 md:py-4 bg-black border-t border-x border-white/10 rounded-t-[2rem] md:rounded-t-[2.2rem] flex flex-col items-center gap-1 shadow-[0_-15px_30px_rgba(0,0,0,0.8)] group-hover:border-cyan-500/50 transition-all">
                                        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                        <p className="text-[9px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.3em] text-white uppercase whitespace-nowrap">
                                            Master Designer V3.0
                                        </p>
                                        <div className="w-10 h-[1px] bg-white/10 my-1" />
                                        <p className="text-[6px] md:text-[8px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-cyan-500/80 uppercase">
                                            Good Design, Creates Culture
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Premium Glow */}
                                <div className="absolute inset-0 rounded-[2.8rem] bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-700 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
