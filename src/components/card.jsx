import { Link } from "react-router-dom";

const Card = ({ icon: Icon, text, title, link, game = false, image }) => (
    <Link to={link}>
        <div className="bg-white cursor-pointer w-full px-5 py-5 md:px-10 md:py-10 flex flex-col items-start shadow-md gap-5 lg:-mt-10 xl:-mt-20 hover:bg-gradient-to-bl hover:translate-y-[-14px] from-green-700 via-green-500 to-green-400 duration-500 transition-all rounded-md group">
            {game ? (
                <div className="w-full h-full overflow-hidden duration-500 transition-all " >
                    <img src={image} alt={title} className="group-hover:scale-150 group-hover:rotate-6" />
                </div>
            ) : (
                <span className="w-12 h-12 rounded-full bg-green-700 group-hover:bg-green-400 group-hover:text-black flex items-center justify-center text-white">
                    <Icon strokeWidth={1} />
                </span>
            )}

            <h3 className="md:text-xl tracking-tight font-bold text-pt group-hover:text-gray-100">
                {title}
            </h3>
            <hr className="w-20 border-2 border-p" />
            <p className="max-md:text-sm text-base text-gray-700 group-hover:text-gray-100">
                {text}
            </p>
            {game && (
                <button className="bg-green-500 group-hover:bg-white font-medium px-6 rounded py-1">
                    Play
                </button>
            )}
        </div>
    </Link>
);

export default Card;
