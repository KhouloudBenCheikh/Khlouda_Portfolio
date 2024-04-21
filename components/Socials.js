import Link from 'next/link';
import {
  RiLinkedinFill,
  RiMediumFill,
  RiGithubLine,
  RiBehanceLine,
  RiGraduationCapLine,
  RiMailSendFill,
} from 'react-icons/ri';
import { AiOutlineVerticalRight } from "react-icons/ai";
import { BiLogoUpwork } from "react-icons/bi";
const Socials = () => {
  return (
    <div className='social flex items-center gap-x-5 text-lg'>
      <a href='https://www.linkedin.com/in/khouloudbencheikh/' target='_blank' rel='noopener noreferrer' className='transition-all duration-300'>
        <RiLinkedinFill className='text-[#d8ecff] hover:text-[#63d2e3] cursor-pointer' />
      </a>


      <a href='https://medium.com/@khouloudbencheikh011' target='_blank' rel='noopener noreferrer' className='hover:text-[#63d2e3] transition-all duration-300'>
        <RiMediumFill />
      </a>
      <a href='https://github.com/KhouloudBenCheikh' target='_blank' rel='noopener noreferrer' className='hover:text-[#63d2e3] transition-all duration-300'>
        <RiGithubLine />
      </a>
      <a href='https://www.behance.net/khouloudbencheikh' target='_blank' rel='noopener noreferrer' className='hover:text-[#63d2e3] transition-all duration-300'>
        <RiBehanceLine />
      </a>
      <a href='https://www.researchgate.net/profile/Khouloud-Ben-Cheikh' target='_blank' rel='noopener noreferrer' className='hover:text-[#63d2e3] transition-all duration-300'>
        <RiGraduationCapLine /> 
        </a>
        <a href='mailto:khouloudbencheikh011@gmail.com'   rel='noopener noreferrer' className='hover:text-[#63d2e3] transition-all duration-300'>  
        <RiMailSendFill />
        </a>
        
    </div>
  );
};

export default Socials;
