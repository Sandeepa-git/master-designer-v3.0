
import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ExternalLink } from 'lucide-react';

const projects = [
    { title: 'Project Phase 1', category: 'Competition', img: '/assets/images/phase_1.png' },
    { title: 'Project Phase 2', category: 'Execution', img: '/assets/images/phase_2.jpg' },
    { title: 'Winner Showcase', category: 'Awards', img: '/assets/images/i_winner.png' },
    { title: 'Merchandise', category: 'Apparel', img: '/assets/images/t_shirt_f.png' },
    { title: 'Event Coverage', category: 'Photography', img: '/assets/images/bgci.jpg' },
    { title: 'Brand Identity', category: 'Design', img: '/assets/images/readme.png' },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 bg-dark">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-2 block">Our Work</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white">Selected Projects</h2>
                    </div>
                    <a href="#portfolio" className="text-cyan-400 hover:text-white transition-colors border-b border-cyan-400 hover:border-white pb-1 mt-6 md:mt-0 font-medium">View All Works</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-gray-900"
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                                <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                                    {project.title}
                                </h3>
                                <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                                    <ExternalLink size={20} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
