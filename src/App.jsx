import Home from "./pages/home";
import Navbar from "./components/navbar";
import CardSection from "./pages/card-section";
import About from "./pages/about";

const App = () => {
    return (
        <main className="overflow-hidden bg-white w-full min-h-screen font-poppins">
            <Navbar />
            <Home />
            <CardSection />
            <About />
        </main>
    );
};

export default App;
