import React from "react";
import { useCart } from "react-use-cart";
import { useHistory } from "react-router-dom";
import emptycart from "../Assets/emptycart.png";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Remove from "@material-ui/icons/Close";
import ArrowBack from "@material-ui/icons/ArrowBack";

const Cart = () => {
  const history = useHistory();

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem
  } = useCart();

  if (isEmpty) {
    return (
      <>
        <div
          style={{
            marginTop: "5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            src={emptycart}
            style={{ width: "200px", height: "150px", paddingBottom: "10rem;" }}
            alt="empty cart"
          />
          <p>Your cart is empty</p>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="hero">
        <div className="back">
          <ArrowBack onClick={() => history.goBack()}>Go back</ArrowBack>
        </div>
        <p>You have {totalUniqueItems} items in your cart</p>
        {items.map((item) => (
          <div className="main_cart" key={item.id}>
            <Remove
              onClick={() => removeItem(item.id)}
              style={{ marginLeft: "auto", cursor: "pointer" }}
            >
              &times;
            </Remove>
            <img src={item.image} alt="cart" className="cart_img" />
            <div className="cart_title">{item.title}</div>

            <RemoveCircleIcon
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              className="minus_btn"
            />
            <h5 className="qty">
              {item.quantity} x {item.name}
            </h5>

            <AddCircleIcon
              className="add_btn_cart"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            />
            <div className="cart_price">
              Price ${item.price * item.quantity}
            </div>
          </div>
        ))}
        <div>
          <button className="btn btn-success chk_out">Check Out</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
