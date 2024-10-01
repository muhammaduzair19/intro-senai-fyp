import { ChevronRight } from "lucide-react";
import CountUp from "react-countup";
import { Element } from "react-scroll";

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
                <div className="container relative mx-auto bg-white max-md:mt-12 md:mt-8 pb-6">
                    <div className="w-full max-w-7xl h-full px-4 sm:px-0 mx-auto">
                        <div className="w-full grid grid-cols-2 md:grid-cols-4">
                            {countups?.map(({ id, title, start, end, letter }) => (
                                <div className="flex flex-col items-center mt-12" key={id}>
                                    <p className="text-6xl font-bold text-p  text-center flex items-center">
                                        <CountUp start={start} end={end} duration={1} preserveValue enableScrollSpy />{" "}
                                        {letter && letter}
                                    </p>
                                    <p className="font-semibold text-pt text-sm ">{title}</p>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-10 ">
                            <div className="w-full h-full flex items-start justify-center flex-col space-y-8">
                                <hr className="border-4 w-32 border-p hidden md:block" />
                                <h1 className="max-md:text-4xl text-6xl font-semibold text-pt">Meet Our Experts</h1>
                                <p className="max-md:text-sm text-base text-gray-700">
                                    Problems trying to resolve the conflict between the two major realms of Classical
                                    physics: Newtonian mechanics
                                </p>
                                <span className="flex items-center cursor-pointer text-p group">
                                    <p className="mr-2">Learn more</p>
                                    <ChevronRight className="transform transition-transform opacity-100 group-hover:translate-x-full group-hover:opacity-50 duration-300" />
                                </span>
                            </div>
                            <div className="order-2 shadow-2xl my-6 md:shadow-none">
                                <img src="/images/about.svg" alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default About;
