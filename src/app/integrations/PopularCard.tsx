"use client";

import { motion } from "framer-motion";
import {
  FigmaIcon,
  SlackIcon,
  GoogleIcon,
  AirtableIcon,
  MondayIcon,
  ArcIcon,
} from "../../components/Common/icon";

const apps = [
  {
    name: "Figma",
    icon: <FigmaIcon />,
    description:
      "Leading collaborative design tool for building meaningful products.",
  },
  {
    name: "Arc",
    icon: <ArcIcon />,
    description:
      "Experience a calmer, more personal internet in this browser designed for you.",
  },
  {
    name: "Slack",
    icon: <SlackIcon />,
    description:
      "Messaging and collaboration platform designed for teams and workplaces.",
  },
  {
    name: "Google",
    icon: <GoogleIcon />,
    description:
      "Tools are designed to help you quickly and securely sign in to the apps",
  },
  {
    name: "Airtable",
    icon: <AirtableIcon />,
    description:
      "Cloud-based platform for creating and sharing relational databases.",
  },
  {
    name: "Monday",
    icon: <MondayIcon />,
    description:
      "Connect, collaborate, and execute ideas and workflows in real-time from any doc.",
  },
];

export default function PopularApps() {
  return (
    <div className="  max-w-6xl mx-auto px-2 py-8">
      <motion.h1
        className="text-2xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Popular
      </motion.h1>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {apps.map((app, index) => (
          <motion.div
            key={app.name}
            className="border border-[#c5daba2a] bg-[#c4ecb00a] p-3 md:p-8 rounded-lg transition-colors duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center mb-2 md:mb-4">
              <div className="mr-3">{app.icon}</div>
              <h2 className="text-white text-base md:text-lg font-medium">
                {app.name}
              </h2>
            </div>
            <p className="text-gray-300 text-xs md:text-sm">
              {app.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
