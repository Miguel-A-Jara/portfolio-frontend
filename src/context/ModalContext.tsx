import { createContext, Dispatch, useReducer } from 'react';

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

interface TModalState {
  isModalOpen: boolean;
  modalId    : string | number;
  dispatch   : Dispatch<TAction> | null;
}

type TAction = 
  | { type: 'OPEN_MODAL', payload: string }
  | { type: 'CLOSE_MODAL', payload: string };

const initValue: TModalState = {
  isModalOpen: false,
  modalId: '',
  dispatch: null
}

const modalReducer = (state: TModalState, action: TAction): TModalState => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {...state, isModalOpen: true, modalId: action.payload }
  
    case 'CLOSE_MODAL':
      return {...state, isModalOpen: false, modalId: action.payload }

    default:
      return state;
  };
};

export const ModalContext = createContext({...initValue});

const ModalContextProvider = ({ children }: Props) => {
  
  const [state, dispatch] = useReducer(modalReducer, initValue);

  return (
    <ModalContext.Provider value={{...state, dispatch}}>
      { children }
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;