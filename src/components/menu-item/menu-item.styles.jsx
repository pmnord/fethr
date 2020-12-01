import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 320px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px 15px;
  border: double 4px black;

  &:hover {
    cursor: pointer;

    & .MenuItem__Background {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      background: linear-gradient(
        hsla(0, 0%, 100%, 1),
        hsla(0, 0%, 100%, 0.55)
      );
    }
  }

  &.large {
    height: 400px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const Background = styled.div`
  background-image: url(${(props) => props.imageUrl});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  height: 110px;
  padding: 0 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px white;
  border-radius: 3px;
  background: linear-gradient(hsla(0, 0%, 100%, 1), hsla(0, 0%, 100%, 0.5));
  position: absolute;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 26px;
  color: #4a4a4a;
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 18px;
`;
