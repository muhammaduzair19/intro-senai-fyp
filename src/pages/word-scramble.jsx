import { main } from "framer-motion/client";
import React, { useState, useEffect } from "react";

const words = [
    { word: "MINDFULNESS", hint: "Being aware and fully present" },
    { word: "RESILIENCE", hint: "Ability to bounce back from difficulties" },
    { word: "GRATITUDE", hint: "Feeling of appreciation" },
    { word: "EMPATHY", hint: "Understanding others' feelings" },
    { word: "WELLNESS", hint: "State of being in good health" },
    { word: "BALANCE", hint: "Stability between different aspects of life" },
    { word: "GROWTH", hint: "Development and progress" },
    { word: "HEALING", hint: "Process of becoming healthy again" },
];

const scrambleWord = (word) => {
    return word
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
};

const WordScramble = () => {
    const [currentWord, setCurrentWord] = useState({ word: "", hint: "" });
    const [scrambledWord, setScrambledWord] = useState("");
    const [userGuess, setUserGuess] = useState("");
    const [message, setMessage] = useState("");
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(5);
    const [gameOver, setGameOver] = useState(false);

    const selectNewWord = () => {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        setCurrentWord(randomWord);
        setScrambledWord(scrambleWord(randomWord.word));
        setUserGuess("");
        setMessage("");
    };

    useEffect(() => {
        selectNewWord();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userGuess.toUpperCase() === currentWord.word) {
            setMessage("Correct! Well done!");
            setScore(score + 1);
            setTimeout(selectNewWord, 1500);
        } else {
            const newLives = lives - 1;
            setLives(newLives);
            if (newLives > 0) {
                setMessage(
                    `Sorry, that's not correct. You have ${newLives} ${
                        newLives === 1 ? "life" : "lives"
                    } left.`
                );
            } else {
                setMessage(
                    `Game Over! The correct word was ${currentWord.word}.`
                );
                setGameOver(true);
            }
        }
    };

    const resetGame = () => {
        setScore(0);
        setLives(5);
        setGameOver(false);
        selectNewWord();
    };

    return (
        <main className="w-full h-screen flex justify-center items-center bg-green-50">
            <div className="max-w-md mx-auto p-6 bg-green-100 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                    Word Scramble Challenge
                </h2>
                {!gameOver ? (
                    <>
                        <p className="text-green-700 mb-2">
                            Unscramble the word related to mental wellness:
                        </p>
                        <p className="text-3xl font-bold text-green-600 mb-4">
                            {scrambledWord}
                        </p>
                        <p className="text-green-700 mb-4">
                            Hint: {currentWord.hint}
                        </p>
                        <form onSubmit={handleSubmit} className="mb-4">
                            <input
                                type="text"
                                value={userGuess}
                                onChange={(e) => setUserGuess(e.target.value)}
                                className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Your guess"
                            />
                            <button
                                type="submit"
                                className="mt-2 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
                            >
                                Submit
                            </button>
                        </form>
                    </>
                ) : (
                    <button
                        onClick={resetGame}
                        className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
                    >
                        Play Again
                    </button>
                )}
                {message && (
                    <p
                        className={`text-center font-bold ${
                            message.includes("Correct")
                                ? "text-green-600"
                                : "text-red-500"
                        }`}
                    >
                        {message}
                    </p>
                )}
                <div className="flex justify-between items-center mt-4">
                    <p className="text-green-700">Score: {score}</p>
                    <p className="text-green-700">Lives: {lives}</p>
                </div>
            </div>
        </main>
    );
};

export default WordScramble;
