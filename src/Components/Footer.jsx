import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [navlinking, setnavlinking] = useState([
    {
      name: 'Home',
      linking: '/'
    },
    {
      name: 'About',
      linking: '/'
    },
    {
      name: 'Products',
      linking: '/'
    },
    {
      name: 'Contact',
      linking: '/'
    },
  ])
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
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
        className="bg-black flex md:flex-row flex-col justify-evenly py-3 lg:gap-0 gap-5">
        <div className="text-[var(--orange-color)] text-2xl font-bold mx-auto">
          <Link href="/" className='font-["Lobster"]'>
            <span className="text-white">Mohan</span> jee
          </Link>
        </div>
        <div className=" space-x-4 mx-auto">
          <ul className="flex gap-5 lg:flex-row flex-col">
            {
              navlinking.map((item, index) => {
                return (
                  <li><Link key={index} id={index} href={item.linking} className="text-[#95A1AD] transition-all hover:text-white relative inline-block group">{item.name}
                    <span className="block w-0 group-hover:w-full transition-all duration-500 h-1 bg-[--orange-color] absolute bottom-0 left-0"></span>
                  </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;
