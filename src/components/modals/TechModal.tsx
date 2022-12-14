import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import useScrollPage    from '../../hooks/useScrollPage';
import { ModalContext } from '../../context/ModalContext';
import TechnologyInfoModalContainer from '../containers/TechnologyInfoModalContainer';

interface Props {
  id       : number;
  techType: string;
}

const TechModal = ({ id, techType }: Props) => {

  const techModalId = `${id}${techType}`;

  const { dispatch, isModalOpen, modalId } = useContext(ModalContext);
  const { isPageScrollable, setIsPageScrollable } = useScrollPage();

  const handleToggle = () => {
    if(dispatch)
      dispatch({ 
        payload: techModalId, 
        type: isModalOpen ? 'CLOSE_MODAL' : 'OPEN_MODAL' 
      })
    setIsPageScrollable(!isPageScrollable);
  }

  return (
    <>
      {
        (isModalOpen && modalId === techModalId) && 
          <div 
            className='fixed inset-0 bg-black/70 z-10 backdrop-blur-sm cursor-pointer' 
            onClick={handleToggle} 
          />
      }
      <AnimatePresence>
        {
          (isModalOpen && modalId === techModalId) && 
            <motion.div
              initial={{ translateY: '100vh', scale: 0 }}
              animate={{ translateY: 0, scale: 1 }}
              exit={{ translateY: '100vh', scale: 0 }}
              transition={{ duration: 0.4, ease: 'backInOut' }}
              className='fixed inset-0 z-10 w-[100vw] h-[100vh] flex justify-center items-center lg:pointer-events-none'
            >
              <div className='dark:bg-secondary-800/80 bg-primary-600/60 dark:text-secondary-400 text-primary-100
              w-full h-full max-w-4xl relative lg:max-h-[75vh] lg:ml-28
              transition-colors duration-300 lg:rounded-lg z-50 pointer-events-auto'>

                <button 
                  className='lg:hidden flex justify-center items-center gap-5 w-full p-2 text-3xl shadow-md border-b-2
                  dark:text-secondary-500 text-primary-400 dark:border-secondary-500 border-primary-400 
                  dark:shadow-secondary-500/30 shadow-primary-400/30 transition-all duration-300 filter-none'
                  onClick={handleToggle}>
                  <i className='fa-sharp fa-solid fa-xmark' />
                </button>

                <TechnologyInfoModalContainer id={id} techType={techType} />
              </div>
            </motion.div>
        }
      </AnimatePresence>
    </>
  )
}

export default TechModal;