
import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
    { name: 'Wave Skill', logo: '/assets/images/waveskill.png', whiteBg: true },
    { name: 'SLTC', logo: '/assets/images/white sltc.png', whiteBg: false },
    { name: 'Media Unit', logo: '/assets/images/white media.png', whiteBg: false },
    { name: 'Insight', logo: '/assets/images/insight white.png', whiteBg: false },
];

// Duplicate for seamless loop
const marqueeSponsors = [...sponsors, ...sponsors, ...sponsors];

const WaveSkillSponsor = () => {
    return (
        <section className="py-16 bg-white/5 border-t border-white/10 relative overflow-hidden">
            {/* Background glowing effects */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

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
                    <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
                    {/* Right fade */}
                    <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10 pointer-events-none" />

                    <div className="flex items-center sponsor-marquee">
                        {marqueeSponsors.map((sponsor, idx) => (
                            <div
                                key={idx}
                                className={`
                                    flex-shrink-0 mx-10 flex items-center justify-center
                                    transition-all duration-300 group
                                `}
                            >
                                <div
                                    className={`
                                        flex items-center justify-center rounded-2xl
                                        transition-all duration-300 group-hover:scale-110
                                        ${sponsor.whiteBg
                                            ? 'bg-white px-6 py-3 shadow-lg shadow-blue-500/10'
                                            : 'opacity-60 hover:opacity-100'
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

export default WaveSkillSponsor;
