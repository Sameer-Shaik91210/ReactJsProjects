import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//intital State
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

//context Creation

export const GlobalContext = createContext(initialState);

//giving acccess to all other components to have access to this state
//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.initialState }}>
      {children}
    </GlobalContext.Provider>
  );
};

//all the children components of Provider (here it is App -the root component of all other ) gonna have access to value prop and everything defined in it -here it is 'transactions'
