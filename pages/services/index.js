import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import ParticlesContainer  from '../../components/ParticlesContainer';
import ServiceSlider from '../../components/ServiceSlider';

export const serviceData = [];

const Services = () => {
  return (
    
    <div className='h-full bg-black py-36 flex items-center'>
      <ParticlesContainer /> 
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/*text*/}
          <div className='text-center flex xl:w-[30vm] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-8'
            >
              My Services <span className='pink'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[320px] mx-auto lg:mx-0'
            >
              I specialize in delivering a diverse array of Solutions designed to empower Businesses in harnessing the full potential of Modern Technology for Strategic Growth and Sustainable Success.
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
            <ServiceSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
