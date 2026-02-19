import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const team = [
    {
        name: "Induwara Lakdinu",
        role: "Chairperson",
        img: "/profile/chairperson.jpeg",
        email: "induwaralakdinu23@gmail.com",
        phone: "94755843076"
    },
    {
        name: "Bosilu Pupulewela",
        role: "Vice Chairperson",
        img: "/profile/vicechairperson.jpeg",
        email: "pupulewelabosilu2004@gmail.com",
        phone: "94740975541"
    },
    {
        name: "Udula Theekshana",
        role: "Vice Chairperson",
        img: "/profile/vicechairperson2.png",
        email: "udula.u20@gmail.com",
        phone: "94714570995"
    },
    {
        name: "Samadhi Rajapaksha",
        role: "Secretary",
        img: "/profile/secretary.jpeg",
        email: "samadhirajapaksha20@gmail.com",
        phone: "94725778561"
    },
    {
        name: "Supipi Sonalee",
        role: "Coordination Team Head",
        img: "/profile/coordinationteamhead.jpeg",
        email: "Supisonalee2005@gmail.com",
        phone: "94763399887"
    },
    {
        name: "Sanoji Sasmika",
        role: "Finance Team Head",
        img: "/profile/financeteamhead.jpeg", // Assuming filename based on pattern, or default
        email: "sanojithilakarathna6@gmail.com",
        phone: "94760059252"
    }
];

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-cyan-400 mb-4 uppercase">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
                        CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">US</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        Have questions about Master Designer V3.0? Reach out to our dedicated team.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 hover:border-cyan-500/50 transition-all duration-300 group relative overflow-hidden shadow-xl hover:shadow-cyan-900/20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-white/10 to-transparent mb-4 group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-black">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => { e.target.src = '/assets/images/logo.png' }} // Fallback
                                        />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors text-center">{member.name}</h3>
                                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/5 mb-6">
                                    <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">{member.role}</p>
                                </div>

                                <div className="flex justify-center gap-3 w-full">
                                    <motion.a
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={`mailto:${member.email}`}
                                        className="flex-1 py-2 bg-white/5 rounded-xl text-gray-300 hover:text-white hover:bg-cyan-600 transition-all flex justify-center items-center border border-white/5 hover:border-cyan-400 group/icon"
                                    >
                                        <Mail size={18} className="group-hover/icon:animate-bounce" />
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.1, rotate: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={`https://wa.me/${member.phone}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 py-2 bg-white/5 rounded-xl text-gray-300 hover:text-white hover:bg-green-600 transition-all flex justify-center items-center border border-white/5 hover:border-green-400 group/icon"
                                    >
                                        <Phone size={18} className="group-hover/icon:animate-pulse" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
