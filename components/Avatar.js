import Image from 'next/image';

const Avatar = () => {
  return ( <div className="hidden xl:flex xl:max-w-none">
    <Image
      src={'../public/avatar1.png'}
      width= {500}
      height={100}
      alt=''
      className="translate-z-0 w-full h-full"
    />
  </div>
  );
};

export default Avatar;
