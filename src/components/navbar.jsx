import clsx from "clsx";
import { AlignJustify, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuLinks = ["home", "about", "games", "blogs"];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (showNav) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [showNav]);

    return (
        <nav>
            <div
                className={clsx(
                    "w-full fixed top-0 left-0 transition-all duration-300 z-30",
                    {
                        "bg-white/10 backdrop-blur-lg shadow-lg": isScrolled,
                        "bg-transparent": !isScrolled,
                    }
                )}
            >
                <div className="flex justify-between items-center px-5 py-4 mx-auto max-w-7xl">
                    <div className="text-xl font-bold w-16">
                        <img src="/images/logo.png" alt="Logo" />
                    </div>
                    <div className="items-center hidden md:flex">
                        <ul className="flex gap-5">
                            {menuLinks.map((menu, index) => (
                                <li
                                    key={index}
                                    className="text-base capitalize font-bold tracking-widest text-gray-600 hover:text-p/90 cursor-pointer"
                                >
                                    <Link
                                        to={menu}
                                        smooth
                                        spy
                                        offset={-100}
                                        activeClass
                                    >
                                        {menu}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hidden md:flex gap-5 ">
                        <button className="flex items-center gap-1 bg-p px-5 py-2 rounded-full text-white font-medium border-[1px] border-p hover:bg-transparent hover:text-p transition-colors duration-500 ">
                            <a href="">Get Started</a>
                        </button>
                    </div>
                    <div className="block md:hidden ">
                        <button onClick={() => setShowNav(true)} className="">
                            <AlignJustify size={20} strokeWidth={1.5} />
                        </button>
                    </div>
                    <div
                        className={clsx(
                            "absolute bg-p left-0 h-screen overflow-hidden top-0 bottom-0 right-0 transition-all duration-500",
                            showNav ? "w-2/3 " : "w-0"
                        )}
                    >
                        <div
                            className={clsx(
                                "flex flex-col p-5",
                                showNav
                                    ? "-translate-x-0 flex"
                                    : "-translate-x-full hidden"
                            )}
                        >
                            <div className="self-end">
                                <button
                                    onClick={() => setShowNav(false)}
                                    className={clsx("z-20")}
                                >
                                    <X size={20} strokeWidth={1.5} />
                                </button>
                            </div>
                            <div>
                                <ul className="flex flex-col gap-5 ">
                                    {menuLinks.map((menu, index) => (
                                        <li
                                            key={index}
                                            className="text-2xl uppercase font-bold tracking-widest text-white hover:text-black/35 cursor-pointer"
                                        >
                                            <Link
                                                to={menu}
                                                onClick={() =>
                                                    setShowNav(false)
                                                }
                                                smooth
                                                spy
                                                offset={-100}
                                                activeClass
                                            >
                                                {menu}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 flex gap-5">
                                    <button className="flex items-center gap-1 bg-white  px-5 py-2 rounded-full text-p font-medium border-[1px] border-p hover:bg-transparent hover:text-p transition-colors duration-500 ">
                                        <a href="/">Get Started</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
