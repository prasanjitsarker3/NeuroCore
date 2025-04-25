
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
import { BiCoinStack } from "react-icons/bi";
import { MdTerminal } from "react-icons/md";
import { PiSparkleLight } from "react-icons/pi";
import SectionHeader from '@/components/SharedComponent/SectionHeader/SectionHeader';

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
            title: "Maximum security",
            description: "Rest assured, our top-tier security features keep your data and user information locked down.",
            icon: <MdOutlineVerifiedUser />
        },
        {
            id: 2,
            title: "Seamless integration",
            description: "No app is an island. Connect effortlessly to external services, databases, and tools.",
            icon: <HiOutlineSquare3Stack3D />
        },
        {
            id: 3,
            title: "Build for developers",
            description: "We offer a wealth of developer-friendly resources, including robust documentation and support.",
            icon: <MdTerminal />
        },
        {
            id: 4,
            title: "Team collaboration",
            description: "Our framework fosters teamwork, allowing developers to work seamlessly together.",
            icon: <FiUsers />
        },
        {
            id: 5,
            title: "Data-driven",
            description: "Drive your app's success with data-backed decisions and achieve your goals.",
            icon: <BiCoinStack />
        },
        {
            id: 6,
            title: "Powered by AI",
            description: "Our AI feature analyzes data, predicts trends, and provides insights that empower you.",
            icon: <PiSparkleLight />
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