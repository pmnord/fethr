export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    itemToAdd.quantity = 1;
    return [...cartItems, itemToAdd];
  }
};

export const removeItemFromCart = (cartItems, id) => {
  const newCartItems = [...cartItems];
  const targetItem = newCartItems.find((item) => item.id === id);

  if (targetItem.quantity > 1) {
    targetItem.quantity--;
    return newCartItems;
  } else {
    return newCartItems.filter((item) => item.id !== id);
  }
};

export const removeAllOfItemFromCart = (cartItems, id) =>
  cartItems.filter((item) => item.id !== id);
