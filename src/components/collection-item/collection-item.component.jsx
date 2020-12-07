import React from 'react';

import { connect } from 'react-redux';
import { addCartItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  Image,
  CollectionFooter,
  InvertedButton,
  Name,
  Price,
} from './collection-item.styles';

const CollectionItem = ({ item, addCartItem, className }) => {
  const { name, price, imageUrl } = item;
  const handleAddItem = () => {
    console.log('click');
    addCartItem(item);
  };

  return (
    <CollectionItemContainer className={className}>
      <Image imageUrl={imageUrl} className='CollectionItem__Image' />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </CollectionFooter>
      <InvertedButton
        onClick={handleAddItem}
        className='CollectionItem__InvertedButton'
        inverted
      >
        Add to cart
      </InvertedButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
