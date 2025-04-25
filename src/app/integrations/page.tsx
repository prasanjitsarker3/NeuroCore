import CTASection from "@/components/HomeComponents/CTASection/CTASection";
import HeroIntegrations from "@/components/IntegrationsComponents/HeroIntegrations/HeroIntegrations";
import IntegratorService from "@/components/IntegrationsComponents/IntegratorService/IntegratorService";


const integrations = () => {

    return (
        <div className="bg-[#060f11]">
            <HeroIntegrations />
            <div className="max-w-[1250px] mx-auto px-4 pt-10 md:pt-20">
                <IntegratorService />
                <CTASection />
            </div>
        </div>
    );
};

export default integrations;