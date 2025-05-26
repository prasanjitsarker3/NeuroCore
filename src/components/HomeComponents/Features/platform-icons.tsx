"use client";

import { motion } from "framer-motion";
import {
  LuFingerprint,
  LuGithub,
  LuGitlab,
  LuSlack,
  LuDatabase,
  LuCloud,
  LuServer,
  LuCpu,
} from "react-icons/lu";
import { useState } from "react";

export default function PlatformIcons() {
  const platforms = [
    { icon: <LuFingerprint className="h-6 w-6" />, name: "Identity" },
    { icon: <LuGithub className="h-6 w-6" />, name: "GitHub" },
    { icon: <LuGitlab className="h-6 w-6" />, name: "GitLab" },
    { icon: <LuSlack className="h-6 w-6" />, name: "Slack" },
    { icon: <LuDatabase className="h-6 w-6" />, name: "Database" },
    { icon: <LuCloud className="h-6 w-6" />, name: "Cloud" },
    { icon: <LuServer className="h-6 w-6" />, name: "Server" },
    { icon: <LuCpu className="h-6 w-6" />, name: "Systems" },
  ];

  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="space-y-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {[0, 1].map((row) => (
        <div key={row} className="overflow-hidden w-full">
          <motion.div
            className="flex gap-4"
            animate={{
              x: hovered
                ? row === 0
                  ? ["-100%", "0%"]
                  : ["100%", "0%"]
                : "0%",
            }}
            transition={{
              repeat: hovered ? Infinity : 0,
              duration: 6,
              ease: "linear",
            }}
          >
            {platforms.slice(row * 4, row * 4 + 4).map((platform) => (
              <div
                key={platform.name}
                className="flex flex-col items-center justify-center w-28 h-fit p-1 bg-gray-800/50 rounded-lg border border-orange-900/50"
              >
                <div className="p-3 bg-primary-900/30 rounded-full text-primary mb-2">
                  {platform.icon}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
