import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  REMOVE_CART_ITEM_ALL,
} from "./cart.types";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
  // Payload is an optional property
});

export const addCartItem = (item) => ({
  type: ADD_CART_ITEM,
  payload: item,
});

export const removeCartItem = (item) => ({
  type: REMOVE_CART_ITEM,
  payload: item.id,
});

export const removeCartItemAll = (item) => ({
  type: REMOVE_CART_ITEM_ALL,
  payload: item.id,
});
