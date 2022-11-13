import {  useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import useAboutMe, { IAboutMe } from '../../../hooks/fetchHooks/useAboutMe';
import CanvasContainer from '../../three-models/CanvasContainer';
import MySphere from '../../three-models/Sphere';

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
    <div className='h-[100vh] flex flex-col gap-4 
      items-center lg:items-center justify-center px-6 relative overflow-x-hidden text-center'
    >
      <h1 className='font-mono font-bold text-7xl text-center dark:text-secondary-400'>
        {translatedData?.title}
      </h1>
      <h2 className='font-medium text-2xl italic dark:text-secondary-600'>
        {translatedData?.subtitle}
      </h2>
      <p className='text-justify font-semibold text-xl max-w-4xl'>
        {translatedData?.description}
      </p>
      
      <CanvasContainer className='absolute h-64 -top-10 -right-28 -z-10 
        lg:-left-28 lg:top-1/3 lg:w-96 lg:h-80'
      >
        <MySphere />
      </CanvasContainer>
    </div>
  )
}

export default AboutMe;