"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const codeSnippets: Record<
  string,
  { num: number; code: string; color: string }[]
> = {
  Python: [
    { num: 1, code: "# Python Script 🐍", color: "text-gray-400" },
    { num: 2, code: "import os", color: "text-blue-400" },
    { num: 3, code: "def read_config(path):", color: "text-purple-400" },
    { num: 4, code: "    with open(path) as f:", color: "text-white" },
    { num: 5, code: "        return f.read()", color: "text-white" },
    {
      num: 6,
      code: 'config = read_config("./config.yml")',
      color: "text-green-400",
    },
    { num: 7, code: "def greet(name):", color: "text-purple-400" },
    { num: 8, code: '    return f"Hello, {name}!"', color: "text-white" },
    { num: 9, code: 'message = greet("Prasanjit")', color: "text-white" },
    { num: 10, code: "if __name__ == '__main__':", color: "text-purple-400" },
    { num: 11, code: "    print(message)", color: "text-green-400" },
    { num: 12, code: '    print("Config Loaded")', color: "text-green-400" },
  ],
  "Node.js": [
    { num: 1, code: "// Node.js Server 🚀", color: "text-gray-400" },
    {
      num: 2,
      code: "const express = require('express');",
      color: "text-blue-400",
    },
    { num: 3, code: "const app = express();", color: "text-white" },
    { num: 4, code: "app.use(express.json());", color: "text-white" },
    { num: 5, code: "app.get('/', (req, res) => {", color: "text-purple-400" },
    {
      num: 6,
      code: "  res.send('Welcome to Node.js API');",
      color: "text-green-400",
    },
    { num: 7, code: "});", color: "text-white" },
    {
      num: 8,
      code: "const PORT = process.env.PORT || 3000;",
      color: "text-white",
    },
    { num: 9, code: "app.listen(PORT, () => {", color: "text-purple-400" },
    {
      num: 10,
      code: "  console.log(`Server on ${PORT}`);",
      color: "text-green-400",
    },
    { num: 11, code: "});", color: "text-white" },
  ],
  SQL: [
    { num: 1, code: "-- SQL Query 💾", color: "text-gray-400" },
    { num: 2, code: "SELECT id, name, email", color: "text-yellow-300" },
    { num: 3, code: "FROM users", color: "text-yellow-300" },
    { num: 4, code: "WHERE active = true", color: "text-yellow-300" },
    { num: 5, code: "ORDER BY created_at DESC", color: "text-yellow-300" },
    { num: 6, code: "LIMIT 10;", color: "text-yellow-300" },
    { num: 7, code: "-- Join with roles", color: "text-gray-400" },
    {
      num: 8,
      code: "INNER JOIN roles ON users.role_id = roles.id",
      color: "text-yellow-300",
    },
    { num: 9, code: "WHERE roles.name = 'admin'", color: "text-yellow-300" },
    { num: 10, code: ";", color: "text-yellow-300" },
  ],
  AI: [
    { num: 1, code: "# AI Model Training 🔬", color: "text-gray-400" },
    {
      num: 2,
      code: "from sklearn.ensemble import RandomForestClassifier",
      color: "text-blue-400",
    },
    {
      num: 3,
      code: "from sklearn.model_selection import train_test_split",
      color: "text-blue-400",
    },
    {
      num: 4,
      code: "X_train, X_test, y_train, y_test = train_test_split(X, y)",
      color: "text-white",
    },
    {
      num: 5,
      code: "model = RandomForestClassifier(n_estimators=100)",
      color: "text-white",
    },
    { num: 6, code: "model.fit(X_train, y_train)", color: "text-green-400" },
    {
      num: 7,
      code: "predictions = model.predict(X_test)",
      color: "text-white",
    },
    {
      num: 8,
      code: "accuracy = accuracy_score(y_test, predictions)",
      color: "text-white",
    },
    {
      num: 9,
      code: 'print(f"Accuracy: {accuracy:.2f}")',
      color: "text-yellow-300",
    },
    { num: 10, code: "# Model evaluation complete", color: "text-gray-400" },
  ],
  "Next.js": [
    { num: 1, code: "// Next.js Page ⚡", color: "text-gray-400" },
    { num: 2, code: "import Head from 'next/head';", color: "text-blue-400" },
    {
      num: 3,
      code: "export default function Home() {",
      color: "text-purple-400",
    },
    { num: 4, code: "  return (", color: "text-white" },
    { num: 5, code: "    <div className='container'>", color: "text-white" },
    {
      num: 6,
      code: "      <Head><title>Home</title></Head>",
      color: "text-green-400",
    },
    { num: 7, code: "      <h1>Hello from Next.js!</h1>", color: "text-white" },
    { num: 8, code: "    </div>", color: "text-white" },
    { num: 9, code: "  );", color: "text-white" },
    { num: 10, code: "}", color: "text-purple-400" },
  ],
};

const tabs = Object.keys(codeSnippets);

const CodeEditorTest = () => {
  const [activeTab, setActiveTab] = useState("Python");
  const codeLines = codeSnippets[activeTab];

  return (
    <div className="rounded-md overflow-hidden scrollbar-hide py-2">
      {/* File Tabs */}
      <div className="flex items-center justify-between bg-white/5  my-1 mx-8 rounded-md">
        <div className="w-full flex justify-between items-center rounded-md">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={` w-full px-4 cursor-pointer py-2 rounded-md text-sm font-mono border-r last:border-0 border-[#333] ${
                activeTab === tab
                  ? "primaryBg text-white"
                  : "text-gray-400 hover:text-white "
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className=" px-6 py-2">
        <div className="flex gap-1.5 px-3  ">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
      </div>

      {/* Code Body */}
      <div className="px-4 font-mono text-sm overflow-x-auto text-white scrollbar-hide ">
        {codeLines.map((line, index) => (
          <motion.div
            key={line.num + line.code}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
            className="flex"
          >
            <span className="w-8 text-right mr-4 text-gray-600 select-none">
              {line.num}
            </span>
            <span className={`${line.color} whitespace-pre-wrap`}>
              {line.code}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CodeEditorTest;
