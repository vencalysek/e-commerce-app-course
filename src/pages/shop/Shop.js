import React from "react";
import { Route } from 'react-router-dom'
import CollectionsOverview from "../../components/collections-overview/Collections-overview";
import CollectionPage from "../collection/Collection";


import {ShopPageContainer} from "./shop.styles";

// match is automaticaly provided by router, cause Shop is rendered by router already
const ShopPage = ({ match }) => {
  return (
    <ShopPageContainer>
      <Route component={CollectionsOverview} exact path={`${match.path}`} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </ShopPageContainer>
  );
};

export default ShopPage;
