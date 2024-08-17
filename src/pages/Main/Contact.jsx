import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto my-10 lg:px-5  px-0">
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
            },
          }}
          initial="hidden"
          whileInView="show"
          className="text-center lg:text-5xl md:text-4xl text-3xl font-semibold my-5 font-['Oswald'] text-gray-800"
        >
          Connect with Us
        </motion.h1>

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
            },
          }}
          initial="hidden"
          whileInView="show"
          className="flex   items-center"
        >
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7164.6549955720475!2d85.38608436459525!3d26.12086276945277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed11cff5274f19%3A0x9552a682b2447bb5!2sMohan%20Jee%20masala%20Dosa!5e0!3m2!1sen!2sin!4v1716388692988!5m2!1sen!2sin"
              className="lg:w-[100%] w-[100vw] h-[25rem] rounded-lg shadow-lg border-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
