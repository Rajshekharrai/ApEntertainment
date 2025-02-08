import React from "react";
import { motion } from "framer-motion";

const contentData = [
  {
    title: "Commercial Photography",
    description: "We offer high-quality photography for commercial and advertising purposes.",
  },
  {
    title: "Event Photography",
    description: "Capturing memorable moments at corporate events, weddings, and parties.",
  },
  {
    title: "Portrait Photography",
    description: "Professional portraits for individuals, families, and corporate use.",
  },
  {
    title: "Editorial Photography",
    description: "Providing stunning imagery for magazines, blogs, and editorial features.",
  },
  {
    title: "Advertising Photography",
    description: "Creative photography for print, digital, and billboard ads.",
  },
  {
    title: "Architectural Photography",
    description: "High-quality images showcasing architecture, real estate, and construction projects.",
  },
];

const ContentPage = () => {
  return (
    <div className="min-h-screen bg-yellow-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center text-yellow-600 mb-10">
          Photography Services
        </h1>
        <div className="space-y-12">
          {contentData.map((content, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center bg-gray-400 shadow-xl rounded-xl overflow-hidden transform transition-all duration-700 ease-in-out ${
                index % 2 === 0 ? "order-last" : "order-first"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={`lg:w-1/2 w-full h-full p-8 flex justify-center items-center ${
                  index % 2 === 0 ? "order-last" : "order-first"
                }`}
              >
                <div className="bg-yellow-600 p-6 rounded-lg w-full h-full flex justify-center items-center">
                  <h3 className="text-4xl font-bold text-black text-center">{content.title}</h3>
                </div>
              </div>

              <div
                className={`lg:w-1/2 w-full p-12 ${
                  index % 2 === 0 ? "" : "order-first"
                }`}
              >
                <p className="text-gray-900 text-lg">{content.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
