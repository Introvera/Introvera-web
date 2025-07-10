"use client";
import { HeroHighlight, Highlight } from "./HeroHighlight";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <HeroHighlight containerClassName="h-screen">
      <div className="flex flex-col items-center justify-center text-center w-full h-full max-w-5xl mx-auto px-0">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide">
          Innovating Tomorrow,{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-800 text-transparent bg-clip-text">
            One Line of Code at a Time
          </span>
        </h1>
        <p className="mt-10 text-lg text-neutral-400 max-w-3xl mx-auto">
          We build intelligent, scalable, and secure software solutions that drive success.
          Whether you're a startup or an enterprise, we bring your ideas to life with cutting-edge
          technology and clean design.
        </p>

        {/* Animated buttons */}
        <motion.div
          className="flex justify-center my-10 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="bg-gradient-to-r from-purple-500 to-blue-800 py-3 px-6 rounded-md text-white shadow-md hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="py-3 px-6 rounded-md border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            View Our Work
          </motion.a>
        </motion.div>
      </div>
    </HeroHighlight>
  );
};

export default HeroSection;
