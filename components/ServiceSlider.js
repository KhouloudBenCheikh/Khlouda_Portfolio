import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import ParticlesContainer from '../components/ParticlesContainer';
import { FreeMode, Pagination } from 'swiper';
import { RxArrowTopRight } from "react-icons/rx";
// icons
import {
  RxCode,
  RxHeart,
  RxMix,
  RxRocket,
  RxCodesandboxLogo,

} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxRocket />,
    title: 'Machine Learning Development',
    description: 'Develop Custom ML Solutions tailored to the Specific Needs of Businesses, including Predictive Analytics, NLP, Computer Vision ..',
  },
  {
    icon: <RxMix />,
    title: 'Data Science Consulting',
    description: 'Provide Consulting Services to help Companies extract actionable insights from their Data. ',
  },
  {
    icon: <RxHeart />,
    title: 'Healthcare AI Solutions',
    description: 'Develop AI-powered solutions for the Healthcare industry, such as Medical Data Analysis, Disease Diagnosis Models, and Healthcare Data Management Systems.',
  },
  {
    icon: <RxCode />,
    title: 'Full-Stack Development',
    description: 'Offer UI/UX design services to create visually appealing and user-friendly interfaces for web and mobile applications.',
  },
  {
    icon: <RxCodesandboxLogo />,
    title: 'UI/UX Design',
    description: 'Offer FS development Services to build Web applications, platforms, and Dashboards for companies.',
  },

];

const ServiceSlider = () => {
  return (
    <div>
      
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true, }}
        modules={{ FreeMode, Pagination }}
        className='h-[240px] sm:h-[340px]'
      >
        {serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>

              <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 
              flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
                {/* icon */}
                <div className='text-4xl pink mb-4'>{item.icon}</div>
                {/* title & descr*/}
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <p className='max-w-[350px] leading-normal'>{item.description}</p>
                </div>
                {/* arrow */}
                <div className='text-3xl'>
                  <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
                </div>

              </div>
            </SwiperSlide>

          );

        })}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
