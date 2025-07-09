import React from "react";

const AboutUs = () => (
  <div className="relative mt-20 border-b border-neutral-800 min-h-[400px] " id="about" >
    <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          About{"  "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-800 text-transparent bg-clip-text">
            Us
          </span>
        </h2>
      </div>
    <p className="mt-10 text-lg text-neutral-700 dark:text-neutral-300 mb-8 justify-center">
      At <span className="bg-gradient-to-r from-purple-500 to-blue-800 text-transparent bg-clip-text">
          Introvera
        </span>, we are passionate about building innovative digital solutions that empower businesses and individuals to thrive in a connected world. Our team combines creativity, technology, and strategy to deliver products and services that make a real difference.
    </p>
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div>
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">Our Mission</h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          To drive digital transformation by providing cutting-edge technology solutions that are reliable, scalable, and user-friendly. We strive to help our clients achieve their goals through innovation, collaboration, and excellence.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold  text-blue-600">Our Vision</h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          To be a global leader in tech innovation, recognized for our commitment to quality, creativity, and customer success.
        </p>
      </div>
    </div>
    {/* <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-3 text-blue-600">What We Do</h2>
      <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-2">
        <li>Custom software development</li>
        <li>Web and mobile app solutions</li>
        <li>UI/UX design and consulting</li>
        <li>Cloud integration and DevOps</li>
        <li>AI, data analytics, and automation</li>
        <li>Ongoing support and maintenance</li>
      </ul>
    </div> */}
    {/* <div className="text-center">
      <h2 className="text-2xl font-semibold mb-3 text-blue-600">Why Choose Us?</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-2">
        We blend technical expertise with a human touch. Our team is dedicated to understanding your unique needs and delivering solutions that exceed expectations.
      </p>
      <p className="text-neutral-600 dark:text-neutral-400">
        Let’s build the future together — with Introvera Tech.
      </p>
    </div> */}
  </div>
);

export default AboutUs;