import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useQuery }       from '@tanstack/react-query';

import appFetch from '../../utils/appFetch';

export interface IAboutMe {
  id:          number;
  title:       string;
  subtitle:    string;
  description: string;
  width:       number;
  height:      number;
  image:       string;
  locale:      'en' | 'es';
}

const URL_PREFIX = process.env.NEXT_PUBLIC_URL_PREFIX;
  if ( !URL_PREFIX ) {
    throw new Error('No prefix was found in the environment variables');
  }

const useAboutMe = () => {
  
  const [t, i18n] = useTranslation();
  const [translatedData, setTranslatedData] = useState<IAboutMe | null>(null);

  const { isLoading, isError, data, error } = useQuery(['about-me'], 
    () => appFetch<IAboutMe[]>(`${URL_PREFIX}/AboutMe`),
    { refetchOnWindowFocus: false }
  );

  useEffect(() => {
    data?.forEach(translation => {
      if ( translation.locale === i18n.language ) {
        setTranslatedData(translation);
      }
    })
  }, [i18n.language, data]);

  return { isLoading, isError, data: translatedData, error };
}

export default useAboutMe;