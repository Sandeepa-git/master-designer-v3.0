
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ExternalLink, Sparkles, Tag } from 'lucide-react';

const TShirt = () => {
    return (
        <section className="py-24 bg-gradient-to-t from-black to-gray-900 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase mb-4 block">
                        Official Merchandise
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
                        Pre-Order{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                            Now Open
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
                        Level up your style! The Official Master Designer v3.0 Merchandise is now available for pre-order.
                    </p>

                    <div className="relative group max-w-4xl mx-auto">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
                        <div className="relative bg-[#0a0a0a] rounded-3xl p-10 border border-white/10 overflow-hidden">

                            {/* Decorative glow blobs */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                            {/* T-Shirt Design Image — cropped to polo mockup only */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative mx-auto mb-8 max-w-2xl"
                            >
                                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl blur-xl" />
                                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-cyan-500/10 hover:scale-[1.02] transition-transform duration-500"
                                    style={{ aspectRatio: '1 / 0.65' }}
                                >
                                    <img
                                        src="/assets/images/t_shirt_v3.png"
                                        alt="Master Designer V3.0 Official Polo T-Shirt"
                                        className="absolute inset-0 w-full h-full"
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: '72% center',
                                            transform: 'scale(1.08)',
                                        }}
                                    />
                                </div>
                            </motion.div>

                            {/* Price Badge */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/40 rounded-full px-6 py-2 mb-6"
                            >
                                <Tag size={16} className="text-cyan-400" />
                                <span className="text-white font-bold text-xl tracking-wide">LKR 1,800</span>
                                <Sparkles size={16} className="text-purple-400" />
                            </motion.div>

                            <p className="text-gray-400 text-base max-w-md mx-auto leading-relaxed mb-8">
                                Grab your exclusive t-shirt today and wear your creative pride. Limited stock — don't miss out!
                            </p>

                            {/* CTA Button */}
                            <motion.a
                                href="https://forms.gle/mVQU4Jit6cF2vAPWA"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-lg shadow-cyan-500/20 hover:shadow-purple-500/30 transition-all duration-300"
                            >
                                <ShoppingBag size={20} />
                                Pre-Order Now
                                <ExternalLink size={18} />
                            </motion.a>

                            <p className="text-gray-600 text-xs mt-5">
                                🔗 Pre-orders via Google Form · Master Designer v3.0 Official
                            </p>

                            {/* Size Chart */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="mt-12 pt-10 border-t border-white/10"
                            >
                                <h3 className="text-white font-bold text-xl mb-2 tracking-wide">Size Chart</h3>
                                <p className="text-gray-500 text-sm mb-6">All measurements in <span className="text-cyan-400 font-semibold">Inches</span></p>

                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[520px] text-sm border-collapse">
                                        <thead>
                                            <tr>
                                                <th className="py-3 px-4 text-left text-gray-400 font-semibold w-24"></th>
                                                {['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'].map(size => (
                                                    <th key={size} className="py-3 px-4 text-center font-bold text-cyan-400 tracking-widest text-xs uppercase">
                                                        {size}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t border-white/10 hover:bg-white/5 transition-colors">
                                                <td className="py-4 px-4 text-left text-gray-300 font-semibold">Chest</td>
                                                {[18, 19, 20, 21, 22, 23, 24].map(val => (
                                                    <td key={val} className="py-4 px-4 text-center text-white font-medium">{val}</td>
                                                ))}
                                            </tr>
                                            <tr className="border-t border-white/10 hover:bg-white/5 transition-colors">
                                                <td className="py-4 px-4 text-left text-gray-300 font-semibold">Length</td>
                                                {[25, 26, 27, 28, 29, 30, 31].map(val => (
                                                    <td key={val} className="py-4 px-4 text-center text-white font-medium">{val}</td>
                                                ))}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="mt-5 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-5 py-3">
                                    <span className="text-cyan-400 font-bold text-sm">± 0.5 inches variation</span>
                                    <span className="text-gray-500 text-sm">may apply across all sizes</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TShirt;
