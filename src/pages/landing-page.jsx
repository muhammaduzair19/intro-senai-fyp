import Home from "../sections/home";
import CardSection from "../sections/card-section";
import About from "../sections/about";
import GameSection from "../sections/game-section";
import Blogs from "../sections/blog";
import Newsletter from "../sections/newletter";
import Slider from "../sections/slider";

const LandingPage = () => {
    return (
        <>
            <Home />
            <CardSection />
            <About />
            <GameSection />
            <Blogs />
            <Newsletter />
        </>
    );
};

export default LandingPage;
