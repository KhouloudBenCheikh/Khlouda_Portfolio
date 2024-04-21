import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header = () => {
  const router = useRouter();
  const [isIndexPage, setIsIndexPage] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsIndexPage(router.pathname === '/');
  }, [router.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ${isScrolled && isIndexPage ? 'scrolled' : ''}`}>
      <div className="container mx-auto">
        <div className="logo flex flex-col lg:flex-row items-center justify-between gap-y-6 py-8">
          <Link href="/">
            <Image 
              src={'./logo.png'}
              width={120}
              height={48}
              alt=""
              priority={true}
              className={`${isScrolled && isIndexPage ? 'hidden' : ''}`}
            />
          </Link>
          {isIndexPage && <Socials />}
        </div>
      </div> 
    </header>
  );
};

export default Header;
