import React, {Component} from "react";
import {Route} from "react-router-dom";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import {connect} from "react-redux";
import {fetchCollectionsStartAsync} from "../../redux/shop/shop.actions";
import { selectIsCollectionsLoaded} from "../../redux/shop/shop.selectors";

import {ShopPageContainer} from "./shop.styles";


export class ShopPage extends Component {

  componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync()
  }

  render() {
    // match is automaticaly provided by router, cause Shop is rendered by router already
    const {match} = this.props;
    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </ShopPageContainer>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
