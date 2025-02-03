import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  const navigate = useNavigate(); // React Router navigation function

  return (
    <div className="mt-20">
      <h2 className="text-3xl text-yellowLight sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Service Packages
      </h2>
      <p>
        <b className="text-xl">
          We offer tailored service packages to meet your unique needs:
          <br />
        </b>
      </p>
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-6 border border-neutral-700 rounded-xl h-[450px] flex flex-col">
              {/* Title */}
              <p className="text-4xl mb-4">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              {/* Benefits Section */}
              <div className="text-2xl mb-4">Benefits:</div>

              {/* Scrollable Features List */}
              <div className="flex-1 overflow-y-auto pr-2">
                <ul>
                  {option.features.map((feature, i) => (
                    <li key={i} className="mt-4 flex items-center">
                      <CheckCircle2 />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* "Know More" Button */}
              <button
                onClick={() => navigate("/contact")} // Navigate to Contact page
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-4 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Know More...
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
