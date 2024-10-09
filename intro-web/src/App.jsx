import Home from "./pages/home";
import Navbar from "./components/navbar";
import CardSection from "./pages/card-section";
import About from "./pages/about";
import Department from "./pages/department";
import Team from "./pages/team";
import Newsletter from "./pages/newletter";
import Footer from "./components/footer";

const App = () => {
    return (
        <main className="overflow-hidden bg-white w-full min-h-screen font-poppins">
            <Navbar />
            <Home />
            <CardSection />
            <About />
            <Department />
            <Team />
            <Newsletter />
            <Footer />
        </main>
    );
};

export default App;
