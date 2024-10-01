import { ClipboardPlus, HeartHandshake, Stethoscope } from "lucide-react";

const CardsData = [
    {
        id: 0,
        icon: HeartHandshake,
        title: "Online Appoinment",
        text: "The gradual accumulation of information about atomic and small-scale behaviour...",
    },
    {
        id: 1,
        icon: Stethoscope,
        title: "Emergency Case",
        text: "The gradual accumulation of information about atomic and small-scale behaviour...",
    },
    {
        id: 2,
        icon: ClipboardPlus,
        title: "Mental Care",
        text: "The gradual accumulation of information about atomic and small-scale behaviour...",
    },
];

const CardSection = () => {
    return (
        <section className="w-full bg-gray-50" >
            <div className="container relative mx-auto pb-12">
                <div className="w-full max-w-7xl h-full px-4 sm:px-0 mx-auto ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center max-lg:mt-8 gap-10">
                        {CardsData?.map(({ id, icon, title, text }) => (
                            <Card key={id} icon={icon} text={text} title={title} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardSection;

const Card = ({ icon: Icon, text, title }) => (
    <div className="bg-white w-full px-5 py-5 md:px-10 md:py-10 flex flex-col items-start shadow-md gap-5 lg:-mt-10 xl:-mt-20">
        <span className="w-12 h-12 rounded-full bg-d flex items-center justify-center text-white">
            <Icon strokeWidth={1} />
        </span>
        <h3 className="max-md:text-lg font-semibold text-pt">{title}</h3>
        <hr className="w-20 border-2 border-p" />
        <p className="max-md:text-sm text-base text-gray-700">{text}</p>
    </div>
);
