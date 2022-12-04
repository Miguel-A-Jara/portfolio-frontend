import Head from 'next/head';

import Navbar       from '../src/components/navbar/Navbar';
import MobileNavbar from '../src/components/navbar/MobileNavbar';
import AboutMe      from '../src/components/sections/about-me/AboutMe';
import Technologies from '../src/components/sections/technologies/Technologies';
import ContactMe    from '../src/components/sections/contact/ContactMe';

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

        <main className='mb-16 lg:mb-0 lg:ml-28 relative z-0'>
          <a id='about-me' className='absolute top-0'></a>
          <AboutMe />

          <a id='technologies' className='absolute'></a>
          <Technologies />

          <a id='contact' className='absolute'></a>
          <ContactMe />

        </main>
      </div>
    </>
  )
}

export default Home;
