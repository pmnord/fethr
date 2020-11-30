import React from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { compose } from "redux";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {
  HeaderContainer,
  LogoContainer,
  Logo,
  OptionsContainer,
  OptionsLink,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo alt='fethr logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionsLink to='/shop'>SHOP</OptionsLink>
      <OptionsLink to='/contact'>CONTACT</OptionsLink>
      {currentUser ? (
        <OptionsLink as='div' onClick={() => auth.signOut()}>
          {/* Note the as='div' rendering OptionsLink as a div
              despite the styled-component being a react-router-dom Link */}
          SIGN OUT
        </OptionsLink>
      ) : (
        <OptionsLink to='/signin'>SIGN IN</OptionsLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {!hidden && <CartDropdown />}
  </HeaderContainer>
);

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state),
// });

// The code above is the same as using createStructuredSelector from reselect
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default compose(withRouter, connect(mapStateToProps))(Header);
// Leaving this in as an example even though withRouter is not used
// When we use a React hook with connect we need to use the compose function from redux
