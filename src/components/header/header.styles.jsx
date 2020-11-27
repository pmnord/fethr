import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

// We can also invoke styled as a function, passing it a component
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  margin-top: 10px;
`;

export const Logo = styled(LogoSvg)`
  height: 100%;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OptionsContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const OptionsLink = styled(Link)`
  ${OptionsContainerStyles}
`;

export const OptionsDiv = styled.div`
  ${OptionsContainerStyles}
`;
