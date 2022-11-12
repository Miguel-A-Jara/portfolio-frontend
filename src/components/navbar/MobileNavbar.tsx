import { useState } from 'react';

import Toggler from '../input/Toggler';
import CloseButton     from '../buttons/CloseButton';
import HamburgerButton from '../buttons/HamburgerButton';

import useDarkMode   from '../../hooks/useDarkMode';
import useScrollPage from '../../hooks/useScrollPage';

const MobileNavbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const { setIsPageScrollable } = useScrollPage();
  const { isDarkTheme, setTheme } = useDarkMode();

  const handleToggle = () => {
    setIsNavOpen(prev => !prev);
    setIsPageScrollable(prev => !prev);
  };

  const toggleOnChange = () => {
    setTheme(!isDarkTheme);
  };

  return (
    <>
      <div className='flex flex-row-reverse p-4 lg:hidden fixed bottom-0 h-16 w-[100vw]
      dark:bg-secondary-800 bg-primary-500 text-2xl'
      >
        <HamburgerButton handleToggle={handleToggle} />
      </div>

      {/* Navbar Opened Container */}
      <div className={
        `lg:hidden z-10 fixed h-[100vh] w-[100vw] transition-all duration-300
        dark:bg-secondary-800 bg-primary-200
        ${isNavOpen ? 'left-0 opacity-100' : '-left-full opacity-0'}`}
      >
        <CloseButton handleToggle={handleToggle} />
        <Toggler isActive={isDarkTheme} onChange={toggleOnChange} />
      </div>
    </>
  )
}

export default MobileNavbar;
