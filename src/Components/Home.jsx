import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <h1>Welcome to shopy shop</h1>
        <NavLink className="btn_home" to="/products">
          Shop Now
        </NavLink>
      </div>
    </>
  );
};

export default Home;
