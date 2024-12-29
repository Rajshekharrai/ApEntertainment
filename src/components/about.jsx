import React, { useRef } from "react";
import { teamMembers  } from "../constants";
import { FaStar } from "react-icons/fa"; 

function TeamSection({ teamMembers }) {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 text-center">
      <h3 className="text-4xl font-semibold text-orange-800 mb-8">
        Meet Our Team
      </h3>

      <div className="relative">
        <div
          ref={carouselRef}
          className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-[22%] min-w-[22%] h-96 bg-gradient-to-r from-blue-200 to-indigo-200 shadow-lg rounded-lg p-6 snap-center flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h4>
              <p className="text-gray-600">{member.role}</p>

              <div className="flex justify-center space-x-1 mt-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`text-2xl ${i < member.rating ? "text-yellow-500" : "text-gray-200"}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between">
          <button
            onClick={scrollLeft}
            className="px-4 py-2 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-gray-700 transition"
          >
            &lt;
          </button>
          <button
            onClick={scrollRight}
            className="px-4 py-2 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-gray-700 transition"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}


const VideoGallery = ({ videos }) => {
    return (
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-6">Youtube vedios </h2>
        <p className="text-center text-grey-200"> See the magic </p>
        <br /><br /><br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {videos.map((video, index) => {
            const videoId = new URL(video.link).searchParams.get("v"); 
            const thumbnail = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`; 
  
            return (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
               
                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={thumbnail}
                    alt={video.description}
                    className="w-full h-48 object-cover"
                  />
                </a>
  
              
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{video.title}</h3>
                  <p className="text-gray-600 mb-4">{video.description}</p>
  
                 
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  

const AboutUs = () => {
     const myVideos = [
        {
          title: "phir mulaqat hogi",
          description: "A beautiful song edited by our team ",
          link: "https://www.youtube.com/watch?v=wCN6jHfHcM4&ab_channel=VoiceofNCR",
        },
        {
          title: "Behind the Scenes: Documentary Making",
          description: "Take a glimpse into our production process.",
          link: "https://www.youtube.com/watch?v=exampleVideoId2",
        },
        {
          title: "Commercial Ad Production Highlights",
          description: "Highlights from our recent commercial ad production.",
          link: "https://www.youtube.com/watch?v=exampleVideoId3",
        },
        {
            title: "Commercial Ad Production Highlights",
            description: "Highlights from our recent commercial ad production.",
            link: "https://www.youtube.com/watch?v=exampleVideoId3",
          },
          {
            title: "Commercial Ad Production Highlights",
            description: "Highlights from our recent commercial ad production.",
            link: "https://www.youtube.com/watch?v=exampleVideoId3",
          },
          {
            title: "Commercial Ad Production Highlights",
            description: "Highlights from our recent commercial ad production.",
            link: "https://www.youtube.com/watch?v=exampleVideoId3",
          },
          {
            title: "Commercial Ad Production Highlights",
            description: "Highlights from our recent commercial ad production.",
            link: "https://www.youtube.com/watch?v=exampleVideoId3",
          },
      ];


  return (
    <div className="py-12  min-h-screen w-full">
      {/* About Section */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-orange-600 mb-6">
          About AP Entertainment & Production
        </h2>
        <p className="text-lg text-gray-100 mb-12">
          AP Entertainment and Production is a creative powerhouse
          specializing in producing high-quality content for various
          platforms. We bring innovative and engaging ideas to life
          through documentaries, commercials, social media content, and
          more.
        </p>
      </div>

      {/* Our Work Section */}
      <div className="container mx-auto px-4 mb-20">
        <h3 className="text-4xl text-center font-semibold text-orange-800 mb-8">
          Some of Our Work
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <img
              src="/path/to/work1.jpg"
              alt="Work 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="font-semibold text-xl">Documentary Series</h4>
              <p className="text-gray-600 mt-2">
                A gripping documentary about the journey of famous
                personalities.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <img
              src="/path/to/work2.jpg"
              alt="Work 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="font-semibold text-xl">Social Media Content</h4>
              <p className="text-gray-600 mt-2">
                Creative content designed for engagement across
                platforms.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <img
              src="/path/to/work3.jpg"
              alt="Work 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="font-semibold text-xl">Commercial Production</h4>
              <p className="text-gray-600 mt-2">
                High-quality commercials for brands looking to make a
                lasting impact.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <VideoGallery videos={myVideos} />
      <TeamSection teamMembers={teamMembers} />
    </div>
  );
};

export default AboutUs;
