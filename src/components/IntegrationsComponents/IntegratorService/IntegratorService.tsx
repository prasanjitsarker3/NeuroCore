import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BsVectorPen } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { TbMessageCircle } from "react-icons/tb";
import IntegratorServiceCard from "./IntegratorServiceCard/IntegratorServiceCard";

const IntegratorService = () => {
    const integrators = [
        {
            category: "Popular",
            services: [
                {
                    id: 1,
                    title: "Figma",
                    description: "Leading collaborative design tool for building meaningful products.",
                    image: "https://framerusercontent.com/images/tZcdo7CRZODVnxWDWj5FFj2TvUE.png",
                }
            ]
        },
        {
            category: "Design",
            services: [
                {
                    id: 1,
                    title: "Figma",
                    description: "Leading collaborative design tool for building meaningful products.",
                    image: "https://framerusercontent.com/images/tZcdo7CRZODVnxWDWj5FFj2TvUE.png",
                },
                {
                    id: 2,
                    title: "Figma",
                    description: "Leading collaborative design tool for building meaningful products.",
                    image: "https://framerusercontent.com/images/tZcdo7CRZODVnxWDWj5FFj2TvUE.png",
                },
                {
                    id: 3,
                    title: "Figma",
                    description: "Leading collaborative design tool for building meaningful products.",
                    image: "https://framerusercontent.com/images/tZcdo7CRZODVnxWDWj5FFj2TvUE.png",
                },
                {
                    id: 4,
                    title: "Figma",
                    description: "Leading collaborative design tool for building meaningful products.",
                    image: "https://framerusercontent.com/images/tZcdo7CRZODVnxWDWj5FFj2TvUE.png",
                }
            ]
        }
    ]
    return (
        <div className="">
            <div className="flex justify-between items-center mt-10">
                <div className="flex gap-10 items-center font-robotoMono">
                    <Link href="#popular" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"><FaRegStar /> <span>Popular</span></Link>
                    <Link href="#design" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"><BsVectorPen /> <span>Design</span></Link>
                    <Link href="#engineering" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"><FaCode /> <span>Engineering</span></Link>
                    <Link href="#collaboration" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"><TbMessageCircle /> <span>Collaboration</span></Link>
                </div>
                <div>
                    <FaSearch />
                </div>
            </div>
            <div>
                {
                    integrators.map((integrator, ind) => (<div className="mt-10" key={ind}>
                        <div>
                            <h2 id={`#${integrator.category.toLocaleLowerCase}`} className="text-2xl text-white font-medium">{integrator.category}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                            {
                                integrator.services.map(service => <IntegratorServiceCard key={service.id} serviceData={service} />)
                            }
                        </div>
                    </div>))
                }

            </div>
        </div>
    );
};

export default IntegratorService;