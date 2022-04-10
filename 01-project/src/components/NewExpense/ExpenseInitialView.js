import React from "react";

import "./ExpenseInitialView.css";

const ExpenseInitialView = (props) => {
  return (
    <div>
      <button onClick={props.toggleView}>Add New Expense</button>
    </div>
  );
};

export default ExpenseInitialView;
