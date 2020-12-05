import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  Title,
  Items,
  CollectionItemStyled,
} from './collection.styles';

const CollectionPage = ({ collection: { title, items } }) => {
  return (
    <CollectionPageContainer>
      <Title>{title}</Title>

      <Items>
        {items &&
          items.map((item) => (
            <CollectionItemStyled key={item.id} item={item} />
          ))}
      </Items>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  // ownProps is an optional parameter refrencing the props on this component
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
