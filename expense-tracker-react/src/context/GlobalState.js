import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//intital State
const initialState = {
  transactions: [],
};

//context Creation

export const GlobalContext = createContext(initialState);

//giving acccess to all other components to have access to this state
//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

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

//all the children components of Provider (here it is App -the root component of all other ) gonna have access to value prop and everything defined in it -here it is 'transactions'
