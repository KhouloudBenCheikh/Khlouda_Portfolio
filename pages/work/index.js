import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import ParticlesContainer from '../../components/ParticlesContainer';
import WorkSlider from '../../components/WorkSlider';

const Work = () => {
  return (
    <div className='h-full bg-black py-36 flex items-center'>
      <ParticlesContainer />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* Text */}
          <div className='text-center flex xl:w-[30vm] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-8'> 
              My Work <span className='text-accent'>.</span> 
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
                Ever heard of tech for the greater good? 
                That's my jam! I've whipped up projects that aren't 
                just cool – they're making the world a better place.
                <br /> <span className='text-accent'> (Swipe Left to see more)</span>
            </motion.p>
          </div>
          {/* Slider */}
          <div 
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'
          >
            <WorkSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
