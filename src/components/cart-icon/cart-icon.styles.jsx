import styled from "styled-components";
import { ReactComponent as ShoppingBagIconSvg } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingBagIcon = styled(ShoppingBagIconSvg)`
  width: 34px;
  height: 34px;
`;

export const ItemCountSpan = styled.span`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  bottom: 9px;
  user-select: none;
`;
