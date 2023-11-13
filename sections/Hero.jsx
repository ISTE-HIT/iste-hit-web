'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa';
const boxesData = [
  {
    title: 'Visit US',
    icon: <FaMapMarker />,
    info: 'CSE-CS Department Haldia Institue of Technology',
  },
  {
    title: 'Give Us a Call',
    icon: <FaPhone />,
    info: '+91 123456789',
  },
  {
    title: 'Send us Message',
    icon: <FaEnvelope />,
    info: 'hit-iste@gmail.com',
  },
];
const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col sm:flex-row gap-10`}
    >
      {/* Left Div */}
      <div className="flex flex-col justify-center items-start sm:w-1/2 mt-16"> {/* Adjusted margin-top to move the content down */}
        <div className="z-10">
          <motion.h2
            variants={textVariant(1.1)}
            className="text-2xl font-semibold text-white mb-2"
          >
            Empowering Student Innovators
          </motion.h2>
          <motion.p
            variants={textVariant(1.2)}
            className="text-gray-300 mb-4"
          >
            Where innovation thrives, and students lead the way. Welcome to the ISTE Student Chapter at Haldia Institute of Technology!
          </motion.p>
          <motion.button
            variants={textVariant(1.3)}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
          >
            Apply for Membership
          </motion.button>
        </div>
      </div>

      {/* Right Div */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px] sm:w-1/2 sm:pl-8"
      >
        <img
          src="/cover.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative custom-border"
        />
      </motion.div>
    </motion.div>
    <div className="flex items-center justify-center p-4 my-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {boxesData.map((box, index) => (
          <div
            key={index}
            className="bg-gray-700 shadow-2xl p-4 rounded-lg text-center text-white flex flex-col justify-center items-center"
          >
            <div className="text-2xl mb-2">{box.icon}</div>
            <div className="text-lg font-semibold mb-2">{box.title}</div>
            <div className="text-sm font-light">{box.info}</div>
          </div>
        ))}
      </div>
    </div>

  </section>
);

export default Hero;
