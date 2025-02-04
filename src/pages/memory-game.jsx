import React, { useEffect, useState } from "react";

const MemoryGame = () => {
    const [gridSize, setGridSize] = useState(4);
    const [cards, setCards] = useState([]);

    const [flipped, setFlipped] = useState([]);
    const [solved, setSolved] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [won, setWon] = useState(false);

    const handleGridSize = (e) => {

        const size = parseInt(e.target.value);

        if (size >= 2 && size <= 10) setGridSize(size);
    };

    const initialisedGame = () => {
        const totalCards = gridSize * gridSize;

        const pairCount = Math.floor(totalCards / 2);
        const numbers = [...Array(pairCount).keys()].map((n) => n + 1);
        const shuffleCards = [...numbers, ...numbers]
            .sort(() => Math.random() - 0.5)
            .slice(0, totalCards)
            .map((number, index) => ({ id: index, number }));

        setCards(shuffleCards);
        setFlipped([]);
        setSolved([]);
        setWon(false);
    };

    const checkCard = (secondId) => {
        const [firstId] = flipped;

        if (cards[firstId].number === cards[secondId].number) {
            setSolved([...solved, firstId, secondId]);
            setDisabled(false);
            setFlipped([]);
        } else {
            setTimeout(() => {
                setFlipped([]);
                setDisabled(false);
            }, 1000);
        }
    };

    const handleClick = (id) => {
        if (disabled || won) {
            return;
        }

        if (flipped.length === 0) {
            setFlipped([id]);
        }

        if (flipped.length === 1) {
            setDisabled(true);

            if (id !== flipped[0]) {
                setFlipped([...flipped, id]);
                checkCard(id);
            } else {
                setFlipped([]);
                setDisabled(false);
            }
        }
    };

    const isFlipped = (id) => flipped.includes(id) || solved.includes(id);
    const isSolved = (id) => solved.includes(id);

    useEffect(() => {
        initialisedGame();
    }, [gridSize]);

    useEffect(() => {
        if (solved.length === cards.length && cards.length > 0) {
            setWon(true);
        }
    }, [cards, solved]);

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="mb-4 flex gap-4 items-center">
                <label htmlFor="girdSize">Grid Size: (Max Size 10)</label>
                <input
                    type="number"
                    id="gridSize"
                    min="2"
                    max="10"
                    value={gridSize}
                    onChange={handleGridSize}
                    className="border-2 border-gray-300 rounded px-2 py-1"
                />
            </div>

            {/* GAME BOARD  */}
            <div
                className="gird gap-2 mb-2"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${gridSize}, minmax(0,1fr))`,
                    width: `min(100%, ${gridSize * 5}rem)`,
                }}
            >
                {cards.map((card) => {
                    return (
                        <div
                            onClick={() => handleClick(card.id)}
                            key={card.id}
                            className={`aspect-square flex items-center justify-center text-xl font-bold rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
                                isFlipped(card.id)
                                    ? isSolved(card.id)
                                        ? "text-green-800 bg-green-300"
                                        : "text-blue-800 bg-blue-300"
                                    : "text-gray-500 bg-gray-300 "
                            }`}
                        >
                            {isFlipped(card.id) ? card.number : ""}
                        </div>
                    );
                })}
            </div>

            <div>
                {won && (
                    <div className="text-green-800 font-bold text-4xl animate-bounce mt-6">
                        YOU WON !!!
                    </div>
                )}
            </div>

            {/* RESET  */}
            <button
                onClick={initialisedGame}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
                {won ? "Play Again" : "Reset"}
            </button>
        </div>
    );
};

export default MemoryGame;
