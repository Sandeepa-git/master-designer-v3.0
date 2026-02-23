
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" }
    })
};

const Memories = () => {
    return (
        <section id="memories" className="py-24 relative overflow-hidden bg-black text-white">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/10 pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.span
                        variants={fadeUp}
                        custom={0}
                        className="text-cyan-400 font-bold tracking-widest text-sm uppercase mb-4 block"
                    >
                        Archive
                    </motion.span>
                    <motion.h2
                        variants={fadeUp}
                        custom={1}
                        className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4"
                    >
                        Our Memories
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        custom={2}
                        className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        Take a trip down memory lane and revisit the legacy of Master Designer. Explore our previous editions and the impact we've made on the design community.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Version 1.0 Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, rotateY: -5 }}
                        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
                        style={{ perspective: "1000px" }}
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <h4 className="text-6xl font-black text-white">V1.0</h4>
                        </div>
                        <div className="relative z-10 flex-1">
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-cyan-400 font-bold tracking-widest text-xs uppercase mb-4 block"
                            >
                                Archive 2022
                            </motion.span>
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors"
                            >
                                Master Designer V1.0
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-gray-400 text-sm leading-relaxed mb-6"
                            >
                                Master Designer V1.0, the inaugural four-day workshop series organized by the Media Unit of SLTC in 2022, served as a launchpad for aspiring graphic designers to explore, experiment, and strengthen their creative skills.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-gray-400 text-sm leading-relaxed"
                            >
                                This immersive program was designed specifically for undergraduates of SLTC, offering valuable learning opportunities through hands-on sessions with industry-standard tools such as Photoshop, Illustrator, and InDesign.
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Version 2.0 Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, rotateY: 5 }}
                        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
                        style={{ perspective: "1000px" }}
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <h4 className="text-6xl font-black text-white">V2.0</h4>
                        </div>
                        <div className="relative z-10 flex-1">
                            <motion.span
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-purple-400 font-bold tracking-widest text-xs uppercase mb-4 block"
                            >
                                Archive 2024
                            </motion.span>
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-2xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors"
                            >
                                Master Designer V2.0
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-gray-400 text-sm leading-relaxed mb-6"
                            >
                                This was not merely a competition — it was a national platform for creativity and innovation. Master Designer V2.0, organized by the Media Unit of SLTC, brought together Sri Lanka’s most talented graphic designers.
                            </motion.p>
                            <div className="mt-auto">
                                <motion.a
                                    href="https://master-designer-v2-0.vercel.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/5 border border-white/10 px-4 py-2 rounded-xl hover:bg-white/10 transition-all"
                                >
                                    Visit Archive <ExternalLink size={14} />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Memories;
