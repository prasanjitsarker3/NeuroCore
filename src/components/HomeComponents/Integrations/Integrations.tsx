"use client";

import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader";
import Image from "next/image";
import integrationImage from "../../../../public/Integration.svg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024 //handle 0 here
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // set initial width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return width;
}

const Integrations = () => {
  const windowWidth = useWindowWidth();
  if (!windowWidth) return null;

  console.log(windowWidth);

  const sectionHeaderData = {
    sectionName: "Integrations",
    sectionTitle: "Integrate with your workflow",
    sectionDescription:
      "Whether you're a small business or a large enterprise, our integrations are designed to enhance your productivity and make your workflow easier.",
    isCentered: true,
  };

  return (
    <div className="relative">
      <SectionHeader sectionHeaderData={sectionHeaderData} />

      <motion.div
        className="absolute z-99 bg-green-300 text-center w-4 h-1 rounded-full top-[66%]"
        // initial={{ x: 581, opacity: 1 }}
        initial={{ x: windowWidth > 0 ? windowWidth - 1273 : 0, opacity: 1 }}
        animate={{
          x: 833,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          // ease: "easeIn",
          repeat: Number.POSITIVE_INFINITY,
          times: [0, 0.8, 1],
        }}
      />

      <motion.div
        className="absolute z-10 bg-green-300 w-4 h-1 rounded-full top-[66%]"
        // initial={{ x: 520, opacity: 1 }}
        initial={{ x: windowWidth > 0 ? windowWidth - 1333 : 0, opacity: 1 }}
        // x: windowWidth > 0 ? windowWidth - 1273 : 0, opacity: 1
        animate={{
          x: 271,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          repeat: Number.POSITIVE_INFINITY,
          times: [0, 0.8, 1],
        }}
      />

      <div className="relative z-0 flex justify-center items-center pt-16">
        <Image src={integrationImage} alt="Integration image here" />
      </div>
    </div>
  );
};

export default Integrations;
