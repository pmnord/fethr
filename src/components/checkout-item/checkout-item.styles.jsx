import styled, { css } from "styled-components";

const ItemDetailStyles = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.span`
  ${ItemDetailStyles}
`;

export const Price = styled.span`
  ${ItemDetailStyles}
`;

export const Quantity = styled.span`
  ${ItemDetailStyles}
  display: flex;
`;

export const QuantityValue = styled.span`
  margin: 0 0.5rem;
`;

export const QuantityArrow = styled.div`
  cursor: pointer;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
