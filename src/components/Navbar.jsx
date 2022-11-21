import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light bg-white py-3 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            BOOK-SOTRE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="button">
              {user ? (
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="btn btn-outline-dark">
                  <i className="fa fa-arrow-left me-1" aria-hidden="true"></i>
                  Logout
                </Link>
              ) : (
                <Link to="/signin" className="btn btn-outline-dark">
                  <i className="fa fa-sign-in me-1"></i>
                  Login
                </Link>
              )}
              {user ? (
                ""
              ) : (
                <Link to="/signup" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-user-plus me-1"></i>Register
                </Link>
              )}
              <Link to="#" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>Cart (0)
              </Link>
              <Link to="#" className="btn btn-dark ms-2 me-1">
                <i className="fa fa-user" aria-hidden="true"></i>
              </Link>
              <span>Hello {user ? user.email : "Guest"}</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
