import React from "react";
import { motion } from "framer-motion";

const ecommerceServicesData = [
  {
    title: "E-Commerce Platform Registration",
    description:
      "Streamline your online presence by registering on popular e-commerce platforms, allowing customers to easily find and purchase your products.",
  },
  {
    title: "Campaign Management",
    description:
      "Manage and optimize marketing campaigns effectively to increase visibility and sales, ensuring that your promotional efforts reach the right audience.",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Provide round-the-clock customer support to enhance customer satisfaction and loyalty, addressing queries and issues at any time.",
  },
  {
    title: "Sales Force Management",
    description:
      "Utilize advanced sales force management tools to coordinate sales efforts, track performance, and improve overall sales strategies.",
  },
];

const EcommerceServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center text-yellow-600 mb-10">
          E-Commerce Integration Services
        </h1>
        <div className="space-y-12">
          {ecommerceServicesData.map((service, index) => (
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

export default EcommerceServicesPage;
