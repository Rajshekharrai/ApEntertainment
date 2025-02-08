import video1 from "../assets/video1.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 relative">
      
      <div className="w-full h-[600px]  flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-white">
          <span className="font-bold">AP Entertainment and Production House</span>
          <span className="bg-gradient-to-r from-orange-500 to-yellow-600 text-transparent bg-clip-text">
            {" "}for Dreamers
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-300 max-w-4xl">
          Transforming Your Brand's Story into a Masterpiece. <br />
          At AP Entertainment and Production House, we're passionate about crafting exceptional content that
          resonates with your audience and elevates your brand to new heights.
        </p>
        <button className="mt-10 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-lg shadow-lg text-lg font-semibold hover:scale-105 transition-transform">
          Learn More
        </button>
      </div>

      
      <div className="w-full h-[300px] lg:h-[500px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
