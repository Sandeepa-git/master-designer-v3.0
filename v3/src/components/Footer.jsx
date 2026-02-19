import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';

const socialLinks = [
    { Icon: Facebook, href: "https://www.facebook.com/SLTCMedia?mibextid=LQQJ4d", label: "Facebook", color: "hover:bg-blue-600 hover:border-blue-500" },
    { Icon: Instagram, href: "https://www.instagram.com/sltc_media?igsh=MWxpOG52aHdkcjV0aQ==", label: "Instagram", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:border-purple-500" },
    { Icon: Youtube, href: "https://youtube.com/@insightsltc?si=8Y7upEFEYXyfMxje", label: "YouTube", color: "hover:bg-red-600 hover:border-red-500" },
    { Icon: Linkedin, href: "https://www.linkedin.com/company/master-designer-v-2-0/", label: "LinkedIn", color: "hover:bg-blue-700 hover:border-blue-600" }
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
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
                            Sri Lanka's premier inter-university graphic design competition, empowering young designers nationwide.
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

                    {/* Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Follow Us</h4>
                        <div className="flex gap-3">
                            {socialLinks.map(({ Icon, href, label, color }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    whileHover={{ y: -4, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 ${color}`}
                                >
                                    <Icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
                    <p className="text-gray-600 text-xs mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Master Designer v3.0 — All rights reserved.
                    </p>

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
