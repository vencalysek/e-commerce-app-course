import React from "react";
import CollectionItem from "../../components/collection-item/Collection-item";

import {connect} from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selectors";

import {CollectionPageContainer, Title, ItemsContainer} from "./collection.styles";

const CollectionPage = ({collection}) => {
  console.log(collection);
  const {title, items} = collection;
  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <ItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
