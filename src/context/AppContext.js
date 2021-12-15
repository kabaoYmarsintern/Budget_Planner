import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        Expenses: [...state.Expenses, action.payload]
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  Expenses: [
    { id: 12, name: "Shopping", cost: 40 },
    { id: 13, name: "Holiday", cost: 400 },
    { id: 14, name: "Transportation", cost: 10 }
  ]
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expense: state.Expenses,
        dispatch
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
