export const initialState = {
  shippingData: {},
};

export const actionTypes = {
  SET_SHIPPINGDATA: "SET_SHIPPINGDATA",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SHIPPINGDATA":
      return {
        ...state,
        shippingData: action.shippingData,
      };
    default:
      return state;
  }
};

export default reducer;
