import React from "react";

import {withRouter} from "react-router-dom";

// redux
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {toggleCartHidden} from "../../redux/cart/cart.actions";

import CartItem from "../cart-item/Cart-item";
import CustomButton from "../custom-button/Custom-button";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({cartItems, history, dispatch}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
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
