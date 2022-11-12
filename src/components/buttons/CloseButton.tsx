interface Props {
  handleToggle : () => void;
}

const CloseButton = ({ handleToggle }: Props) => {
  return (
    <button 
      className='
        w-10 h-10 flex items-center justify-center rounded-full
        dark:bg-secondary-900 bg-primary-500 dark:text-secondary-600 text-primary-800
        active:scale-90 transition-all duration-300'
      onClick={handleToggle} 
    >
      <i className='fa-solid fa-xmark text-2xl'/>
    </button>
  )
}

export default CloseButton
