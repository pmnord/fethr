import React from "react";
import { connect } from "react-redux";
import {
  removeCartItem,
  removeCartItemAll,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  item: { id, imageUrl, name, price, quantity },
  dispatch,
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(removeCartItemAll(id))}
      >
        &#10005;
      </div>
      {/* remove button will be a utf-8 wingding with code 10005 */}
    </div>
  );
};

export default connect()(CheckoutItem);
