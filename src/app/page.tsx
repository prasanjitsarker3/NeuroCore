import Blog from "@/components/HomeComponents/Blog/Blog";
import CTASection from "@/components/HomeComponents/CTASection/CTASection";
import Features from "@/components/HomeComponents/Features/Features";
import PowerfullFeatures from "@/components/HomeComponents/Features/PowerfullFeatures/PowerfullFeatures";
import FrameworkService from "@/components/HomeComponents/FrameworkService/FrameworkService";
import Hero from "@/components/HomeComponents/Hero/Hero";
import Highlights from "@/components/HomeComponents/Highlights/Highlights";
// import Testimonials from "@/components/HomeComponents/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="bg-[#060f11]">
      <Hero />
      <div className=" max-w-6xl mx-auto px-2 pt-10 md:pt-20">
        <FrameworkService />
        <Highlights />
      </div>
      <div className="max-w-6xl mx-auto px-2">
        <Features />
        <PowerfullFeatures />
      </div>
      {/* <Testimonials /> */}
      <Blog />
      <CTASection />
    </div>
  );
}
