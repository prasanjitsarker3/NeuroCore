"use client";

import { motion } from "framer-motion";

export default function CodeEditor() {
  const codeLines = [
    { num: 1, code: 'import React from "react";', color: "text-emerald-400" },
    {
      num: 2,
      code: "class component extends React.Component {",
      color: "text-white",
    },
    { num: 3, code: "  render() {", color: "text-emerald-400" },
    { num: 4, code: "    return (", color: "text-white" },
    { num: 5, code: "      <div>", color: "text-emerald-300" },
    { num: 6, code: "        <h1>codepunk</h1>", color: "text-emerald-300" },
    {
      num: 7,
      code: "        <p>This is a simple React component.</p>",
      color: "text-emerald-300",
    },
    { num: 8, code: "      </div>", color: "text-emerald-300" },
    { num: 9, code: "    );", color: "text-white" },
    { num: 10, code: "  }", color: "text-white" },
    { num: 11, code: "}", color: "text-white" },
    { num: 12, code: "export default codepunk;", color: "text-emerald-400" },
  ];

  return (
    <div className="bg-gray-950 rounded-lg overflow-hidden border border-gray-800">
      <div className="flex gap-1.5 px-3 py-2 bg-gray-900">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="p-4 font-mono text-sm overflow-x-auto">
        {codeLines.map((line, index) => (
          <motion.div
            key={line.num}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
            className="flex"
          >
            <span className="w-7 text-right mr-4 text-gray-600">
              {line.num}
            </span>
            <span className={line.color}>{line.code}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
