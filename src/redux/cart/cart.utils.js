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
  const itemIndex = cartItems.indexOf((item) => item.id === id);
  const item = newCartItems[itemIndex];

  if (item.quantity > 1) {
    item.quantity--;
    return newCartItems;
  } else {
    newCartItems.splice(itemIndex, 1);
    return newCartItems;
  }
};

export const removeAllOfItemFromCart = (cartItems, id) => {
  const newCartItems = [...cartItems];
  const itemIndex = cartItems.indexOf((item) => item.id === id);

  newCartItems.splice(itemIndex, 1);
  return newCartItems;
};
