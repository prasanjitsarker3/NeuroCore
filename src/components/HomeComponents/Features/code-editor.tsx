"use client";

import { motion } from "framer-motion";

const CodeEditor = () => {
  const codeLines = [
    { num: 1, code: "-- Innovation DB v1.0 🚀", color: "text-gray-500" },
    { num: 2, code: "CREATE TABLE innovations (", color: "text-blue-400" },
    { num: 3, code: "  id SERIAL PRIMARY KEY,", color: "text-white" },
    {
      num: 4,
      code: "  project_name VARCHAR(50) NOT NULL,",
      color: "text-white",
    },
    { num: 5, code: "  tech_stack VARCHAR(100),", color: "text-white" },
    {
      num: 6,
      code: "  launch_date DATE DEFAULT CURRENT_DATE",
      color: "text-white",
    },
    { num: 7, code: ");", color: "text-blue-400" },
    { num: 8, code: "", color: "text-white" },
    { num: 9, code: "INSERT INTO innovations VALUES", color: "text-green-400" },
    {
      num: 10,
      code: "  (1, 'AI-Powered SQL', 'SQL, AI, Cloud');",
      color: "text-green-400",
    },
    { num: 11, code: "", color: "text-white" },
    { num: 12, code: "SELECT * FROM innovations;", color: "text-yellow-300" },
  ];

  return (
    <div className=" border border-white/5 p-2 md:p-4 rounded-lg">
      <div className="flex items-center justify-between  bg-white/5 py-2 px-2 md:px-6 rounded-md">
        <div className="flex gap-1.5 px-3  ">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div>
          <span className="text-sm text-white/70 font-mono">
            Optimized Code
          </span>
        </div>
      </div>
      <div className=" p-2 md:p-4 font-mono text-[10px] md:text-sm overflow-x-auto text-white">
        {codeLines.map((line, index) => (
          <motion.div
            key={line.num + line.code}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.04 }}
            className="flex"
          >
            <span className="w-8 text-right mr-2 text-gray-500 select-none">
              {line.num}
            </span>
            <span className={line.color}>{line.code}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CodeEditor;
