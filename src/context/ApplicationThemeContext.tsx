import { createContext, Dispatch, useReducer } from 'react';

interface Props {
  children: React.ReactElement;
}

type TActionTypes = 
  | { type: 'SET_DARK' }
  | { type: 'SET_LIGHT' };

type TInitialContextState = {
  isDarkTheme: boolean,
  dispatch: Dispatch<TActionTypes> | null
};

const initialState: TInitialContextState = { 
  isDarkTheme: false,
  dispatch: null
};

const ThemeReducer = (state: boolean, payload: TActionTypes) => {

  const mainHTML = document.querySelector('html');

  switch (payload.type) {
    case 'SET_DARK':
      mainHTML?.classList.add('dark');
      return true;
      
    case 'SET_LIGHT':
      mainHTML?.classList.remove('dark');
      return false;

    default:
      return state;
  }
};

export const AppThemeContext = createContext<TInitialContextState>(initialState);

const AppThemeProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(ThemeReducer, false);

  return (
    <AppThemeContext.Provider value={{isDarkTheme: state, dispatch}}>
      { children }
    </AppThemeContext.Provider>
  )
}

export default AppThemeProvider;