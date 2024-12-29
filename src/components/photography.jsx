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
      image: "/src/assets/brands/brand1.png", // Replace with real image URL
      items: [
        "Product Photography: High-quality images for advertising, e-commerce, and catalogs.",
        "Lifestyle Photography: Products captured in real-life settings.",
        "Food Photography: Stylized images for menus, cookbooks, and marketing materials.",
        "Fashion Photography: Stunning visuals for fashion campaigns and online stores."
      ]
    },
    {
      title: "Event Photography",
      image: "https://via.placeholder.com/600x400", // Replace with real image URL
      items: [
        "Corporate Events: Conferences, seminars, and corporate functions.",
        "Weddings & Parties: Candid shots of personal celebrations and events."
      ]
    },
    {
      title: "Portrait Photography",
      image: "https://via.placeholder.com/600x400", // Replace with real image URL
      items: [
        "Individual Portraits: Professional headshots, personal branding, and senior portraits.",
        "Family Portraits: Group portraits for families, couples, and individuals.",
        "Corporate Portraits: Executive and employee portraits for business use."
      ]
    },
    {
      title: "Editorial Photography",
      image: "https://via.placeholder.com/600x400", // Replace with real image URL
      items: [
        "Magazine Features: Fashion, travel, and human-interest photo spreads.",
        "Journalistic Photography: Capturing impactful newsworthy moments and events."
      ]
    },
    {
      title: "Advertising Photography",
      image: "https://via.placeholder.com/600x400", // Replace with real image URL
      items: [
        "Campaign Photography: Creative visuals for print, digital, and outdoor ads.",
        "Billboard Photography: High-impact imagery for large-scale advertising."
      ]
    },
    {
      title: "Stock Photography",
      image: "https://via.placeholder.com/600x400", // Replace with real image URL
      items: [
        "General Stock: A diverse collection of images for various business needs.",
        "Niche Stock: Specialized collections tailored to specific industries."
      ]
    },
    {
      title: "Architectural & Industrial Photography",
      image: "https://via.placeholder.com/600x400", // Replace with real image URL
      items: [
        "Real Estate Photography: Showcase properties for sale or rent.",
        "Architectural Photography: Documenting construction, designs, and projects.",
        "Industrial Photography: Capturing manufacturing processes and large-scale projects."
      ]
    },
    {
      title: "Scientific & Medical Photography",
      image: "https://via.placeholder.com/600x400", // Replace with real image URL
      items: [
        "Medical Imaging: Visual documentation for research, education, and publications.",
        "Scientific Documentation: Capturing detailed images of experiments and natural phenomena."
      ]
    },
    {
      title: "Video Production Services",
      image: "https://via.placeholder.com/600x400", // Replace with real image URL
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
    <div className=" py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-14">
          Photography & Video Production Services
        </h1>
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center bg-white shadow-xl rounded-xl overflow-hidden transform transition-all duration-700 ease-in-out ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Left Side: Image */}
              <div className="lg:w-1/2 w-full h-64 lg:h-auto bg-cover bg-center relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                </div>
              </div>

              {/* Right Side: Description */}
              <div className="lg:w-1/2 w-full p-8 bg-gray-500">
                <h3 className="text-3xl font-bold text-black mb-6">
                  {service.title}
                </h3>
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
