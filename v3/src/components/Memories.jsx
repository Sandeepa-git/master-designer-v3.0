
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* V2 Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="space-y-6"
                    >
                        <motion.div
                            variants={fadeUp}
                            custom={0}
                            whileHover={{ x: 8 }}
                            className="border-l-4 border-cyan-500 pl-6 py-3 bg-cyan-500/5 rounded-r-xl hover:bg-cyan-500/10 transition-all duration-300 cursor-default"
                        >
                            <h3 className="text-xl font-bold text-cyan-400 mb-2">V2.0 PHASE 01</h3>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                In the first phase, designs for one field selected from the given fields are submitted under the online mode. 15 teams and 15 individual competitors were selected for the final stage.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={fadeUp}
                            custom={1}
                            whileHover={{ x: 8 }}
                            className="border-l-4 border-purple-500 pl-6 py-3 bg-purple-500/5 rounded-r-xl hover:bg-purple-500/10 transition-all duration-300 cursor-default"
                        >
                            <h3 className="text-xl font-bold text-purple-400 mb-2">V2.0 PHASE 02</h3>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                In the final phase, selected groups measured their skills at a specific time. The greatest designs were evaluated and celebrated in a physical competition round.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* V2 Preview Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group max-w-md mx-auto hover:border-cyan-500/30 transition-all duration-500"
                    >
                        {/* Browser chrome */}
                        <div className="bg-[#111] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            <span className="ml-4 text-xs text-gray-500 font-mono hidden sm:block">master-designer-v2-0.vercel.app</span>
                        </div>

                        <div className="relative aspect-video bg-black flex items-center justify-center p-8">
                            <img src="/assets/images/logo.png" alt="V2 Logo" className="h-24 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-center flex-col gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
                                <motion.a
                                    href="https://master-designer-v2-0.vercel.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-cyan-400 transition-colors text-sm"
                                >
                                    Visit Archive <ExternalLink size={14} />
                                </motion.a>
                                <p className="text-gray-400 text-xs">Explore our V2.0 legacy</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Memories;
