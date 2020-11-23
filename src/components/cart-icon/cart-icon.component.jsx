import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingBagIcon className="shopping-bag-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
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
