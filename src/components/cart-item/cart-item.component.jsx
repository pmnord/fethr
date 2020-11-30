import React from "react";

import { CartItemContainer, Img, Details, Name } from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer className='cart-item'>
    <Img src={imageUrl} alt='item' />
    <Details className='item-details'>
      <Name className='name'>{name}</Name>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </Details>
  </CartItemContainer>
);

export default CartItem;
