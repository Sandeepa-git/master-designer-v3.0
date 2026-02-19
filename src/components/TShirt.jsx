
import React from 'react';
import { ShoppingBag } from 'lucide-react';

const TShirt = () => {
    return (
        <section className="py-24 bg-gradient-to-t from-black to-gray-900 border-t border-white/5">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Product Image */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-purple-600/20 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform" />
                    <img
                        src="/assets/images/t_shirt_f.png"
                        alt="Official T-Shirt"
                        className="relative z-10 w-full max-w-lg mx-auto transform group-hover:rotate-3 transition-transform duration-500"
                    />
                </div>

                {/* Product Details */}
                <div>
                    <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase mb-4 block">Official Merchandise</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                        Wear the <br /> <span className="text-purple-500">Creativity</span>
                    </h2>

                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 mt-8">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white">T-shirt & Sticker Pack</h3>
                                <p className="text-gray-400 text-sm mt-1">Material: Premium Cotton</p>
                            </div>
                            <span className="text-2xl font-bold text-cyan-400">LKR 1,700</span>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-8">
                            Step into style with the all-new Master Designer V3.0 official T-shirt & Sticker Pack, designed to embrace the latest trends. Wear with confidence.
                        </p>

                        <div className="mb-8">
                            <p className="text-sm text-gray-400 mb-3">Available Sizes:</p>
                            <div className="flex flex-wrap gap-2">
                                {['XS', 'S', 'M', 'L', 'XL', '2XL'].map(size => (
                                    <button key={size} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-colors text-sm font-bold text-white">
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-between border-t border-white/10 pt-6">
                            <p className="text-xs text-red-400">*Order Closed (28 Jun 2024)</p>
                            <button disabled className="px-6 py-3 bg-gray-700 text-gray-400 font-bold rounded-lg cursor-not-allowed flex items-center gap-2">
                                <ShoppingBag size={18} /> Order Closed
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TShirt;
