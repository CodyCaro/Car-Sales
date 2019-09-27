import React from "react";
import { connect } from "react-redux";
import { addFeature, removeFeature, addTotal, subTotal } from "./actions";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = props => {
  console.log(props.additionPriceOnProps);
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.carOnProps} />
        <AddedFeatures
          car={props.carOnProps}
          store={props.storeOnProps}
          removeFeature={props.removeFeature}
          subTotal={props.subTotal}
        />
      </div>
      <div className="box">
        <AdditionalFeatures
          store={props.storeOnProps}
          addFeature={props.addFeature}
          addTotal={props.addTotal}
        />
        <Total
          car={props.carOnProps}
          additionalPrice={props.additionPriceOnProps}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    carOnProps: state.car,
    storeOnProps: state.store,
    additionPriceOnProps: state.additionalPrice
  };
};

export default connect(
  mapStateToProps,
  { addFeature, removeFeature, addTotal, subTotal }
)(App);
