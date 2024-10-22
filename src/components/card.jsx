import { Link } from "react-router-dom";

const Card = ({ icon: Icon, text, title, link, game = false, image }) => (
    <Link to={link}>
        <div className="bg-white cursor-pointer w-full px-5 py-5 md:px-10 md:py-10 flex flex-col items-start shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-[1.03] rounded-lg group transform-gpu hover:bg-gradient-to-br from-green-600 to-green-400">
            {game ? (
                <div className="w-full h-48 overflow-hidden rounded-md transition-all duration-700 ease-in-out">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform group-hover:scale-110 group-hover:rotate-3"
                    />
                </div>
            ) : (
                <span className="w-12 h-12 rounded-full bg-green-700 group-hover:bg-green-400 group-hover:text-black flex items-center justify-center text-white transition-all duration-500 ease-in-out">
                    <Icon strokeWidth={1} />
                </span>
            )}

            <h3 className="mt-5 md:text-xl tracking-tight font-bold text-gray-800 group-hover:text-white transition-colors duration-500 ease-in-out">
                {title}
            </h3>
            <hr className="w-20 border-2 border-green-600 group-hover:border-white transition-colors duration-500 ease-in-out" />
            <p className="mt-3 max-md:text-sm text-base text-gray-600 group-hover:text-white transition-colors duration-500 ease-in-out">
                {text}
            </p>
            {game && (
                <button className="mt-4 bg-green-500 group-hover:bg-white text-white group-hover:text-green-500 font-medium px-6 rounded py-1 w-full transition-all duration-500 ease-in-out transform group-hover:scale-105">
                    Play
                </button>
            )}
        </div>
    </Link>
);

export default Card;
