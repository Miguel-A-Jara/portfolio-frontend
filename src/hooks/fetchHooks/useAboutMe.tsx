import { useQuery } from '@tanstack/react-query';
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

const useAboutMe = () => {
  
  const URL_PREFIX = process.env.NEXT_PUBLIC_URL_PREFIX;
  if ( !URL_PREFIX ) {
    throw new Error('No prefix was found in the environment variables');
  }

  const { isLoading, isError, data, error } = useQuery(['about-me'], 
    () => appFetch<IAboutMe[]>(`${URL_PREFIX}/AboutMe`),
    { refetchOnWindowFocus: false }
  );

  return { isLoading, isError, data, error };
}

export default useAboutMe;