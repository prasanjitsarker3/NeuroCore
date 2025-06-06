"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function SecurityToken() {
  const [token, setToken] = useState("r9H4DnOj6LVw2C");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const generateToken = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let newToken = "";
    for (let i = 0; i < 14; i++) {
      newToken += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setToken(newToken);
  };

  const handleMouseEnter = () => {
    generateToken();
    intervalRef.current = setInterval(generateToken, 100);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col items-center justify-center h-64 relative "
    >
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-20 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="text-[8px] text-white opacity-30">
              {Math.random() > 0.5 ? "1" : "0"}
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="  bg-white/5 px-6 py-4 rounded-lg  relative z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl font-mono tracking-wider text-gray-300 hover:text-amber-500"
        >
          {token}
        </motion.div>
      </motion.div>
    </div>
  );
}
