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
      <main className='mb-16 lg:ml-28'>
        <p className='pb-48'>hey</p>
        <p className='pb-48'>hey</p>
        <p className='pb-48'>hey</p>
        <p className='pb-48'>hey</p>
        <p className='pb-48'>hey</p>
        fhdhfd
      </main>
    </div>
  )
}

export default Home;
