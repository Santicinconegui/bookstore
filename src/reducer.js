export const initialState = {
  cart: [],
};

export const actionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  DELITEM: "DELITEM",
};

export const getCartTotal = (cart) => {
  cart?.reduce((amount, book) => book.price + amount, 0);
};

const reducer = (state, action) => {
  const book = action.payload;
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.book],
      };

      break;
    case "DELITEM":
      const exist = state.find((x) => x.isbn13 === book.isbn13);
      if (exist.qty === 1) {
        return state.filter((x) => x.isbn13 !== exist.isbn13);
      } else {
        return state.map((x) =>
          x.isbn13 === book.isbn13 ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;
    default:
      return state;
  }
};

export default reducer;
