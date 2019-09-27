export const addFeature = featureName => {
  console.log(featureName);
  return {
    type: "ADD_FEATURE",
    payload: featureName
  };
};
