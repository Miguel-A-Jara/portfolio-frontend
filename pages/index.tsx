import Navbar from '../src/components/navbar/Navbar';
import MobileNavbar from '../src/components/navbar/MobileNavbar';
import useWindowSize from '../src/hooks/useWindowSize';

const Home = () => {

  const { width } = useWindowSize();

  return (
    <div className='relative'>
      {
        width > 1023
        ? <Navbar />
        : <MobileNavbar />
      }
      <main className='mb-16 lg:mb-0 lg:ml-28 -z-20'>
        <p className='h-[100vh] pb-48 sticky top-0 bg-secondary-900'>hey</p>
        <p className='h-[100vh] pb-48 sticky top-0 bg-secondary-700'>hey</p>
        <p className='h-[100vh] pb-48 sticky top-0 bg-secondary-900'>hey</p>
        <p className='h-[100vh] pb-48 sticky top-0 bg-secondary-700'>hey</p>
        <p className='h-[100vh] pb-48 sticky top-0 bg-secondary-900'>hey</p>
        <p className='h-[100vh] pb-48 sticky top-0 bg-secondary-700'>hey</p>
        <p className='h-[100vh] pb-48 sticky top-0 bg-secondary-900'>hey</p>
        <p className='h-[100vh] pb-48 sticky top-0 bg-secondary-700'>hey</p>
        <p className='h-[100vh] pb-48 sticky top-0 bg-secondary-900'>hey</p>
        <p className='h-[100vh] pb-48 sticky top-0 bg-secondary-700'>hey</p>
        <p className='h-[100vh] pb-48 sticky top-0 bg-secondary-900'>hey</p>
        <p className='h-[100vh] pb-48 sticky top-0 bg-secondary-700'>hey</p>
        fhdhfd
      </main>
    </div>
  )
}

export default Home;
