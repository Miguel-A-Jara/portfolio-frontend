import { useQuery } from '@tanstack/react-query';
import appFetch     from '../../utils/appFetch';

export interface ITechnologies {
  technology_type:  string;
  id:               number;
  name:             string;
  alternative_text: string;
  width:            number;
  height:           number;
  logo:             string;
}

const useTechnologies = () => {
  
  const URL_PREFIX = process.env.NEXT_PUBLIC_URL_PREFIX;
  if ( !URL_PREFIX ) {
    throw new Error('No prefix was found in the environment variables');
  }

  const { isLoading, isError, data, error } = useQuery(['technologies'], 
    () => appFetch<ITechnologies[]>(`${URL_PREFIX}/Technologies`),
    { refetchOnWindowFocus: false }
  );

  return { isLoading, isError, data, error };
}

export default useTechnologies;