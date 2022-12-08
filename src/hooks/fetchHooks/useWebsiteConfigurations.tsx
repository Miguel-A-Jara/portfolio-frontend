import { useEffect, useState } from 'react';
import { useQuery }  from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import appFetch from '../../utils/appFetch';
import IWebsiteConfigurations from '../../types/IWebsiteConfigurations';

const useWebsiteConfigurations = () => {

  const [t, i18n] = useTranslation();
  const [translatedData, setTranslatedData] = useState<IWebsiteConfigurations | undefined>(undefined);

  const URL_PREFIX = process.env.NEXT_PUBLIC_URL_PREFIX;
  if ( !URL_PREFIX ) {
    throw new Error('No prefix was found in the environment variables');
  }

  const { isLoading, isError, data, error } = useQuery([`website-configurations`], 
    () => appFetch<IWebsiteConfigurations[]>(`${URL_PREFIX}/WebsiteConfigurations`),
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

export default useWebsiteConfigurations;