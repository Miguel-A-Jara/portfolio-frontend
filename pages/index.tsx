import Navbar from '../src/components/navbar/Navbar';
import MobileNavbar from '../src/components/navbar/MobileNavbar';
import useWindowSize from '../src/hooks/useWindowSize';
import AboutMe from '../src/components/sections/about-me/AboutMe';

const Home = () => {

  const { width } = useWindowSize();

  return (
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
  )
}

export default Home;
