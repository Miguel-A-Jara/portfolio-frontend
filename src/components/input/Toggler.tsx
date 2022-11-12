import { Dispatch, SetStateAction } from 'react';

interface Props {
  isActive: boolean;
  onChange: () => void;
}

const Toggler = ({ isActive, onChange }: Props) => {
  return (
    <label 
      htmlFor='checked-toggle' 
      className='inline-flex items-center relative transition-all duration-300 
      cursor-pointer dark:bg-secondary-900 bg-primary-900 w-20 h-8 rounded-full'
    >
      <input 
        type='checkbox' 
        value=''
        id='checked-toggle' 
        className='sr-only peer' 
        checked={isActive}
        onChange={() => onChange()}
      />

      <div className='
        absolute left-0 peer-checked:left-12 rounded-full w-8 h-8 transition-all duration-300
        dark:bg-secondary-500 bg-primary-200 dark:text-secondary-900 text-primary-900
        rotate-180 peer-checked:rotate-0
        flex justify-center items-center text-2xl'
      >
        {
          isActive 
          ? <i className='fa-solid fa-moon' />
          : <i className='fa-solid fa-sun' />
        }
      </div>

    </label>
  )
}

export default Toggler;
