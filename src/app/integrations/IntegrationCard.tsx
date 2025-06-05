"use client";

import { motion } from "framer-motion";
import { AppData } from "./data";

interface AppCardProps {
  app: AppData;
  delay: number;
}

export function AppCard({ app, delay }: AppCardProps) {
  return (
    <motion.div
      className="border border-[#c5daba2a] bg-[#c4ecb00a] p-3 md:p-8 rounded-lg transition-colors duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center mb-2 md:mb-4">
        <div className="mr-3">{app.icon}</div>
        <h3 className="text-white text-base md:text-lg font-medium">
          {app.name}
        </h3>
      </div>
      <p className="text-gray-300 text-xs md:text-sm">{app.description}</p>
    </motion.div>
  );
}
