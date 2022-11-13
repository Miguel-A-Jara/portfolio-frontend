import CloseButton from "../buttons/CloseButton";

interface Props {
  children: React.ReactElement | React.ReactElement[];
  isNavOpen: boolean;
  handleToggle: () => void;
};

const MobileNavbarBackground = ({ children, isNavOpen, handleToggle }: Props) => {
  return (
    <>
      <div className={
        `lg:hidden flex flex-col-reverse items-end p-3 z-50 fixed h-[100vh] w-[100vw] max-w-3xl transition-all duration-300
        dark:bg-secondary-800 bg-primary-500
        ${isNavOpen ? 'left-0 opacity-100' : '-left-full opacity-0'}`}
      >
        { children }
        <CloseButton handleToggle={handleToggle} />
      </div>
      {
        isNavOpen && 
        <div 
          className='bg-black/75 w-[100vw] h-[100vh] absolute z-10' 
          onClick={handleToggle}
        />
      }
    </>
  )
}

export default MobileNavbarBackground