"use client";

import { motion } from "framer-motion";

import CodeEditor from "@/components/HomeComponents/Features/code-editor";
import RadarScan from "@/components/HomeComponents/Features/radar-scan";
import SecurityToken from "@/components/HomeComponents/Features/security-token";
import PlatformIcons from "@/components/HomeComponents/Features/platform-icons";
import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader";
import SecurityAccess from "./security-access";

const Features = () => {
  const sectionHeaderData = {
    sectionName: "Features",
    sectionTitle: "Experience our features",
    sectionDescription:
      "Dive into our features and experience the difference we can make in your work and daily life.",
    isCentered: true,
  };

  const featuresData = [
    {
      id: 1,

      title: "Optimized Code",
      component: <CodeEditor />,
      description:
        "Naming conventions, and design principles to enhance readability and reduce complexity. It is well-organized, properly commented, and devoid of redundant or unnecessary elements.",
    },
    {
      id: 2,

      title: "Scan for Threats",
      component: <RadarScan />,
      description:
        "Identify and mitigate potential security risks and vulnerabilities.",
    },
    {
      id: 3,

      title: "Advanced Encryption",
      component: <SecurityToken />,
      description:
        "Be sure that sensitive information remains confidential and secure.",
    },
    {
      id: 4,

      title: "Seamless Integration",
      component: <PlatformIcons />,
      description:
        "Smoothly connect and operate with other compatible platforms.",
    },
    {
      id: 5,

      title: "Security Access",
      component: <SecurityAccess />,
      description: "Verify the identity of users before granting them access.",
    },
  ];

  return (
    <div>
      <div className="my-10">
        <SectionHeader sectionHeaderData={sectionHeaderData} />
      </div>
      <main className="grid gap-6">
        <div className="grid md:grid-cols-20 gap-6">
          {featuresData.slice(0, 2).map((feature, index) => {
            const colSpanClass =
              index === 0 ? "md:col-span-12" : "md:col-span-8";
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`${colSpanClass} bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-900/50`}
              >
                {feature.component}
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-xl font-semibold">{feature.title}</h2>
                </div>
                <div className="bottom-4/5">
                  {feature.description && (
                    <p className="mt-4 text-sm text-gray-300">
                      {feature.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuresData.slice(2).map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-900/50"
            >
              {feature.component}
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xl font-semibold">{feature.title}</h2>
              </div>
              {feature.description && (
                <p className="mt-4 text-sm text-gray-300">
                  {feature.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Features;
