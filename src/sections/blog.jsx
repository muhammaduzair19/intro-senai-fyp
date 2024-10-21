import { div } from "framer-motion/client";
import { BluetoothSearching, SquareLibrary } from "lucide-react";
import { Element } from "react-scroll";
const blogPosts = [
    {
        id: 1,
        title: "The Power of Mindfulness in Stress Reduction",
        excerpt:
            "Discover how mindfulness practices can significantly reduce stress levels and improve overall mental well-being. Learn simple techniques to incorporate mindfulness into your daily routine.",
        author: "Mark Johnson, Mindfulness Coach",
        date: "2024-03-10",
        readTime: "7 min read",
    },
    {
        id: 2,
        title: "The Power of Mindfulness in Stress Reduction",
        excerpt:
            "Discover how mindfulness practices can significantly reduce stress levels and improve overall mental well-being. Learn simple techniques to incorporate mindfulness into your daily routine.",
        author: "Mark Johnson, Mindfulness Coach",
        date: "2024-03-10",
        readTime: "7 min read",
    },
    {
        id: 3,
        title: "The Power of Mindfulness in Stress Reduction",
        excerpt:
            "Discover how mindfulness practices can significantly reduce stress levels and improve overall mental well-being. Learn simple techniques to incorporate mindfulness into your daily routine.",
        author: "Mark Johnson, Mindfulness Coach",
        date: "2024-03-10",
        readTime: "7 min read",
    },
];

const Blogs = () => {
    return (
        <section>
            <Element name="blogs">
                <div className="w-full  relative max-md:mt-12 md:mt-8 py-6 px-5 sm:px-8">
                    <div className="w-full max-w-7xl h-full mx-auto">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-2">
                                <h4 className="max-md:text-sm text-lg text-p font-semibold">
                                    Blogs
                                </h4>
                                <h1 className="max-md:text-4xl text-6xl font-semibold text-pt">
                                    Our Blogs
                                </h1>
                                <p className="max-md:text-sm text-base text-gray-700">
                                    Nurturing Mental Health: Self-Care Tips for
                                    Lasting Happiness Learn How to Boost Your
                                    Mood and Build Emotional Resilience"
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-0 mt-5">
                                {blogPosts?.map((blog) => (
                                    <BlogsCard key={blog.id} {...blog} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Blogs;

const BlogsCard = ({ ...blog }) => (
    <div className="bg-white w-full px-5 py-5 md:px-10 md:py-10 flex flex-col items-start shadow-md gap-5 hover:bg-gradient-to-bl hover:translate-y-[-14px] from-green-700 via-green-500 to-green-400 duration-500 transition-all rounded-md group">
        <span className="w-12 h-12 rounded-full bg-green-700 group-hover:bg-green-400 group-hover:text-black flex items-center justify-center text-white">
            <SquareLibrary strokeWidth={1} />
        </span>
        <h3 className="md:text-xl tracking-tight font-bold text-pt group-hover:text-gray-100">
            {blog.title}
        </h3>
        <p className="max-md:text-sm text-base text-gray-700 group-hover:text-gray-100">
            {blog.excerpt}
        </p>
        {blog && (
            <div className="flex flex-col gap-3 text-gray-600 w-full ">
                <span className="text-xs flex gap-2 text-gray-500">
                    <p>{blog.date}</p>|<p>{blog.readTime}</p>
                </span>
                <p className="text-xs font-medium">{blog.author}</p>
                <button className="w-full bg-green-500 group-hover:bg-white font-medium px-6 rounded py-1 mt-5">
                    Read more
                </button>{" "}
            </div>
        )}
    </div>
);
