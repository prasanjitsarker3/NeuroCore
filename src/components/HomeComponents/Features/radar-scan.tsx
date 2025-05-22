"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RadarCard() {
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    // Start scanning animation after component mounts
    setScanning(true);

    // Optional: create a scanning cycle
    const interval = setInterval(() => {
      setScanning(false);
      setTimeout(() => setScanning(true), 500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative w-full flex flex-col justify-center items-center max-w-sm rounded-xl overflow-hidden bg-gradient-to-br from-[#0e1a24] to-[#0a1118] p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#0e1a24] via-[#0a1f2d] to-[#0e1a24] opacity-30"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 8,
          ease: "linear",
        }}
      />

      {/* Radar container */}
      <div className="relative flex justify-center items-center mb-8 h-48 w-48 rounded-full ">
        {/* Radar waves - emanating from center */}
        <AnimatePresence>
          {scanning && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`wave-${i}`}
                  className="absolute rounded-full border border-[#1a3b2a] opacity-0"
                  initial={{ width: 0, height: 0, opacity: 0 }}
                  animate={{
                    width: ["0%", "100%"],
                    height: ["0%", "100%"],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 1.3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeOut",
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Static radar circles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`static-${i}`}
            className="absolute rounded-full border border-[#1a3b2a] opacity-60"
            style={{
              width: `${(i + 1) * 25}%`,
              height: `${(i + 1) * 25}%`,
            }}
          />
        ))}

        {/* Scanning line */}
        <AnimatePresence>
          {scanning && (
            <motion.div
              className="absolute w-[48%] h-[1px] left-1/2 right-1/2 bg-gradient-to-r from-transparent via-[#4ade80] to-transparent"
              style={{ transformOrigin: "0% 50%" }}
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 360, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                rotate: {
                  duration: 3,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                },
                opacity: { duration: 0.5 },
              }}
            />
          )}
        </AnimatePresence>

        {/* Center dot - enhanced animation */}
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-[#4ade80] shadow-[0_0_10px_#4ade80]"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
            boxShadow: [
              "0 0 5px rgba(74, 222, 128, 0.5)",
              "0 0 15px rgba(74, 222, 128, 0.8)",
              "0 0 5px rgba(74, 222, 128, 0.5)",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Radar sweep */}
        <motion.div
          className="absolute w-1/2 h-1/2"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(74, 222, 128, 0), rgba(74, 222, 128, 0.3), rgba(74, 222, 128, 0))",
            transformOrigin: "center",
            borderRadius: "50%",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Text content */}
      <div className="relative z-10">
        <motion.h2
          className="text-xl font-bold text-white text-center mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Scan for Threats
        </motion.h2>
        <motion.p
          className="text-[#a3b8cc] text-center text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Identify and mitigate potential security risks and vulnerabilities.
        </motion.p>
      </div>

      {/* Scan button */}
      <motion.button
        className="relative z-10 mt-6 w-full py-2.5 bg-gradient-to-r from-[#1a3b2a] to-[#2a4b3a] text-[#4ade80] rounded-md font-medium text-sm flex items-center justify-center"
        whileHover={{ scale: 1.02, backgroundColor: "#1a3b2a" }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        onClick={() => {
          setScanning(false);
          setTimeout(() => setScanning(true), 300);
        }}
      >
        <motion.span
          animate={{ opacity: scanning ? [1, 0.7, 1] : 1 }}
          transition={{
            duration: 1.5,
            repeat: scanning ? Number.POSITIVE_INFINITY : 0,
          }}
        >
          {scanning ? "Scanning..." : "Start Scan"}
        </motion.span>
      </motion.button>
    </motion.div>
  );
}
