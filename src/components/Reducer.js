const Reducer = (cart = [], action) => {
  if (action.type === "ADD_BOOK") {
    let tempcart = cart.filter((book) => book.isbn13 === action.payload.isbn13);
    if (tempcart < 1) {
      return [...cart, action.payload];
    } else {
      return cart;
    }
  }
  if (action.type === "REMOVE_BOOK") {
    return cart.filter((book) => book.isbn13 !== action.payload.isbn13);
  }
  if (action.type === "INCREASE") {
    let tempcart = cart.map((book) => {
      if (book.isbn13 === action.payload.isbn13) {
        return { ...book, qty: book.qty + 1 };
      }
      return book;
    });
    return tempcart;
  }
  if (action.type === "DECREASE") {
    let tempcart = cart.map((book) => {
      if (book.isbn13 === action.payload.isbn13) {
        return { ...book, qty: book.qty - 1 };
      }
      return book;
    });
    return tempcart;
  }
  return cart;
};
export const initialState = {
  shippingData: {},
};

export const actionTypes = {
  SET_SHIPPINGDATA: "SET_SHIPPINGDATA",
};

export const reducer = (state, action) => {
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
export default Reducer;
