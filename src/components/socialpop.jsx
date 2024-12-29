import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faDove } from "@fortawesome/free-solid-svg-icons";

const SocialMediaPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed left-4 bottom-4 md:top-1/2 md:transform md:-translate-y-1/2 z-50">
      {/* Round Button */}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
        onClick={togglePopup}
      >
        <FontAwesomeIcon
          icon={faDove}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>

      {/* Social Media Icons */}
      {isOpen && (
        <div
          className={`mt-4 p-2 bg-white rounded-lg shadow-lg flex flex-col space-y-3 md:space-y-4 md:flex-col md:space-x-0 ${
            isOpen ? "block" : "hidden"
          } sm:flex sm:space-x-2 sm:space-y-0`}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform"
            onClick={togglePopup}
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-blue-400 text-white rounded-full hover:scale-110 transition-transform"
            onClick={togglePopup}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-pink-500 text-white rounded-full hover:scale-110 transition-transform"
            onClick={togglePopup}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-blue-700 text-white rounded-full hover:scale-110 transition-transform"
            onClick={togglePopup}
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      )}
    </div>
  );
};

export default SocialMediaPopup;
