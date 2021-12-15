import React, { createContext } from "react";
import Budget from "./component/Budget";
import ExpenseTotal from "./component/ExpenseTotal";
import Remaining from "./component/Remaining";
import ExpenseList from "./component/ExpenseList";
import AddExpenseForm from "./component/AddExpenseForm";
import { AppProvider } from "./context/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3"> My Budget Planner </h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3"> Expenses </h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
          <h3 className="mt-3"> Add Expense </h3>
          <div className="mt-3">
            <div className="col-sm">
              <AddExpenseForm />
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
