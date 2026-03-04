
import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
    { name: 'Wave Skill', logo: '/assets/images/waveskill.png', whiteBg: true },
    { name: 'HYPE', logo: '/assets/images/hype.png', whiteBg: false },
    { name: 'SLTC', logo: '/assets/images/white sltc.png', whiteBg: false },
    { name: 'Media Unit', logo: '/assets/images/white media.png', whiteBg: false },
    { name: 'Insight', logo: '/assets/images/insight white.png', whiteBg: false },
];

// Triplicate for seamless infinite loop
const marqueeSponsors = [...sponsors, ...sponsors, ...sponsors];

const WaveSkillPartner = () => {
    return (
        <section className="py-16 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-center mb-10"
                >
                    <span className="text-gray-400 font-bold tracking-[0.2em] text-sm uppercase">
                        Our Proud Sponsors &amp; Partners
                    </span>
                    <div className="mt-3 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
                </motion.div>

                {/* Marquee track */}
                <div className="relative overflow-hidden">
                    {/* Left fade */}
                    <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                    {/* Right fade */}
                    <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

                    <div className="flex items-center sponsor-marquee">
                        {marqueeSponsors.map((sponsor, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 mx-10 flex items-center justify-center group"
                            >
                                <div
                                    className={`
                                        flex items-center justify-center rounded-2xl
                                        transition-all duration-300 group-hover:scale-110
                                        ${sponsor.whiteBg
                                            ? 'bg-white px-6 py-3 shadow-lg shadow-blue-500/10'
                                            : 'opacity-60 group-hover:opacity-100'
                                        }
                                    `}
                                >
                                    <img
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        className="h-12 md:h-16 object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaveSkillPartner;
