// Import types from cart.types
import { TOGGLE_CART_HIDDEN } from "./cart.types";
import { ADD_CART_ITEM } from "./cart.types";
import { addItemToCart } from "./cart.utils"; //Increments item.quantity in case of duplicate items

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
    default:
      return state;
  }
};

export default cartReducer;