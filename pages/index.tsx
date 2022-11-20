import Head from 'next/head';

import Navbar       from '../src/components/navbar/Navbar';
import MobileNavbar from '../src/components/navbar/MobileNavbar';
import AboutMe      from '../src/components/sections/about-me/AboutMe';
import Technologies from '../src/components/sections/technologies/Technologies';

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
          <a id='about-me' className='absolute top-0'></a>
          <AboutMe />


          <a id='technologies' className='absolute'></a>
          <Technologies />
        </main>
      </div>
    </>
  )
}

export default Home;
