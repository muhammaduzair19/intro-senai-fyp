import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout.jsx";
import LandingPage from "./pages/landing-page.jsx";
import WordScramble from "./pages/word-scramble.jsx";
import GameLayout from "./layout/game-layout.jsx";
import MemoryGame from "./pages/memory-game.jsx";
import BubblePop from "./pages/bubble-pop.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Navigate to={"/"} />} />
                <Route path="/" element={<Layout />}>
                    <Route path="/" index element={<LandingPage />} />
                </Route>
                <Route path="/" element={<GameLayout />}>
                    <Route
                        path="/game/word-scramble"
                        element={<WordScramble />}
                    />
                    <Route path="/game/memory-game" element={<MemoryGame />} />
                    <Route path="/game/bubble-pop" element={<BubblePop />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
