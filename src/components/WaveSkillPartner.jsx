
import React from 'react';
import { motion } from 'framer-motion';

const WaveSkillPartner = () => {
    return (
        <section className="py-20 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto flex flex-col items-center"
                >
                    <span className="text-gray-400 font-bold tracking-[0.2em] text-sm uppercase mb-8 block">
                        Our Proud Partner
                    </span>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-14 mb-8 w-full max-w-2xl transform hover:scale-[1.02] transition-all duration-500 hover:bg-white/10">
                        <img
                            src="/assets/images/waveskill.png"
                            alt="Wave Skill Logo"
                            className="h-16 md:h-24 object-contain mx-auto mix-blend-screen brightness-200"
                        />
                    </div>

                    <h2 className="text-2xl md:text-4xl font-light text-white mb-6">
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                            Fueling Careers,
                        </span>{' '}
                        One Skill at a Time.
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                        We are thrilled to partner with Wave Skill, dedicated to empowering individuals and building the careers of tomorrow through highly specialized skill development.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WaveSkillPartner;
