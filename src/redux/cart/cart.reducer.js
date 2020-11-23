// Import types from cart.types
import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  REMOVE_CART_ITEM_ALL,
} from "./cart.types";
import {
  addItemToCart,
  removeItemFromCart,
  removeAllOfItemFromCart,
} from "./cart.utils"; //Increments item.quantity in case of duplicate items

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case REMOVE_CART_ITEM_ALL:
      return {
        ...state,
        cartItems: removeAllOfItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
