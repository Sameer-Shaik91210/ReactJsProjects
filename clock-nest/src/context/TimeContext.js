import { createContext, useContext, useReducer } from "react";

//1️⃣ Create Context
const TimeContext = createContext();

// 2️⃣ Define Initial State (Indian Time)
const initialState = {
  indianTime: new Date().toISOString().slice(0, 16),
  //default :current date and time
};

// 3️⃣ Reducer Function to Handle Time Updates
const timeReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIME":
      return { ...state, indianTime: action.payload };
    default:
      return state;
  }
};

// 4️⃣ Context Provider Component
export const TimeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(timeReducer, initialState);

  return (
    <TimeContext.Provider value={{ state, dispatch }}>
      {children}
    </TimeContext.Provider>
  );
};

// 5️⃣ Custom Hook to Use Context
export const useTime = () => useContext(TimeContext);
