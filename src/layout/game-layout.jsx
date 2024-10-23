import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom"; // useParams added
import { Home, Gamepad2 } from "lucide-react";

const games = [
    { name: "Word Scramble", link: "/game/word-scramble", id: "wordScramble" },
    { name: "Bubble Pop", link: "/game/bubble-pop", id: "bubblePop" },
    { name: "Memory Game", link: "/game/memory-game", id: "memoryGame" },
];

const GameLayout = () => {
    const { pathname } = useLocation(); // Retrieve game from URL
    const [gameName, setGameName] = useState("");

    useEffect(() => {
        setGameName(pathname ? pathname.slice(6).split("-").join(" ") : "");
    }, [pathname]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-400 via-green-500 to-green-600 flex flex-col">
            {/* Header */}
            <header className="bg-gradient-to-r from-green-700 to-green-800 text-white py-6 shadow-lg">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-4xl font-extrabold capitalize tracking-wide drop-shadow-md">
                        {gameName}
                    </h1>
                    <nav className="space-x-4">
                        <Link
                            to="/"
                            className="flex items-center px-5 py-3 bg-white text-green-700 font-bold rounded-full shadow-lg hover:bg-green-200 transition-all duration-300"
                        >
                            <Home className="mr-2 h-5 w-5" />
                            Home
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-12">
                <div className="bg-white shadow-2xl rounded-lg overflow-hidden p-8">
                    {/* Outlet for Game */}
                    <div className="bg-gradient-to-r from-green-50 via-green-100 to-green-50 p-8 rounded-xl shadow-inner">
                        <Outlet />
                    </div>
                </div>
            </main>

            {/* Footer with Other Games */}
            <footer className="bg-gradient-to-t from-green-200 via-green-300 to-green-400 py-10">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">
                        Try Other Games
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {games.map(
                            (game) =>
                                game.link !== pathname && (
                                    <Link
                                        to={game.link}
                                        key={game.id}
                                        className="group block transform hover:scale-105 transition-all duration-300"
                                    >
                                        <div className="bg-white border border-green-500 rounded-lg shadow-lg overflow-hidden group-hover:bg-green-500 group-hover:border-transparent">
                                            <div className="p-6 text-center">
                                                <Gamepad2 className="text-green-600 group-hover:text-white h-10 w-10 mx-auto mb-4" />
                                                <h3 className="text-2xl font-bold text-green-700 group-hover:text-white transition-colors duration-300">
                                                    {game.name}
                                                </h3>
                                            </div>
                                        </div>
                                    </Link>
                                )
                        )}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default GameLayout;
