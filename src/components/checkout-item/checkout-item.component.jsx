import React from "react";

import { connect } from "react-redux";
import {
  addCartItem,
  removeCartItem,
  removeCartItemAll,
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  Price,
  Name,
  Quantity,
  RemoveButton,
  QuantityValue,
  QuantityArrow,
} from "./checkout-item.styles";

const CheckoutItem = ({
  item,
  item: { imageUrl, name, price, quantity },
  dispatch,
}) => {
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <QuantityArrow onClick={() => dispatch(removeCartItem(item))}>
          &#10094;
          {/* utf-8 wingding */}
        </QuantityArrow>
        <QuantityValue>{quantity}</QuantityValue>
        <QuantityArrow onClick={() => dispatch(addCartItem(item))}>
          &#10095;
          {/* utf-8 wingding */}
        </QuantityArrow>
      </Quantity>
      <Price>${price * quantity}</Price>
      <RemoveButton onClick={() => dispatch(removeCartItemAll(item))}>
        &#10005;
        {/* utf-8 wingding */}
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default connect()(CheckoutItem);
