import useDarkMode from '../../hooks/useDarkMode';
import Toggler from '../input/Toggler'

const Navbar = () => {

  const { isDarkTheme, setTheme } = useDarkMode();

  const toggleOnChange = () => {
    setTheme(!isDarkTheme);
  };

  return (
    <div className='hidden lg:flex flex-col justify-between items-center h-[100vh] w-28 fixed py-10
    dark:bg-secondary-800 bg-primary-500 drop-shadow-xl'>
      
      <Toggler isActive={isDarkTheme} onChange={toggleOnChange} />
    </div>
  )
}

export default Navbar
