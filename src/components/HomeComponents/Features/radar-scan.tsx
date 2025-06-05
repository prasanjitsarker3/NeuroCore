"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RadarCard() {
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    setScanning(true);
    const interval = setInterval(() => {
      setScanning(false);
      setTimeout(() => setScanning(true), 500);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative w-full flex flex-col justify-center items-center max-w-sm rounded-xl overflow-hidden p-2 md:p-6 border border-white/5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-[#FF5F1F]/5 opacity-30"
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
      <div className="relative flex justify-center items-center mb-8 h-48 w-48 rounded-full">
        {/* Radar waves */}
        <AnimatePresence>
          {scanning && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`wave-${i}`}
                  className="absolute rounded-full border border-[#FF5F1F] opacity-0"
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
            className="absolute rounded-full border border-[#FF5F1F]/15 opacity-60"
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
              className="absolute w-[48%] h-[1px] left-1/2 right-1/2 bg-gradient-to-r from-transparent via-[#FF5F1F] to-transparent"
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

        {/* Center dot */}
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-[#FF5F1F] shadow-[0_0_10px_#FF5F1F]"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
            boxShadow: [
              "0 0 5px rgba(255, 95, 31, 0.5)",
              "0 0 15px rgba(255, 95, 31, 0.8)",
              "0 0 5px rgba(255, 95, 31, 0.5)",
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
              "conic-gradient(from 0deg, rgba(255, 95, 31, 0), rgba(255, 95, 31, 0.3), rgba(255, 95, 31, 0))",
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

      {/* Scan button */}
      <motion.button
        className="relative z-10 mt-6 w-full py-2.5 bg-gradient-to-r from-[#FF5F1F]/10 to-[#FF5F1F]/20 text-[#FF5F1F] rounded-md font-medium text-sm flex items-center justify-center"
        whileHover={{ scale: 1.02, backgroundColor: "#FF5F1F22" }}
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
          {scanning ? "Scanning for threats ..." : "Start Scan"}
        </motion.span>
      </motion.button>
    </motion.div>
  );
}
