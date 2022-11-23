import type { DaoInfo as TDaoInfo } from '@nnsdao/nnsdao-kit/src/nnsdao/types';
import { createContext, useContext, useReducer } from 'react';

const initialState = {
  joinedDaoList: [] as TDaoInfo[],
};
const StateContext = createContext(null as any);

type TState = typeof initialState;
const reducer = (state, action) => {
  switch (action.type) {
    case 'changeDaoList':
      return {
        ...state,
        joinedDaoList: action.data,
      };
  }
};

const GlobalStateProvider = ({ children }) => {
  // @ts-ignore
  const store = useReducer(reducer, initialState);
  return <StateContext.Provider value={store}>{children}</StateContext.Provider>;
};
export default GlobalStateProvider;

export const useGlobalState = () => useContext(StateContext) as [TState, (...arg: any[]) => void];
