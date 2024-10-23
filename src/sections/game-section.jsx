import React from "react";
import { Brain, Zap, Puzzle } from "lucide-react";
import { Element } from "react-scroll";
import Card from "../components/card";
import { motion } from "framer-motion"; // For animations

const GameSection = () => {
    const games = [
        {
            title: "Word Scramble Challenge",
            description:
                "Unscramble words related to mental wellness. Test your vocabulary and cognitive skills with 5 lives!",
            icon: Brain,
            link: "/game/word-scramble",
            image: "/images/word-scramble.jpg",
        },
        {
            title: "Bubble Pop Challenge",
            description:
                "Pop bubbles as they float up. Improve your focus and reaction time in this fast-paced game!",
            icon: Zap,
            link: "/game/bubble-pop",
            image: "/images/bubble-pop.png",
        },
        {
            title: "Memory Card Match",
            description:
                "Match pairs of cards to test and enhance your memory. A classic game with a mental wellness twist!",
            icon: Puzzle,
            link: "/game/memory-game",
            image: "/images/memory-game.png",
        },
    ];

    return (
        <section>
            <Element name="games">
                <div className="w-full relative bg-gradient-to-b from-green-100 to-white max-md:mt-12 md:mt-8 py-12 px-5 sm:px-8">
                    <div className="w-full max-w-7xl h-full mx-auto">
                        <div className="flex flex-col my-10 md:my-20 space-y-10 md:space-y-16">
                            <div className="flex flex-col gap-12">
                                <div className="flex flex-col gap-2 text-center md:text-left">
                                    <motion.h1
                                        className="max-md:text-4xl text-6xl font-bold text-gray-900"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1 }}
                                    >
                                        Explore Our Mental Wellness Games
                                    </motion.h1>
                                    <motion.p
                                        className="max-md:text-sm text-base text-gray-700"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1.2 }}
                                    >
                                        Engage your mind with fun and relaxing
                                        games designed to improve focus, memory,
                                        and mental agility.
                                    </motion.p>
                                </div>

                                {/* Games Grid */}
                                <motion.div
                                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-0 mt-5 lg:mt-10 xl:mt-20"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    {games.map((game, index) => (
                                        <Card
                                            image={game.image}
                                            key={index}
                                            icon={game.icon}
                                            text={game.description}
                                            title={game.title}
                                            link={game.link}
                                            game
                                        />
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default GameSection;
