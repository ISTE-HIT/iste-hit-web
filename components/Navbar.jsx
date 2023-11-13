'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { navVariants } from '../utils/motion';
import { usePathname } from 'next/navigation';
import styles from '../styles';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import '../styles/button.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleMenuClick = (path, event) => {
    event.preventDefault(); // Prevent the default behavior
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
        <button className="header-title" data-text="Awesome" onClick={() => router.push('/')}>
          <span className="actual-text">&nbsp;iste-hit-sc&nbsp;</span>
          <span aria-hidden="true" className="hover-text">&nbsp;iste-hit-sc &nbsp;</span>
        </button>
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleNav}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isNavOpen}
          >
            <GiHamburgerMenu className='w-5 h-5 text-xl' />
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
                <div
                  onClick={(event) => handleMenuClick(item.path, event)}
                  className={`block rounded ${pathname === item.path ? 'border-b-4 text-white' : 'text-white'} cursor-pointer hover:font-extrabold`}
                >
                  {item.label}
                </div>
              </li>
            ))}
            <div className="flex gap-2 m-4 md:ml-12">
              <Link legacyBehavior href="/login">
                <a className='button' onClick={() => setIsNavOpen(false)}>
                  <p>Login</p>
                </a>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
