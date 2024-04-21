import Image from 'next/image';
import { useState, useEffect } from 'react';
import Typed from 'typed.js'; // Import Typed library
import ParticlesContainer from '../components/ParticlesContainer';
import Avatar from '../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Button from '../components/Button';
import Socials from '../components/socials';
import Link from 'next/link'; // Import Link from next/link

const Home = () => {
  useEffect(() => {
    // Initialize Typed.js after component mount
    const typed = new Typed('.text', {
      strings: ['Machine Learning Developer', "Biomedical Engineer", 'IT Blogger'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    // Cleanup function to destroy Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []); // Run the effect only once after initial render

  const handleNavigateToContact = () => {
    // Navigate to the contact page
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      
      <div className='☐ bg-black h-full'> {/* Change bg-primary/60 to bg-black */}

        {/* text */}
        <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        
          <div className='text-center flex flex-col justify-center xl:pt-20 h-full container mx-auto pr-20'>
            {/* title */}
            <h1 className='h1hey'> HEY ^^ </h1>

            <p className='p'>
              I am<span className="Khou"> Khouloud</span>
              <span className="Ben"> Ben Cheikh</span>,<br /> <span className="text"></span>
            </p>
            
          </div>
        </div>
        
        {/* image */}
        <div className=' w-[1200px] h-full absolute left-0 bottom-0'>
          {/* bg img */}
          <div className='bg-none xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
          {/* particles */}
          <ParticlesContainer />  
          {/* avatar img */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{ duration: 1, ease: 'easeInOut' }}
            className='w-full h-full max-w-[540x] max-h-[700px] absolute -bottom-32 lg:bottom-0 lg:right-[3%]'>
            <Avatar /> 
          </motion.div>
        </div>

      </div>
    </>
  );
};

export default Home;
