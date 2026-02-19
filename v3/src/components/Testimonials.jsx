
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
    {
        name: "Participant 1",
        role: "Winner 2024",
        review: "Master Designer transformed our brand identity completely. Their attention to detail and bold approach is unmatched.",
        img: "/assets/images/runner_1.png"
    },
    {
        name: "Participant 2",
        role: "Finalist",
        review: "The team is incredibly talented. They delivered a modern, high-converting website that our users absolutely love.",
        img: "/assets/images/runner_2.png"
    },
    {
        name: "Participant 3",
        role: "Designer",
        review: "Professional, creative, and timely. Working with Master Designer was a seamless experience from start to finish.",
        img: "/assets/images/runner_3.png"
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((curr) => (curr + 1) % reviews.length);
    const prev = () => setCurrent((curr) => (curr - 1 + reviews.length) % reviews.length);

    useEffect(() => {
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="reviews" className="py-24 bg-gradient-to-br from-black to-gray-900 relative">
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
                <span className="text-purple-400 font-bold tracking-widest text-sm uppercase mb-4 block">Testimonials</span>
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-16">
                    Client Stories
                </h2>

                <div className="relative h-[400px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl max-w-2xl w-full"
                        >
                            <Quote className="w-10 h-10 text-cyan-400 mb-6 mx-auto opacity-50" />
                            <p className="text-lg md:text-2xl text-gray-200 indent-8 italic leading-relaxed mb-8">
                                "{reviews[current].review}"
                            </p>

                            <div className="flex items-center justify-center gap-4">
                                <img
                                    src={reviews[current].img}
                                    alt={reviews[current].name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-cyan-500/30"
                                />
                                <div className="text-left">
                                    <h4 className="text-white font-bold">{reviews[current].name}</h4>
                                    <p className="text-cyan-400 text-sm">{reviews[current].role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors"
                    >
                        <ChevronRight />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-8">
                    {reviews.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${current === idx ? 'bg-cyan-400 w-8' : 'bg-gray-700'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
