'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Message = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="gradient-05 sm:p-8 p-4 border-[1px] border-[#6A6A6A] rounded-xl relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[30px] text-[24px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Priyatosh Jana
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Mentor ISTE Chapter - HIT
          </p>
        </div>

        <p className="mt-[24px] font-extralight sm:text-[18px] text-[14px] sm:leading-[45.6px] leading-[39.6px] text-gray-300">
          Dear Members and Supporters,<br />
          Welcome to ISTE HIT Chapter! We're dedicated to innovation and learning in tech and education. Stay tuned for exciting events and opportunities.
          Join us in shaping the future of education.
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export default Message;
