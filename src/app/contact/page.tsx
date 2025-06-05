import ContactForm from "@/components/ContactComponents/ContactForm/ContactForm";
import CTASection from "@/components/HomeComponents/CTASection/CTASection";
import PageHeader from "@/components/SharedComponent/PageHeader/PageHeader";
import Image from "next/image";

const page = () => {
  const pageHeaderData = {
    sectionTitle: "Keep in touch",
    sectionDescription:
      "We’re here to help and answer any question you might have. We look forward to hearing from you!",
    isCentered: true,
  };

  return (
    <div className="bg-[#060f11] mt-16">
      <div className=" max-w-6xl mx-auto px-2">
        <div className=" py-5 md:py-10 w-full md:w-5/12 mx-auto">
          <PageHeader pageHeaderData={pageHeaderData} />
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 py-10 justify-between">
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
          <div className="w-full md:w-1/2">
            <div className=" aspect-[4/3] rounded-3xl overflow-hidden mx-auto relative">
              <Image
                className="object-cover"
                src="https://framerusercontent.com/images/frxuHeS2SJPVVLRqse3QBJZnsw.jpg?scale-down-to=2048"
                alt="About"
                fill
                priority
              />
            </div>
          </div>
        </div>
        <CTASection />
      </div>
    </div>
  );
};

export default page;
