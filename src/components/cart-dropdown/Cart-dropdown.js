import React from "react";

import {withRouter} from "react-router-dom";

// redux
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {toggleCartHidden} from "../../redux/cart/cart.actions";

import CartItem from "../cart-item/Cart-item";
import CustomButton from "../custom-button/Custom-button";

import {CartDropdownContainer, CartItemsContainer, EmptyMessageContainer} from './cart-dropdown.styles'

const CartDropdown = ({cartItems, history, dispatch}) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}>
        GO TO CHECKOUT
      </CustomButton>
    </CartDropdownContainer>
  );
};

// selecror
// const mapStateToProps = state => ({
//   cartItems: state.cart.cartItems
// destructured cartItems

// usinng memoized selector
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
