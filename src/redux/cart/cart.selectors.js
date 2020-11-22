import { createSelector } from "reselect"; // Creates memoized selectors

const selectCart = (state) => state.cart; // Input selector. One layer deep usually.

export const selectCartItems = createSelector(
  [selectCart], // An array of input selectors
  (cart) => cart.cartItems // Return the value we want out of selectors. Args are passed in the same order they appear in the array.
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cur) => acc + cur.quantity, 0)
);
