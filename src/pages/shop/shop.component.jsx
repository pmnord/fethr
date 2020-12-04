import React from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../../pages/collection/collection.component";
import { ShopPageContainer } from "./shop.styles";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

// ShopPage is nested inside a Route in App.js, so it receives router props by default.

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    // OBSERVER PATTERN
    collectionRef.onSnapshot(async (snapshot) => {
      const collections = convertCollectionsSnapshotToMap(snapshot);
      this.props.updateCollections(collections);
      this.setState({ loading: false });
    });

    // // PROMISE PATTERN
    // collectionRef
    //   .get(/* Makes a get request to the collection ref */)
    //   .then((snapshot) => {
    //     const collections = convertCollectionsSnapshotToMap(snapshot);
    //     this.props.updateCollections(collections);
    //     this.setState({ loading: false });
    //   });

    // FETCH PATTERN
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/fethr-db/databases/(default)/documents/collections/"
    //   // { headers: { Bearer: process.env.API_KEY } }
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  }

  render() {
    const { match } = this.props;
    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          render={(routeProps) => (
            <CollectionsOverviewWithSpinner
              isLoading={this.state.loading}
              {...routeProps}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(routeProps) => (
            <CollectionPageWithSpinner
              isLoading={this.state.loading}
              {...routeProps}
            />
          )}
        />
      </ShopPageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
