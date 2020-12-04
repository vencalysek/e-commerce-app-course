// function will check items in cart and insted of puting duplicates, will update item quantity

export const addItemToCart = (cartItems, cartItemToAdd) => {

  // check if item eqxist
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1} 
        : cartItem)
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1}]

};

// explanation to duplicite check id logic: .map is used to find "right" item on which to use quantity +1