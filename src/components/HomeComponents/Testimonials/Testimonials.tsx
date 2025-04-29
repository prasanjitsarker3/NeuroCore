import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader";
import TestimonialsCard from "./TestimonialsCard/TestimonialsCard";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
    const sectionHeaderData = {
        sectionName: "Testimonials",
        sectionTitle: "Don't just take our word for it",
        sectionDescription: "Take a moment to explore their stories and discover what sets us apart.",
        isCentered: true,
    }
    const testimonials = [
        {
            id: 1,
            message: "The robust project management tools, integrated communication features, and customizable dashboards have made collaboration a breeze.",
            name: "Tim Williams",
            deg: "Business Owner",
            image: "https://framerusercontent.com/images/Q8p5YDqxWz46oQWPmMuUxcf3PU.png?scale-down-to=512",
        },
        {
            id: 2,
            message: "The robust project management tools, integrated communication features, and customizable dashboards have made collaboration a breeze.",
            name: "Katie Adams",
            deg: "Business Owner",
            image: "https://framerusercontent.com/images/kqPNuI0cxr821PUUY9JpfnKbMBA.png?scale-down-to=512",
        },
        {
            id: 3,
            message: "The robust project management tools, integrated communication features, and customizable dashboards have made collaboration a breeze.",
            name: "Paul Smith",
            deg: "Business Owner",
            image: "https://framerusercontent.com/images/10YQqvEzHstuhqybuxrAgp87Ks.jpg?scale-down-to=512",
        },
        {
            id: 4,
            message: "The robust project management tools, integrated communication features, and customizable dashboards have made collaboration a breeze.",
            name: "Tim Williams",
            deg: "Business Owner",
            image: "https://framerusercontent.com/images/ifb1dU5lZYPevyyuNcc4s0qDnSQ.png?scale-down-to=512",
        },
        {
            id: 5,
            message: "The robust project management tools, integrated communication features, and customizable dashboards have made collaboration a breeze.",
            name: "Tim Williams",
            deg: "Business Owner",
            image: "https://framerusercontent.com/images/Q8p5YDqxWz46oQWPmMuUxcf3PU.png?scale-down-to=512",
        },
        {
            id: 6,
            message: "The robust project management tools, integrated communication features, and customizable dashboards have made collaboration a breeze.",
            name: "Tim Williams",
            deg: "Business Owner",
            image: "https://framerusercontent.com/images/kqPNuI0cxr821PUUY9JpfnKbMBA.png?scale-down-to=512",
        },
        {
            id: 7,
            message: "The robust project management tools, integrated communication features, and customizable dashboards have made collaboration a breeze.",
            name: "Tim Williams",
            deg: "Business Owner",
            image: "https://framerusercontent.com/images/10YQqvEzHstuhqybuxrAgp87Ks.jpg?scale-down-to=512",
        },
        {
            id: 8,
            message: "The robust project management tools, integrated communication features, and customizable dashboards have made collaboration a breeze.",
            name: "Tim Williams",
            deg: "Business Owner",
            image: "https://framerusercontent.com/images/ifb1dU5lZYPevyyuNcc4s0qDnSQ.png?scale-down-to=512",
        }
    ]
    return (
        <div className="py-5">
            <div className="max-w-3xl mx-auto">
                <SectionHeader sectionHeaderData={sectionHeaderData} />
            </div>
            <div className="py-7">
                <Marquee speed={15}>
                    {testimonials.map((testimonial) => (<div className="px-5" key={testimonial.id}>
                        <TestimonialsCard testimonialsCardData={testimonial} />
                    </div>
                    ))}
                </Marquee>

            </div>
        </div>
    );
};

export default Testimonials;