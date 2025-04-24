import { SectionHeaderType } from "./SectionHeaderType";


const SectionHeader: React.FC<SectionHeaderType> = ({ sectionHeaderData }) => {
    return (
        <div className="px-4">
            <h4 className={`${sectionHeaderData.isCentered ? "text-center" : "text-left"} text-[#adff85] font-robotoMono font-bold`}>{sectionHeaderData.sectionName}</h4>
            <h1 className={`${sectionHeaderData.isCentered ? "text-center" : "text-left"} text-white font-bold text-3xl md:text-5xl py-5`}>{sectionHeaderData.sectionTitle}</h1>
            <p className={`${sectionHeaderData.isCentered ? "text-center" : "text-left"} text-lg text-gray-400 font-roboto`}>{sectionHeaderData.sectionDescription}</p>
        </div>
    );
};

export default SectionHeader;