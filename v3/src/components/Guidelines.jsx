
import React from 'react';

const Guidelines = () => {
    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase mb-4 block">Rules & Regulations</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Guidelines</h2>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-600" />

                    <ul className="space-y-6 text-gray-300 text-lg leading-relaxed list-none">
                        <li className="flex gap-4">
                            <span className="text-cyan-400 font-bold">•</span>
                            Teams or individuals interested in participating in the competition should register through the registration link.
                        </li>
                        <li className="flex gap-4">
                            <span className="text-purple-400 font-bold">•</span>
                            Everyone should fill out all the information in the registration form correctly.
                        </li>
                        <li className="flex gap-4">
                            <span className="text-cyan-400 font-bold">•</span>
                            Anyone above the age of 15 can participate in the competition.
                        </li>
                        <li className="flex gap-4">
                            <span className="text-purple-400 font-bold">•</span>
                            The registration deadline varies for workshops and competition rounds. Please refer to the timeline for specific dates.
                        </li>
                        <li className="flex gap-4">
                            <span className="text-cyan-400 font-bold">•</span>
                            After registering your team, you can't change your team members.
                        </li>
                        <li className="flex gap-4">
                            <span className="text-purple-400 font-bold">•</span>
                            Upon successful registration, participants will receive a confirmation email.
                        </li>
                        <li className="flex gap-4">
                            <span className="text-cyan-400 font-bold">•</span>
                            After the registration process, you will get a number. You should keep that number with you for the future work of the competition.
                        </li>
                        <li className="flex gap-4">
                            <span className="text-purple-400 font-bold">•</span>
                            If you are participating individually, you cannot participate in a team.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Guidelines;
