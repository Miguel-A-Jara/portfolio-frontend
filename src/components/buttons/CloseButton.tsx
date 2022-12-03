interface Props {
  handleToggle : () => void;
}

const CloseButton = ({ handleToggle }: Props) => {
  return (
    <button 
      className='
        w-10 h-10 flex items-center justify-center rounded-full p-2
        dark:bg-secondary-900 bg-primary-900 dark:text-secondary-600 text-primary-500
        active:scale-90 transition-all duration-300 mt-auto'
      onClick={handleToggle} 
    >
      <i className='fa-solid fa-xmark text-2xl'/>
    </button>
  )
}

export default CloseButton
