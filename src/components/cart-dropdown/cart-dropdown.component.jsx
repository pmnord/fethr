import React from "react";
import { withRouter } from "react-router-dom";

import { compose } from "redux";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
  CartDropdownButton,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history: { push }, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        push("/checkout");
        dispatch(toggleCartHidden());
        // Invoking toggleCartHidden returns the action object
        // connect passes in dispatch by default,
        // a function that sends the action object to the Store
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default compose(withRouter, connect(mapStateToProps))(CartDropdown);
