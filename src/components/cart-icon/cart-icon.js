import React from "react";

// redux
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

import {CartIconContainer, ItemCountSpan, ShopingIconContainer} from "./cart-icon.styles";

const CartIcon = ({toggleCartHidden, itemCount}) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShopingIconContainer />
      <ItemCountSpan>{itemCount}</ItemCountSpan>
    </CartIconContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  //? redux selector
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
