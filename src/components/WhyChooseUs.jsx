"use client";

import React from "react";
import { chooseus } from "../constants";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <div
      ref={ref}
      className="relative mt-20 border-b border-neutral-800 min-h-[400px]"
    >
      {inView ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-800 text-transparent bg-clip-text">
                Us
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap mt-10 lg:mt-10">
            {chooseus.map((chooseus, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                <div className="flex">
                  <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-blue-700 justify-center items-center rounded-full">
                    {chooseus.icon}
                  </div>
                  <div>
                    <h5 className="mt-1 mb-2 text-xl">{chooseus.text}</h5>
                    <p className="text-md p-2 mb-10 text-neutral-500">
                      {chooseus.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ) : (
        <div style={{ height: "400px" }} />
      )}
    </div>
  );
};

export default WhyChooseUs;
