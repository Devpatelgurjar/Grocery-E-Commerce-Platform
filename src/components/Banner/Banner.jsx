import React, { useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

// A clean and smooth infinite scrolling banner component
const InfiniteBanner = () => {
  const sliderRef = useRef(null);
  const controls = useAnimationControls();

  // Your existing banner items
  const banners = [
    "MEAL PLAN WITH GROCERY STORE",
    "MAKING THE MOST OF YOUR GROCERY",
    "FRESH FRUITS AVAILABLE",
    "GET YOUR DAILY ESSENTIALS",
  ];

  // Start the animation when the component mounts
  const startAnimation = () => {
    controls.start({
      x: ['0%', '-50%'], // Move to half the width for seamless looping
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20, // Adjust this for faster/slower scrolling
          ease: 'linear', // Smooth, continuous motion
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
        onHoverStart={() => controls.stop()} // Pause on hover
        onHoverEnd={startAnimation} // Resume on hover end
        // Start animation immediately
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