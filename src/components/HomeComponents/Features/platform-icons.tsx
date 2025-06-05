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

  return (
    <div className="space-y-3 w-full h-full  flex flex-col justify-center items-center">
      {[0, 1].map((row) => (
        <div key={row} className="overflow-hidden w-full ">
          <motion.div className="flex justify-center gap-4">
            {platforms.slice(row * 4, row * 4 + 4).map((platform) => (
              <div
                key={platform.name}
                className="flex flex-col items-center justify-center"
              >
                <div className="p-3 bg-white/5 rounded-full primaryColor mb-2">
                  {platform.icon}
                </div>
                <span className="text-xs text-[#FF5F1F]/40">
                  {platform.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
