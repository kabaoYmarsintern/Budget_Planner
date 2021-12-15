import React from "react";
import { TiDelete } from "react-icons/ti";

const ExpenseItem = (props) => {
  return (
    <li className="list-gorup-item d-flex jsutify-content-between aligh-items-center">
      {props.name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">
          ${props.cost}
        </span>
        <TiDelete size="1.5em" />
      </div>
    </li>
  );
};
export default ExpenseItem;
