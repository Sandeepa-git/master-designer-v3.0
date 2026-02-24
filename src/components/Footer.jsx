import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';

const socialLinks = [
    { Icon: Facebook, href: "https://www.facebook.com/SLTCMedia", label: "Facebook", color: "hover:bg-blue-600 hover:border-blue-500" },
    { Icon: Instagram, href: "https://www.instagram.com/sltc_media", label: "Instagram", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:border-purple-500" },
    { Icon: Youtube, href: "https://youtube.com/@insightsltc", label: "YouTube", color: "hover:bg-red-600 hover:border-red-500" }
];

const quickLinks = [
    { name: "Phases", href: "#phases" },
    { name: "Timeline", href: "#timeline" },
    { name: "Prizes", href: "#prizes" },
    { name: "Contact", href: "#contact" }
];

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-black relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/5 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <a href="#" className="flex items-center gap-3 mb-4">
                            <img src="/assets/images/logo.png" alt="Master Designer" className="h-10 w-auto" />
                            <span className="text-xl font-bold tracking-tight text-white">
                                MASTER <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-300">DESIGNER</span>
                            </span>
                        </a>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Sri Lanka's premier graphic design initiative, celebrating creativity and innovation since 2022.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-500 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-3 h-px bg-cyan-400 transition-all duration-300" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Media Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Media Links</h4>
                        <div className="flex flex-col gap-3">
                            {socialLinks.map(({ Icon, href, label, color }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-white transition-colors text-sm flex items-center gap-3 group"
                                >
                                    <div className={`w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${color}`}>
                                        <Icon className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
                                    </div>
                                    {label}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Event Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Event Links</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="https://www.linkedin.com/company/master-designer-v" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm flex items-center gap-3">
                                    <Linkedin className="w-4 h-4" />
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/share/1EEownrZSB" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm flex items-center gap-3">
                                    <Facebook className="w-4 h-4" />
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/master_designer_v2.0" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm flex items-center gap-3">
                                    <Instagram className="w-4 h-4" />
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <p className="text-gray-600 text-xs mb-2">
                            Copyright 2025-2026 © Media Unit of SLTC
                        </p>
                        <p className="text-gray-500 text-[10px] tracking-wider uppercase">
                            Developed by <a href="#" className="text-cyan-500 hover:text-cyan-400 transition-colors">Sandeepa Wimalasiri</a> | Visual Elements by <a href="#" className="text-purple-500 hover:text-purple-400 transition-colors">Nadun Manawadu</a>
                        </p>
                    </div>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                        aria-label="Back to top"
                    >
                        <ArrowUp className="w-4 h-4" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
