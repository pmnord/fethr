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
  return cartItems.map((item) => {
    if (item.id === id) {
      item.quantity--;
    }
    return item;
  });
};

export const removeAllOfItemFromCart = (cartItems, id) =>
  cartItems.filter((item) => item.id !== id);
