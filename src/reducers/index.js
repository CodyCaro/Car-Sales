const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FEATURE":
      return {
        ...state,

        car: { ...state.car, features: [...state.car.features, action.payload] }
      };
    case "REMOVE_FEATURE":
      let featureToRemvoe = 0;
      for (let i = 0; i < [...state.car.features].length; i++) {
        if (action.payload === [...state.car.features][i]) {
          featureToRemvoe = [...state.car.features].indexOf(
            [...state.car.features][i]
          );
        }
      }
      state.car.features.splice(featureToRemvoe, 1);
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features
        }
      };
    case "ADD_TOTAL":
      return {
        ...state,
        additionalPrice: (state.additionalPrice += action.payload)
      };
    case "SUB_TOTAL":
      let newAdditionalPrice = state.additionalPrice - action.payload;
      if (newAdditionalPrice <= 0) {
        return {
          ...state,
          additionalPrice: 0
        };
      } else {
        return {
          ...state,
          additionalPrice: newAdditionalPrice
        };
      }
    default:
      return state;
  }
};
