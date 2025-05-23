"use client";

// import { useState } from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { FaArrowRight } from "react-icons/fa6";
import TypewriterComponent from "typewriter-effect";
// import { motion, AnimatePresence } from "framer-motion";
import CodeEditorTest from "./Test";

// const technologies = [
//   {
//     id: "nextjs",
//     name: "Next.js",
//     code: `// app/page.tsx
// export default function Home() {
//   return (
//     <main className="text-center">
//       <h1>👋 Welcome to DevWave</h1>
//       <p>Empowering developers with cutting-edge web solutions.</p>
//     </main>
//   );
// }`,
//   },
//   {
//     id: "nodejs",
//     name: "Node.js",
//     code: `// server.js
// import express from 'express';
// const app = express();
// const PORT = 4000;

// app.get('/', (req, res) => {
//   res.send('🚀 Server is live on port ' + PORT);
// });

// app.listen(PORT, () => {
//   console.log(\`✅ Node.js server running at http://localhost:\${PORT}\`);
// });`,
//   },
//   {
//     id: "sql",
//     name: "SQL",
//     code: `-- INNER JOIN: Get posts with author info
// SELECT u.name, p.title
// FROM users u
// INNER JOIN posts p ON u.id = p.user_id;

// -- OUTER JOIN: All users, even if no posts
// SELECT u.name, p.title
// FROM users u
// LEFT JOIN posts p ON u.id = p.user_id;`,
//   },
//   {
//     id: "ai",
//     name: "AI",
//     code: `// Prompt + Model
// import { generateText } from 'ai';
// import { openai } from '@ai-sdk/openai';

// const response = await generateText({
//   model: openai('gpt-4o'),
//   prompt: "Train an AI model to analyze reviews",
// });
// console.log("🧠 AI Response:", response.text);`,
//   },
//   {
//     id: "python",
//     name: "Python",
//     code: `# Connect AI model with DB
// import sqlite3
// from sklearn.linear_model import LogisticRegression

// conn = sqlite3.connect('data.db')
// data = conn.execute("SELECT * FROM users").fetchall()

// model = LogisticRegression()
// model.fit([[u[1]] for u in data], [u[2] for u in data])

// print("✅ Model trained with database data")`,
//   },
// ];

const Hero: React.FC = () => {
  // const [activeTab, setActiveTab] = useState("nextjs");

  return (
    <section className=" text-white pt-10">
      {/* Header */}
      <div className=" max-w-6xl mx-auto px-2">
        <div className=" grid grid-cols-12 gap-6">
          <div className=" col-span-7">
            {/* <div>
              <p className=" text-amber-400 hover:text-white transition-all duration-500 font-robotoMono flex items-center gap-3 cursor-pointer">
                <span className="border-l-2 border-amber-400 h-4 w-0.5"></span>{" "}
                <span>Watch our event</span> <FaArrowRight />
              </p>
            </div> */}
            <h1 className="text-3xl md:text-5xl font-bold py-5 leading-tight">
              Build new products <br />
              <p className="primaryColor flex">
                <span className="text-white">for</span> &nbsp;{" "}
                <TypewriterComponent
                  options={{
                    strings: ["developers", "startups", "customers"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
            </h1>
            <p className="text-gray-300 text-lg font-roboto mb-6 max-w-md">
              Our framework component is built to handle scaling demands with
              agility. Lightning-fast performance is our promise.
            </p>

            {/* Buttons    */}
            <div className="py-10 flex gap-4">
              <Link
                href="/signup"
                className="flex justify-center items-center rounded-xl bg-white/5 px-6 py-2 text-sm font-medium text-white hover:text-[#FF5F1F] font-robotoMono z-10"
              >
                GET STARTED <MdOutlineKeyboardArrowRight className="text-xl" />{" "}
              </Link>
            </div>
          </div>
          {/* Code Tabs */}
          <div className=" col-span-5 overflow-hidden  bg-[#c2f3a90a] rounded-lg  z-10">
            {/* <div className="grid grid-cols-5 ">
              {technologies.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => setActiveTab(tech.id)}
                  className={`py-3 px-2 text-sm font-medium transition-colors border-b border-[#c2f3a92a] ${
                    activeTab === tech.id
                      ? " bg-white/10 text-white "
                      : " bg-[#c2f3a90a] text-white"
                  }`}
                >
                  {tech.name}
                </button>
              ))}
            </div>

            <div className="relative h-[400px] overflow-hidden scrollbar-hide">
              <AnimatePresence mode="wait">
                {technologies.map(
                  (tech) =>
                    tech.id === activeTab && (
                      <motion.div
                        key={tech.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0"
                      >
                        <pre className="text-sm p-4 h-full overflow-auto scrollbar-hide">
                          <code className="font-mono text-white">
                            {tech.code}
                          </code>
                        </pre>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div> */}
            <CodeEditorTest />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
