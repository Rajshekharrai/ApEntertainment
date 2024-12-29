import { features } from "../constants";
import { Link } from "react-router-dom";

const FeatureSection = () => {
  return (
    <div id="our-services" className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-4xl font-bold px-2 py-1 uppercase ">
          Our Services
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Transform Your{" "}
          <span className="bg-gradient-to-r from-yellowDark to-yellowLight text-transparent bg-clip-text">
            Marketing Strategy
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <Link
            to={`${feature.href}`} 
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 cursor-pointer transition-all duration-300"
          >
            <div className="flex p-6 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div className="flex mx-6 h-16 w-16 p-4 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl font-semibold">{feature.text}</h5>
                <p className="text-md text-neutral-500 mb-4">{feature.description}</p>
                <span className="text-blue-600 font-medium">Learn more...</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;

