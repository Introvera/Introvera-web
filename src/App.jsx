import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChooseUs  from "./components/WhyChooseUs";
import Workflow from "./components/Workflow";
import ModernFooter from "./components/ModernFooter";
import AnimatedTestimonials from "./components/AnimatedTestimonials";
// import Testimonials from "./components/Testimonials";
// import Projects from "./components/Projects";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import { Carousel, Card } from "@/components/Carousel/Carousel.jsx";
import user1 from "../src/assets/profile-pictures/user1.jpg";
import user2 from "../src/assets/profile-pictures/user2.jpg";
import user3 from "../src/assets/profile-pictures/user3.jpg";
import user4 from "../src/assets/profile-pictures/user4.jpg";
import user5 from "../src/assets/profile-pictures/user5.jpg";
import user6 from "../src/assets/profile-pictures/user6.jpg";

const testimonials = [
  {
    src: user1,
    name: "Alice Fernando",
    designation: "Software Engineer",
    quote: "Working with Introvera has been an incredible experience. Their tech expertise is unmatched."
  },
  {
    src: user2,
    name: "Brian Smith",
    designation: "Product Manager",
    quote: "Their attention to detail and delivery speed were impressive. Highly recommended!"
  },
  {
    src: user3,
    name: "Carla De Silva",
    designation: "UX Designer",
    quote: "Introvera's design thinking approach brought our product to life beautifully."
  },
  {
    src: user4,
    name: "Daniel Perera",
    designation: "CTO, Fintech Co.",
    quote: "Solid architecture and scalable solutions. One of the best dev teams I've worked with."
  },
  {
    src: user5,
    name: "Emily Jayasuriya",
    designation: "Marketing Lead",
    quote: "Their brand awareness strategies helped us boost conversions by 40%!"
  },
  {
    src: user6,
    name: "Farhan Malik",
    designation: "CEO, StartupX",
    quote: "They don't just build products — they build value. True partners from start to finish."
  }
];

const projects = [
  {
    title: "Vivaha Plans",
    category: "Web & Mobile App",
    description: "An amazing project about web applications.",
    src: "/src/assets/projects/vivahaplans.jpg",
    content: <div>Details about Project One here...</div>,
  },
  {
    title: "Project Two",
    category: "Mobile App",
    description: "A cool mobile app project description.",
    src: "/src/assets/projects/vivahaplans.jpg",
    content: <div>Details about Project Two here...</div>,
  },
  {
    title: "Project Two",
    category: "Mobile App",
    description: "A cool mobile app project description.",
    src: "/src/assets/projects/vivahaplans.jpg",
    content: <div>Details about Project Two here...</div>,
  },
  {
    title: "Project Two",
    category: "Mobile App",
    description: "A cool mobile app project description.",
    src: "/images/project2.jpg",
    content: <div>Details about Project Two here...</div>,
  },
  {
    title: "Project Two",
    category: "Mobile App",
    description: "A cool mobile app project description.",
    src: "/images/project2.jpg",
    content: <div>Details about Project Two here...</div>,
  },

];

// const items = [
//   <Card
//     key="card1"
//     index={0}
//     layout
//     card={{
//       title: "Vivaha Plans",
//       category: "Web App",
//       src: "/images/project1.jpg",
//       content: <p>This is detailed content about Project One.</p>,
//     }}
//   />,
//   <Card
//     key="card2"
//     index={1}
//     layout
//     card={{
//       title: "Project Two",
//       category: "Mobile App",
//       src: "/images/project2.jpg",
//       content: <p>This is detailed content about Project Two.</p>,
//     }}
//   />,
//   <Card
//     key="card3"
//     index={2}
//     layout
//     card={{
//       title: "Project Two",
//       category: "Mobile App",
//       src: "/images/project2.jpg",
//       content: <p>This is detailed content about Project Two.</p>,
//     }}
//   />,
//   <Card
//     key="card4"
//     index={3}
//     layout
//     card={{
//       title: "Project Two",
//       category: "Mobile App",
//       src: "/images/project2.jpg",
//       content: <p>This is detailed content about Project Two.</p>,
//     }}
//   />,
//   // Add more Card components as needed
// ];

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-0 px-5">
        <HeroSection />
        <Workflow />
        <Carousel
      items={projects.map((p, i) => <Card key={i} card={p} index={i} />)}/>
        {/* <Projects /> */}
        <AboutUs />
        <WhyChooseUs />
        <Team />
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        {/* <Testimonials /> */}
        <ContactUs />
        <ModernFooter />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default App;
