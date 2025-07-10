import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChooseUs  from "./components/WhyChooseUs";
import Workflow from "./components/Workflow";
import ModernFooter from "./components/ModernFooter";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Workflow />
        <Projects />
        <AboutUs />
        <WhyChooseUs />
        <Team />
        <Testimonials />
        <ContactUs />
        <ModernFooter />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default App;
