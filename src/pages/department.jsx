import { Check, ChevronRight, Star } from "lucide-react";
import { Element } from "react-scroll";

const Department = () => {
    return (
        <section>
            <Element name="department">
                <div className="w-full  relative bg-blue-200 max-md:mt-12 md:mt-8 py-6 px-5 sm:px-8">
                    <div className="w-full max-w-7xl h-full mx-auto">
                        <div className="flex flex-col my-10 md:my-20 space-y-10 md:space-y-16">
                            <div className="flex flex-col gap-2">
                                <h1 className="max-md:text-4xl text-6xl font-semibold text-pt">Our Department</h1>
                                <p className="max-md:text-sm text-base text-gray-700">
                                    Problems trying to resolve the conflict between the two major realms of Classical
                                    physics: Newtonian mechanics
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-0">
                                <DepartmentCard />
                                <DepartmentCard />
                                <DepartmentCard />
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Department;

const DepartmentCard = () => (
    <div className="w-full row-span-2 bg-white rounded-md overflow-hidden">
        <div className="flex flex-col justify-center items-center">
            <div className="w-full h-1/2">
                <img src="/images/card-1.png" alt="card" className="w-full object-contain" />
            </div>
            <div className="py-5 px-5 md:px-8 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <p className="max-sm:text-xs sm:text-sm  text-base text-p font-semibold">Neurologist</p>
                    <Star size={16} />
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="max-md:text-sm text-lg text-pt font-semibold">Neurologist</h4>
                    <p className="max-sm:text-xs sm:text-sm  text-base text-gray-700">
                        Problems trying to resolve the conflict between the two major realms of Classical physics:
                        Newtonian mechanics
                    </p>
                    <span className="flex gap-2 mt-2">
                        <Check color="#374151" size={18} />
                        <p className="text-xs font-bold text-gray-700">236+ Satisfied Patient</p>
                    </span>
                    <span className="flex gap-2 mt-2">
                        <Check color="#374151" size={18} />
                        <p className="text-xs font-bold text-gray-700">Online Support</p>
                    </span>
                    <span className="flex gap-2 mt-2">
                        <Check color="#374151" size={18} />
                        <p className="text-xs font-bold text-gray-700">24/7 Remote</p>
                    </span>
                </div>
                <span className="flex items-center cursor-pointer text-p group">
                    <p className="mr-1 text-sm">Learn more</p>
                    <ChevronRight
                        size={20}
                        className="transform  transition-transform opacity-100 group-hover:translate-x-full group-hover:opacity-50 duration-300"
                    />
                </span>
            </div>
        </div>
    </div>
);
