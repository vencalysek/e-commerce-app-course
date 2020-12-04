import React from "react";

// redux
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect'
import {selectCartItems} from "../../redux/cart/cart.selectors";

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

// selecror
// const mapStateToProps = state => ({
//   cartItems: state.cart.cartItems
// destructured cartItems

// usinng memoized selector
const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
