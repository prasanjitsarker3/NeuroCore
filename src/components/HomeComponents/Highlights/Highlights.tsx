import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader";
import Image from "next/image";
import React from "react";

const Highlights = () => {
  const sectionHeaderData = {
    sectionName: "Features",
    sectionTitle: "Build a better business",
    sectionDescription:
      "Each feature is meticulously designed to empower you, enhance your experience, and deliver tangible benefits.",
    isCentered: true,
  };
  const highlights = [
    {
      id: 1,
      title: "Custom Roadmap",
      description:
        "Helps teams plan, execute, and communicate their strategic initiatives effectively, fostering collaboration, alignment.",
      image:
        "https://framerusercontent.com/images/Cd4CI8R3MpfICbX5FuSk0SalYXk.png?scale-down-to=512",
    },
    {
      id: 2,
      title: "Real-time Collaboration",
      description:
        "Enhances communication, and streamlines collaboration across teams and departments, enabling organizations.",
      image:
        "https://framerusercontent.com/images/CndCrnRJ2yWZOf0mt9OoDBNQpbQ.png?scale-down-to=512",
    },
    {
      id: 3,
      title: "Live Feedback",
      description:
        "Communication between users and developers, helping improve product quality, usability, and customer satisfaction.",
      image:
        "https://framerusercontent.com/images/9EgdTHvv7XZ6rmN8R8IFkhd40Pg.png?scale-down-to=512",
    },
  ];
  return (
    <div className="py-14">
      <div className="max-w-2xl mx-auto">
        <SectionHeader sectionHeaderData={sectionHeaderData} />
      </div>
      <div className="py-7 grid grid-cols-1 md:grid-cols-3 gap-10">
        {highlights.map((highlight) => (
          <div key={highlight.id}>
            <figure className="bg-gradient-to-b from-[#FF5F1F]/5 to-[#FF5F1F]/50 overflow-hidden rounded-xl">
              <Image
                className="w-full h-full object-cover"
                src={highlight.image}
                alt={highlight.title}
                height={550}
                width={600}
              />
            </figure>
            <div className="  pt-1.5 md:pt-3">
              <h4 className="font-robotoMono font-bold">{highlight.title}</h4>
              <p className="text-gray-400 font-roboto pt-0.5 text-sm">
                {highlight.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
