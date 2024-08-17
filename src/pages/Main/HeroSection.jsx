import React from "react";
import dosa from "../../assets/dosa.png";
import hero from "../../assets/Hero.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  const motionVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
        delay: 0.3, // Adjust this delay as needed
      },
    },
  };

  const staggerVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <section>
      <div className="container mx-auto flex justify-center items-center min-h-screen h-auto px-5">
        <motion.div
          variants={motionVariant}
          initial="hidden"
          whileInView="show"
          className="flex lg:flex-row flex-col justify-around items-center lg:space-x-10 space-x-0"
        >
          <motion.div
            variants={staggerVariant}
            className="lg:w-1/2 mb-8 lg:mb-0"
          >
            <h1 className="lg:text-6xl md:text-4xl text-3xl leading-[3.5rem] font-bold mb-4 font-['Alegreya'] text-[#333]">
              Welcome to Mohan Ji Authentic South Indian Cuisine
            </h1>
            <p className="text-md mb-6 text-[#555]">
              Experience South India's flavors at Mohan Ji: crispy dosas, soft idlis,
              savory vadas, and hearty uttapams. Savor tradition today!
            </p>
            <button className="bg-[#FC8A22] text-white px-8 py-3 rounded-full transition duration-300 hover:bg-[#e6791a] shadow-lg">
              Get Started
            </button>
          </motion.div>

          <motion.div
            variants={staggerVariant}
            className="lg:w-1/2 overflow-hidden flex justify-center items-center lg:mt-0 mt-5"
          >
            <img
              src={hero}
              alt="A welcoming view of the restaurant"
              className="w-full h-auto rounded-lg "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
