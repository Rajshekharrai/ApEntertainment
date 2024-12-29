import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";


export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
  {
    user: "Rajshekhar",
    company: "Tech M",
    image: user6,
    text: "there are fantastic views ",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Content Production",
    href:"/components/content",
    description:
    "Graphic Design , Visual Design , Audio Production , Proposals & Presentations "
  },
  {
    icon: <Fingerprint />,
    text: "Media Production",
    href:"/components/photography",
    description:
      "Event Coverage , Promotional Videos  , Testimonial Videos , Corporate  AVs , Custom Video Production  , Live Streaming",
  },
  {
    icon: <ShieldHalf />,
    text: "Graphics Services",
    href:"/components/Graphics",
    description:
      "Social Media Posts , Print Design Materials , Product Photography for E-Commerce , Custom Designs",
  },
  {
    icon: <BatteryCharging />,
    text: "Audio Services",
    href:"/components/Audio",
    description:
      "Dubbing , Recording , Music Production , Podcast Creation",
  },
  {
    icon: <PlugZap />,
    text: "Website & App Development",
    href:"/components/Web",
    description:
      "We offer both static and dynamic website solutions, along with customized web and app development services tailored to your brand’s needs. Our offerings include:",
  },
  {
    icon: <GlobeLock />,
    text: "Social Media &    E-Commerce Integration",
    href:"/components/ecom",
    description:
      "Expand your digital footprint with our full suite of e-commerce services, including: E-Commerce Platform Registration ,Campaign Management , 24/7 Customer Support , Sales Force Management",
  },
];
export 
 const checklistItems = [
  {
    title: "Why Choose Us",
    description:
      "At AP Entertainment & Production House, we understand the challenges of finding the right partner to create high-quality video and graphic content that truly captures your brand's essence. Our goal is to deliver exceptional services that not only meet but exceed industry standards. Our dedicated team works diligently on every project, ensuring we elevate your brand, captivate your audience, and leave a lasting impression."
  },
  {
    title: "What We Offer",
    description: `
      We specialize in creating premium content across various platforms, including film, television, digital media, and commercial projects. From concept to completion, we provide a smooth and tailored production experience that aligns with your vision, objectives, and budget. Our broad range of services includes:
    -Audio, Visual, and Graphic Production
      - Web Design and Digital Marketing
      - Branding and Content Writing
      - Complete Digital Marketing Solutions
      
      Our promise is to deliver high-quality content on time while consistently exceeding expectations.
    `
  },
];
export const pricingOptions = [
  {
    title: "Trial",
    features: [
     " Daily social media posting (up to 3 platforms) ",
     "Weekly analysis report","Logo creation (if needed)","Marketing strategy and recommendations"

    ],
  },
  {
    title: "Basic Package",
    features: [
      "Daily social media posting (up to 5 platforms)",
      "Weekly analysis report",
      "3 promo videos",
      "Marketing strategy and recommendations"
    ],
  },
  {
    title: "Standard Plan",
    features: [
      "Daily social media posting (up to 9 platforms)",
      "Weekly analysis report",
      "Content production",
      "6 promo videos",
      "Collaboration with local news portals"
    ],
  },
  {
    title: "Premium Package",
    features: [
      "Full coverage across all platforms and basic e-commerce support",
      "Weekly analysis report",
      "2 days of product photography",
      "Business intro video",
      "9 promo videos",
      "4 podcasts",
      "Comprehensive content production"

    ],
  },
  {
    title: "Enterprise",
    features: [
      "Fully customized plan designed to meet your specific business needs"
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
export const teamMembers = [
  { name: "John Doe", role: "CEO", img: user1,rating: 5 },
  { name: "Jane Smith", role: "Creative Director", rating: 5},
  { name: "Sara Lee", role: "Video Editor", img: user3, rating: 5 },
  { name: "Tom Hardy", role: "Producer", img: user4, rating: 2 },
  { name: "Emily Davis", role: "Writer", img: user5, rating: 3 },
];
