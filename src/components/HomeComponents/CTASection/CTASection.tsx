import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import dotedImage from "@/assets/images/doted.avif";

const CTASection = () => {
  return (
    <div className=" max-w-6xl mx-auto  bg-[#c4ecb00a]  rounded-xl mt-6">
      <section className="relative  pb-8 p-5 ">
        <div className="relative overflow-hidden rounded-xl py-10 md:py-16 lg:flex lg:items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight primaryColor md:text-5xl">
              Get started today
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Create a free account. No demos or calls with our sales team are
              required. Upgrade only if you have to.
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <Link
                href="/contact"
                className="flex justify-center items-center rounded-xl bg-white/5 px-6 py-3 text-sm font-medium text-white shadow-sm font-robotoMono hover:bg-amber-500"
              >
                GET STARTED <MdOutlineKeyboardArrowRight className="text-xl" />{" "}
              </Link>
            </div>
          </div>
          <div className="h-full">
            <div className=" w-full h-full ">
              <figure className="h-full ">
                <Image
                  src={dotedImage}
                  alt="Decorative dots"
                  className="object-cover scale-200"
                  height={200}
                  width={600}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTASection;
