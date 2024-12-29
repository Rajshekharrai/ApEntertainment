import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Offers from "./components/offer";
import PhotographyServices from "./components/photography";
import Contact from "./components/contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SlidingBrands from "./components/brand";
import AboutUs from "./components/about";
import SocialMediaPopup from "./components/socialpop";
const App = () => {
  return (
    <>
     <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <FeatureSection />
                <Workflow />
                <Pricing />
                <Testimonials />
                <SocialMediaPopup/>
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/components/photography" element={<PhotographyServices />} />
          <Route path="/offer" element={<Offers />} />
          <Route path="/about" element={<AboutUs/>} />
        </Routes>
      </div>
      <br /><br /><br />
      <SlidingBrands />
      <Footer />
    </Router>
    </>
  );
};

export default App;
