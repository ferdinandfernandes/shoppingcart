import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import Star from "@material-ui/icons/Star";
const Items = (props) => {
  const { addItem } = useCart();

  return (
    <>
      <div className="card-main">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top img-fluid" src={props.img} alt="Card " />
          <div className="card-body">
            <h5 className="card-title" style={{ height: "rem" }}>
              {props.title}
            </h5>
            <p className="card-text" style={{ fontSize: "2rem" }}>
              Price:${props.price}
            </p>
          </div>
          <div className="card-des">
            <p>
              {props.rating}
              <Star />
              <span> {props.count}</span>
            </p>
          </div>
          <div className="add_btn">
            <NavLink
              type="submit"
              onClick={() => addItem(props.item)}
              className="btn  btn-outline-primary "
              to="/cart"
            >
              Add to Cart
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
