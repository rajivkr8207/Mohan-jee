import React from "react";
import { FaBlackTie } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {

  const moteion = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        // delay:,
      },
    },
  };

  const stag = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };
  return (
    <>
      <div className="container mx-auto my-10 px-5 py-2 ">
        <motion.h1
          variants={{
            hidden: {
              opacity: 0,
              y: 100,
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
              },
            }
          }}
          initial="hidden"
          whileInView="show"
          className="text-center lg:text-5xl md:text-4xl text-3xl font-semibold my-8 font-['Oswald'] text-[#333]">
          About Us
        </motion.h1>



        <motion.div
          variants={moteion}
          initial="hidden"
          whileInView="show"
          className="flex gap-8 flex-wrap justify-center">

          <motion.div
            variants={stag}
            className="flex flex-col items-center gap-5 lg:w-[25%] w-[95%] bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
            <div className="bg-[var(--Antique-color)] p-4 h-[6rem] rounded-full grid place-content-center shadow-md">
              <FaBlackTie className="text-4xl text-[#FC8A22]" />
            </div>
            <div className="text-center flex flex-col gap-3">
              <h2 className="text-xl font-bold text-[#333]">More than 40 years</h2>
              <p className="text-sm font-medium text-gray-600">
                Experience the rich heritage of authentic South Indian cuisine with over four decades of tradition.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={stag}
            className="flex flex-col items-center gap-5 lg:w-[25%] w-[95%] bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
            <div className="bg-[var(--Antique-color)] p-4 h-[6rem] rounded-full grid place-content-center shadow-md">
              <FaUtensils className="text-4xl text-[#FC8A22]" />
            </div>
            <div className="text-center flex flex-col gap-3">
              <h2 className="text-xl font-bold text-[#333]">Authentic Recipes</h2>
              <p className="text-sm font-medium text-gray-600">
                Our dishes are crafted using age-old recipes and fresh ingredients to ensure an authentic taste.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={stag}
            className="flex flex-col items-center gap-5 lg:w-[25%] w-[95%] bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
            <div className="bg-[var(--Antique-color)] p-4 h-[6rem] rounded-full grid place-content-center shadow-md">
              <FaStar className="text-4xl text-[#FC8A22]" />
            </div>
            <div className="text-center flex flex-col gap-3">
              <h2 className="text-xl font-bold text-[#333]">Award-Winning</h2>
              <p className="text-sm font-medium text-gray-600">
                Recognized for excellence, our restaurant has won numerous awards for its outstanding cuisine.
              </p>
            </div>
          </motion.div>

        </motion.div>

        <div className="text-center my-10">
          <NavLink to="/about" className="px-6 py-3 bg-[#FC8A22] text-white text-lg font-semibold rounded-full shadow-md transition duration-300 hover:bg-[#e6791a] hover:shadow-lg">
            Read More
          </NavLink>
        </div>
      </div>

    </>
  );
};

export default About;
