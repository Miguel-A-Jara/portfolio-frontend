interface Props {
  isNavOpen: boolean;
  handleToggle: () => void;
}

const MobileNavbarShadow = ({ handleToggle, isNavOpen  }: Props) => {
  return (
    isNavOpen 
    ? <div 
      className='bg-black/75 w-[100vw] h-[100vh] fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm z-10' 
      onClick={handleToggle}
    />
    : <></>
  )
}

export default MobileNavbarShadow