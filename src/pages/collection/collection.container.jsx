import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from '../../pages/collection/collection.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionContainer;
