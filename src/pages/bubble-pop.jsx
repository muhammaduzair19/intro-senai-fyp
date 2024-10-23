import React, { useState, useEffect } from "react";
import { Info } from "lucide-react";

export default function MentalHealthBubblePop() {
    const [bubbles, setBubbles] = useState([]);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [gameStarted, setGameStarted] = useState(false);
    const [showRules, setShowRules] = useState(false);
    const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds

    const generateBubble = () => {
        const random = Math.random();
        let color;
        let timeBonus;
        if (random < 0.05) {
            color = "blue"; // 5% chance of blue bubble
        } else if (random < 0.15) {
            color = "yellow"; // 10% chance of yellow bubble
            timeBonus = Math.floor(Math.random() * 10) + 1; // Random time bonus between 1 and 10 seconds
        } else if (random < 0.3) {
            color = "red"; // 15% chance of red bubble
        } else {
            color = "green"; // 70% chance of green bubble
        }

        return {
            id: Math.random(),
            x: Math.random() * 90 + 5,
            y: Math.random() * 90 + 5,
            size: Math.random() * 40 + 30,
            color,
            timeBonus,
        };
    };

    const startGame = () => {
        setGameStarted(true);
        setScore(0);
        setLives(3);
        setBubbles([]);
        setTimeLeft(120);
    };

    useEffect(() => {
        if (!gameStarted) return;

        const bubbleInterval = setInterval(() => {
            setBubbles((prevBubbles) => [...prevBubbles, generateBubble()]);
        }, 1000);

        const timerInterval = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(bubbleInterval);
                    clearInterval(timerInterval);
                    setGameStarted(false);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => {
            clearInterval(bubbleInterval);
            clearInterval(timerInterval);
        };
    }, [gameStarted]);

    const popBubble = (id, color, timeBonus) => {
        setBubbles((prevBubbles) =>
            prevBubbles.filter((bubble) => bubble.id !== id)
        );
        if (color === "green") {
            setScore((prevScore) => prevScore + 1);
        } else if (color === "red") {
            setLives((prevLives) => prevLives - 1);
        } else if (color === "blue") {
            setLives((prevLives) => Math.min(prevLives + 1, 5)); // Cap lives at 5
        } else if (color === "yellow" && timeBonus) {
            setTimeLeft((prevTime) => prevTime + timeBonus);
        }
    };

    useEffect(() => {
        if (lives === 0 || timeLeft === 0) {
            setGameStarted(false);
        }
    }, [lives, timeLeft]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4 font-sans">
            <style jsx global>{`
                @keyframes pop {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.2);
                        opacity: 0.5;
                    }
                    100% {
                        transform: scale(0);
                        opacity: 0;
                    }
                }
                .bubble {
                    animation: bounce 2s infinite;
                }
                .bubble:active {
                    animation: pop 0.3s ease-out;
                }
                @keyframes bounce {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
            `}</style>
            <div className="text-center mb-4">
                <div className="flex justify-center items-center space-x-4 mb-2">
                    <p className="text-2xl font-semibold text-green-600">
                        Score: {score}
                    </p>
                    <div className="flex items-center">
                        {[...Array(lives)].map((_, i) => (
                            <svg
                                key={i}
                                className="w-6 h-6 text-red-500 fill-current"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        ))}
                    </div>
                    <p className="text-2xl font-semibold text-blue-600">
                        Time: {formatTime(timeLeft)}
                    </p>
                </div>
                {!gameStarted && (
                    <div className="space-x-2 flex items-center justify-center">
                        <button
                            onClick={startGame}
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                        >
                            Start Game
                        </button>
                        <button
                            onClick={() => setShowRules(true)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center"
                        >
                            <Info className="w-4 h-4 mr-2" /> Rules
                        </button>
                    </div>
                )}
            </div>
            {gameStarted && (
                <div className="relative w-full h-[700px] bg-green-100 rounded-lg overflow-hidden shadow-lg">
                    {bubbles.map((bubble) => (
                        <div
                            key={bubble.id}
                            className={`absolute rounded-full cursor-pointer transition-all duration-200 bubble ${
                                bubble.color === "green"
                                    ? "bg-green-500 hover:bg-green-600"
                                    : bubble.color === "red"
                                    ? "bg-red-500 hover:bg-red-600"
                                    : bubble.color === "blue"
                                    ? "bg-blue-500 hover:bg-blue-600"
                                    : "bg-yellow-500 hover:bg-yellow-600"
                            }`}
                            style={{
                                left: `${bubble.x}%`,
                                top: `${bubble.y}%`,
                                width: `${bubble.size}px`,
                                height: `${bubble.size}px`,
                            }}
                            onClick={() =>
                                popBubble(
                                    bubble.id,
                                    bubble.color,
                                    bubble.timeBonus
                                )
                            }
                        >
                            {bubble.color === "yellow" && (
                                <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
                                    +{bubble.timeBonus}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            )}
            {showRules && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg p-6 max-w-md">
                        <h2 className="text-2xl font-bold mb-4 text-green-700">
                            How to Play
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Pop the green bubbles to score points</li>
                            <li>
                                Avoid popping red bubbles - they cost you a life
                            </li>
                            <li>
                                Blue bubbles are rare and give you an extra life
                            </li>
                            <li>
                                Yellow bubbles add 1-10 seconds to the clock
                            </li>
                            <li>You start with 3 lives (maximum 5 lives)</li>
                            <li>The game lasts for 2 minutes</li>
                            <li>
                                The game ends when you run out of lives or time
                            </li>
                            <li>Try to get the highest score possible!</li>
                        </ul>
                        <button
                            onClick={() => setShowRules(false)}
                            className="bg-green-500 hover:bg-green-600 text-white w-full"
                        >
                            Got it!
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
