import React from "react";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import {
  CartIconContainer,
  ShoppingBagIcon,
  ItemCountSpan,
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingBagIcon />
      <ItemCountSpan>{itemCount}</ItemCountSpan>
    </CartIconContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

/* 
There's a problem here. 
Every time state changes it gets passed a new object.
That means mapStateToProps runs again, and so does reduce.
Ideally we don't want components re-rendering unless something changes that affects them.
One solution is memoization, which is essentially caching.

CORRECTION: Due to itemCount being a primitive (integer), 
redux will do a shallow equality check under the hood between state 
changes in mapStateToProps. In this case having a selector does not 
save us on any re-renders of the CartIcon component. 
If our overall state changes but the itemCount value stays the same 
between these changes, redux's shallow equality check will see that 
itemCount is the same value as last time and save us a re-render.

TLDR: mapStateToProps does a shallow equality check, so primitives will not be changed
      and the component will not re-render
*/

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
