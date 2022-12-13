interface Props {
  handleToggle : () => void;
}

const HamburgerButton = ({ handleToggle }: Props) => {
  return (
    <button 
      className='
        w-10 h-10 flex items-center justify-center rounded-full
        dark:bg-secondary-900 bg-primary-800 dark:text-secondary-600 text-primary-500
        active:scale-90 transition-all duration-300'
      onClick={handleToggle} 
    >
      <i className='fa-solid fa-bars text-2xl'/>
    </button>
  )
}

export default HamburgerButton