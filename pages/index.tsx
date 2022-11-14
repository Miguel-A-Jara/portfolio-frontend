import Head from 'next/head';

import Navbar       from '../src/components/navbar/Navbar';
import MobileNavbar from '../src/components/navbar/MobileNavbar';
import AboutMe      from '../src/components/sections/about-me/AboutMe';

import useWindowSize from '../src/hooks/useWindowSize';

const Home = () => {

  const { width } = useWindowSize();

  return (
    <>
      <Head>
        <title>Portfolio - Miguel Jara</title>
      </Head>
      <div className='relative max-w-[1920px] mx-auto'>
        {
          width > 1023
          ? <Navbar />
          : <MobileNavbar />
        }
        <main className='lg:mb-0 lg:ml-28 -z-20'>
          <AboutMe />
        </main>
      </div>
    </>
  )
}

export default Home;
