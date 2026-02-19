
import React from 'react';
import { motion } from 'framer-motion';

const phases = [
    {
        id: "01",
        title: "PHASE 01",
        desc: "Online weekend workshops on Adobe Illustrator and Adobe Photoshop. This phase is open to all ages, providing a foundational and advanced learning experience guided by industry experts."
    },
    {
        id: "02",
        title: "PHASE 02",
        desc: "Contestants invite original design submissions based on a specific theme. Showcase your creative excellence on a national platform individually or as a team of up to three."
    },
    {
        id: "03",
        title: "PHASE 03",
        desc: "The top 15 individuals and teams will compete in a live physical final round. Finalists will present their designs in a live competition, competing for top honors and recognition."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-widest uppercase mb-4">
                        PHASES
                    </h2>
                    <div className="w-24 h-1 bg-white/20 mx-auto mt-6" />
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {phases.map((phase, idx) => (
                        <motion.div
                            key={phase.id}
                            variants={{
                                hidden: { opacity: 0, y: 50, scale: 0.95 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: { duration: 0.8, ease: "easeOut" }
                                }
                            }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-colors duration-300 flex flex-col h-full group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 0.1, x: 0 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="absolute top-0 right-0 p-8 font-black text-8xl text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent select-none pointer-events-none transform translate-x-12 -translate-y-8 group-hover:opacity-20"
                            >
                                {phase.id}
                            </motion.div>

                            <div className="mb-6 relative z-10">
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (idx * 0.1) }}
                                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest text-white mb-4 border ${idx === 1 ? 'border-purple-500/50 bg-purple-500/10' : 'border-cyan-500/50 bg-cyan-500/10'}`}
                                >
                                    PHASE {phase.id}
                                </motion.span>
                                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    {phase.title}
                                </h3>
                            </div>

                            <p className="text-gray-400 text-base leading-relaxed flex-1 relative z-10">
                                {phase.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
