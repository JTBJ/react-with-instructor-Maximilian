import React, { useState } from "react";
import "./ExpenseForm.css";
import ExpenseInitialView from "./ExpenseInitialView";

const ExpenseForm = (props) => {
  /**tracking the state of the form element using multiple useState calls*/
  // const [titleEntered, setTitleEntered] = useState("");
  // const [amountEntered, setAmountEntered] = useState("");
  // const [dateEntered, setDateEntered] = useState("");

  /**tracking state of the form element using one input call */
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  /*whenever an element is registered with an event listener, the browser, by default, provides
  us an event Object. This object can be used to retreive information about the event, such as
  a value, as shown below*/
  const titleInputHandler = (event) => {
    /**setting values individually with multiple useState(); calls */
    // setTitleEntered(event.target.value);

    /**this alternative is not recommended because you may rely on an outdated state, as React
     * schedules an update when using the setter method
     */
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });

    /**preferred method to set multiple values via one useState(); call */
    /**the previousState parameter, passed to the anounymous function, is automatically
     * assigned the value of the previous state.
     */
    setUserInput((previousState) => {
      return {
        ...previousState,
        title: event.target.value,
      };
    });
  };

  const amountInputHandler = (event) => {
    /**setting values individually with multiple useState(); calls */
    // setAmountEntered(event.target.value);

    /**this alternative is not recommended because you may rely on an outdated state, as React
     * schedules an update when using the setter method
     */
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });

    /**preferred method to set multiple values via one useState(); call */
    /**the previousState parameter, passed to the anounymous function, is automatically
     * assignment the value of the previous state.
     */
    setUserInput((previousState) => {
      return {
        ...previousState,
        amount: +event.target.value,
      };
    });
  };

  const dateInputHandler = (event) => {
    /**setting values individually with multiple useState(); calls */
    // setDateEntered(event.target.value);

    /**this alternative is not recommended because you may rely on an outdated state, as React
     * schedules an update when using the setter method
     */
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });

    /**preferred method to set multiple values via one useState(); call */
    /**the previousState parameter, passed to the anounymous function, is automatically
     * assignment the value of the previous state.
     */
    setUserInput((previousState) => {
      const date = new Date(event.target.value);
      const month = new Date(date).getMonth();
      const day = new Date(date).getDate() + 1;
      const year = new Date(date).getFullYear();

      return {
        ...previousState,
        // date: new Date(event.target.value),
        date: new Date(year, month, day),
      };
      // console.log(new Date(year, month, day));
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      ...userInput,
      date: new Date(userInput.date).toDateString(),
      // date: new Intl.DateTimeFormat("en-us").format(new Date(userInput.date)),
      // date: new Date(userInput.date),
    };

    /**using props to pass data back up the component hierachy. Take note of the invocation
     * of the attribute as if it were the method defined in the upper component.
     */
    props.onSaveExpenseForm(expenseData);

    setUserInput({
      title: "",
      amount: "",
      date: "",
    });

    toggleView();
  };

  const [isClicked, setIsClicked] = useState(false);

  const toggleView = () => {
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };

  return (
    <div>
      {!isClicked ? (
        <ExpenseInitialView toggleView={toggleView} />
      ) : (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={userInput.title}
                onInput={titleInputHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min=".01"
                step=".01"
                value={userInput.amount}
                onInput={amountInputHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={userInput.date}
                // value={
                //   new Date(
                //     userInput.date.getFullYear(),
                //     userInput.date.getMonth(),
                //     userInput.date.getDay()
                //   )
                // }
                onInput={dateInputHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={toggleView}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;
