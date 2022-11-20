import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

interface Props {
  children: React.ReactElement;
  text: string;
  link: string;
}

const NavbarLinkButton = ({ children, text, link }: Props) => {

  const { isModalOpen } = useContext(ModalContext);

  return (
    <a 
      className={`relative flex items-center max-w-[4rem] ${isModalOpen && 'pointer-events-none'}`} 
      href={link}>
      <button className='text-3xl rounded-3xl w-16 h-16 transition-all duration-300
        bg-black/30 border-4 dark:border-secondary-400 border-primary-400 dark:text-secondary-400 text-primary-300
        hover:rounded-md hover:bg-black/20 hover:dark:text-secondary-300 hover:text-primary-200
        active:scale-90 focus:outline-none focus:scale-90 focus:rounded-md
        peer'
      >
        { children }
      </button>
      <span className='absolute left-0 w-max p-2 mx-2 rounded-md text-center transition-all duration-300
      bg-black -z-10 opacity-0 dark:text-secondary-400 text-primary-300
      peer-hover:opacity-100 peer-focus:opacity-100 peer-hover:left-full peer-focus:left-full font-mono font-bold'
      >
        {text}
      </span>
      <div 
        className={`bg-black/70 rounded-3xl top-0 left-0 bottom-0 right-0 absolute transition-transform duration-500
          ${isModalOpen ? 'scale-100' : 'scale-0'}`
        }
      />
    </a>
  )
}

export default NavbarLinkButton;