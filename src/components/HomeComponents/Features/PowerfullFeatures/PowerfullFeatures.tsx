"use client";

import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader";
import Image from "next/image";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import analyticalImage from "@/assets/images/clients/analytical.svg";
const PowerfullFeatures = () => {
  const sectionHeaderData = {
    sectionName: "Features",
    sectionTitle: "Explore our powerful features",
    sectionDescription:
      "We've built a comprehensive suite of features to help you achieve more, faster, and with greater ease.",
    isCentered: true,
  };

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What is your refund policy?",
      answer:
        "We offer full refunds within 30 days of purchase.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "How do I change my password?",
      answer:
        "Go to account settings and click on 'Change Password'.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Do you offer support?",
      answer:
        "Yes, we provide 24/7 customer support via chat and email.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Do you offer support?",
      answer:
        "Yes, we provide 24/7 customer support via chat and email.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <div className="max-w-6xl my-32">
      <div className="mb-16 md:12">
        <SectionHeader sectionHeaderData={sectionHeaderData} />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-0 lg:gap-4">
        <div className="w-full md:w-1/2 flex">
          <div className="max-w-xl mx-auto mt-8 md:mt-8 lg:mt-16 xl:mt-24  space-y-4 flex-grow">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-600 rounded-lg bg-gray-900 text-white"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 py-3 md:py-3 lg:py-3 flex items-center justify-between text-left"
                >
                  <span className="font-medium">{faq.question}</span>
                  {openIndex === index ? (
                    <FaMinus className="text-primary w-4 h-4" />
                  ) : (
                    <FaPlus className="text-primary w-4 h-4" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 pt-4 md:pt-0 lg:pt-4 pb-16 md:pb-0 lg:pb-12 xl:pb-16 text-sm text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image with gradient background */}
        <div className="w-full md:w-1/2 flex">
          <div className="flex-grow p-2 md:p-6 flex items-center justify-center">
            <div className="rounded-2xl bg-gray-800 p-[2px]">
              <div className="bg-[#0f0f0f] rounded-2xl shadow-xl">
                <Image
                  src={analyticalImage}
                  alt="Analytical Image"
                  height={500}
                  width={700}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerfullFeatures;
