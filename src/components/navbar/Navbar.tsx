import { useTranslation } from 'react-i18next';

import Toggler from '../input/Toggler'
import NavbarParticles  from '../particles/NavbarParticles';
import NavbarLinkButton from '../buttons/NavbarLinkButton';

import useDarkMode    from '../../hooks/useDarkMode';
import navbarLinkInfo from '../../utils/NavbarLinkInfo';
import ChangeLanguageButton from '../buttons/ChangeLanguageButton';

const Navbar = () => {

  const { isDarkTheme, setTheme } = useDarkMode();
  const [t, i18n] = useTranslation();

  const toggleOnChange = () => {
    setTheme(!isDarkTheme);
  };  

  return (
    <div className='hidden lg:flex flex-col justify-between items-center h-[100vh] w-28 fixed py-10 px-2
    dark:bg-secondary-800 bg-primary-500 drop-shadow-xl z-10'
    >
      <NavbarParticles />
      <ul className='flex flex-col justify-between gap-10'>
        {
          navbarLinkInfo.map(i => (
            <NavbarLinkButton text={t(i.text)} >
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
