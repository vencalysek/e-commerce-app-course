import React from "react";
import {connect} from "react-redux";
import {clearItemFromCart, addItem, removeItem} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  CheckoutImage,
  NameSpan,
  QuantitySpan,
  Arrow,
  Value,
  PriceSpan,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutImage src={imageUrl} alt="item" />
      </ImageContainer>
      <NameSpan>{name}</NameSpan>
      <QuantitySpan>
        <Arrow onClick={() => removeItem(cartItem)}>&#10092;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItem(cartItem)}>&#10093;</Arrow>
      </QuantitySpan>
      <PriceSpan>{price}</PriceSpan>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
