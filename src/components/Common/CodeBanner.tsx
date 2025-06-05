"use client";

import Image from "next/image";

const CodeBannerWithImages = () => {
  return (
    <div className=" min-h-[70vh] md:min-h-[80vh] w-full flex items-center justify-center py-10 ">
      <div className="relative max-w-6xl mx-auto px-2 sm:px-1 w-full ">
        <div className="relative overflow-hidden rounded-2xl min-h-[70vh] md:min-h-[80vh]  flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/WLNewB.avif"
              alt="Tech background"
              fill
              className="object-cover bg-[#060f11] opacity-40 rounded-2xl"
              priority
            />
            <div className="absolute inset-0  rounded-2xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-4 md:px-8 py-8">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ff5f1f] leading-tight">
                  Build the Future with
                </h1>
                <p className="text-sm sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                  Empowering businesses with cutting-edge software development,
                  innovative web solutions, and scalable cloud architecture.
                </p>

                <button className=" bg-[#ff5f1f]/50 text-white px-6 py-1 rounded-full">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBannerWithImages;
