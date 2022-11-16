import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-black fw-bold border-0">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="Background"
          height="800px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              the best programming books
            </h5>
            <p className="card-text lead fs-2 my-3 ">
              a great way to start learning!
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
