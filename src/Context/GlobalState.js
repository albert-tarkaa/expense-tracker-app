import React, { createContext, useReducer } from 'react';
import GlobalReducer from './GlobalReducer';

//InitialState
const InitialState = {
  transactions: [],
};

//Creat context
export const GlobalContext = createContext(InitialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, InitialState);

  //Delete Transaction
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE',
      payload: id,
    });
  };

  //Add Transaction
  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD',
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
