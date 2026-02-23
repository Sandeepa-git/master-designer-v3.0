
import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
    {
        title: "Registration for Workshops",
        date: "23rd January to 29th January 2026",
        desc: "Register to be part of Master Designer V3.0 workshops and secure your spot to gain graphic design knowledge."
    },
    {
        title: "Workshop Series",
        date: "31st January to 22nd February 2026",
        desc: "An eight-day immersive workshop series guided by industry experts, covering fundamentals to advanced concepts."
    },
    {
        title: "Registration for Competition",
        date: "9th February",
        desc: "Showcase your creative excellence on a national platform. Register for the online competition phase."
    },
    {
        title: "Submission Period (Phase 02)",
        date: "23rd February to 28th February 12.00AM",
        desc: "Submit your original designs and let your creativity speak. Unleash your innovation."
    },
    {
        title: "Voting Round",
        date: "01st March 12.00AM to 5th March 2026",
        desc: "Promote your design and rally support through public voting to choose the most outstanding creations."
    },
    {
        title: "Grand Final & Closing",
        date: "7th March 2026",
        desc: "Finalists present designs in a live competition, competing for top honors and industry recognition."
    }
];

const Timeline = () => {
    return (
        <section className="py-24 bg-black text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-cyan-400 font-bold tracking-widest text-sm uppercase mb-4 block"
                    >
                        Schedule
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6"
                    >
                        Timeline
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Mark your calendars for these key dates
                    </motion.p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent block" />

                    {timelineEvents.map((event, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                            className={`flex flex-row gap-2 md:gap-8 mb-16 relative ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}
                        >
                            {/* Dot on Line */}
                            <div className="absolute left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 mt-8 block z-10">
                                <span className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-20" />
                                <span className="absolute inset-0 bg-cyan-500 rounded-full border-2 border-black" />
                            </div>

                            <motion.div
                                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                                className="w-1/2 p-3 md:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 group hover:border-cyan-500/30"
                            >
                                <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 rounded bg-purple-500/20 border border-purple-500/40 text-purple-300 text-[10px] md:text-xs font-mono mb-2 md:mb-4">
                                    {event.date}
                                </span>
                                <h3 className="text-sm md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-cyan-400 transition-colors">{event.title}</h3>
                                <p className="text-gray-400 text-[11px] md:text-sm leading-tight md:leading-relaxed">{event.desc}</p>
                            </motion.div>
                            <div className="w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
