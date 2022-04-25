import React from 'react';
import { Link } from '@reach/router';
import { NavStyled, NavContent, NavLogo, NavLinks } from './styles';

const Nav = () => {
  return (
    <NavStyled>
      <NavContent>
        <NavLogo>
          <Link to='/'>
            <img src='images/logo.svg' alt='' />
          </Link>
        </NavLogo>
        <NavLinks>
          <Link to='/menu'>Menu</Link>
          <Link to='/our-story'>Our Story</Link>
          <Link to='/find-us'>Find us</Link>
        </NavLinks>
      </NavContent>
    </NavStyled>
  );
};

export default Nav;
