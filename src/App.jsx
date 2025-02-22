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
import ContentPage from "./components/content";
import DevelopmentServicesPage from "./components/Web";
import GraphicServicesPage from "./components/graphics";
import EcommerceServicesPage from "./components/ecom";
import AudioServicesPage from "./components/Audio";
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
                <SlidingBrands />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/components/photography" element={<PhotographyServices />} />
          <Route path="/offer" element={<Offers />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/components/content" element={<ContentPage/>} />
          <Route path="/components/Graphics" element={<GraphicServicesPage/>} />
          <Route path="/components/Audio" element={<AudioServicesPage/>} />
          <Route path="/components/Web" element={<DevelopmentServicesPage/>} />
          <Route path="/components/ecom" element={<EcommerceServicesPage/>} />
        </Routes>
      </div>
      <br /><br /><br />
      <Footer />
    </Router>
    </>
  );
};

export default App;
