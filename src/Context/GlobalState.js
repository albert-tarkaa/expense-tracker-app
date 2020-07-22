import React, { createContext, useReducer } from 'react';
import GlobalReducer from './GlobalReducer';

//InitialState
const InitialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Biscuits', amount: -250 },
    { id: 3, text: 'Income', amount: 2500 },
    { id: 4, text: 'Movies', amount: -200 },
    { id: 5, text: 'ROI', amount: 300 },
  ],
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

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
