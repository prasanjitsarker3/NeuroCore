"use client";

import { motion } from "framer-motion";
import "./radar-scan.css";

export default function RadarScanner() {
  return (
    <div className="flex items-center justify-center h-96">
      <div className="relative w-64 h-64 rounded-full border-4 border-emerald-500 bg-emerald-900/20 radar-shadow overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 w-1/2 h-full origin-left bg-gradient-to-r from-emerald-400/20 to-transparent"
          whileHover={{
            rotate: 360,
            transition: {
              repeat: Infinity,
              ease: "linear",
              duration: 2,
            },
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
        </div>
      </div>
    </div>
  );
}
