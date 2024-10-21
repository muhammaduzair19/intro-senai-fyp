import React from "react";
import { Brain, Zap, Puzzle } from "lucide-react";
import { Link, Element } from "react-scroll";
import Card from "../components/card";

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
            image: "/images/word-scramble.jpg",
        },
        {
            title: "Memory Card Match",
            description:
                "Match pairs of cards to test and enhance your memory. A classic game with a mental wellness twist!",
            icon: Puzzle,
            link: "/game/memory-match",
            image: "/images/word-scramble.jpg",
        },
    ];

    return (
        <section>
            <Element name="games">
                <div className="w-full   relative bg-green-100 max-md:mt-12 md:mt-8 py-6 px-5 sm:px-8">
                    <div className="w-full max-w-7xl h-full mx-auto">
                        <div className="flex flex-col my-10 md:my-20 space-y-10 md:space-y-16">
                            <div className="flex flex-col gap-20">
                                <div className="flex flex-col gap-2">
                                    <h1 className="max-md:text-4xl text-6xl font-semibold text-pt">
                                        Explore Our Mental Wellness Games
                                    </h1>
                                    <p className="max-md:text-sm text-base text-gray-700">
                                        Engage your mind with these fun and
                                        relaxing games designed to improve
                                        focus, memory, and mental agility.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-0 mt-5 lg:mt-10 xl:mt-20  ">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default GameSection;
