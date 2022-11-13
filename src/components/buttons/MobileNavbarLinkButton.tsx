interface Props {
  children: React.ReactElement;
  text: string;
}

const MobileNavbarLinkButton = ({ children, text }: Props) => {
  return (
    <li className='relative flex items-center'>
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
    </li>
  )
}

export default MobileNavbarLinkButton;