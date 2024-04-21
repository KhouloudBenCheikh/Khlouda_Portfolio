import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import ParticlesContainer from '../../components/ParticlesContainer'; // Import ParticlesContainer component
import CountUp from 'react-countup';
import { AiOutlineHtml5 } from "react-icons/ai";
import { BsAmazon, BsCloud, BsDatabaseFill, BsGit } from "react-icons/bs";
import { BiLogoTypescript, BiLogoTux, BiLogoTailwindCss, BiLogoReact, BiLogoPostgresql, BiLogoPython, BiLogoMongodb, BiLogoJavascript, BiLogoDjango, BiLogoDocker, BiLogoFigma, BiLogoFlask } from "react-icons/bi";
import { DiRasberryPi, DiPhotoshop, DiCss3, DiDebian, DiDocker, DiJira } from "react-icons/di";

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'UI/UX Design',
        icons: [
          <BiLogoFigma key={7} />,
          <DiPhotoshop key={8} />,
        ],
      },

      {
        title: 'MLOps',
        icons: [
          <BiLogoPython key={18} />,
          <BiLogoDocker key={14} />,
          <BsAmazon key={10} />,
          <BsCloud key={11} />,
        ],
      },

      {
        title: 'Embedded SW Development',
        icons: [
          <BiLogoTux key={4} />,
          <DiDebian key={7} />,
          <DiRasberryPi key={10} />,
        ],
      },

      {
        title: 'Data Science',
        icons: [
          <BsDatabaseFill key={13} />,
          <BiLogoDjango key={15} />,
          <BiLogoFlask key={19} />,
          <BiLogoMongodb key={17} />,
          <BiLogoPostgresql key={3} />,
          <DiJira key={9} />,
        ],
      },

      {
        title: 'Web Development',
        icons: [
          <BsGit key={12} />,
          <AiOutlineHtml5 key={0} />,
          <DiCss3 key={6} />,
          <BiLogoJavascript key={16} />,
          <BiLogoTypescript key={5} />,
          <BiLogoReact key={1} />,
          <BiLogoTailwindCss key={2} />,
        ],
      },

    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'The Youngest Arabic Researcher in Accessibility',
        Organisation: 'ICCHP18 (Austria)',
        stage: '2018',
      },
      {
        title: 'State Representative among 140k participants',
        Organisation: 'Tunisian National Reading Competition',
        stage: '2022',
      },
      {
        title: 'Principal Judge',
        Organisation: 'Hult Prize',
        stage: '2022',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Machine Learning Developer - Product Manager',
        Company: '3D Wave - Tunisia',
        stage: '07/2023 - Present',
      },
      {
        title: 'Machine Learning Researcher',
        Company: 'Signal, Image, and Information Technology Research Laboratory (ENIT) - Tunisia',
        stage: '09/2022 - 12/2023',
      },
      {
        title: 'Data Scientist',
        Company: 'Hospital District El Alia - Tunisia',
        stage: '08/2021 - 09/2022',
      },
      {
        title: 'Biomedical Engineer',
        Company: 'Hospital District El Alia - Tunisia',
        stage: '08/2021 - 09/2022',
      },
      {
        title: 'Radio Host',
        Company: 'Mandra FM - Tunisia',
        stage: '05/2022 - 01/2023',
      },
      {
        title: 'Sales Manager',
        Company: 'SAMSUNG HealthCare - Tunisia',
        stage: '01/2021 - 06/2021',
      },
      {
        title: 'Clinical Application Specialist',
        Company: 'PHILIPS Imaging HealthCare - Tunisia',
        stage: '04/2020 - 01/2021',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'MLOps — Machine Learning Operations Specialization',
        University: 'Duke University — Coursera',
        stage: '2023 - Present',
      },
      {
        title: 'Research Master in Statistics and Data Science',
        University: 'National Engineering School of Tunis',
        stage: '2022 - 2023',
      },
      {
        title: 'Full-Stack Web Development Training Program',
        University: 'Kulimi e.V',
        stage: '06/2022 - 12/2022',
      },
      {
        title: 'Master Degree in Signal Processing',
        University: 'The Higher Institute of Medical Technologies of Tunis',
        stage: '09/2017 - 12/2019',
      },
      {
        title: 'Bachelor Degree in Biomedical Engineering',
        University: 'The Higher Institute of Medical Technologies of Tunis',
        stage: '09/2014 - 06/2017',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-screen bg-black text-white overflow-auto py-32 text-center xl:text-left" >
      
      <motion.div  
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      ></motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 relative" style={{height:'130vh'}}>
        <div className="flex-1 flex flex-col justify-center">

          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="aboutt max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >I'm <span className="Khoul">Khouloud Ben Cheikh</span>, your friendly <b>ML Developer</b> known as the <b>"Digital Dynamo"</b> in some circles 🐱‍🏍
          
        <br />I'm a versatile explorer in Technology, from <b>Health AI</b>, <b>Embedded
        Development</b> to <b>Full-stack wizardry</b>. <br />Oh, did I mention that I'm a 
        <b> Biomedical Engineer</b>, and <b>Sales strategist</b> for cutting-edge Medical
        Systems too ? 🤭  <br /> 
        Yeap, I'm the Person behind the curtain, ensuring that the Medical
        devices live their best lives ❤
        <br />
        When I'm not in the Digital Realm, I'm making jewelry and diving into
        books, all while juggling a multitude of extracurriculars of Social
        life.
          </motion.p>
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  + Years of experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={100} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex
                    ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    : ''
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                {item.Organisation && <div className="hidden md:flex">-</div>}
                <div>{item.Organisation}</div>
                {item.University && <div className="hidden md:flex">-</div>}
                <div>{item.University}</div>
                <div className="flex gap-x-4">
                  {item.icons &&
                    item.icons.map((Icon, iconIndex) => (
                      <div className="text-2xl text-white" key={iconIndex}>
                        {Icon}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
