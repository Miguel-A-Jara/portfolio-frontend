import { motion } from 'framer-motion';
import { useState } from 'react';

interface Props {
  isError: boolean;
  error  : string;
}

const ErrorModal = ({ error, isError }: Props) => {
  
  const [isModalShown, setIsModalShown] = useState(true);

  if ( isError )
    return (
      <motion.div
        initial={{ right: -512 }}
        animate={{ right: isModalShown ? -2 : -512 }}
        onClick={() => setIsModalShown(false)}
        transition={{ duration: 0.5, delay: 0.5, type: 'tween' }}
        className='absolute border-2 font-mono rounded-md rounded-r-none p-2 px-8 bottom-1/4 cursor-pointer
        max-w-xs lg:max-w-lg text-xl lg:text-3xl z-10
        dark:border-red-500 border-red-400 dark:text-red-500 text-red-500 dark:bg-secondary-900 bg-red-300
        shadow-2xl dark:shadow-red-500/20 shadow-red-500/75 transition-colors duration-300'
      >
        { error }
        <span className='w-8 h-8 rounded-full transition-all duration-300
         dark:text-secondary-900 text-red-200 bg-red-500 absolute -top-4 -left-4 flex items-center justify-center'>
          <i className='fa-solid fa-xmark text-2xl'/>
        </span>
      </motion.div>
    )
  return <></>
}

export default ErrorModal;