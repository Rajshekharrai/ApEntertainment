import React from "react";
import { motion } from "framer-motion";

const audioServicesData = [
  {
    title: "Audio Recording",
    description:
      "Our experts provide high-quality recording services for podcasts, voiceovers, audiobooks, music demos, and other audio projects, utilizing professional equipment and sound engineering expertise.",
  },
  {
    title: "Dubbing & Voiceover Services",
    description:
      "If you want any type of dubbing & voiceover services, we provide every type of dubbing and voiceover services for videos, films, commercials, e-learning materials, and other multimedia projects.",
  },
  {
    title: "Music Production & Composition",
    description:
      "We offer custom music production and composition services for videos, films, commercials, games, and other multimedia projects, creating original soundtracks and sound effects.",
  },
  {
    title: "Podcast Creation & Production",
    description:
      "Comprehensive podcast creation services, including concept development, recording, editing, mixing, mastering, and distribution, helping businesses and individuals launch and manage successful podcasts.",
  },
];

const AudioServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center text-yellow-600 mb-10">
          Audio Services
        </h1>
        <div className="space-y-12">
          {audioServicesData.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center bg-gray-400 shadow-xl rounded-xl overflow-hidden transform transition-all duration-100 ease-in-out ${
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
                <div className="bg-yellow-600 p-6 rounded-md w-full h-full flex justify-center items-center">
                  <h3 className="text-4xl font-bold text-black text-center">{service.title}</h3>
                </div>
              </div>

              <div
                className={`lg:w-1/2 w-full p-12 ${
                  index % 2 === 0 ? "" : "order-first"
                }`}
              >
                <p className="text-gray-700 text-lg">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioServicesPage;
