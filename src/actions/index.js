export const addFeature = featureName => {
  console.log(featureName);
  return {
    type: "ADD_FEATURE",
    payload: featureName
  };
};
export const removeFeature = featureName => {
  console.log(featureName);
  return {
    type: "REMOVE_FEATURE",
    payload: featureName
  };
};
