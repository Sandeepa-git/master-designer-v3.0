
import React from 'react';
import { motion } from 'framer-motion';

const PrizeCard = ({ title, img, amount, color, delay }) => {
    const colorClasses = {
        cyan: {
            border: 'hover:border-cyan-500/50',
            bg: 'bg-cyan-900/5',
            text: 'text-cyan-400',
            groupText: 'group-hover:text-cyan-400',
            blur: 'bg-cyan-500/20'
        },
        purple: {
            border: 'hover:border-purple-500/50',
            bg: 'bg-purple-900/5',
            text: 'text-purple-400',
            groupText: 'group-hover:text-purple-400',
            blur: 'bg-purple-500/20'
        },
        amber: {
            border: 'hover:border-amber-500/50',
            bg: 'bg-amber-900/5',
            text: 'text-amber-400',
            groupText: 'group-hover:text-amber-400',
            blur: 'bg-amber-500/20'
        }
    };

    const style = colorClasses[color];

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, delay } }
            }}
            whileHover={{ y: -10, scale: 1.05 }}
            className={`bg-[#111] border border-white/10 rounded-3xl p-6 relative overflow-hidden group ${style.border} transition-all duration-300 flex flex-col items-center justify-center text-center h-full`}
        >
            <div className={`absolute inset-0 ${style.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="mb-6 relative z-10 p-4">
                <div className={`absolute inset-0 ${style.blur} rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                <img src={img} alt={title} className="w-20 h-20 object-contain relative z-10 drop-shadow-lg" />
            </div>

            <p className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-2 relative z-10">{title}</p>
            <p className={`text-2xl md:text-3xl font-black text-white ${style.groupText} transition-colors relative z-10`}>{amount}</p>
        </motion.div>
    );
};

const Prizes = () => {
    const teamPrizes = [
        { title: "Winner", amount: "LKR 60,000", img: "/assets/images/runner_1.png" },
        { title: "1st Runner Up", amount: "LKR 45,000", img: "/assets/images/runner_2.png" },
        { title: "2nd Runner Up", amount: "LKR 30,000", img: "/assets/images/runner_3.png" }
    ];

    const individualPrizes = [
        { title: "Winner", amount: "LKR 20,000", img: "/assets/images/runner_1.png" },
        { title: "1st Runner Up", amount: "LKR 15,000", img: "/assets/images/runner_2.png" },
        { title: "2nd Runner Up", amount: "LKR 10,000", img: "/assets/images/runner_3.png" }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-black to-slate-900 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-widest uppercase mb-4">
                        PRIZES
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-6 rounded-full" />
                </div>

                {/* Team Category */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="w-2 h-8 bg-cyan-500 rounded-full" />
                        <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Team Category</h3>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {teamPrizes.map((prize, idx) => (
                            <PrizeCard key={idx} {...prize} color="cyan" delay={idx * 0.1} />
                        ))}
                    </motion.div>
                </div>

                {/* Individual Category */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="w-2 h-8 bg-purple-500 rounded-full" />
                        <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Individual Category</h3>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {individualPrizes.map((prize, idx) => (
                            <PrizeCard key={idx} {...prize} color="purple" delay={idx * 0.1} />
                        ))}
                    </motion.div>
                </div>

                {/* Popularity Award */}
                <div className="max-w-md mx-auto relative">
                    <div className="absolute inset-0 bg-amber-500/20 blur-[100px] rounded-full pointer-events-none" />
                    <PrizeCard
                        title="Most Popular"
                        amount="LKR 10,000"
                        img="/assets/images/runner_1.png"
                        color="amber"
                        delay={0.2}
                    />
                    <p className="text-center text-amber-500/60 text-sm font-mono mt-4 uppercase tracking-[0.2em] relative z-10">Voted by Public</p>
                </div>
            </div>
        </section>
    );
};

export default Prizes;
