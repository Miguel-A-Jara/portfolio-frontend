import { useContext } from 'react';
import Image          from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@material-tailwind/react';


import { ModalContext }  from '../../context/ModalContext';
import { ITechnologies } from '../../hooks/fetchHooks/useTechnologies';
import useScrollPage     from '../../hooks/useScrollPage';
import TechModal         from '../modals/TechModal';

const IMG_PREFIX = process.env.NEXT_PUBLIC_IMG_PREFIX;

interface Props {
  data: ITechnologies;
  idx : number;
}

const TechnologyButton = ({ data, idx }: Props) => {

  const { dispatch, isModalOpen } = useContext(ModalContext)
  const { isPageScrollable, setIsPageScrollable } = useScrollPage();

  const handleToggle = () => {

    if(dispatch)
      dispatch({ 
        payload: `${data.id}${data.technology_type}`, 
        type: isModalOpen ? 'CLOSE_MODAL' : 'OPEN_MODAL' 
      })
    setIsPageScrollable(!isPageScrollable);
  }

  return (
    <>
      <motion.div
        whileInView={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 0.3, delay: idx * 0.025  }}
        onClick={handleToggle}>
        <Button className={`w-32 h-32 flex items-center rounded-lg p-4 relative hover:shadow-inner hover:shadow-black
        dark:bg-secondary-900 bg-primary-900/50 transition-colors duration-300 shadow-inner shadow-black`}>
          <Image
            src={`${IMG_PREFIX}${data.logo}`}
            width={ data.width }
            height={ data.height }
            alt={ data.alternative_text }
            title={ data.name }
            className='rounded-lg hover:scale-90 transition-transform duration-300'
          />
        </Button>
      </motion.div>
      <TechModal
        id={data.id}
        techType={data.technology_type}
      />
    </>
  )
}

export default TechnologyButton