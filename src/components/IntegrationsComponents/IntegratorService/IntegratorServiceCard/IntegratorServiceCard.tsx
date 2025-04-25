import Image from "next/image";
import { IntegratorServiceCardType } from "./IntegratorServiceCardType";


const IntegratorServiceCard: React.FC<IntegratorServiceCardType> = ({ serviceData }) => {
    return (
        <div className="border border-[#c5daba2a] bg-[#c4ecb00a] p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
                <figure className="h-10 w-10">
                    <Image className="h-full w-full" src={serviceData.image} alt={serviceData.title} width={80} height={80} />
                </figure>
                <h4 className="text-white text-md">{serviceData.title}</h4>
            </div>
            <p>{serviceData.description}</p>
        </div>
    );
};

export default IntegratorServiceCard;