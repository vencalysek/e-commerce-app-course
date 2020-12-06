// function will check items in cart and insted of puting duplicates, will update item quantity

export const addItemToCart = (cartItems, cartItemToAdd) => {
  // check if item eqxist
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    // if item already exist, add +1 to quantity
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    );
  }
  // if item doesn't exist create new item in cart

  return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

// explanation to duplicite check id logic: .map is used to find "right" item on which to use quantity +1

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  // look or needed item inside cartItems store and decrease quantity by 1
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1} : cartItem
  );
};
