import React from 'react';
import { PageHeaderType } from './PageHeaderType';

const PageHeader: React.FC<PageHeaderType> = ({ pageHeaderData }) => {
    return (
        <div className="max-w-4xl mx-auto">
            <h4 className={`${pageHeaderData.isCentered ? "text-center" : "text-left"} text-[#adff85] font-robotoMono font-bold`}>{pageHeaderData.sectionName}</h4>
            <h1 className={`${pageHeaderData.isCentered ? "text-center" : "text-left"} text-white font-bold text-3xl md:text-6xl py-5`}>{pageHeaderData.sectionTitle}</h1>
            <p className={`${pageHeaderData.isCentered ? "text-center" : "text-left"} text-lg text-gray-400 font-roboto max-w-3xl mx-auto`}>{pageHeaderData.sectionDescription}</p>
        </div>
    );
};

export default PageHeader;