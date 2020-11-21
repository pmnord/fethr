import { TOGGLE_CART_HIDDEN } from "./cart.types";
import { ADD_CART_ITEM } from "./cart.types";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
  // Payload is an optional property
});

export const addCartItem = (item) => ({
  type: ADD_CART_ITEM,
  payload: item,
});
