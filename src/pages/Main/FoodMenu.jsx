import React, { useState } from "react";
import Dosa from "../../assets/dosa food.png";
import idli from "../../assets/idli.png";
import vada from "../../assets/vada.png";
import { motion } from "framer-motion";

const FoodMenu = () => {
  const [food, setFood] = useState([
    {
      name: "Dosa",
      price: 60,
      image: Dosa,
    },
    {
      name: "idli",
      price: 30,
      image: idli,
    },
    {
      name: "vada",
      price: 40,
      image: vada,
    },
  ]);
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
      <div className="bg-[#F7F7FA] py-5">
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
          className='text-center lg:text-5xl md:text-4xl text-3xl mb-20 font-semibold font-["Oswald"] text-[#333]'>
          Our Popular Food Menu
        </motion.h1>

        <motion.div
          variants={moteion}
          initial="hidden"
          whileInView="show"
          className="flex gap-8 lg:justify-evenly justify-center flex-wrap mt-10">
          {food.map((e) => {
            return (
              <motion.div
                variants={stag}
                className="bg-white relative lg:w-[15rem] w-[90%] h-[15rem] my-5 shadow-lg rounded-[1.6rem] flex flex-col items-center justify-between transition-transform transform hover:scale-105 hover:shadow-2xl">
                <img
                  src={e.image}
                  alt={e.name}
                  className="w-[10rem] h-[10rem] object-cover rounded-full mt-[-4rem]  shadow-md"
                />
                <div className="mb-6 flex flex-col gap-2 text-center">
                  <h2 className="text-lg font-semibold text-[#333]">
                    {e.name}
                  </h2>
                  <p className="text-2xl font-bold text-[#FC8A22]">
                    Rs. {e.price}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

    </>
  );
};

export default FoodMenu;
