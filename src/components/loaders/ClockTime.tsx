import { motion, AnimatePresence } from 'framer-motion';
import useTimeZone from '../../hooks/useTimeZone';

const ClockTime = () => {

  const { hours, minutes, seconds, format } = useTimeZone();

  return (
    <div className='w-full flex justify-between items-center overflow-y-hidden relative p-4 text-2xl font-bold 
    bg-black/25 dark:text-secondary-400 text-primary-300 transition-all duration-300 rounded-lg shadow-inner shadow-black'>
      <div className='relative p-4 flex items-center justify-center w-full font-orbitron'>
        <AnimatePresence>
          <motion.div 
            key={hours} 
            className='absolute'
            transition={{ duration: 0.5 }}
            initial={{ y: 100, scale: 0, opacity: 0 }} 
            animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: -100, scale: 0, opacity: 0 }}
          >
            {hours}
          </motion.div>
        </AnimatePresence>
      </div>

      <span>:</span>

      <div className='relative p-4 flex items-center justify-center w-full font-orbitron'>
      <AnimatePresence>
        <motion.div 
          key={minutes} 
          className='absolute'
          transition={{ duration: 0.5 }}
          initial={{ y: 100, scale: 0, opacity: 0 }} 
          animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: -100, scale: 0, opacity: 0 }}
        >
          {minutes}
          </motion.div>
        </AnimatePresence>
      </div>

      <span>:</span>

      <div className='relative p-4 flex items-center justify-center w-full font-orbitron'>
        <AnimatePresence>
          <motion.div 
            className='absolute'
            key={seconds} 
            initial={{ y: 100, scale: 0, opacity: 0 }} 
            animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: -100, scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {seconds}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className='relative p-4 flex items-center justify-center w-full font-orbitron'>
        <AnimatePresence>
          <motion.div 
            key={format} 
            className='absolute'
            transition={{ duration: 0.5 }}
            initial={{ y: 100, scale: 0, opacity: 0 }} 
            animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: -100, scale: 0, opacity: 0 }}
          >
            {format}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ClockTime;
