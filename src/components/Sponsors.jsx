
import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
    { name: 'SLTC', logo: '/assets/images/white sltc.png' },
    { name: 'Media', logo: '/assets/images/white media.png' },
    { name: 'Insight', logo: '/assets/images/insight white.png' },
];

const Sponsors = () => {
    return (
        <section className="py-10 bg-black border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-500">
                    {sponsors.map((sponsor, idx) => (
                        <motion.img
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="h-12 md:h-16 object-contain transition-all duration-300 transform hover:scale-105"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
