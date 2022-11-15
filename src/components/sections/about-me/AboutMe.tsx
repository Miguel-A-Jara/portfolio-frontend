import {  useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import useAboutMe, { IAboutMe } from '../../../hooks/fetchHooks/useAboutMe';
import SkeletonWrapper from '../../loaders/SkeletonWrapper';
import ErrorModal      from '../../modals/ErrorModal';
import CanvasContainer from '../../three-models/CanvasContainer';

import MySphere      from '../../three-models/Sphere';
import PrismaDynamic from '../../three-models/PrismaDynamic';

const AboutMe = () => {

  const [t, i18n] = useTranslation();
  const { data, error, isError, isLoading } = useAboutMe();
  const [translatedData, setTranslatedData] = useState<IAboutMe | null>(null);

  useEffect(() => {
    data?.forEach(translation => {
      if ( translation.locale === i18n.language ) {
        setTranslatedData(translation);
      }
    })
  }, [i18n.language, data]);


  return (
    <div className='h-[100vh] flex flex-col gap-4 top-0
      items-center justify-center px-6 sticky overflow-hidden text-center'
      id='about-me'
    >
      <h1 className='font-mono font-bold text-7xl text-center dark:text-secondary-400 text-primary-500 w-full max-w-3xl'>
        { translatedData?.title || <SkeletonWrapper /> }
      </h1>
      <h2 className='font-medium text-2xl italic dark:text-secondary-600 text-primary-600 w-full max-w-3xl'>
        {translatedData?.subtitle || <SkeletonWrapper />}
      </h2>
      <p className='text-justify lg:text-center font-semibold text-xl w-full max-w-3xl'>
        { translatedData?.description || <SkeletonWrapper count={3} />}
      </p>
      
      <CanvasContainer className='absolute h-64 -top-10 -right-28 -z-10 
        lg:-left-28 lg:top-1/3 lg:w-96 lg:h-80'>
        <MySphere />
      </CanvasContainer>
      <CanvasContainer className='absolute w-64 h-64 bottom-0 right-[calc(100%-10em)] lg:-right-20 -z-20
        -rotate-12 opacity-60 lg:top-0'>
        <PrismaDynamic />
      </CanvasContainer>
      <ErrorModal isError={isError} error={`${error}`} />
    </div>
  )
}

export default AboutMe;