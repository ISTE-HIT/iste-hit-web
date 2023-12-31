'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative bottom-0`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-gray-400">
            ISTE@HIT
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Made with ❤️ Copyright © {new Date().getFullYear()} - {new Date().getFullYear() + 1} ISTE@HIT
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a href={social.url} alt="social-icon" target="_blank" rel="noreferrer" key={social.name}>
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
