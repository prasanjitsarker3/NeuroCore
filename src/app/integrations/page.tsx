import HeroIntegrations from "@/components/IntegrationsComponents/HeroIntegrations/HeroIntegrations";
import PopularApps from "./PopularCard";
import IntegrationCategories from "./IntregrationCategory";
import CTASection from "@/components/HomeComponents/CTASection/CTASection";

const integrations = () => {
  return (
    <div className="bg-[#060f11] -mt-20">
      <HeroIntegrations />
      <PopularApps />
      <IntegrationCategories />
      <CTASection />
      {/* <div className="max-w-[1250px] mx-auto px-4 pt-10 md:pt-20">
                <IntegratorService />
                <CTASection />
            </div> */}
    </div>
  );
};

export default integrations;
