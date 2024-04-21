import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Pagination } from 'swiper';

import Image from 'next/image';
import ParticlesContainer from '../components/ParticlesContainer'; // Importing ParticlesContainer

// Data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Inside Neural Network',
          path: '../public/project1.png',
          githubUrl: 'https://github.com/KhouloudBenCheikh/Neural-Network-Analysis',
        },
        {
          title: 'LLM Blending',
          path: '../public/llm.png',
          githubUrl: 'https://github.com/KhouloudBenCheikh/LLM-Blending-Biomedical-Field',
        },
        {
          title: 'CXR Captioning',
          path: '../public/chest.png',
        },
        {
          title: 'Caries Detection & Segmentation',
          path: '../public/caries.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'Cells Segmentation',
          path: '../public/project3.png',
          githubUrl: 'https://github.com/KhouloudBenCheikh/Cells_Segmentation'
        },
        {
          title: 'Octo-B - ICCHP18 Conference',
          path: '../public/icchp.png',
        },
        {
          title: 'Teeth Generation',
          path: '../public/teethg.png',
        },
        {
          title: 'Brain Tumor Segmentation',
          path: '../public/brain.png',
          githubUrl:'https://github.com/KhouloudBenCheikh/Brain-Tumor-Classification-using-CNN',
        },
      ],
    },
{
    images: [
    {
      title: 'VR Mini Golf',
      path: '../public/vr_mini.png',
    },
  
  {
    title: 'Burger Website',
    path: '../public/web.png',
    githubUrl: 'https://github.com/KhouloudBenCheikh/AI_Burger_Website',
  },
  {
    title: 'Bed Availability PRediction',
    path: '../public/bed.png',
  },
  {
    title: 'Personal Assistant for Autistic Children',
    path: '../public/autistoy.png',
  },
],
},
  ],
};


const WorkSlider = () => {
  return (
    <div>
      {/* ParticlesContainer covering the whole screen */}
      <Swiper
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={{ Pagination }}
        className='h-[280px] sm:h-[480px]'
      >
        {workSlider.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer mt-10'>
              {slide.images.map((image, index) => (
                <div
                  className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                  key={index}
                >
                  <div className=' group flex items-center justify-center relative overflow-hidden'>
                    {/* image */}
                    <Image src={image.path} width={500} height={300} alt='' />
                    {/* overlay gradient*/}
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#242323] to-[#000000] 
                      opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                    {/* title */}
                    <div className='title absolute bottom-0 translate-y-full group^-hover:-translate-y-10 
                      group-hover:xl:-translate-y-20 transition-all duration-300'>
                      <div>
                        {/* title part1*/}
                        <div>{image.title}</div>
                        {/* GitHub link */}
                        {image.githubUrl && (
                          <a
                            href={image.githubUrl}
                            className='text-sm text-gray-300 mt-1 hover:text-white'
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkSlider;