import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

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

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});
/* 
There's a problem here. 
Every time state changes it gets passed a new object.
That means mapStateToProps runs again, and so does reduce.
Ideally we don't want components re-rendering unless something changes that affects them.
One solution is memoization, which is essentially caching.
*/

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
