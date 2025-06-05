import HeroIntegrations from "@/components/IntegrationsComponents/HeroIntegrations/HeroIntegrations";
import PopularApps from "./PopularCard";
import IntegrationCategories from "./IntregrationCategory";
import CTASection from "@/components/HomeComponents/CTASection/CTASection";

const integrations = () => {
  return (
    <div className="bg-[#060f11] mt-16">
      <HeroIntegrations />
      <PopularApps />
      <IntegrationCategories />
      <CTASection />
    </div>
  );
};

export default integrations;
