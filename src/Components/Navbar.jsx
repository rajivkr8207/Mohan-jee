import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";

const Navbar = () => {
    const [navlinking, setNavlinking] = useState([
        { name: 'Home', linking: '/' },
        { name: 'About', linking: '/' },
        { name: 'Products', linking: '/' },
        { name: 'Contact', linking: '/' },
    ]);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const variants = {
        hidden: {
            opacity: 0,
            y: -100,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.5,
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
            <motion.header
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
            >
                <nav className="bg-black p-4">
                    <div className="container mx-auto flex lg:justify-around justify-between items-center">
                        <div className='text-[var(--orange-color)] text-2xl font-bold'>
                            <Link to="/" className='font-["Lobster"]'><span className='text-white'>Mohan</span> jee</Link>
                        </div>
                        <div className="hidden md:flex space-x-4">
                            {navlinking.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.linking}
                                    className="text-[#95A1AD] transition-all duration-500 hover:text-white relative inline-block group"
                                >
                                    {item.name}
                                    <span className="block w-0 group-hover:w-full transition-all duration-500 h-1 bg-[--orange-color] absolute bottom-0 left-0"></span>
                                </Link>
                            ))}
                        </div>
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="text-white focus:outline-none">
                                <CiMenuFries className='text-3xl my-auto' />
                            </button>
                        </div>
                    </div>
                    {isOpen && (
                        <motion.ul
                            variants={variants}
                            initial="hidden"
                            animate="show"
                            className="md:hidden flex flex-col justify-center items-center gap-3"
                        >
                            {navlinking.map((item, index) => (
                                <motion.li variants={stag}>
                                    <Link

                                        key={index}
                                        to={item.linking}
                                        className="text-[#95A1AD] transition-all hover:text-white relative inline-block group"
                                    >
                                        {item.name}
                                        <span className="block w-0 group-hover:w-full transition-all duration-500 h-1 bg-[--orange-color] absolute bottom-0 left-0"></span>
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </nav>
            </motion.header>
        </>
    );
};

export default Navbar;
