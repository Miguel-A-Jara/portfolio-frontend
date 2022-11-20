import { useQuery } from '@tanstack/react-query';

import appFetch        from '../../utils/appFetch';
import ITechnologyInfo from '../../types/ITechnologyInfo';

const useTechnologiesInfo = (id: number, techType: string) => {

  const URL_PREFIX = process.env.NEXT_PUBLIC_URL_PREFIX;
  if ( !URL_PREFIX ) {
    throw new Error('No prefix was found in the environment variables');
  }

  const { isLoading, isError, data, error } = useQuery(['technology-info'], 
    () => appFetch<ITechnologyInfo>(`${URL_PREFIX}/TechnologiesInfo/${id}?tech_type=${techType}`),
    { refetchOnWindowFocus: false }
  );

  return { isLoading, isError, data, error };

}

export default useTechnologiesInfo