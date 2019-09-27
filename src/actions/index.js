export const addFeature = featureName => {
  return {
    type: "ADD_FEATURE",
    payload: featureName
  };
};
export const addTotal = amountChanged => {
  return {
    type: "ADD_TOTAL",
    payload: amountChanged
  };
};
export const removeFeature = featureName => {
  return {
    type: "REMOVE_FEATURE",
    payload: featureName
  };
};
export const subTotal = amountChanged => {
  return {
    type: "SUB_TOTAL",
    payload: amountChanged
  };
};
