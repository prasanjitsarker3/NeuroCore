
import ContactForm from "@/components/ContactComponents/ContactForm/ContactForm";
import ContactInfo from "@/components/ContactComponents/ContactInfo/ContactInfo";
import CTASection from "@/components/HomeComponents/CTASection/CTASection";
import PageHeader from "@/components/SharedComponent/PageHeader/PageHeader";

const page = () => {
    const pageHeaderData = {
        sectionName: "Keep in touch",
        sectionTitle: "Contact us",
        sectionDescription: "We’re here to help and answer any question you might have. We look forward to hearing from you!",
        isCentered: true,
    }

    return (
        <div className="bg-[#060f11] -mt-20">
            <div className="max-w-[1250px] mx-auto px-4 pt-10 md:pt-20">
                <div className="py-10 w-full md:w-5/12 mx-auto">
                    <PageHeader pageHeaderData={pageHeaderData} />
                </div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-24 mt-10 justify-between">
                    <div className="w-full md:w-3/5">
                        <ContactForm />
                    </div>
                    <div className="w-full md:w-2/5">
                        <ContactInfo />
                    </div>
                </div>
                <CTASection />
            </div>
        </div>
    );
};

export default page;