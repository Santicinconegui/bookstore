import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const cartItems = (book, index) => {
    const tempPrice = book.price.slice(1);
    const convertedPrice = Number(parseInt(tempPrice));
    const totalQty = convertedPrice * book.qty;

    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5" key={index}>
          <div className="container py-4">
            <div className="row justify-content-center" key={book.isbn13}>
              <div className="col-md-4">
                <img
                  src={book.image}
                  alt={book.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{book.title}</h3>
                <p className="lead fw-bold">
                  $ {convertedPrice} X {book.qty} = ${totalQty}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleDel(book)}>
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleAdd(book)}>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <Link
              to="/checkout"
              className="btn btn-outline-dark mb-5 w-25 mx-auto">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
