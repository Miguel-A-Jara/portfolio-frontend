import CloseButton          from '../buttons/CloseButton';
import NavbarParticles      from '../particles/NavbarParticles';
import MobileNavbarShadow   from './MobileNavbarShadow';
import ChangeLanguageButton from '../buttons/ChangeLanguageButton';

interface Props {
  children: React.ReactElement | React.ReactElement[];
  isNavOpen: boolean;
  handleToggle: () => void;
};

const MobileNavbarBackground = ({ children, isNavOpen, handleToggle }: Props) => {
  return (
    <>
      <div className={
        `lg:hidden flex flex-col gap-4 justify-between items-end p-3 z-50 fixed h-full w-[100vw] max-w-3xl 
        transition-all duration-300 sm:overflow-scroll
        dark:bg-secondary-800 bg-primary-500
        ${isNavOpen ? 'left-0 opacity-100' : '-left-full opacity-0'}`
      }>
        { children }
        <ChangeLanguageButton />
        <NavbarParticles />
        <CloseButton handleToggle={handleToggle} />
      </div>
      <MobileNavbarShadow handleToggle={handleToggle} isNavOpen={isNavOpen} />
    </>
  )
}

export default MobileNavbarBackground