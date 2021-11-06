import React from "react";
import { NavLink } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import "../styles.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <NavLink className="navbar-brand" to="/">
          Shopy Shop
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav text-light">
            <li className="nav-item ">
              <NavLink
                className="nav-link"
                to="/"
                exact
                activeClassName="active_class"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/products"
                exact
                activeClassName="active_class"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <CartProvider>
                <NavLink
                  className="nav-link"
                  to="/cart"
                  exact
                  activeClassName="active_class"
                >
                  Cart
                </NavLink>
              </CartProvider>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
