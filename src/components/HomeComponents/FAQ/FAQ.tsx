"use client";
import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const FAQ = () => {
  const sectionHeaderData = {
    sectionName: "FAQ",
    sectionTitle: "Everything you need to know",
    sectionDescription:
      "Here you can find answers to frequently asked questions about our framework component.",
    isCentered: true,
  };

  const [openIndex, setOpenIndex] = useState<number | null>(-1);

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
    <div>
      <SectionHeader sectionHeaderData={sectionHeaderData} />

      <div className="w-full flex">
        <div className="max-w-xl mx-auto mt-20 space-y-4 flex-grow">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg bg-gray-900 text-white"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-4 py-5 flex items-center justify-between text-left"
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <FaMinus className="text-gray-200 w-4 h-4" />
                ) : (
                  <FaPlus className="text-gray-200 w-4 h-4" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pt-4 pb-16 text-sm text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
