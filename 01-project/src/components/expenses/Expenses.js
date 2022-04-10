import React, { useState } from "react";
import ExpensesFilter from "../ExpenseFilters/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectYear, setSelectYear] = useState("2020");

  /**used to filter the year selection and display the element that match the selected year */
  const expenseItem = props.items.filter((expenses) => {
    return new Date(expenses.date).getFullYear().toString() === selectYear;
  });

  const selectedYearHandler = (yearSelected) => {
    setSelectYear(yearSelected);
    console.log(yearSelected);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectYear}
          onSelectedYear={selectedYearHandler}
        />

        <ExpensesChart expenses={expenseItem} />
        <ExpensesList items={expenseItem} />

        {/* Notice the use of .items to access the indexes. This is a reference to the
        custom attribute used in the App file */}
        {/* the below ExpenseItems have been commented out to use a list to create these 
        components dynamically above*/}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
