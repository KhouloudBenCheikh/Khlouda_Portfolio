import Head from 'next/head';
import { useRouter } from 'next/router';
import Nav from '../components/Nav';
import Header from '../components/Header';

const Layout = ({ children, logo }) => {
  const router = useRouter();
  const isIndexPage = router.pathname === '/';

  return (
    <>
      <Head>
        <title>🦋 Khlouda Portfolio</title>
        {/* Add other meta tags, links, or scripts here */}
        <link rel="icon" href= "./logo.png" />
      </Head>
      <div className={'page bg-site text-white bg-cover bg-no-repeat font-sora relative'}>
        <Nav />
        <Header  />
        {children}
      </div>
    </>
  );
};

export default Layout;
