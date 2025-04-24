import Image from 'next/image';
import Link from 'next/link';
import { BlogCardProps } from './BlogCardProps';
import { FaRegCalendar } from 'react-icons/fa';



const BlogCard: React.FC<BlogCardProps> = ({ blogData }) => {
    return (
        <div className="p-5">
            {/* Image container - optional */}
            <div className="relative h-72 w-full overflow-hidden rounded-2xl">
                <Image
                    src={blogData.imageUrl}
                    alt={blogData.title}
                    fill
                    className="object-cover transition-transform duration-500"
                />
            </div>

            <div className='pt-5'>
                {/* Category */}
                <span className="mb-2 inline-block text-sm font-robotoMono font-medium text-[#adff85]">
                    {blogData.category}
                </span>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold  text-white">
                    <Link href="#" className="">
                        {blogData.title}
                    </Link>
                </h3>

                {/* Author and Date */}
                <div className="flex items-center justify-between text-sm pt-4">
                    <p className="mr-2 font-medium font-robotoMono text-gray-400">{blogData.author}</p>
                    <p className='flex items-center text-gray-400 gap-2'>
                        <FaRegCalendar />
                        <span className="mt-1">{blogData.date}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;