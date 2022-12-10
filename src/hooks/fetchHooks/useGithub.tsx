import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import appSend  from '../../utils/appSend';
import IGitHub  from '../../types/IGitHub';
import appFetch from '../../utils/appFetch';

import QUERY from '../../GraphQL/queries/GitHubInfo';

const TOKEN = process.env.NEXT_PUBLIC_TOKEN;
const URL_PREFIX = process.env.NEXT_PUBLIC_URL_PREFIX;
if ( !URL_PREFIX )
  throw new Error('No prefix was found in the environment variables');

const useGithub = () => {

  const [repoTitles, setRepoTitles] = useState<string[]>([]);
  const [reposDescriptions, setReposDescriptions] = useState<string[]>([]);

  const { isLoading, isError, data, error } = useQuery(['github-info'], 
    () => appSend<IGitHub>('https://api.github.com/graphql', QUERY, TOKEN),
    { refetchOnWindowFocus: false }
  );

  useEffect(() => {

    data?.data.user.pinnedItems.edges.map(item => (
      setRepoTitles(prev => [...prev, item.node.name])
    ));

  }, [data]);

  useEffect(() => {
    if(repoTitles.length > 0)
      getReposInfos();
  }, [repoTitles]);

  const getReposInfos = async() => {

    const reposInfos = await Promise.all(repoTitles.map(title => {

      const URL = `https://raw.githubusercontent.com/Miguel-A-Jara/${title}/main/README.md`;
      return appFetch<string>(URL);
    }));

    setReposDescriptions(reposInfos);
  };

  return { isLoading, isError, data, error, reposDescriptions };
}

export default useGithub;