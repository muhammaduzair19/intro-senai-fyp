import { Element } from "react-scroll";

const Home = () => {









    return (
        <section>
            <Element name="home">
                <div className="container relative mx-auto">
                    <div className="w-full max-w-7xl h-full px-4 sm:px-0 mx-auto">
                        <div className="flex w-full h-full justify-between items-center">
                            <div className=" w-full h-full sm:w-1/2 mt-16">
                                <div className="flex flex-col space-y-8">
                                    <p className="font-semibold text-p">Join Us</p>
                                    <h1 className="max-md:text-4xl text-6xl font-semibold text-pt">
                                        Read all of out latest blogs
                                    </h1>
                                    <p className="max-md:text-sm text-base text-gray-700">
                                        Medical Recover is most focused in helping you discover your most beauiful smile
                                    </p>
                                </div>
                                <div className="mt-8 flex gap-4 items-center">
                                    <button className="flex items-center gap-1 bg-p px-3 py-2 rounded-md text-white font-semibold border-[1px] border-p hover:bg-transparent hover:text-p transition-colors duration-500">
                                        <a href="">Get Started</a>
                                    </button>
                                    <button className="font-semibold text-p px-3 py-2 hover:bg-p hover:text-white border-[1px] border-p rounded-md transition-colors duration-500">
                                        <a href="">Blogs</a>
                                    </button>
                                </div>
                            </div>
                            <div className="hidden sm:block h-full w-1/2 relative">
                                <img src="/images/herobg.svg" alt="background" className="object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Home;
