import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id); // Update the active section
    }
  };

  const navItems = [
    { label: "Home", href: "/", id: "Home" },
    { label: "Our Services", scrollTo: "our-services", id: "our-services" },
    { label: "About Us", href: "/about", id: "About" },
    { label: "Our Expertise", href: "/offer", id: "Expertise" },
  ];

  const getNavItemClass = (id) =>
    `text-xl transition-transform duration-300 ${
      activeSection === id ? "text-[#ffda58]" : "text-white"
    } hover:text-[#ffda58] hover:scale-110`;

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-20 w-20 mr-2" src={logo} alt="Logo" />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) =>
              item.scrollTo ? (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.scrollTo)}
                    className={getNavItemClass(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ) : (
                <li key={index}>
                  <Link
                    to={item.href}
                    className={getNavItemClass(item.id)}
                    onClick={() => setActiveSection(item.id)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Get in Touch Button */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link
              to="/contact"
              className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) =>
                item.scrollTo ? (
                  <li key={index} className="py-4">
                    <button
                      onClick={() => {
                        toggleNavbar();
                        scrollToSection(item.scrollTo);
                      }}
                      className={getNavItemClass(item.id)}
                    >
                      {item.label}
                    </button>
                  </li>
                ) : (
                  <li key={index} className="py-4">
                    <Link
                      to={item.href}
                      className={getNavItemClass(item.id)}
                      onClick={() => {
                        toggleNavbar();
                        setActiveSection(item.id);
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <div className="flex space-x-6">
              <Link
                to="/contact"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
                onClick={toggleNavbar}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
