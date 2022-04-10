import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const EXPENSES_ARRAY = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450.78,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expense, setExpense] = useState(EXPENSES_ARRAY);

  const addExpense = (newExpense) => {
    setExpense((expenses) => {
      return [newExpense, ...expenses];
    });
    console.log(new Intl.DateTimeFormat("en-us").format(new Date(2022, 4, 7)));
  };

  /**below defines what really goes on behind the scenes */
  /*return React.createElement(
    "div",
    { class: App },
    React.createElement("h2", {}, "Let's get Started!"),
    React.createElement(Expenses, { items: expense })
  );*/

  return (
    <div>
      {/* to pass data to this custom component add attributes to the element tag (works with props)
          {...} used to dynamically pass data to the element's attribute*/}
      {/**self-interpretation--the method of passing values to other components via props and placing
       * an attribute on the recieving component's element tag, seems to follow a downward flow. The
       * component passing the data references the component recieving the data from within its component
       * file, and passes data to it by assigning an attribute to the recieving element's tag and dynamically
       * passing data to it via brace notation {...} or via a hardcoded value. The component recieving the
       * data never has to reference the component that sends the data, but uses a props parameter in its
       * component definition and accesses data via the props parameter by calling the attributes defined
       * in the sending componenent, on its component element, which was used by the sending component.
       */}
      {/**the reference to this component has be split to be used in another component (Expenses) */}
      {/* <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      /> */}

      <NewExpense onAddExpense={addExpense} />
      <Expenses items={expense} />
    </div>
  );
};

export default App;
