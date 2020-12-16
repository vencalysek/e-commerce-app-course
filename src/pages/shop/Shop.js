import React, {Component} from "react";
import {Route} from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/Collections-overview";
import CollectionPage from "../collection/Collection";
import WithSpinner from "../../components/with-spinner/With-spinner";

import {connect} from "react-redux";
import {updateCollections} from "../../redux/shop/shop.actions";

import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";

import {ShopPageContainer} from "./shop.styles";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

export class ShopPage extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection("collections");

    // using REST calls
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crwn-db-4d6ea/databases/(default)/documents/collections"
    // )
    //   .then(response => response.json())
    //   .then(collections => console.log(collections));

    // onSnapshot() -- meaning if collection updateds or loads for first time
    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading: false});
    });
  }

  render() {
    // match is automaticaly provided by router, cause Shop is rendered by router already
    const {match} = this.props;
    const {loading} = this.state;
    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />}
        />
      </ShopPageContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
