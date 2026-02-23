
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const TShirt = () => {
    return (
        <section className="py-24 bg-gradient-to-t from-black to-gray-900 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase mb-4 block">Official Merchandise</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-12">
                        Coming <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Soon</span>
                    </h2>

                    <div className="relative group max-w-2xl mx-auto">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-[#0a0a0a] rounded-3xl p-12 border border-white/10 overflow-hidden">
                            {/* Placeholder for 3D rotation gif */}
                            <div className="aspect-square max-w-sm mx-auto bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 relative overflow-hidden group/gif">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 animate-pulse" />
                                <div className="relative z-10 flex flex-col items-center gap-4 text-gray-500">
                                    <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-700 flex items-center justify-center animate-spin-slow">
                                        <ShoppingBag size={32} />
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-400 mt-12 text-lg max-w-md mx-auto leading-relaxed">
                                Get ready for the exclusive Master Designer V3.0 collection. Premium quality, unique designs, and limited edition drops.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TShirt;
