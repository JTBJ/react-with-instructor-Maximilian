import React from "react";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expenseContent = props.items;
  /**conditional rendering of content. Logic of the if...statement directly inside this
   * functional component
   */
  // let expenseContent = (
  //   <p className="expense-content-message">
  //     There are no items for the selected year.
  //   </p>
  // );
  // if (expenseItem.length > 0) {
  //   expenseContent = expenseItem.map((expense) => {
  //     return (
  //       <ExpenseItem
  //         key={Math.random()}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     );
  //   });
  // }

  return (
    <ul className="expenses-list">
      {/**Rendering content conditionally */}
      {/** {expenseContent} */}

      {/**Dynamically rendering content conditionally within the JSX via tenary operator*/}
      {expenseContent.length === 0 ? (
        <p className="expense-content-message expenses-list__fallback">
          There are no items for the selected year.
        </p>
      ) : (
        expenseContent.map((expense) => {
          return (
            <ExpenseItem
              key={Math.random()}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })
      )}
    </ul>
  );
};

export default ExpensesList;
