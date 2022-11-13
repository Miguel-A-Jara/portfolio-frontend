import { useState } from 'react';

import Toggler from '../input/Toggler';
import CloseButton     from '../buttons/CloseButton';
import HamburgerButton from '../buttons/HamburgerButton';

import useDarkMode   from '../../hooks/useDarkMode';
import useScrollPage from '../../hooks/useScrollPage';
import NavbarParticles from '../particles/NavbarParticles';
import MobileNavbarBackground from './MobileNavbarBackground';

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
      <div className='flex items-center justify-between flex-row-reverse px-7 lg:hidden fixed bottom-0 h-16 w-[100vw]
      dark:bg-secondary-800 bg-primary-500 text-2xl z-10'
      >
        <HamburgerButton handleToggle={handleToggle} />
        <Toggler isActive={isDarkTheme} onChange={toggleOnChange} />
        <NavbarParticles />
      </div>

      <MobileNavbarBackground isNavOpen={isNavOpen} handleToggle={handleToggle} >
        <NavbarParticles />
      </MobileNavbarBackground>
    </>
  )
}

export default MobileNavbar;
