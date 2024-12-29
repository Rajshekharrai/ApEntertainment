import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
  <span className="font-bold">
    Ap Entertainment and Production
  </span>
  <span className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
    {" "}house
  </span>
  <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
    {" "}for Dreamers
  </span>
</h1>

      <p className="mt-10 text-lg text-center text-neutral-300 max-w-4xl">
        <hr />
        <br /><br />
      Transforming Your Brand's Story into a Masterpiece
      At AP Entertainment and Production House, we're passionate about crafting exceptional content that
       resonates with your audience and elevates your brand to new heights. Our team of experts is dedicated 
       to delivering high-quality video and graphic content that leaves a lasting impression. With a keen eye 
       for detail and a deep understanding of what drives engagement, we're committed to helping you 
       achieve your marketing goals.

      </p>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
