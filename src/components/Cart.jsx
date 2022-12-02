import React from "react";
import { useStateValue } from "../context/StateProvider";
import { Link } from "react-router-dom";
import { actionTypes } from "../reducer";

const Cart = () => {
  const [{ cart }, dispatch] = useStateValue();
  const removeItem = () =>
    dispatch({
      type: actionTypes.DELITEM,
      isbn13: isbn13,
    });

  return (
    <>
      {cart?.map((book, index) => (
        <div className="px-4 my-5 bg-light rounded-3 py-5" key={book.isbn13}>
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-4 ">
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
                  ${Number(book.price.slice(1))} x {book.qty} = $
                  {Number(book.price.slice(1)) * book.qty}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={removeItem()}>
                  <i className="fa fa-minus">+</i>
                </button>
                <button className="btn btn-outline-dark">
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {cart.length === 0 && (
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <div className="row">
              <h3>Your Cart is Empty</h3>
            </div>
          </div>
        </div>
      )}
      ,
      {cart.length !== 0 && (
        <div className="container">
          <div className="row">
            <Link
              to="/checkout"
              className="btn btn-outline-dark mb-5 w-25 mx-auto">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
