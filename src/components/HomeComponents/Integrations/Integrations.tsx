/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader";
import Image from "next/image";
import integrationImage from "../../../../public/Integration.svg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

const Integrations = () => {
  const [mount, setMount] = useState(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;

  const sectionHeaderData = {
    sectionName: "Integrations",
    sectionTitle: "Integrate with your workflow",
    sectionDescription:
      "Whether you're a small business or a large enterprise, our integrations are designed to enhance your productivity and make your workflow easier.",
    isCentered: true,
  };

  return (
    <div className="my-32">
      <div className="my-10 md:my-20 mb-40 md:mb-8">
        <SectionHeader sectionHeaderData={sectionHeaderData} />
      </div>
      <div className="relative rotate-90 md:rotate-0 my-28 md:my-10">
        <div className="relative z-0 flex justify-center items-center .pt-16">
          <motion.div
            className="absolute z-10 bg-green-300 w-4 h-1 rounded-full top-1/2 left-1/2"
            style={{ transform: "translateX(-50%) translateY(-50%)" }}
            initial={{ x: 0, opacity: 1 }}
            animate={{
              x: [60, 200],
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 3,
              times: [0, 0.8, 1],
            }}
          />

          <motion.div
            className="absolute z-10 bg-green-300 w-4 h-1 rounded-full top-1/2 left-1/2"
            style={{ transform: "translateX(-50%) translateY(-50%)" }}
            initial={{ x: 0, opacity: 1 }}
            animate={{
              x: [-80, -200],
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 3,
              times: [0, 0.8, 1],
            }}
          />

          <Image
            src={integrationImage || "/placeholder.svg"}
            alt="Integration image here"
          />
        </div>
      </div>
    </div>
  );
};

export default Integrations;
