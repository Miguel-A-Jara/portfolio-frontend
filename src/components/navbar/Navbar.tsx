import useDarkMode from '../../hooks/useDarkMode';
import Toggler from '../input/Toggler'

const Navbar = () => {

  const { isDarkTheme, setTheme } = useDarkMode();

  const toggleOnChange = () => {
    setTheme(!isDarkTheme);
  };

  return (
    <div className='hidden lg:block dark:bg-secondary-800 bg-primary-500 h-[100vh] w-28 fixed'>
      <h1>Hey</h1>
      <Toggler isActive={isDarkTheme} onChange={toggleOnChange} />
    </div>
  )
}

export default Navbar
