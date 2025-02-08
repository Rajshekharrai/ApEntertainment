import React, { useRef } from "react";
import { motion } from "framer-motion";
import { teamMembers } from "../constants";
import { FaStar } from "react-icons/fa";
import { checklistItems } from "../constants";

const ChecklistSection = ({ checklistItems }) => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-yellow-500 text-center mb-8"></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {checklistItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-black text-white border border-yellow-500 shadow-lg rounded-lg p-6 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">{item.title}</h3>
            <p className="text-gray-300 whitespace-pre-line">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const VideoGallery = ({ videos }) => (
  <div className="container mx-auto py-12 px-4">
    <h2 className="text-4xl font-bold text-center text-yellow-500 mb-6">YouTube Videos</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {videos.map((video, index) => {
        const videoId = new URL(video.link).searchParams.get("v");
        const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        return (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-black text-white border border-yellow-500 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <a href={video.link} target="_blank" rel="noopener noreferrer" className="block">
              <img src={thumbnail} alt={video.description} className="w-full h-56 object-cover border-b-4 border-yellow-500" />
            </a>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-yellow-500 mb-2">{video.title}</h3>
              <p className="text-gray-300 mb-4">{video.description}</p>
              <a href={video.link} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 text-sm font-medium text-black bg-yellow-500 rounded-lg hover:bg-yellow-400 transition">Watch Video</a>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);

const TeamSection = ({ teamMembers }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto px-4 text-center py-12">
      <h3 className="text-4xl font-semibold text-yellow-500 mb-8">Meet Our Team</h3>
      <div className="relative">
        <div ref={carouselRef} className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="w-[22%] min-w-[22%] bg-black text-white shadow-lg rounded-xl p-6 snap-center flex flex-col items-center text-center border border-yellow-500"
            >
              <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mb-4 object-cover shadow-md border-4 border-yellow-500" />
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-gray-300">{member.role}</p>
              <div className="flex justify-center space-x-1 mt-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar key={i} className={`text-2xl ${i < member.rating ? "text-yellow-500" : "text-gray-700"}`} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between">
          <button onClick={scrollLeft} className="px-4 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition">&lt;</button>
          <button onClick={scrollRight} className="px-4 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition">&gt;</button>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const myVideos = [
    { title: "Phir Mulaqat Hogi", description: "A beautiful song edited by our team", link: "https://www.youtube.com/watch?v=wCN6jHfHcM4" },
    { title: "19th BRM - NSD Campus", description: "Our expert presentation at fest tour", link: "https://www.youtube.com/watch?v=wH1JUCCTvS4" },
    { title: "Doon School - Video Observation", description: "Cinematography for education documentary", link: "https://www.youtube.com/watch?v=wr4dW4pTqgM" },
    { title: "8th Theatre Olympics 2018", description: "Classic edit by team in 2018", link: "https://www.youtube.com/watch?v=mYRPuckoWws" },
    { title: "Adani Gas Limited", description: "Cinematography's contribution to Adani Group", link: "https://www.youtube.com/watch?v=lWtSC3wSBPk" },
    { title: "Kitchen Vadic Havan Stick", description: "Ad contribution for Reshamn Jewels", link: "https://www.youtube.com/watch?v=HjyUTrUYDrQ" },
    { title: "Biology Revision Guide", description: "Education collaboration with Arihant", link: "https://www.youtube.com/watch?v=0bdfTxaybnQ" }
  ];

  return (
    <div className="py-12 min-h-screen w-full">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-yellow-500 mb-6">About AP Entertainment & Production</h2>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
          AP Entertainment and Production is a creative powerhouse specializing in high-quality content. We bring innovative ideas to life through documentaries, commercials, and more.
        </p>
      </div>
      <ChecklistSection checklistItems={checklistItems} />
      <VideoGallery videos={myVideos} />
     
      <TeamSection teamMembers={teamMembers} />
    </div>
  );
};

export default AboutUs;
