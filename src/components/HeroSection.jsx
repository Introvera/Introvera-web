import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-10">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Innovating Tomorrow, 
        <span className="bg-gradient-to-r from-purple-500 to-blue-800 text-transparent bg-clip-text">
          {/* {" "} */}
          One Line of Code at a Time
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
        We build intelligent, scalable, and secure software solutions that drive success. Whether you're a startup or an enterprise, we bring your ideas to life with cutting-edge technology and clean design.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-purple-500 to-blue-800 py-3 px-4 mx-3 rounded-md"
        >
          Get Started
        </a>
        <a href="#projects" className="py-3 px-4 mx-3 rounded-md border">
           View Our Work
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
