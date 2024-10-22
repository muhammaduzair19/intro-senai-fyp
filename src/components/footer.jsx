const Footer = () => {
    return (
        <footer>
            <div className="w-full relative bg-gray-800 max-md:mt-12 md:mt-8 px-5 sm:px-8">
                <div className="w-full max-w-7xl h-full mx-auto">
                    <div className="flex items-center justify-between border-t border-gray-600 pt-4">
                        <p className="text-xs md:text-sm text-gray-400 py-2">
                            &copy; {new Date().getFullYear()} All rights
                            reserved.
                        </p>
                        <p className="text-p font-bold text-xs md:text-sm cursor-pointer hover:text-green-500 transition duration-300">
                            codebyzair
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
