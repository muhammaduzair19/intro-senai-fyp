
const Newsletter = () => {
    return (
        <section>
            <div className="w-full  relative bg-white max-md:mt-12 md:mt-8 py-6 pb-8 px-5 sm:px-8">
                <div className="w-full max-w-7xl h-full mx-auto">
                    <div className="flex flex-col gap-10 items-center justify-center">
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <h4 className="max-md:text-sm text-lg text-p font-semibold">Newsletter</h4>
                            <h1 className="max-md:text-4xl text-6xl font-semibold text-pt">JOIN US</h1>
                            <p className="max-md:text-sm text-base text-gray-700 text-center">
                                Problems trying to resolve the conflict between the two major realms of Classical
                                physics: Newtonian mechanics
                            </p>
                        </div>
                        <div className="w-full flex justify-center">
                            <div className="md:w-1/2 border-2 border-gray-300 flex justify-between rounded-sm" >
                                <input type="text" placeholder="Your Email" className="w-full h-full p-2 focus:outline-none" />
                                <button className="px-2 capitalize text-white text-xs md:text-sm bg-p py-2" >subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
