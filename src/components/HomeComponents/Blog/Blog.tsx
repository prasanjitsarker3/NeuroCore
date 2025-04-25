

import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader";
import BlogCard from "./BlogCard/BlogCard";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Blog = () => {
    const sectionHeaderData = {
        sectionName: "Blog",
        sectionTitle: "Latest from our blog",
        sectionDescription: "We are passionate about sharing valuable insights, industry trends, and expert perspectives to keep you informed and inspired.",
        isCentered: true,
    }
    const blogs = [
        {
            title: "How to find the right AI chatbot for your support needs",
            author: "Lisa Jackson",
            date: "Jan 03, 2024",
            category: "News",
            imageUrl: "https://framerusercontent.com/images/bVqmJAaNbi7psHeCV7vJ9KKOcA.jpg?scale-down-to=1024",
        },
        {
            title: "The complete guide to staying productive using AI",
            author: "Alex Schiller",
            date: "Jan 02, 2024",
            category: "Insights",
            imageUrl: "https://framerusercontent.com/images/SxDxXbQXsVSixIBwxbCki2L83g.jpg?scale-down-to=512",
        },
        {
            title: "How startups can improve their chances of getting financing",
            author: "Paul Smith",
            date: "Jan 01, 2024",
            category: "Business",
            imageUrl: "https://framerusercontent.com/images/UFCQtRXPlplof3hO7RcNCsE9W4.jpg?scale-down-to=512",
        },
    ]
    return (
        <div>
            <div className="max-w-xl mx-auto">
                <SectionHeader sectionHeaderData={sectionHeaderData} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mt-10">
                {
                    blogs.map((blog, index) => (
                        <BlogCard blogData={blog} key={index} />
                    ))
                }
            </div>
            <div className="flex justify-center items-center w-full pt-12">
                <button className="flex justify-center items-center cursor-pointer rounded-xl px-6 py-3 text-sm font-medium uppercase border border-[#c2f3a92a] bg-[#c2f3a90a] text-white shadow-sm font-robotoMono hover:text-[#9fec78]">Explore Blog <MdOutlineKeyboardArrowRight className='text-xl' /> </button>
            </div>
        </div>
    );
};

export default Blog;