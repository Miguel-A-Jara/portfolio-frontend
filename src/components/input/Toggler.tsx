import { Button } from '@material-tailwind/react';

interface Props {
  isActive: boolean;
  onChange: () => void;
}

const Toggler = ({ isActive, onChange }: Props) => {

  return (
    <Button
      className='inline-flex items-center relative transition-all duration-300 overflow-hidden
      dark:bg-secondary-500/25 bg-primary-900/25 hover:dark:bg-secondary-900/50 hover:bg-primary-800/70 
      cursor-pointer w-20 h-8 rounded-full shadow-inner dark:shadow-secondary-900 shadow-primary-900 hover:shadow-inner'
      onClick={onChange}
    >
      <div className={`
        absolute ${isActive ? 'left-12 rotate-0' : 'left-0 rotate-180'} rounded-full w-8 h-8 transition-all duration-300
        dark:bg-secondary-400 bg-primary-300 dark:text-secondary-900 text-primary-800
        active:scale-90 flex justify-center items-center text-2xl z-10`
      }>
        {
          isActive
          ? <i className='fa-solid fa-moon' />
          : <i className='fa-solid fa-sun' />
        }
      </div>
    </Button>
  )
}

export default Toggler;
