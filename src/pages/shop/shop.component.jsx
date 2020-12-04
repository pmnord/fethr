import React from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selectors';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../pages/collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { ShopPageContainer } from './shop.styles';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// ShopPage is nested inside a Route in App.js, so it receives router props by default.
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();

    // const collectionRef = firestore.collection("collections");

    // // OBSERVER PATTERN
    // collectionRef.onSnapshot(async (snapshot) => {
    //   const collections = convertCollectionsSnapshotToMap(snapshot);
    //   this.props.updateCollections(collections);
    //   this.setState({ loading: false });
    // });

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
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
    console.log(isCollectionFetching);

    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          render={(routeProps) => (
            <CollectionsOverviewWithSpinner
              isLoading={!isCollectionsLoaded}
              {...routeProps}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(routeProps) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...routeProps}
            />
          )}
        />
      </ShopPageContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
