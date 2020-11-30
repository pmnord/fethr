import styled from "styled-components";
import React from "react";

import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  position: relative;

  &:hover {
    .CollectionItem__Image {
      opacity: 0.8;
    }

    .CollectionItem__InvertedButton {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 90%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span``;

export const Price = styled.span``;

const Button = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  bottom: 55px;
  display: none;
`;

export const InvertedButton = ({ children, className }) => {
  return (
    <Button className={className} inverted>
      {children}
    </Button>
  );
};
