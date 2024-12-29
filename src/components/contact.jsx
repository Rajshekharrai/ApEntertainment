import React, { useState } from "react";
import { motion } from "framer-motion"; // For animations
import { ToastContainer, toast } from "react-toastify"; // For popups
import "react-toastify/dist/ReactToastify.css"; // Popup styling
import emailjs from "emailjs-com"; // For sending emails

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      await emailjs.send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formData,
        "your_user_id" // Replace with your EmailJS user ID
      );

      
      toast.success("Your message has been sent successfully!", {
        position: "top-center",
      });

     
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {

      toast.error("Failed to send the message. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto p-6 bg-gradient-to-br from-gray-100 to-blue-50 rounded-lg shadow-xl"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Header */}
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Get in Touch
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <motion.div
          className="space-y-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800">
            Contact Details
          </h3>
          <p className="text-gray-600">Feel free to reach out through:</p>
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12v4m0 0v-4m0 4v-4m8 8h-6a2 2 0 01-2-2v-6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2z"
                />
              </svg>
              <a
                href="mailto:apentertainmentproduction@gmail.com"
                className="text-lg text-blue-600 hover:underline"
              >
                apentertainmentproduction@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.2 10.6a4.8 4.8 0 004.8 4.8m1.8-1.8h1.8v1.8a4.8 4.8 0 01-4.8 4.8h-1.8a4.8 4.8 0 01-4.8-4.8v-1.8h1.8"
                />
              </svg>
              <a
                href="tel:+919990149961"
                className="text-lg text-blue-600 hover:underline"
              >
                +91 99901 49961
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
