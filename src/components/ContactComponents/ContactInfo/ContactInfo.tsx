
import { MdOutlineVerifiedUser } from 'react-icons/md';

const ContactInfo = () => {
    const services = [
        {
            id: 1,
            title: "Office",
            description: "Come say hello at our office HQ.",
            slag: "1234 Main St, Anytown, USA",
            info: "1234 Main St, Anytown, USA",
            icon: <MdOutlineVerifiedUser />
        },
        {
            id: 2,
            title: "Email",
            description: "Our friendly team is here to help.",
            slag: "mailto:support@codepunk.com",
            info: "support@codepunk.com",
            icon: <MdOutlineVerifiedUser />
        },
        {
            id: 3,
            title: "Phone",
            description: "Monday - Friday from 8am to 5pm.",
            slag: "tel:1-800-275-2273",
            info: "1-800-275-2273",
            icon: <MdOutlineVerifiedUser />
        }
    ]

    return (
        <div className='flex flex-col gap-5'>
            {
                services.map(info => <div key={info.id} className='py-5 border border-[#c2f3a92a] rounded-xl p-8'>
                    <div className='flex'>
                        <p className="flex justify-center items-center cursor-pointer rounded-md p-2 font-medium border border-[#c2f3a92a] bg-[#c2f3a90a] shadow-sm text-[#9fec78] text-2xl">
                            {info.icon}
                        </p>
                    </div>
                    <div className='pt-5 flex flex-col gap-1.5'>
                        <h4 className='font-robotoMono font-medium'>{info.title}</h4>
                        <p className='font-roboto text-gray-400'>{info.description}</p>
                        <a href={info.slag} className='text-[#9fec78] hover:text-white transition-colors duration-300 font-medium font-robotoMono uppercase' target="_blank" rel="noopener noreferrer">{info.info}</a>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ContactInfo;