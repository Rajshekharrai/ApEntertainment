import { Film, Camera, Tv, Sliders, Briefcase, Edit } from "lucide-react";
import SlidingBrands from "./brand";

const Offers = () => {
  return (
    <div className="mt-20">
      <h2 className="text-10xl sm:text-7xl lg:text-6xl text-center my-8 tracking-wide">
        Our Expertise
      </h2>
      <p className="text-center text5xl text-lg">
        <b>We specialize in creating engaging content across various platforms, including:</b>
      </p>

      <section className="py-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-indigo-500 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="text-6xl text-white mb-6">
                <Film />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Documentaries</h3>
              <p className="text-white">
                We create captivating documentaries that bring real stories to life. Our team works with you to craft a compelling narrative, combining visuals and storytelling to make your story unforgettable.
              </p>
            </div>

            <div className="bg-blue-600 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="text-6xl text-white mb-6">
                <Tv />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Entertainment Videos</h3>
              <p className="text-white">
                Our entertainment videos are designed to engage and entertain. Whether for digital platforms or TV, we produce high-quality content that keeps viewers hooked.
              </p>
            </div>

            <div className="bg-green-600 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="text-6xl text-white mb-6">
                <Camera />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Commercials</h3>
              <p className="text-white">
                We help brands create powerful commercials that leave a lasting impact. From scriptwriting to production, we ensure every element delivers your message effectively.
              </p>
            </div>

            <div className="bg-yellow-500 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="text-6xl text-white mb-6">
                <Sliders />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Social Media Content</h3>
              <p className="text-white">
                We create content tailored for social media platforms to help you connect with your audience. From short clips to full-length posts, we cover all types of social content.
              </p>
            </div>

            <div className="bg-red-600 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="text-6xl text-white mb-6">
                <Briefcase />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Corporate Videos</h3>
              <p className="text-white">
                Showcase your company’s mission and values with corporate videos that communicate professionalism and credibility, perfect for marketing and training purposes.
              </p>
            </div>

            <div className="bg-teal-600 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="text-6xl text-white mb-6">
                <Edit />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Explainer Videos</h3>
              <p className="text-white">
                Simplify complex ideas with explainer videos that break down your product or service in an easy-to-understand format, perfect for marketing and training.
              </p>
            </div>

            <div className="bg-pink-600 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="text-6xl text-white mb-6">
                <Film />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Animated Videos</h3>
              <p className="text-white">
                Bring your ideas to life with animated videos that add a creative touch to your project. From 2D to 3D animation, we can produce the perfect video for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-16">
        <SlidingBrands />
      </div>
    </div>
  );
};

export default Offers;
