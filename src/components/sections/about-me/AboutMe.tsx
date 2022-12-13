import { motion } from'framer-motion';

import useAboutMe      from '../../../hooks/fetchHooks/useAboutMe';
import SkeletonWrapper from '../../loaders/SkeletonWrapper';
import ErrorModal      from '../../modals/ErrorModal';
import CanvasContainer from '../../three-models/CanvasContainer';

import MySphere      from '../../three-models/Sphere';
import PrismaDynamic from '../../three-models/PrismaDynamic';

const AboutMe = () => {

  const { data, error, isError } = useAboutMe();

  return (
    <div className='h-[100vh] flex flex-col gap-4 top-0
      items-center justify-center px-6 sticky overflow-hidden text-center'
    >
      <motion.h1 
        initial={{ translateX: -100, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} 
        transition={{ duration: 1, delay: 0.8 }}
        className='font-mono font-bold text-7xl text-center dark:text-secondary-400 text-primary-600 w-full max-w-3xl'>
        { data?.title || <SkeletonWrapper /> }
      </motion.h1>

      <motion.h2 
        initial={{ translateY: 100, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} 
        transition={{ duration: 0.6, delay: 1.5 }}
        className='font-medium text-2xl italic dark:text-secondary-600 text-primary-600 w-full max-w-3xl'>
        {data?.subtitle || <SkeletonWrapper />}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 2.2 }}
        className='text-justify lg:text-center font-semibold text-xl w-full max-w-3xl'>
        { data?.description || <SkeletonWrapper count={3} />}
      </motion.p>
      
      <CanvasContainer className='absolute h-64 -top-10 -right-28 -z-10 
        lg:-left-28 lg:top-1/3 lg:w-96 lg:h-80'>
        <MySphere />
      </CanvasContainer>
      <CanvasContainer className='absolute w-64 h-64 bottom-0 right-[calc(100%-10em)] lg:-right-20 -z-20
        -rotate-12 opacity-60 lg:top-0'>
        <PrismaDynamic />
      </CanvasContainer>
      <CanvasContainer className='absolute w-64 h-64 bottom-0 left-[calc(100%-10em)] lg:-right-20 -z-20
        -rotate-12 opacity-60 lg:bottom-20'>
        <PrismaDynamic />
      </CanvasContainer>
      <ErrorModal isError={isError} error={`${error}`} />
    </div>
  )
}

export default AboutMe;