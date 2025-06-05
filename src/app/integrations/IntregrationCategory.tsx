"use client";

import { motion } from "framer-motion";
import { appCategories } from "./data";
import { AppCard } from "./IntegrationCard";

export default function IntegrationCategories() {
  return (
    <div className=" max-w-6xl mx-auto px-2 pt-8">
      {appCategories.map((category, categoryIndex) => (
        <div key={category.name} className="mb-16">
          <motion.h2
            className="text-2xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            {category.name}
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {category.apps.map((app, appIndex) => (
              <AppCard
                key={app.name}
                app={app}
                delay={categoryIndex * 0.1 + appIndex * 0.05}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
