'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { navVariants } from '../utils/motion';
import styles from '../styles';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleMenuClick = (path) => {
    router.push(path);
    setIsNavOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} ${styles.flexCenter} py-8 relative top-0`}
    >
      <div className={`${styles.innerWidth} flex items-center justify-between p-4`}>
        <img
          src="https://img.icons8.com/?size=512&id=hXQVOG_zPMn1&format=png"
          className="h-8 mr-3"
          alt="hit-iste-logo"
        />
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleNav}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isNavOpen}
          >
            <GiHamburgerMenu className='w-5 h-5 text-xl'/>
          </button>
        </div>
        <div
          className={`items-center md:flex md:w-auto md:order-1 ${isNavOpen ? 'block' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col mt-4 space-y-4 md:space-y-0 md:flex-row md:space-x-8">
            {[
              { path: '/', label: 'HOME' },
              { path: '/events', label: 'EVENTS' },
              { path: '/blogs', label: 'BLOGS' },
              { path: '/memories', label: 'MEMORIES' },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  onClick={() => handleMenuClick(item.path)}
                  className={`block rounded ${router.pathname === item.path ? 'border-white border-b-2 text-white' : 'text-white'} hover:font-extrabold`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <div className="flex gap-2 m-4 md:ml-12">
              <button
                type="button" // Added type attribute
                className="text-white text-md py-2 px-4 cursor-pointer bg-transparent border border-white rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out"
                onClick={() => handleMenuClick('/register')}
              >
                Register
              </button>
              <button
                type="button" // Added type attribute
                className="text-white text-md py-2 px-4 cursor-pointer bg-slate-600 rounded-full hover:bg-slate-700 transition duration-300 ease-in-out"
                onClick={() => handleMenuClick('/login')}
              >
                Login
              </button>
            </div>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
