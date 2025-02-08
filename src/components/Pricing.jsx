import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  const navigate = useNavigate();

  const trialPlans = pricingOptions.filter(option => option.category === "trial");
  const enterprisePlans = pricingOptions.filter(option => option.category === "enterprise");

  return (
    <div className="mt-20 px-8 bg-grey pb-20">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center text-orange-600 font-bold mb-12 tracking-wide">
        Service Packages
      </h2>

      <div className="border border-orange-400 rounded-xl p-10 bg-[#fffbea]">
        <h3 className="text-5xl font-extrabold text-orange-600 mb-8">Trial</h3>
        <p className="text-lg text-yellow-700 mb-12 leading-relaxed">
          Our Trial Plan is designed for businesses and individuals looking to experience our high-quality services with a cost-effective, short-term package. This plan provides essential content creation, digital marketing, and branding solutions to help boost your online presence and engagement.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {trialPlans.map((option, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <div className="p-6 border border-orange-300 rounded-xl h-[450px] flex flex-col transform transition duration-500 hover:scale-105 hover:shadow-lg bg-gradient-to-br from-yellow-100 to-orange-100">
                <div className="text-2xl font-bold text-gray-800 mb-4 text-center py-2 rounded-full border-2 border-orange-400 bg-white">
                  {option.title}
                </div>
                <div className="text-xl mb-4 text-gray-600">Benefits:</div>
                <div className="flex-1 overflow-y-auto pr-2">
                  <ul>
                    {option.features.map((feature, i) => (
                      <li key={i} className="mt-3 flex items-center text-gray-700">
                        <CheckCircle2 className="text-green-500" />
                        <span className="ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => navigate("/contact")}
                  className="mt-6 py-3 w-full bg-yellow-600 text-white text-lg font-medium rounded-lg hover:bg-orange-700 transition duration-300"
                >
                  Know More...
                </button>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-5xl font-extrabold text-yellow-600 mb-8">Enterprise</h3>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          Our Enterprise Plan is a fully customized solution designed to elevate your brand, maximize engagement, and drive business growth. This all-inclusive package provides end-to-end content creation, digital marketing, branding, and technology solutions, ensuring a seamless and effective brand presence.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {enterprisePlans.map((option, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <div className="p-6 border border-yellow-400 rounded-xl h-[450px] flex flex-col transform transition duration-500 hover:scale-105 hover:shadow-lg bg-gradient-to-br from-yellow-100 to-orange-200">
                <div className="text-2xl font-bold text-gray-800 mb-4 text-center py-2 rounded-full border-2 border-yellow-500 bg-white">
                  {option.title}
                </div>
                <div className="text-xl mb-4 text-gray-600">Benefits:</div>
                <div className="flex-1 overflow-y-auto pr-2">
                  <ul>
                    {option.features.map((feature, i) => (
                      <li key={i} className="mt-3 flex items-center text-gray-700">
                        <CheckCircle2 className="text-green-500" />
                        <span className="ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => navigate("/contact")}
                  className="mt-6 py-3 w-full bg-yellow-600 text-white text-lg font-medium rounded-lg hover:bg-yellow-700 transition duration-300"
                >
                  Know More...
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
