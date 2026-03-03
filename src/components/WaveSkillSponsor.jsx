
import React from 'react';
import { motion } from 'framer-motion';

const WaveSkillSponsor = () => {
    return (
        <section className="py-24 bg-white/5 border-t border-white/10 relative overflow-hidden">
            {/* Background glowing effects */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="text-gray-400 font-bold tracking-[0.2em] text-sm uppercase mb-6 block">
                        Our Proud Partner
                    </span>

                    <div className="bg-white inline-flex rounded-3xl p-8 mb-10 shadow-2xl shadow-blue-500/20 transform hover:scale-[1.02] transition-transform duration-500">
                        <img
                            src="/assets/images/waveskill.png"
                            alt="Wave Skill Logo"
                            className="h-16 md:h-24 object-contain"
                        />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Fueling Careers,</span> One Skill at a Time.
                    </h2>
                    <p className="max-w-xl mx-auto text-gray-400 text-lg leading-relaxed">
                        We are thrilled to partner with Wave Skill, dedicated to empowering individuals and building the careers of tomorrow through highly specialized skill development.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WaveSkillSponsor;
