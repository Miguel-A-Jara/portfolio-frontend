import { useEffect, useState } from 'react';

const useLocalStorage = (name: string) => {

  const [localData, setLocalData] = useState<string | null>(null);

  const updateLocalData = (name: string, data: unknown) => {
    localStorage.setItem(name, JSON.stringify(data));
    setLocalData(JSON.stringify(data));
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem(name);
    setLocalData(localStorageData);
  }, []);

  return { localData, updateLocalData };

}

export default useLocalStorage;