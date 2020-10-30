import React from "react";
import Aux from "../../../hoc/Aux";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li>
        <span style={{ testTransform: "capitalize" }}>
          {igKey}: {props.ingredients[igKey]}
        </span>
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p> A burger with the your favourite Flavours: </p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
