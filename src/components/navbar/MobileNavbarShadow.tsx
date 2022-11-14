interface Props {
  isNavOpen: boolean;
  handleToggle: () => void;
}

const MobileNavbarShadow = ({ handleToggle, isNavOpen  }: Props) => {
  return (
    isNavOpen 
    ? <div 
      className='bg-black/75 w-[100vw] h-[100vh] absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm' 
      onClick={handleToggle}
    />
    : <></>
  )
}

export default MobileNavbarShadow