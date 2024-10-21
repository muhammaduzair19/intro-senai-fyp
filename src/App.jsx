import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout.jsx";
import LandingPage from "./pages/landing-page.jsx";
import WordScramble from "./pages/word-scramble.jsx";
import GameLayout from "./layout/game-layout.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/*" element={<LandingPage />} /> */}
                <Route path="/" element={<Layout />}>
                    <Route path="/" index element={<LandingPage />} />
                </Route>
                <Route
                    path="/"
                    element={
                        <GameLayout
                            currentGame={"WordScramble"}
                            title={"Word"}
                        />
                    }
                >
                    <Route path="/game/:gameName" element={<WordScramble />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
