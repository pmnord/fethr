import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './header.styles.scss';

const Header = ({ location }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
        <img
          className="logo"
          src={`${require("../../assets/logo.png")}`}
          alt="fethr logo"
        //   style={{ height: '8rem', margin: `${location.pathname === '/' ? '0 80px' : '0' }`}}
        />
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
        </div>
    </div>
)

export default withRouter(Header);