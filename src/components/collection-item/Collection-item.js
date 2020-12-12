import React from "react";

import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/Custom-button";
import {
  CollectionItemsContainer,
  AddButton,
  ItemImage,
  CollectionFooterContainer,
  NameSpan,
  PriceSpan,
} from "./collection-item.styles";

const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl} = item;

  return (
    <CollectionItemsContainer>
      <ItemImage className='image' imageUrl={imageUrl} />

      <CollectionFooterContainer>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>{price}$</PriceSpan>
      </CollectionFooterContainer>

      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemsContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
