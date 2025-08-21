import React from 'react';
import { motion } from 'framer-motion';

// Media assets
import video1 from '../assets/video5.mp4';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo6.avif';

const HeroSection = () => {
  // Animation for images and video
  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.8,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="flex flex-col items-center px-4 mt-6 lg:mt-20">
      {/* Heading */}
      <h1 className="text-4xl tracking-wide text-center sm:text-6xl lg:text-7xl">
        UHUGLO VENTURES LIMITED
      </h1>

      <h3 className="mt-4 text-2xl tracking-wide text-center text-transparent sm:text-4xl bg-gradient-to-r from-sky-300 to-blue-800 bg-clip-text">
        your satisfaction is our desire
      </h3>

      <p className="max-w-3xl mt-6 text-lg text-center text-neutral-500">
        We are your non-stop shop for quality gadgets and everyday essentials. From smartwatches, headphones,
        speakers and chargers to household accessories like blenders and air fryers. We bring you the best at
        affordable prices, great value, and fast delivery. Don't slack!.
      </p>

      {/* CTA Button */}
      <div className="flex justify-center my-10">
        <a
          href="https://wa.me/2349067312726"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-blue-600 transition border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white"
        >
          Shop With Us Now
        </a>
      </div>

      {/* Media Grid */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 px-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Video */}
        <motion.div
          className="w-full overflow-hidden bg-black shadow-xl aspect-video rounded-2xl"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >

       <video
          autoPlay
          loop
          muted
          className="object-contain w-full h-full"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </motion.div>
 

        {/* Images */}
        {[photo2, photo3].map((photo, index) => (
          <motion.div
            key={index}
            className="w-full overflow-hidden bg-white shadow-xl aspect-video rounded-2xl"
            custom={index + 1}
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <img
              src={photo}
              alt={`Product ${index + 1}`}
              className="object-contain w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
