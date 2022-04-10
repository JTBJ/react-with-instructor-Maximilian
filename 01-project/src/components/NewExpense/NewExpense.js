import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseFormHandler = (enteredExpensdData) => {
    const expenseData = {
      ...enteredExpensdData,
      key: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseForm={saveExpenseFormHandler} />
    </div>
  );
};

export default NewExpense;
