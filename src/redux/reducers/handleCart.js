const cart = [];

const handleCart = (state = cart, action) => {
  const book = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // Check if book already exists
      const exist = state.find((x) => x.isbn13 === book.isbn13);
      if (exist) {
        // Increase the quantity
        return state.map((x) =>
          x.isbn13 === book.isbn13 ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const book = action.payload;
        return [
          ...state,
          {
            ...book,
            qty: 1,
          },
        ];
      }
      break;

    case "DELITEM":
      const exist1 = state.find((x) => x.isbn13 === book.isbn13);
      if (exist1.qty === 1) {
        return state.filter((x) => x.isbn13 !== exist1.isbn13);
      } else {
        return state.map((x) =>
          x.isbn13 === book.isbn13 ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    default:
      return state;
      break;
  }
};

export default handleCart;
