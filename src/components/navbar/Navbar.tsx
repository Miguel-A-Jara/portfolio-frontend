import { useTranslation } from 'react-i18next';

import Toggler from '../input/Toggler'
import NavbarParticles  from '../particles/NavbarParticles';
import NavbarLinkButton from '../buttons/NavbarLinkButton';

import useDarkMode    from '../../hooks/useDarkMode';
import navbarLinkInfo from '../../utils/navbarLinkInfo';
import ChangeLanguageButton from '../buttons/ChangeLanguageButton';

const Navbar = () => {

  const { isDarkTheme, setTheme } = useDarkMode();
  const [t] = useTranslation();

  const toggleOnChange = () => {
    setTheme(!isDarkTheme);
  };  

  return (
    <div className='hidden lg:flex flex-col gap-4 justify-between items-center h-full w-28 fixed py-10 px-2
    dark:bg-secondary-800 bg-primary-700 drop-shadow-xl transition-all duration-300 z-10'>
      <NavbarParticles />
      <ul className='mb-auto flex flex-col justify-around gap-10 z-50 relative'>
        {
          navbarLinkInfo.map(i => (
            <NavbarLinkButton key={i.text} text={t(i.text)} link={i.link}>
              <i className={i.iconClass} />
            </NavbarLinkButton>
          ))
        }
      </ul>
      <ChangeLanguageButton />
      <Toggler isActive={isDarkTheme} onChange={toggleOnChange} />
    </div>
  )
}

export default Navbar
