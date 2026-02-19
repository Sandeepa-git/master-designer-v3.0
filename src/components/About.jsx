
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
                        <span className="text-cyan-400 font-bold">MASTER DESIGNER V1.0</span>, presented by the Media Unit of SLTC, was a 4-day workshop series strictly focused on Photoshop, Illustrator, and InDesign tools. This was followed by <span className="text-purple-400 font-bold">MASTER DESIGNER V2.0</span>, an all-island competition designed to evaluate the most talented individuals in the field of graphic design across the nation.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-400 text-lg mb-10 leading-relaxed"
                    >
                        Now, <span className="text-cyan-400 font-bold">Master Designer V3.0</span> is here as the ultimate all-island graphic design competition and workshop series. Aimed at discovering top design talent in Sri Lanka, it promotes creativity and growth in digital design, including the use of AI tools. It consists of three immersive phases, from expert-led workshops to a live, physical final round.
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

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative group"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-700" />
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gray-900 border border-white/10 group-hover:border-white/20 transition-colors">
                        <img
                            src="/assets/images/work.png"
                            alt="About Master Designer"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-opacity duration-700 parallax-bg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-6 left-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-white font-bold text-2xl mb-1">The Journey</p>
                            <p className="text-cyan-400 text-sm tracking-wider">Since 2015</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
