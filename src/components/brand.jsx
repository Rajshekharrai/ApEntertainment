import React, { useState, useEffect } from "react";

const brands = [
  "/src/assets/brands/IMG-20250201-WA0026.jpg",
  "/src/assets/brands/IMG-20250201-WA0041.jpg",
  "/src/assets/brands/IMG-20250201-WA0031.jpg",
  "/src/assets/brands/IMG-20250201-WA0032.jpg",
  "/src/assets/brands/IMG-20250201-WA0033.jpg",
  "/src/assets/brands/IMG-20250201-WA0034.jpg",
  "/src/assets/brands/IMG-20250201-WA0035.jpg",
  "/src/assets/brands/IMG-20250201-WA0036.jpg",
  "/src/assets/brands/IMG-20250201-WA0037.jpg",
  "/src/assets/brands/IMG-20250201-WA0038.jpg",
  "/src/assets/brands/IMG-20250201-WA0039.jpg",
  "/src/assets/brands/IMG-20250201-WA0040.jpg",
  "/src/assets/brands/IMG-20250201-WA00341.jpg",
  "/src/assets/brands/IMG-20250201-WA00342.jpg",
  "/src/assets/brands/IMG-20250201-WA00343.jpg",
  "/src/assets/brands/IMG-20250201-WA00344.jpg",
  "/src/assets/brands/IMG-20250201-WA00345.jpg",
  "/src/assets/brands/IMG-20250201-WA00346.jpg",
];

const SlidingBrands = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  
  const visibleBrands = [
    brands[currentIndex % brands.length],
    brands[(currentIndex + 1) % brands.length],
    brands[(currentIndex + 2) % brands.length],
  ];

  return (
    <div className="relative overflow-hidden w-full py-6 ">
     
      <div className="flex justify-center items-center space-x-4">
        {visibleBrands.map((logo, index) => (
          <div
            key={index}
            className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center rounded-xl bg-orange-100 shadow-lg transform transition-transform hover:scale-110"
          >
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="w-full h-full object-contain opacity-80 hover:opacity-100"
            />
          </div>
        ))}
      </div>

      <br /><br /><br />
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {brands.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-blue-500"
                : "bg-gray-300"
            } transition-all duration-300`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SlidingBrands;
