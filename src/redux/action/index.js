// añadir items al carrito
export const addCart = (book) => {
  return {
    type: "ADDITEM",
    payload: book,
  };
};

// eliminar items del carrito
export const delCart = (book) => {
  return {
    type: "DELITEM",
    payload: book,
  };
};
