import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import glowImage from "@/assets/images/glow.avif";
import dotedImage from "@/assets/images/doted.avif";

const CTASection = () => {
  return (
    <div className=" max-w-6xl mx-auto px-4">
      <section className="relative pb-8">
        <div className="relative overflow-hidden rounded-xl px-8 md:px-16 md:py-24 lg:flex lg:items-center">
          <div className="lg:w-1/2 lg:pr-8 pt-16 lg:pt-4">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              Get started today
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Create a free account. No demos or calls with our sales team are
              required. Upgrade only if you have to.
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <Link
                href="/signup"
                className="flex justify-center items-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white shadow-sm font-robotoMono"
              >
                GET STARTED <MdOutlineKeyboardArrowRight className="text-xl" />{" "}
              </Link>
              <Link
                href="/contact"
                className="flex justify-center items-center rounded-xl bg-white px-6 py-3 text-sm font-medium text-black shadow-sm font-robotoMono hover:bg-[#e0dfdf]"
              >
                CONTACT US <MdOutlineKeyboardArrowRight className="text-xl" />
              </Link>
            </div>
          </div>
          <div className="h-full hidden lg:block lg:w-9/12 z-10">
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
          <div className="absolute -bottom-[60%] right-0 md:-bottom-[35%] md:-right-[75%] z-0 w-full h-full">
            <figure className="h-full w-full scale-200">
              <Image src={glowImage} width={400} height={200} alt="Glow" />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTASection;
