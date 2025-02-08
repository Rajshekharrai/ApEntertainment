import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Workflow = () => {
  return (
    <div className="mt-20 container mx-auto px-4">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Grow Faster{" "}
        <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
          With Us
        </span>
      </h2>

      <div className="flex flex-wrap lg:flex-nowrap items-center mt-12 bg-neutral-900 rounded-xl shadow-lg overflow-hidden">
        
        <div className="w-full lg:w-3/5">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden h-full"
          >
            <iframe
              className="w-full h-80 lg:h-full object-cover"
              src="https://www.youtube.com/embed/wCN6jHfHcM4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>

        
        <div className="w-full lg:w-2/5 p-8 text-white">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text mb-6">
            Why Choose AP Entertainment & Production
          </h3>
          <p className="mb-4">
            At AP Entertainment & Production House, we help businesses grow by creating high-quality video content, engaging graphics, strategic digital marketing, and professional photography that boost brand visibility and customer engagement.
          </p>
          <p className="mb-4">
            Our video production services include corporate videos, product demos, and social media reels that enhance storytelling and drive conversions. With expert graphic design & branding, we establish strong brand identities through logos, UI/UX improvements, and promotional materials.
          </p>
          <p className="mb-4">
            Additionally, we offer website & app development services, ensuring custom business websites, seamless e-commerce integration, and performance optimization for improved user experience and lead generation.
          </p>
          <p className="font-semibold">
            Contact us today, and let’s bring your vision to life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
