import { ClipboardPlus, HeartHandshake, Stethoscope } from "lucide-react";
import Card from "../components/card";

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
        <section className="w-full bg-green-100 " >
            <div className="container relative mx-auto pb-12 ">
                <div className="w-full max-w-7xl h-full px-4 sm:px-0 mx-auto ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center max-lg:mt-8 gap-10 ">
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

