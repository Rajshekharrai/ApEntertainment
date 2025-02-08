import { useState, useEffect } from "react";
import { FaRegSmileBeam } from "react-icons/fa";  

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    { text: "Great service, highly recommend!", user: "John Doe", company: "Tech Co." },
    { text: "Amazing experience and support.", user: "Jane Smith", company: "Marketing Inc." },
    { text: "Helped our business grow quickly!", user: "Alex Johnson", company: "Startup Hub" },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newReview, setNewReview] = useState({ text: "", user: "", company: "" });

  const testimonialsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const handleNextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  const handlePrevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  const handleDotClick = (index) => setCurrentIndex(index);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.text && newReview.user) {
      const updatedTestimonials = [newReview, ...testimonials];
      if (updatedTestimonials.length > 10) {
        updatedTestimonials.pop();  
      }
      setTestimonials(updatedTestimonials);
      setNewReview({ text: "", user: "", company: "" });
      alert("Thank you for your review!");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const startIndex = currentIndex * testimonialsPerSlide;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + testimonialsPerSlide);

  return (
    <div className="mt-30 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 font-bold text-orange-100">
        What People are Saying
      </h2>

     
      <div className="relative w-full overflow-hidden">
        <div className="flex justify-between transition-transform duration-700 ease-in-out">
          {currentTestimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/3 px-4 py-2 flex-shrink-0 transition-transform transform hover:scale-105">
              <div className="bg-white rounded-xl p-8 text-md border border-neutral-300 shadow-lg flex flex-col h-[350px]">
                <p className="text-lg sm:text-xl lg:text-2xl text-neutral-800 flex-grow overflow-y-auto">{testimonial.text}</p>
                <div className="flex mt-8 items-center">
                  <FaRegSmileBeam className="w-16 h-16 mr-4 text-green-500" />
                  <div>
                    <h6 className="text-xl font-semibold text-neutral-800">{testimonial.user}</h6>
                    <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-4 text-neutral-800 text-4xl font-bold hover:bg-neutral-800 hover:text-white" onClick={handlePrevSlide}>
          &#8249;
        </button>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-4 text-neutral-800 text-4xl font-bold hover:bg-neutral-800 hover:text-white" onClick={handleNextSlide}>
          &#8250;
        </button>

       
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
          {Array.from({ length: totalSlides }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              className={`w-4 h-4 rounded-full ${currentIndex === dotIndex ? "bg-neutral-800" : "bg-neutral-300 opacity-70"}`}
              onClick={() => handleDotClick(dotIndex)}
            ></button>
          ))}
        </div>
      </div>

     
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto my-12 p-6 bg-blue-100 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Leave a Review</h3>
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2 text-blue-600" htmlFor="user">Name</label>
          <input
  id="user"
  type="text"
  className="w-full p-3 border border-gray-500 bg-gray-200 rounded-lg text-black"
  value={newReview.user}
  onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
  required
/>

        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2 text-blue-600" htmlFor="text">Your Review</label>
          <textarea
            id="text"
            className="w-full p-3 border border-gray-500 bg-gray-200 rounded-lg text-black"
            rows="4"
            value={newReview.text}
            onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
            required
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2 text-blue-600" htmlFor="company">Company (Optional)</label>
          <input
            id="company"
            type="text"
            className="w-full p-3 border border-gray-500 bg-gray-200 rounded-lg text-black"
            value={newReview.company}
            onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Testimonials;
