import { SectionHeaderType } from "./SectionHeaderType";

const SectionHeader: React.FC<SectionHeaderType> = ({ sectionHeaderData }) => {
  return (
    <div className="">
      <h1
        className={`${
          sectionHeaderData.isCentered ? "text-center" : "text-left"
        } text-white font-bold text-lg md:text-3xl py-5`}
      >
        {sectionHeaderData.sectionTitle}
      </h1>
      <p
        className={`${
          sectionHeaderData.isCentered ? "text-center" : "text-left"
        } text-sm text-gray-400 font-roboto`}
      >
        {sectionHeaderData.sectionDescription}
      </p>
    </div>
  );
};

export default SectionHeader;
