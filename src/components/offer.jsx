import { CheckCircle2 } from "lucide-react";

const Offers = () => {
  return (
    <div className="mt-20">
      {/* Title Section */}
      <h2 className="text-10xl sm:text-7xl lg:text-6xl text-center my-8 tracking-wide">
        Our Expertise
      </h2>
      <p className="text-center text5xl text-lg">
        <b>We specialize in creating engaging content across various platforms, including:</b>
      </p>
      
      {/* Specializations Section */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
          </h2>
          <p className="text-gray-600 text-lg mb-12">
          </p>

          {/* Specialization Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Documentary */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                className="w-32 h-32 mx-auto mb-6"
                src="/images/documentary-logo.png" // Replace with actual image path
                alt="Documentary"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Documentaries</h3>
              <p className="text-gray-600">
                We create captivating documentaries that bring real stories to life. Our team works with you to craft a compelling narrative, combining visuals and storytelling to make your story unforgettable.
              </p>
            </div>

            {/* Entertainment Videos */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                className="w-32 h-32 mx-auto mb-6"
                src="/images/entertainment-logo.png" // Replace with actual image path
                alt="Entertainment"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Entertainment Videos</h3>
              <p className="text-gray-600">
                Our entertainment videos are designed to engage and entertain. Whether for digital platforms or TV, we produce high-quality content that keeps viewers hooked.
              </p>
            </div>

            {/* Commercials */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                className="w-32 h-32 mx-auto mb-6"
                src="/src/assets/expertise/logo1.png" // Replace with actual image path
                alt="Commercials"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Commercials</h3>
              <p className="text-gray-600">
                We help brands create powerful commercials that leave a lasting impact. From scriptwriting to production, we ensure every element delivers your message effectively.
              </p>
            </div>

            {/* Social Media Content */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                className="w-32 h-32 mx-auto mb-6"
                src="/images/social-media-logo.png" // Replace with actual image path
                alt="Social Media"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Social Media Content</h3>
              <p className="text-gray-600">
                We create content tailored for social media platforms to help you connect with your audience. From short clips to full-length posts, we cover all types of social content.
              </p>
            </div>

            {/* Corporate Videos */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                className="w-32 h-32 mx-auto mb-6"
                src="/images/corporate-logo.png" // Replace with actual image path
                alt="Corporate"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Corporate Videos</h3>
              <p className="text-gray-600">
                Showcase your company’s mission and values with corporate videos that communicate professionalism and credibility, perfect for marketing and training purposes.
              </p>
            </div>

            {/* Explainer Videos */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                className="w-32 h-32 mx-auto mb-6"
                src="/images/explainer-logo.png" // Replace with actual image path
                alt="Explainer"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Explainer Videos</h3>
              <p className="text-gray-600">
                Simplify complex ideas with explainer videos that break down your product or service in an easy-to-understand format, perfect for marketing and training.
              </p>
            </div>

            {/* Animated Videos */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                className="w-32 h-32 mx-auto mb-6"
                src="/images/animated-logo.png" // Replace with actual image path
                alt="Animated"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Animated Videos</h3>
              <p className="text-gray-600">
                Bring your ideas to life with animated videos that add a creative touch to your project. From 2D to 3D animation, we can produce the perfect video for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
