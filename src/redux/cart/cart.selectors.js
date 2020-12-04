//! SELECTORS ARE USED FOR MEMOIZING
// with usage of selectors we dont need to re-render whole state which can slow our app, insted we only re-render changing parts of state


import { createSelector } from 'reselect'

// input selector, vezme cely state a vybere z nej jen urcitou cast
const selectCart = state => state.cart


export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => 
    cartItems.reduce(
      (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
    )
)