import React, { useState } from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
  //   new Date(props.date).getMonth()
  // );
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = new Date(props.date).getFullYear();

  const date = new Date(props.date);
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  const day = new Date(date).getDate() + 1;
  const year = new Date(date).getFullYear();

  // console.log(
  //   "Month: ",
  //   new Intl.DateTimeFormat("en-US", { month: "long" }).format(date)
  // );
  // console.log("Day: ", day);
  // console.log("Year: ", year);

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
      {/* {props.date.toDateString()} */}
    </div>
  );
};

export default ExpenseDate;
