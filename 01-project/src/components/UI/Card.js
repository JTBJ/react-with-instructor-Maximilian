import "./Card.css";

//this componenent will serve as a wrapper for other components
const Card = (props) => {
  {
    /**without explicitly specifying to our wrapper component about the css styles used in 
the nested components it wraps, those styles within those components will not be applied.
To apply those styles, we can a extract the values of the attributes of the nested components 
referencing this wrapper and apply them to the appropriate attribute within this component's 
return JSX */
  }
  const classes = "card " + props.className;

  {
    /*using props.children allows us to wrap content within our components and display it 
    to the screen (view ExpenseItem) */
  }
  return <div className={classes}>{props.children}</div>;
};

export default Card;
