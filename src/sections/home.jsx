import { Element } from "react-scroll";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "./slider";

const Home = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section>
            <Element name="home">
                <Slider />
                <div className="container relative mx-auto w-full  px-5 sm:px-8">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="flex w-full justify-between items-center">
                            {/* Left Side: Text Content */}
                            <div className="w-full h-full sm:w-1/2 mt-16">
                                <div className="flex flex-col space-y-8">
                                    {/* Tagline */}
                                    <motion.p
                                        className="font-semibold text-green-600"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1 }}
                                    >
                                        Discover Excellence
                                    </motion.p>

                                    {/* Main Heading */}
                                    <motion.h1
                                        className="max-md:text-4xl text-6xl font-bold text-gray-900"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1.2 }}
                                    >
                                        Elevate Your Experience with Our
                                        Cutting-Edge Solutions
                                    </motion.h1>

                                    {/* Subtext */}
                                    <motion.p
                                        className="max-md:text-sm text-base text-gray-700"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1.4 }}
                                    >
                                        We help you achieve more with
                                        streamlined services designed for
                                        maximum impact. Whether it's innovation,
                                        transformation, or optimization, we’re
                                        here to empower your growth.
                                    </motion.p>
                                </div>

                                {/* Call to Action Button */}
                                <div className="mt-8 flex gap-4 items-center">
                                   
                                    <motion.button
                                        className="flex items-center gap-1 bg-green-600 px-5 py-2 rounded-full text-white font-medium border-[1px] border-green-600 hover:bg-transparent hover:text-green-600 transition-all duration-500"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <a href="">Get Started</a>
                                    </motion.button>
                                </div>
                            </div>

                            {/* Right Side: Parallax Hero Image */}
                            <div className="hidden sm:block h-full w-1/2 relative">
                                <motion.img
                                    src="/images/herobg.svg"
                                    alt="background"
                                    className="object-contain"
                                    style={{
                                        transform: `translateY(${
                                            scrollY * 0.1
                                        }px)`,
                                    }}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Home;
