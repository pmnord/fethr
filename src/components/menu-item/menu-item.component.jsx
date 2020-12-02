import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  Content,
  Title,
  Subtitle,
  Background,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, match, linkUrl, history }) => {
  return (
    <MenuItemContainer
      className={`${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <Background className='MenuItem__Background' imageUrl={imageUrl} />
      <Content className='content'>
        <Title className='title'>{title.toUpperCase()}</Title>
        <Subtitle className='subtitle'>SHOP NOW</Subtitle>
      </Content>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
// withRouter is a Higher Order Component that returns MenuItem with Router props
