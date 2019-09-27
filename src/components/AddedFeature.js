import React from "react";

const AddedFeature = props => {
  let price = 0;
  for (let i = 0; i < props.store.length; i++) {
    if (props.feature === props.store[i].name) {
      price = props.store[i].price;
    }
  }
  console.log(price);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => {
          props.subTotal(price);
          props.removeFeature(props.feature);
        }}
      >
        X
      </button>
      {props.feature}
    </li>
  );
};

export default AddedFeature;
