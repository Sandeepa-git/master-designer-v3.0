
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-black relative">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-cyan-400 font-bold tracking-widest text-sm uppercase mb-4 block"
                    >
                        About Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            About
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-400 text-lg mb-6 leading-relaxed"
                    >
                        Master Designer V3.0 is the latest edition of the all-island graphic design initiative organized by the Media Unit of SLTC. Building on the success of previous versions, it combines both competition and workshop elements to discover and celebrate design talent across Sri Lanka.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-400 text-lg mb-10 leading-relaxed"
                    >
                        The program is open to individuals and teams of up to three members, aged 16 and above, and emphasizes creativity, collaboration, and innovation in digital design. It unfolds across three structured phases: Phase 1: Online weekend workshops on Adobe Illustrator and Photoshop, open to all ages. Phase 2: Original design submissions based on a given theme. Phase 03: A live final round at SLTC Padukka, where the top 15 individuals and 10 teams compete before an audience.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mb-10"
                    >
                        <a href="https://drive.google.com/file/d/1TM24mS22xNG_t46yjabVYHcRPJ7LWgaV/view?usp=drive_link" target="_blank" className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all transform hover:-translate-y-1">
                            Download Delegate Booklet
                        </a>
                    </motion.div>


                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative group w-full"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-700" />
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[4/5] bg-gray-900 border border-white/10 group-hover:border-white/20 transition-colors">
                        <img
                            src="/assets/images/work.png"
                            alt="About Master Designer"
                            className="w-full h-full object-cover transition-opacity duration-700 parallax-bg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-6 left-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-white font-bold text-2xl mb-1">The Journey</p>
                            <p className="text-cyan-400 text-sm tracking-wider">Since 2022</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
