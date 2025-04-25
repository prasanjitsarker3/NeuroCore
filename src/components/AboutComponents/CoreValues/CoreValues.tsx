
import { FiGlobe, FiUsers } from "react-icons/fi";
import SectionHeader from '@/components/SharedComponent/SectionHeader/SectionHeader';
import { FaGraduationCap, FaRegHeart } from 'react-icons/fa';
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";

const CoreValues = () => {
    const sectionHeaderData = {
        sectionName: "About us",
        sectionTitle: "Our core values",
        sectionDescription: "We believe in forging strong relationships with our customers, partners, and employees, based on trust and mutual respect.",
        isCentered: true,
    }

    const services = [
        {
            id: 1,
            title: "Work-life balance",
            description: "Promoting a healthy equilibrium between work and personal life.",
            icon: <FaRegHeart />
        },
        {
            id: 2,
            title: "Collaboration",
            description: "Open communication to achieve shared goals and great success.",
            icon: <FiUsers />
        },
        {
            id: 3,
            title: "Continuous learning",
            description: "Encouraging professional growth, fostering a culture of curiosity.",
            icon: <FaGraduationCap />
        },
        {
            id: 4,
            title: "Fun and enjoyment",
            description: "Promoting a enjoyable work environment that fosters creativity.",
            icon: <BsEmojiSmile />
        },
        {
            id: 5,
            title: "Open communication",
            description: "Encouraging clearly transparent communication at all levels.",
            icon: <AiOutlineMessage />
        },
        {
            id: 6,
            title: "Social impact",
            description: "Making a positive difference in society by addressing social issues.",
            icon: <FiGlobe />
        },

    ]

    return (
        <div>
            <div className='max-w-xl mx-auto'>
                <SectionHeader sectionHeaderData={sectionHeaderData} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mt-10 py-10">
                {
                    services.map(service => <div key={service.id} className='py-5'>
                        <div className='flex'>
                            <p className="flex justify-center items-center cursor-pointer rounded-md p-2 font-medium border border-[#c2f3a92a] bg-[#c2f3a90a] shadow-sm text-[#9fec78] text-2xl">
                                {service.icon}
                            </p>
                        </div>
                        <h4 className='font-robotoMono py-4'>{service.title}</h4>
                        <p className='font-roboto text-gray-400 w-11/12'>{service.description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CoreValues;