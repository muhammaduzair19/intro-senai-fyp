import { SquareLibrary } from "lucide-react";
import { Element } from "react-scroll";
import { motion } from "framer-motion"; // For animations

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
        title: "Boosting Your Mood: Effective Self-Care Strategies",
        excerpt:
            "Explore effective self-care strategies to enhance your mood and emotional resilience. Simple habits can make a big difference!",
        author: "Sarah Lee, Mental Health Advocate",
        date: "2024-03-12",
        readTime: "5 min read",
    },
    {
        id: 3,
        title: "Building Emotional Resilience in Tough Times",
        excerpt:
            "Learn about building emotional resilience through mindfulness, therapy, and community support. A guide to lasting happiness.",
        author: "David Smith, Psychologist",
        date: "2024-03-15",
        readTime: "6 min read",
    },
];

const Blogs = () => {
    return (
        <section>
            <Element name="blogs">
                <div className="w-full relative bg-gradient-to-b from-white to-gray-100 max-md:mt-12 md:mt-8 py-12 px-5 sm:px-8">
                    <div className="w-full max-w-7xl h-full mx-auto">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-2 text-center md:text-left">
                                <h4 className="max-md:text-sm text-lg text-p font-semibold">
                                    Blogs
                                </h4>
                                <motion.h1
                                    className="max-md:text-4xl text-6xl font-bold text-pt"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    Our Blogs
                                </motion.h1>
                                <motion.p
                                    className="max-md:text-sm text-base text-gray-700"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    Nurturing Mental Health: Self-Care Tips for
                                    Lasting Happiness. Learn How to Boost Your
                                    Mood and Build Emotional Resilience.
                                </motion.p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-0 mt-5">
                                {blogPosts.map((blog) => (
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
    <motion.div
        className="bg-white w-full px-5 py-5 md:px-10 md:py-10 flex flex-col items-start shadow-lg gap-5 rounded-md transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
        whileHover={{ scale: 1.05 }}
    >
        <span className="w-12 h-12 rounded-full bg-green-700 group-hover:bg-green-400 flex items-center justify-center text-white">
            <SquareLibrary strokeWidth={1} />
        </span>
        <h3 className="md:text-xl tracking-tight font-bold text-pt">
            {blog.title}
        </h3>
        <p className="max-md:text-sm text-base text-gray-700">{blog.excerpt}</p>
        <div className="flex flex-col gap-3 text-gray-600 w-full ">
            <span className="text-xs flex gap-2 text-gray-500">
                <p>{blog.date}</p>|<p>{blog.readTime}</p>
            </span>
            <p className="text-xs font-medium">{blog.author}</p>
            <a href="https://dashboard.senai.space/blogs" target="_blank" className="w-full text-center bg-green-500 hover:bg-white font-medium px-6 rounded py-1 mt-5 transition-colors duration-300 text-white hover:text-green-500">
                Read more
            </a>
        </div>
    </motion.div>
);
