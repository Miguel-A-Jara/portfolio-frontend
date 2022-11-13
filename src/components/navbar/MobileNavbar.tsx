import { useState } from 'react';

import useDarkMode   from '../../hooks/useDarkMode';
import useScrollPage from '../../hooks/useScrollPage';
import { useTranslation } from 'react-i18next';

import NavbarParticles from '../particles/NavbarParticles';
import navbarLinkInfo  from '../../utils/NavbarLinkInfo';

import Toggler from '../input/Toggler';
import HamburgerButton  from '../buttons/HamburgerButton';
import MobileNavbarBackground from './MobileNavbarBackground';
import MobileNavbarLinkButton from '../buttons/MobileNavbarLinkButton';

const MobileNavbar = () => {

  const [t] = useTranslation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isDarkTheme, setTheme } = useDarkMode();
  const { setIsPageScrollable } = useScrollPage();

  const handleToggle = () => {
    setIsNavOpen(prev => !prev);
    setIsPageScrollable(prev => !prev);
  };

  const toggleOnChange = () => {
    setTheme(!isDarkTheme);
  };

  return (
    <>
      <div className='flex items-center justify-between flex-row-reverse px-4 md:px-7 lg:hidden fixed bottom-0 h-16 w-[100vw]
      dark:bg-secondary-800 bg-primary-500 text-2xl z-10'
      >
        <HamburgerButton handleToggle={handleToggle} />
        <Toggler isActive={isDarkTheme} onChange={toggleOnChange} />
        <NavbarParticles />
      </div>

      <MobileNavbarBackground isNavOpen={isNavOpen} handleToggle={handleToggle} >
        <ul className='w-full flex flex-col flex-1 justify-between'>
          {
            navbarLinkInfo.map(i => (
              <MobileNavbarLinkButton text={t(i.text)} >
                <i className={i.iconClass} />
              </MobileNavbarLinkButton>
            ))
          }
        </ul>
      </MobileNavbarBackground>
    </>
  )
}

export default MobileNavbar;
