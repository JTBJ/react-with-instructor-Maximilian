/*useState--imported to track the state of a Component. The useState(); method takes a value 
as a parameter and returns a variable and a method as an array. The parameter value is assigned 
to the return variable and the method returned is a setter method to update the value (state) 
of the return variable. This method is also responsible for invoking the current component each 
time a value is set in the return varialble via the variable's setter method. Without useState(); 
React would only call components once, during startup, and the content rendered to the view 
would remain Static and never change. There are other ways to track state as well.*/
import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

/* props represents an object that holds all the recieved attributes as properties, 
  stored as key value pairs. Used to pass data between components
*/
const ExpenseItem = (props) => {
  /*useState(); returns a variable and a setter, as an array and instantiates the returned 
  variable with its parameter's value*/
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    /*using the setter returned by useState(); to update the state of the variable and re-render
    this component to update the view*/
    setTitle("Updated");
  };

  return (
    //can only have one root element per return statement
    <li>
      <Card className="expense-item">
        {/* {...} below allows for dynamic data to be passed to JSX html element */}
        {/* <div>  {new Date().toDateString()}  </div> */}
        {/* the properties being access via props are the attributes defined in the componet 
      that is using this component (in this case, the App component); they must match*/}
        {/* this date data that was here was moved to its own component and is referenced in
      the element below. The date object is being passed on to the ExpenseDate component*/}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2 className="expense-item h2">{title}</h2>
        </div>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={clickHandler}>Update Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
