import React, { useState, useEffect } from "react";

const PhotographyServices = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // 500ms delay for animation
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Commercial Photography",
      items: [
        "Product Photography: High-quality images for advertising, e-commerce, and catalogs.",
        "Lifestyle Photography: Products captured in real-life settings.",
        "Food Photography: Stylized images for menus, cookbooks, and marketing materials.",
        "Fashion Photography: Stunning visuals for fashion campaigns and online stores."
      ]
    },
    {
      title: "Event Photography",
      items: [
        "Corporate Events: Conferences, seminars, and corporate functions.",
        "Weddings & Parties: Candid shots of personal celebrations and events."
      ]
    },
    {
      title: "Portrait Photography",
      items: [
        "Individual Portraits: Professional headshots, personal branding, and senior portraits.",
        "Family Portraits: Group portraits for families, couples, and individuals.",
        "Corporate Portraits: Executive and employee portraits for business use."
      ]
    },
    {
      title: "Editorial Photography",
      items: [
        "Magazine Features: Fashion, travel, and human-interest photo spreads.",
        "Journalistic Photography: Capturing impactful newsworthy moments and events."
      ]
    },
    {
      title: "Advertising Photography",
      items: [
        "Campaign Photography: Creative visuals for print, digital, and outdoor ads.",
        "Billboard Photography: High-impact imagery for large-scale advertising."
      ]
    },
    {
      title: "Stock Photography",
      items: [
        "General Stock: A diverse collection of images for various business needs.",
        "Niche Stock: Specialized collections tailored to specific industries."
      ]
    },
    {
      title: "Architectural & Industrial Photography",
      items: [
        "Real Estate Photography: Showcase properties for sale or rent.",
        "Architectural Photography: Documenting construction, designs, and projects.",
        "Industrial Photography: Capturing manufacturing processes and large-scale projects."
      ]
    },
    {
      title: "Scientific & Medical Photography",
      items: [
        "Medical Imaging: Visual documentation for research, education, and publications.",
        "Scientific Documentation: Capturing detailed images of experiments and natural phenomena."
      ]
    },
    {
      title: "Video Production Services",
      items: [
        "Corporate Videos: Promotional, training, and corporate event videos.",
        "Commercial Videos: Creative ads and infomercials.",
        "Social Media Content: Short videos, stories, and reels for social engagement.",
        "Documentaries: Long-form and short-form documentaries.",
        "Educational Videos: Online courses, tutorials, and instructional videos.",
        "Gaming Videos: Gameplay footage, trailers, and related content."
      ]
    }
  ];

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-yellowDark mb-14">
          Photography & Video Production Services
        </h1>
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center bg-gray-400 shadow-xl rounded-xl overflow-hidden transform transition-all duration-700 ease-in-out ${
  isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Left Side or Right Side: Heading with dark yellow background (Alternating cards) */}
              <div
                className={`lg:w-1/2 w-full h-full p-8 flex justify-center items-center ${
                  index % 2 === 0 ? "order-last" : "order-first"
                }`} // Alternate the order for each card
              >
                <div className="bg-yellow-600 p-6 rounded-md w-full h-full flex justify-center items-center"> {/* Full width & height */}
                  <h3 className="text-4xl font-bold text-black text-center">{service.title}</h3>
                </div>
              </div>

              {/* Right Side or Left Side: Description (Alternating cards) */}
              <div
                className={`lg:w-1/2 w-full p-12 ${
                  index % 2 === 0 ? "" : "order-first"
                }`} // Alternate the order for each card
              >
                <ul className="list-disc space-y-4 text-gray-700 text-lg ml-6">
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotographyServices;
