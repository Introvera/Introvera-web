"use client";

import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Workflow = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="mt-20" id="services" ref={ref}>
      <motion.h2
        className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        At Introvera,{" "}
        <span className="bg-gradient-to-r from-purple-500 to-blue-800 text-transparent bg-clip-text">
          we provide...
        </span>
      </motion.h2>

      <div className="flex flex-wrap justify-center">
        {/* Left image */}
        <motion.div
          className="mt-20 p-2 w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <img src={codeImg} alt="Coding" className="rounded-xl shadow-xl xl:mt-40" />
        </motion.div>

        {/* Right content */}
        <motion.div
          className="pt-12 w-full lg:w-1/2 "
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex mb-12 bg-gradient-to-r from-gray-900 to-gray-1000 rounded-2xl py-5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
            >
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full shadow-md ">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl font-semibold text-white">
                  {item.title}
                </h5>
                <p className="text-md text-neutral-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Workflow;
