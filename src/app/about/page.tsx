import CoreValues from "@/components/AboutComponents/CoreValues/CoreValues";
import CTASection from "@/components/HomeComponents/CTASection/CTASection";
import PageHeader from "@/components/SharedComponent/PageHeader/PageHeader";
import Image from "next/image";

const page = () => {
  const pageHeaderData = {
    sectionTitle: "We’re building the strongest software foundation",
    sectionDescription:
      "We actively engage in various philanthropic initiatives, supporting causes that align with our values and making a positive impact on the communities.",
    isCentered: true,
  };

  return (
    <div className="bg-[#060f11] -mt-20">
      <div className="max-w-6xl mx-auto px-4 pt-20">
        <div className="py-10">
          <PageHeader pageHeaderData={pageHeaderData} />
        </div>
        <div className="py-10 pb-16">
          <figure className="relative max-w-4xl aspect-[4/2] rounded-3xl overflow-hidden mx-auto">
            <Image
              className="object-cover"
              src="https://framerusercontent.com/images/frxuHeS2SJPVVLRqse3QBJZnsw.jpg?scale-down-to=2048"
              alt="About"
              fill
              priority
            />
          </figure>
        </div>
        <CoreValues />
        <CTASection />
      </div>
    </div>
  );
};

export default page;
