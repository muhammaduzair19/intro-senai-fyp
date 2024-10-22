import { motion } from "framer-motion"; // For animations

const Newsletter = () => {
    return (
        <section>
            <div className="w-full relative bg-gradient-to-b from-white to-gray-50 max-md:mt-12 md:mt-8 py-12 px-5 sm:px-8">
                <div className="w-full max-w-7xl h-full mx-auto">
                    <div className="flex flex-col gap-10 items-center justify-center">
                        <motion.div
                            className="flex flex-col gap-2 items-center justify-center text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h4 className="max-md:text-sm text-lg text-p font-semibold">
                                Newsletter
                            </h4>
                            <h1 className="max-md:text-4xl text-6xl font-bold text-pt">
                                JOIN US
                            </h1>
                            <p className="max-md:text-sm text-base text-gray-700">
                                Stay updated with our latest news and insights
                                to enhance your mental wellness journey.
                            </p>
                        </motion.div>
                        <motion.div
                            className="w-full flex justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="md:w-1/2 border-2 border-gray-300 flex justify-between rounded-sm transition-transform duration-300 hover:shadow-lg hover:scale-105 overflow-hidden">
                                <input
                                    type="text"
                                    placeholder="Your Email"
                                    className="w-full h-full p-2 focus:outline-none border-none"
                                />
                                <button className="px-4 capitalize text-white text-xs md:text-sm bg-p py-2 rounded transition-colors duration-300 hover:bg-transparent hover:text-p border-2 border-p">
                                    Subscribe
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
