import React from "react";
import { motion } from "framer-motion";

const graphicServicesData = [
  {
    title: "Branding & Marketing Materials",
    description:
      "We create high-impact visual designs for branding, marketing, and advertising campaigns, including logos, brand guidelines, marketing collateral (brochures, flyers, posters), and advertising banners.",
  },
  {
    title: "Digital Visual Design",
    description:
      "We provide custom visual design solutions for websites, mobile applications, and other digital platforms, focusing on user experience and user interface design. This includes website, app interfaces, and interactive prototypes.",
  },
  {
    title: "Social Media Graphics",
    description:
      "We develop engaging and platform-optimized social media posts, stories, and cover images to increase brand awareness, engagement, and reach.",
  },
  {
    title: "Print Design",
    description:
      "We design high-quality print materials, such as brochures, flyers, business cards, letterheads, packaging, and other print collateral, ensuring print-ready files and consistent branding.",
  },
  {
    title: "Product Photography for E-commerce",
    description:
      "We offer professional product photography services optimized for e-commerce platforms, including high-resolution images, lifestyle shots, and 360° views, enhancing product presentation and driving sales.",
  },
];

const GraphicServicesPage = () => {
  return (
    <div className="min-h-screen bg-yellow-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center text-yellow-600 mb-10">
          Graphic Design & Visual Services
        </h1>
        <div className="space-y-12">
          {graphicServicesData.map((service, index) => (
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

export default GraphicServicesPage;
