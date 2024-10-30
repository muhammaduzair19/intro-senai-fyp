import { ChevronRight } from "lucide-react";
import CountUp from "react-countup";
import { Element } from "react-scroll";
import { motion } from "framer-motion"; // For smooth animations

const countups = [
    {
        id: 0,
        title: "Happy Customers",
        start: 3,
        end: 15,
        letter: "K",
    },
    {
        id: 1,
        title: "Monthly Visitors",
        start: 33,
        end: 150,
        letter: "K",
    },
    {
        id: 2,
        title: "Countries Worldwide",
        start: 1,
        end: 8,
    },
    {
        id: 3,
        title: "Top Partners",
        start: 17,
        end: 100,
        letter: "+",
    },
];

const About = () => {
    return (
        <section>
            <Element name="about">
                <div className="w-full relative bg-gradient-to-b from-white to-gray-100 max-md:mt-12 md:mt-8 py-12 px-5 sm:px-8">
                    <div className="w-full max-w-7xl h-full mx-auto">
                
                        {/* About Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-16 gap-8">
                            {/* Text Content */}
                            <div className="w-full h-full flex flex-col justify-center space-y-8">
                                <motion.hr
                                    className="border-4 w-32 border-green-700 hidden md:block"
                                    initial={{ width: 0 }}
                                    animate={{ width: "8rem" }}
                                    transition={{ duration: 1 }}
                                />
                                <motion.h1
                                    className="max-md:text-4xl text-6xl font-bold text-gray-900"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    Meet Our Experts
                                </motion.h1>
                                <motion.p
                                    className="max-md:text-sm text-base text-gray-700"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.2 }}
                                >
                                    Solving complex problems by blending deep
                                    expertise with innovative thinking. Our team
                                    of professionals is here to help you thrive
                                    in any challenge.
                                </motion.p>
                                <motion.span
                                    className="flex items-center cursor-pointer text-green-700 group"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.4 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <p className="mr-2 font-semibold">
                                        Learn more
                                    </p>
                                    <ChevronRight className="transform transition-transform opacity-100 group-hover:translate-x-full group-hover:opacity-50 duration-300" />
                                </motion.span>
                            </div>

                            {/* Image Section */}
                            <div className="shadow-lg rounded-md overflow-hidden">
                                <motion.img
                                    src="/images/about.svg"
                                    alt="about"
                                    className="object-cover w-full h-auto"
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default About;
