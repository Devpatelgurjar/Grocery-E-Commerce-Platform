import React, { useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

// An infinite scrolling banner 
const InfiniteBanner = () => {
  const sliderRef = useRef(null);
  const controls = useAnimationControls();

  const banners = [
    "MEAL PLAN WITH GROCERY STORE",
    "MAKING THE MOST OF YOUR GROCERY",
    "FRESH FRUITS AVAILABLE",
    "GET YOUR DAILY ESSENTIALS",
  ];

  // Start the animation
  const startAnimation = () => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20, 
          ease: 'linear',
        },
      },
    });
  };

  return (
    <div
      className="mt-4 flex overflow-hidden whitespace-nowrap space-x-4"
    >
      <motion.div
        ref={sliderRef}
        className="flex"
        animate={controls}
        initial={{ x: '0%' }}
        onHoverStart={() => controls.stop()} 
        onHoverEnd={startAnimation}
        onMount={() => startAnimation()}
      >
        {[...banners, ...banners].map((text, index) => (
          <div
            key={index}
            className={`min-w-[250px] px-4 py-8 m-2 rounded-lg text-white font-bold text-center ${index % 2 === 0 ? "bg-green-700" : "bg-purple-700"}`}
          >
            {text}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteBanner;