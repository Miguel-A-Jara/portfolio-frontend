import { useContext, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import { AppThemeContext } from '../context/ApplicationThemeContext';

const useDarkMode = () => {

  const { isDarkTheme, dispatch } = useContext(AppThemeContext);
  const { localData, updateLocalData } = useLocalStorage('isDarkTheme');

  const setTheme = (value: boolean) => {
    if ( dispatch ) dispatch({ type: value ? 'SET_DARK' : 'SET_LIGHT' });
    updateLocalData('isDarkTheme', value);
  };
  
  useEffect(() => {

    if(localData === 'true') {
      setTheme(true);
    };
    
    if(localData === 'false') {
      setTheme(false);
    }

  }, [localData]);

  return { isDarkTheme, setTheme };
};

export default useDarkMode;