"use client";

import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader";
import Image from "next/image";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import analyticalImage from "../../../../../public/analytical.svg";

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
        "We offer full refunds within 30 days of purchase. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: analyticalImage,
    },
    {
      question: "How do I change my password?",
      answer:
        "Go to account settings and click on 'Change Password'. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: analyticalImage,
    },
    {
      question: "Do you offer support?",
      answer:
        "Yes, we provide 24/7 customer support via chat and email. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: analyticalImage,
    },
    {
      question: "Is data backed up regularly?",
      answer:
        "Yes, your data is automatically backed up daily to ensure minimal loss. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: analyticalImage,
    },
    {
      question: "Can I upgrade my plan anytime?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan at any time. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: analyticalImage,
    },
  ];

  return (
    <div className="pt-6 ">
      <SectionHeader sectionHeaderData={sectionHeaderData} />

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 min-h-[500px] py-3">
        {/* FAQ Section */}
        <div className="w-full h-[500px] md:w-1/2 flex items-center">
          <div className="max-w-xl mx-auto space-y-4 w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#c4ecb00a] rounded-lg text-white/50 py-2"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 py-3 flex items-center justify-between text-left"
                >
                  <span className="font-medium">{faq.question}</span>
                  {openIndex === index ? (
                    <FaMinus className=" primaryColor w-4 h-4" />
                  ) : (
                    <FaPlus className=" primaryColor w-4 h-4" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 pt-4 pb-6 text-sm text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full min-h-[500px] md:w-1/2 flex items-center justify-center md:justify-end">
          <div className="relative w-full h-[500px] max-w-xl">
            <Image
              src={faqs[openIndex ?? 0].image}
              alt="Feature Image"
              fill
              className="rounded-lg object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerfullFeatures;
