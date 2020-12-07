import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  // Payload is an optional property
});

export const addCartItem = (item) => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: item,
});

export const removeCartItem = (item) => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: item.id,
});

export const removeCartItemAll = (item) => ({
  type: CartActionTypes.REMOVE_CART_ITEM_ALL,
  payload: item.id,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
