import { useState, useEffect } from "react";
import { testimonials } from "../constants";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const startIndex = currentIndex * testimonialsPerSlide;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + testimonialsPerSlide);

  return (
    <div className="mt-30 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 font-bold text-orange-100">
        What People are Saying
      </h2>
      <div className="relative w-full overflow-hidden">
        {/* Testimonials container */}
        <div className="flex justify-between transition-transform duration-700 ease-in-out">
          {currentTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full sm:w-1/3 lg:w-1/3 xl:w-1/3 px-4 py-2 flex-shrink-0 transition-transform transform hover:scale-105"
            >
              <div className="bg-white rounded-xl p-8 text-md border border-neutral-300 shadow-lg transition-all duration-300 flex flex-col h-[350px]">
                <p className="text-lg sm:text-xl lg:text-2xl text-neutral-800 flex-grow overflow-y-auto custom-scroll">
                  {testimonial.text}
                </p>
                <div className="flex mt-8 items-center">
                  <img
                    className="w-16 h-16 mr-4 rounded-full border-4 border-neutral-300"
                    src={testimonial.image}
                    alt={testimonial.user}
                  />
                  <div>
                    <h6 className="text-xl font-semibold text-neutral-800">
                      {testimonial.user}
                    </h6>
                    <span className="text-sm font-normal italic text-neutral-600">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-4 border-0 text-neutral-800 text-4xl font-bold rounded-full bg-transparent hover:bg-neutral-800 hover:text-white transition-all duration-300"
          onClick={handlePrevSlide}
        >
          &#8249;
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 px-6 py-4 border-0 text-neutral-800 text-4xl font-bold rounded-full bg-transparent hover:bg-neutral-800 hover:text-white transition-all duration-300"
          onClick={handleNextSlide}
        >
          &#8250;
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
          {Array.from({ length: totalSlides }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              className={`w-4 h-4 rounded-full ${
                currentIndex === dotIndex
                  ? "bg-neutral-800"
                  : "bg-neutral-300 opacity-70"
              } transition-all`}
              onClick={() => handleDotClick(dotIndex)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
