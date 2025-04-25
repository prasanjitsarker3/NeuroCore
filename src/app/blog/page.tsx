import BlogCard from "@/components/HomeComponents/Blog/BlogCard/BlogCard";
import CTASection from "@/components/HomeComponents/CTASection/CTASection";
import PageHeader from "@/components/SharedComponent/PageHeader/PageHeader";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";


const page = () => {
    const pageHeaderData = {
        sectionName: "",
        sectionTitle: "Blog",
        sectionDescription: "We are passionate about sharing valuable insights, industry trends, and expert perspectives to keep you informed and inspired.",
        isCentered: true,
    }
    const blogCategories = [
        {
            id: 1,
            title: "News",
            link: "/",
        },
        {
            id: 2,
            title: "Insights",
            link: "/",
        },
        {
            id: 3,
            title: "Stories",
            link: "/",
        },
        {
            id: 4,
            title: "Business",
            link: "/",
        },
        {
            id: 5,
            title: "Tutorials",
            link: "/",
        }
    ]
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
        <div className="bg-[#060f11]">
            <div className="max-w-[1250px] mx-auto px-4">
                <div className="pb-16 pt-5 flex justify-between items-center w-full">
                    <h4 className="text-[#adff85] font-robotoMono font-bold">Blog</h4>
                    <div className="flex gap-4">
                        {
                            blogCategories.map(category => <Link key={category.id} href={category.title} className="text-gray-400 hover:text-white transition-colors duration-300 font-robotoMono font-bold text-sm uppercase">{category.title}</Link>)
                        }
                        <FaSearch />
                    </div>
                </div>
                <PageHeader pageHeaderData={pageHeaderData} />
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mt-10">
                        {
                            blogs.map((blog, index) => (
                                <BlogCard blogData={blog} key={index} />
                            ))
                        }
                    </div>
                </div>
                <CTASection />
            </div>
        </div>
    );
};

export default page;