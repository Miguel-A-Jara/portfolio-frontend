interface Props {
  children: React.ReactElement;
  text: string;
}

const NavbarLinkButton = ({ children, text }: Props) => {
  return (
    <li className='relative flex items-center'>
      <button className='text-3xl rounded-3xl w-16 h-16 transition-all duration-300
        bg-black/30 border-4 dark:border-secondary-400 border-primary-400 dark:text-secondary-400 text-primary-300
        hover:rounded-md hover:bg-black/20 hover:dark:text-secondary-300 hover:text-primary-200
        active:scale-90 focus:outline-none focus:scale-90 focus:rounded-md
        peer'
      >
        { children }
      </button>
      <span className='absolute left-0 w-max p-2 mx-2 rounded-md text-center transition-all duration-300
      bg-black/70 -z-10 opacity-0 dark:text-secondary-400 text-primary-300
      peer-hover:opacity-100 peer-focus:opacity-100 peer-hover:left-full peer-focus:left-full font-mono font-bold'
      >
        {text}
      </span>
    </li>
  )
}

export default NavbarLinkButton;