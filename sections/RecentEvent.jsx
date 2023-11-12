'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TypingText } from '../components';
import { FaMapMarker } from 'react-icons/fa';
import { IoCalendarOutline } from 'react-icons/io5';
const eventData = [
  {
    id: 1,
    imageUrl: 'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg',
    eventName: 'Coding Competition',
    eventTiming: '23 April 2023',
    eventLocation: 'CNF Lab HIT',
  },
  {
    id: 2,
    eventName: 'Hackathon',
    eventTiming: '5-10 October 2023',
    eventLocation: 'Cryptography Lab HIT',
  },
  // Add more event objects here
];
const RecentEvent = () => {
  const topEvent = eventData[0];
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="Recent Events" textStyles="text-center" />
        <div className="flex flex-wrap">
          {/* Left Div */}
          <div className="w-full sm:w-1/2 p-4">
            <div className="relative">
              <img
                src={topEvent.imageUrl}
                alt="Event"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-[rgba(0,0,0,0.5)] text-white rounded-md">
                <div className="font-bold">{topEvent.eventName}</div>
                <div className="flex items-center space-x-3">
                  <IoCalendarOutline />
                  <span>{topEvent.eventTiming}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarker />
                  <span>{topEvent.eventLocation}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Div */}
          <div className="w-full sm:w-1/2 p-4 ">
            {eventData.slice(0).map((event) => (
              <div key={event.id} className="mb-4 border-l-4 border-lime-100 mr-4">
                <div className='ml-4 text-gray-200'>
                  <div className="font-bold">{event.eventName}</div>
                  <div className="flex items-center space-x-3">
                    <IoCalendarOutline />
                    <span>{event.eventTiming}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaMapMarker />
                    <span>{event.eventLocation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  )
};

export default RecentEvent;
