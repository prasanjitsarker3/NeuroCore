import Image from "next/image";
import Link from "next/link";
import { BlogCardProps } from "./BlogCardProps";

const BlogCard: React.FC<BlogCardProps> = ({ blogData }) => {
  return (
    <div className="p-5 border border-[#c4ecb00a] rounded-xl ">
      {/* Image container - optional */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src={blogData.imageUrl}
          alt={blogData.title}
          fill
          className="object-cover transition-transform duration-500"
        />
      </div>

      <div className="pt-2">
        {/* Category */}
        <span className="mb-2 inline-block text-sm font-robotoMono font-medium  primaryColor">
          {blogData.category}
        </span>

        {/* Title */}
        <h3 className="mb-0 text-xl font-bold  text-white">
          <Link href="#" className="">
            {blogData.title}
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default BlogCard;
