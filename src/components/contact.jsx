import React, { useState } from "react";
import { motion } from "framer-motion"; 
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import emailjs from "emailjs-com";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    howDidYouHear: "",
    estimatedBudget: "",
    videoType: "",
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

      setFormData({
        name: "",
        email: "",
        phone: "",
        howDidYouHear: "",
        estimatedBudget: "",
        videoType: "",
        message: "",
      });
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
      className="max-w-7xl mx-auto p-6 bg-yellowLight rounded-lg shadow-xl"
    >
      
      <ToastContainer />

      <motion.h2
        className="text-4xl font-bold text-center text-white mb-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>AP Entertainment and Production</p>
        <p>We'd Love To Help!</p>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md space-y-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>


            <div>
              <label htmlFor="estimatedBudget" className="block text-lg font-medium text-gray-700">
                Estimated Budget
              </label>
              <input
                type="text"
                name="estimatedBudget"
                id="estimatedBudget"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.estimatedBudget}
                onChange={handleChange}
                placeholder="Enter your estimated budget"
              />
            </div>

            <div>
              <label htmlFor="videoType" className="block text-lg font-medium text-gray-700">
                What kind of services do you want?
              </label>
              <input
                type="text"
                name="videoType"
                id="videoType"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.videoType}
                onChange={handleChange}
                placeholder="Enter the type of video"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Brief
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
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

       
        <motion.div
          className="space-y-6"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800">Contact Details</h3>
          <p className="text-gray-600">Feel free to reach out to us through the following:</p>
          <div className="space-y-4">
            
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

            {/* Address */}
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
                  d="M19 19v-6a3 3 0 00-3-3H8a3 3 0 00-3 3v6M12 3v12"
                />
              </svg>
              <div className="flex flex-col space-y-4">
                <div>
                  <h2 className="text-lg font-bold text-black">Head Office</h2>
                  <p className="text-sm text-gray-500">Change this add your address</p>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-black">Mumbai Office</h2>
                  <p className="text-sm text-gray-500">Change this and add your another address here</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
            <div className="flex items-center space-x-3">
              
              <a
                href="https://wa.me/+919990149961"
                className="text-lg text-blue-600 hover:underline"
              >
                <FaWhatsapp className="h-6 w-6 text-green-600" />
              </a>
            </div>

            <div className="flex items-center space-x-3">
             
              <a
                href="#"
                className="text-lg text-blue-600 hover:underline"
              >
                 <FaFacebook className="h-6 w-6 text-gray-600" />
              </a>
            </div>

             <div className="flex items-center space-x-3">
              
              <a
                href="#"
                className="text-lg text-blue-600 hover:underline"
              >
                <FaInstagram className="h-6 w-6 text-gray-600" />
              </a>
            </div>

            <div className="flex items-center space-x-3">
              
              <a
                href="#"
                className="text-lg text-blue-600 hover:underline"
              >
                <FaLinkedin className="h-6 w-6 text-gray-600" />
              </a>
            </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
