import React from "react";
import { Route } from 'react-router-dom'
import CollectionsOverview from "../../components/collections-overview/Collections-overview";
import CollectionPage from "../collection/Collection";


import "./shop.styles.scss";

// match is automaticaly provided by router, cause Shop is rendered by router already
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route component={CollectionsOverview} exact path={`${match.path}`} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
