import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  addCartItem,
  removeCartItem,
  removeCartItemAll,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  item,
  item: { imageUrl, name, price, quantity },
  dispatch,
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeCartItem(item))}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={() => dispatch(addCartItem(item))}>
          &#10095;
        </div>
      </span>
      <span className="price">${price * quantity}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(removeCartItemAll(item))}
      >
        &#10005;
        {/* utf-8 wingding */}
      </div>
    </div>
  );
};

export default connect()(CheckoutItem);
