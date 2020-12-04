import React from "react";

import {connect} from "react-redux";

import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({cartItems}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

// const mapStateToProps = state => ({
//   cartItems: state.cart.cartItems
// destructured cartItems
const mapStateToProps = ({cart: {cartItems}}) => ({
  // cartItems: cartItems
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
