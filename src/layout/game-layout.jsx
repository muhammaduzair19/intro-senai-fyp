import React, { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, Home, Gamepad2 } from "lucide-react";
import { Outlet } from "react-router-dom";

const games = [
    { name: "Word Scramble", link: "/game/word-scramble", id: "wordScramble" },
    { name: "Bubble Pop", link: "/game/bubble-pop", id: "bubblePop" },
    { name: "Memory Match", link: "/game/memory-match", id: "memoryMatch" },
];

const GameLayout = () => {
    const { gameName } = useParams();
    return (
        <div className="min-h-screen bg-green-50 flex flex-col">
            <header className="bg-green-600 text-white py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold capitalize">
                        {gameName.split("-").join(" ")}
                    </h1>
                    <nav className="space-x-2">
                        <button className="text-white hover:text-green-200">
                            <Link to="/" className="flex items-center">
                                <Home className="mr-2 h-4 w-4" />
                                Home
                            </Link>
                        </button>
                    </nav>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="bg-white shadow-lg">
                    <div>
                        <div className="text-xl font-bold capitalize text-green-800">
                            {gameName.split("-").join(" ")}
                        </div>
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </main>

            <footer className="bg-green-100 py-6">
                <div className="container mx-auto px-4">
                    <h2 className="text-xl font-semibold text-green-700 mb-4">
                        Try Other Games
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {games.map(
                            (game) =>
                                game.name.split(" ").join("-").toLowerCase() !==
                                    gameName && (
                                    <button
                                        key={game.id}
                                        className="w-full text-green-700 border border-green-500 hover:bg-green-100 flex justify-center py-2 rounded bg-white"
                                    >
                                        <Link
                                            to={game.link}
                                            className="flex items-center gap-2"
                                        >
                                            <Gamepad2 className="mr-2 h-6 w-6" />
                                            {game.name}
                                        </Link>
                                    </button>
                                )
                        )}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default GameLayout;
