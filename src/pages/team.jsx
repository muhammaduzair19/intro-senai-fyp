import { Element } from "react-scroll";

const Team = () => {
    return (
        <section>
            <Element name="department">
                <div className="w-full  relative max-md:mt-12 md:mt-8 py-6 px-5 sm:px-8">
                    <div className="w-full max-w-7xl h-full mx-auto">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-2">
                                <h4 className="max-md:text-sm text-lg text-p font-semibold">Team</h4>
                                <h1 className="max-md:text-4xl text-6xl font-semibold text-pt">Our Team</h1>
                                <p className="max-md:text-sm text-base text-gray-700">
                                    Problems trying to resolve the conflict between the two major realms of Classical
                                    physics: Newtonian mechanics
                                </p>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-7">
                                <TeamCard />
                                <TeamCard />
                                <TeamCard />
                                <TeamCard />
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Team;

const TeamCard = () => (
    <div className="md:w-48 lg:w-56 overflow-hidden shadow-md rounded-md bg-white">
        <div className="flex flex-col">
            <div className="w-full h-3/5">
                <img src="/images/user.png" className="object-contain w-full h-full" alt="" />
            </div>
            <div className="w-full text-center flex flex-col gap-3 mt-6 mb-6">
                <h4 className="max-md:text-sm text-lg text-gray-700 font-bold">Neurologist</h4>
                <p className="max-md:text-xs text-base text-gray-700">Physcologist</p>
            </div>
        </div>
    </div>
);
