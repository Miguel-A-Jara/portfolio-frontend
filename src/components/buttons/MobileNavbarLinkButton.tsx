import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';


interface Props {
  children: React.ReactElement;
  text: string;
  handleToggle: () => void;
  link: string;
}

const MobileNavbarLinkButton = ({ children, text, handleToggle, link }: Props) => {

  const { isModalOpen } = useContext(ModalContext);

  return (
    <a 
      className={`relative flex items-center ${isModalOpen && 'pointer-events-none'}`}
      onClick={handleToggle} 
      href={link}
    >
      <button className='text-3xl rounded-3xl w-full h-16 transition-all duration-300 px-2 sm:px-4
        bg-black/30 border-4 dark:border-secondary-400 border-primary-400 dark:text-secondary-400 text-primary-300
        hover:rounded-md hover:bg-black/20 hover:dark:text-secondary-300 hover:text-primary-200
        focus:outline-none focus:rounded-md focus:scale-[0.98]
        flex items-center peer gap-4'
      >
        <span className='w-10'>{ children }</span>
        <p className='text-xl font-sans'>
          {text}
        </p>
      </button>

      <div 
        className={`bg-black/50 rounded-3xl top-0 left-0 bottom-0 right-0 absolute transition-transform duration-500
          ${isModalOpen ? 'scale-100' : 'scale-0'}`
        }
      />
    </a>
  )
}

export default MobileNavbarLinkButton;